import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import { getAllReviews } from '../lib/reviewsLoader';
import '../reviews.css';

/* ── tiny helpers ─────────────────────────────────────── */
function StarRating({ rating, max = 10 }) {
  const filled = Math.round(rating);
  return (
    <span className="review-card__rating">
      <span className="review-card__rating-star">★</span>
      {rating}/{max}
    </span>
  );
}

/* ── Page-level animation variants ──────────────────── */
const pageIn = {
  initial:  { opacity: 0, y: 18 },
  animate:  { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] } },
  exit:     { opacity: 0, y: -12, transition: { duration: 0.35 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 32 },
  show:   (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const articleIn = {
  initial: { opacity: 0, scale: 0.98, y: 22 },
  animate: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
  exit:    { opacity: 0, scale: 0.97, y: -10, transition: { duration: 0.3 } },
};

/* ══════════════════════════════════════════════════════
   ARTICLE VIEW
══════════════════════════════════════════════════════ */
function ReviewArticle({ review, onBack }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <motion.div {...articleIn}>
      {/* Masthead stripe at top of article */}
      <div className="reviews-masthead" style={{ position: 'sticky', top: 62, zIndex: 30, marginTop: 62 }}>
        <div className="reviews-masthead__rule-top" />
        <div className="reviews-masthead__rule-thin" />
        <div className="reviews-masthead__meta" style={{ padding: '6px clamp(20px, 5vw, 64px)' }}>
          <span>The Daily Review</span>
          <span className="reviews-masthead__meta-center">FILM REVIEW — {review.edition || 'Special Edition'}</span>
          <span>{today}</span>
        </div>
        <div className="reviews-masthead__rule-bottom" />
      </div>

      <div className="review-article">
        {/* Back link */}
        <button
          type="button"
          className="review-article__back"
          onClick={onBack}
        >
          Back to Archive
        </button>

        {/* Top rules */}
        <div className="review-article__rule-top" />
        <div className="review-article__rule-thin" />

        {/* Genre */}
        <span className="review-article__genre">{review.genre}</span>

        {/* Headline */}
        <h1 className="review-article__headline">{review.title}</h1>

        {/* Byline row */}
        <div className="review-article__byline">
          <span>
            By <span className="review-article__byline-author">Nishchal Karn</span>
          </span>
          <span className="review-article__byline-sep">·</span>
          <span>{review.publishDate || review.date}</span>
          <span className="review-article__byline-sep">·</span>
          <span>{review.readingTime}</span>
          <div className="review-article__rating-badge">
            <span>★</span>
            <span>{review.rating}/{review.maxRating || 10}</span>
          </div>
        </div>

        {/* Cover image */}
        {review.coverSrc && (
          <>
            <div className="review-article__cover">
              <img src={review.coverSrc} alt={`${review.title} cover`} />
            </div>
            <p className="review-article__cover-caption">
              {review.title} — Dir. {review.director}
            </p>
          </>
        )}

        {/* Tagline pull-quote */}
        {review.tagline && (
          <blockquote style={{
            fontFamily: 'var(--serif)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            lineHeight: 1.5,
            color: 'var(--ink-soft)',
            borderLeft: '4px solid var(--red)',
            paddingLeft: 20,
            margin: '0 0 32px',
          }}>
            "{review.tagline}"
          </blockquote>
        )}

        {/* Body */}
        <article className="review-article__body">
          <ReactMarkdown>{review.content || ''}</ReactMarkdown>
        </article>

        {/* Closing rule */}
        <div className="review-article__end-rule">
          <span className="review-article__end-label">End of Review · The Daily Review</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN REVIEWS PAGE
══════════════════════════════════════════════════════ */
export default function Reviews({ onBack }) {
  const [selectedReview, setSelectedReview] = useState(null);
  const reviews = getAllReviews();

  const handleSelectReview = useCallback((review) => {
    setSelectedReview(review);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToGrid = useCallback(() => {
    setSelectedReview(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <motion.main
      className="reviews-page"
      key="reviews"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      data-testid="reviews-page"
    >
      <Navbar />

      {/* Back to Multiverse */}
      <motion.button
        type="button"
        className="reviews-back"
        onClick={onBack}
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        data-testid="reviews-back-btn"
      >
        <ArrowLeft size={12} strokeWidth={2.5} />
        Multiverse
      </motion.button>

      <AnimatePresence mode="wait">
        {/* ── ARTICLE VIEW ── */}
        {selectedReview ? (
          <ReviewArticle
            key={`article-${selectedReview.slug}`}
            review={selectedReview}
            onBack={handleBackToGrid}
          />
        ) : (

          /* ── ARCHIVE GRID VIEW ── */
          <motion.div key="grid" {...pageIn}>

            {/* ════ MASTHEAD ════ */}
            <motion.header
              className="reviews-masthead"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {/* Main title block */}
              <div className="reviews-masthead__title-block">
                <motion.h1
                  className="reviews-masthead__main-title"
                  initial={{ opacity: 0, letterSpacing: '0.6em' }}
                  animate={{ opacity: 1, letterSpacing: '0.04em' }}
                  transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.15 }}
                  data-testid="reviews-masthead-title"
                >
                  The Daily Review
                </motion.h1>

              </div>

              {/* Masthead meta row */}
              <div className="reviews-masthead__meta">
                <span>{today}</span>
                <span className="reviews-masthead__meta-center">
                  Nishchal Karn · All Reviews Archived · {new Date().getFullYear()}
                </span>
                <span>{reviews.length} {reviews.length === 1 ? 'Review' : 'Reviews'} Published</span>
              </div>

              <div className="reviews-masthead__rule-bottom" />
            </motion.header>

            {/* ════ ARCHIVE GRID ════ */}
            <section className="reviews-section">
              {/* Section heading */}
              <div className="reviews-section__heading">
                <div className="reviews-section__heading-rule" />
                <span className="reviews-section__heading-label">Film Archive</span>
                <div className="reviews-section__heading-rule" />
              </div>

              {reviews.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  padding: '80px 0',
                  fontFamily: 'var(--mono)',
                  color: 'var(--ink-muted)',
                  fontSize: 16,
                  letterSpacing: '0.1em',
                }}>
                  No reviews found. Add a review to{' '}
                  <code style={{ background: 'var(--paper-alt)', padding: '2px 8px' }}>
                    src/content/reviews/
                  </code>
                </div>
              ) : (
                <div className="reviews-grid">
                  {reviews.map((review, i) => (
                    <motion.article
                      key={review.slug}
                      custom={i}
                      variants={cardIn}
                      initial="hidden"
                      animate="show"
                      viewport={{ once: true, amount: 0.1 }}
                      data-testid={`review-card-${review.slug}`}
                    >
                      <button
                        type="button"
                        className="review-card"
                        onClick={() => handleSelectReview(review)}
                        style={{ width: '100%' }}
                      >
                        {/* Cover */}
                        <div className="review-card__cover">
                          {review.coverSrc ? (
                            <img
                              src={review.coverSrc}
                              alt={`${review.title} newspaper cover`}
                            />
                          ) : (
                            <div style={{
                              width: '100%',
                              height: '100%',
                              background: 'var(--paper-dark)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontFamily: 'var(--display)',
                              fontSize: 48,
                              color: 'var(--rule-light)',
                              letterSpacing: '0.1em',
                            }}>
                              ★
                            </div>
                          )}
                          <span className="review-card__edition">{review.edition || `#${String(i + 1).padStart(2, '0')}`}</span>
                        </div>

                        {/* Body */}
                        <div className="review-card__body">
                          <span className="review-card__genre">{review.genre}</span>

                          <h2 className="review-card__title">{review.title}</h2>

                          {review.tagline && (
                            <p className="review-card__tagline">"{review.tagline}"</p>
                          )}

                          <div className="review-card__divider" />

                          <div className="review-card__meta">
                            <div className="review-card__meta-left">
                              <span className="review-card__date">
                                {review.publishDate || review.date}
                              </span>
                              <StarRating rating={review.rating} max={review.maxRating || 10} />
                            </div>
                            <span className="review-card__read-btn">
                              Read Article →
                            </span>
                          </div>
                        </div>
                      </button>
                    </motion.article>
                  ))}
                </div>
              )}
            </section>

            {/* Footer */}
            <footer className="reviews-footer">
              <span className="reviews-footer__text">
                The Daily Review · Nishchal Karn · {new Date().getFullYear()}
              </span>
              <span className="reviews-footer__text">
                Personal Cinema Archive · Not affiliated with Marvel
              </span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
