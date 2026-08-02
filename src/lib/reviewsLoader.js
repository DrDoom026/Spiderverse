/**
 * reviewsLoader.js
 *
 * Auto-discovers all reviews under src/content/reviews/ using Vite's
 * import.meta.glob(). No manual registration needed.
 *
 * To add a new review:
 *   1. Create src/content/reviews/<slug>/
 *   2. Add cover.jpg (or cover.webp)
 *   3. Write review.md
 *   4. Fill meta.json
 *   5. Push to GitHub — done.
 */

// Eagerly import all meta.json files
const metaModules = import.meta.glob('../content/reviews/*/meta.json', {
  eager: true,
  import: 'default',
});

// Eagerly import all review.md files as raw strings
const reviewModules = import.meta.glob('../content/reviews/*/review.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

// Eagerly import all cover images
const coverModules = import.meta.glob(
  '../content/reviews/*/{cover.jpg,cover.webp,cover.png}',
  { eager: true, import: 'default' }
);

/**
 * Extracts the slug from a glob path like:
 *   '../content/reviews/spider-man-into-the-spider-verse/meta.json'
 *   → 'spider-man-into-the-spider-verse'
 */
function slugFrom(path) {
  const parts = path.split('/');
  return parts[parts.length - 2];
}

/**
 * Returns a sorted array of review objects.
 * Sorted by publishDate descending (most recent first).
 */
export function getAllReviews() {
  return Object.entries(metaModules)
    .map(([metaPath, meta]) => {
      const slug = slugFrom(metaPath);

      // Find review.md content
      const reviewPath = Object.keys(reviewModules).find((p) =>
        p.includes(`/${slug}/review.md`)
      );
      const content = reviewPath ? reviewModules[reviewPath] : '';

      // Find cover image
      const coverPath = Object.keys(coverModules).find((p) =>
        p.includes(`/${slug}/cover.`)
      );
      const coverSrc = coverPath ? coverModules[coverPath] : null;

      return {
        slug,
        ...meta,
        content,
        coverSrc,
      };
    })
    .sort((a, b) => {
      // Sort by edition number if available, else by title
      const edA = a.edition || '';
      const edB = b.edition || '';
      return edB.localeCompare(edA);
    });
}

/**
 * Returns a single review by slug.
 */
export function getReviewBySlug(slug) {
  return getAllReviews().find((r) => r.slug === slug) ?? null;
}
