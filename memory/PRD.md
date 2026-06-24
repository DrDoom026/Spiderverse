# Spider-Verse Portfolio – Refinement PRD

## Original Problem Statement
Refine existing Spider-Verse portfolio with MINIMAL code changes. Improve storytelling and personality without redesigning pages, rebuilding layouts, adding libraries, creating new assets, or modifying existing animations.

## Refinements Implemented (June 2026)
1. **About / Origin (Panel 2 — Radioactive Curiosity)**: swapped portrait image for new "Spider-Man at desk" image (`/app/src/assets/origin-spiderman-desk.jpg`). Added cyan system-notification card "ANOMALY DETECTED — Subject developed an unhealthy curiosity about how things work." styled like a Spider-Verse HUD alert.
2. **About / Personal Canon Event**: added compact Canon Event card "Installed Linux. Broke everything. Installed Linux again." integrated naturally inside Panel 4 (The Journey), reusing existing `.canon-event` design language.
3. **Contact Page**: replaced LEGO-brick heading "CONTACT" with "SEND A SIGNAL" (reusing existing per-letter brick colour classes + new word-spacer class). Extended subtitle to 3 lines: "Every hero needs a signal in the sky. / Every builder needs a collaborator. / *Let's connect across the multiverse.*"
4. **Post-Credit Scene**: appended a lightweight dark final section to Contact page – cyan `EARTH-616 · STATUS: ACTIVE` badge, `Current Mission` heading, Bangers-styled `Build. / Learn. / Create.` list, italic `See You Across The Multiverse.` signoff, and `// END · ISSUE 01 · TO BE CONTINUED ·` meta.

## Files Touched
- `/app/src/pages/About.jsx`
- `/app/src/pages/Contact.jsx`
- `/app/src/components/ContactSection.jsx`
- `/app/src/about.css` (appended `.origin-notif`, `.canon-event--compact` styles)
- `/app/src/contact.css` (appended `.contact-hero__title-space`, post-credit scene styles)
- `/app/src/assets/origin-spiderman-desk.jpg` (new asset)

## Preserved
- All existing layouts, typography, colour palette, animations, atmosphere, components, and routing untouched outside the refinements above.

## Backlog / Next Items
- (P2) Optional: subtle glitch/scanline animation on the new ANOMALY DETECTED notification.
- (P2) Optional: cycle through multiple "Canon Events" in Panel 4 over time.
