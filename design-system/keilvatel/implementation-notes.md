# Implementation Notes

## Rebuild target

Use this as a visual spec, not as a strict Elementor clone. The strongest parts to preserve are the color system, typography, rounded cards, CTA behavior, purple wave bands and cutout portrait panels.

## Recommended React/Tailwind mapping

Use CSS variables for tokens:

```css
:root {
  --kv-primary: #FBB53E;
  --kv-primary-hover: #EEA934;
  --kv-secondary: #6E59A4;
  --kv-secondary-dark: #5A4591;
  --kv-lavender: #CAB5FF;
  --kv-surface: #F7F4FF;
  --kv-border: #EBE8F4;
  --kv-text: #0C023C;
  --kv-body: #3E3D3D;
}
```

Tailwind theme names can mirror these keys:

- `kv.primary`
- `kv.primaryHover`
- `kv.secondary`
- `kv.secondaryDark`
- `kv.lavender`
- `kv.surface`
- `kv.border`
- `kv.text`
- `kv.body`

## Page composition

Implement the home as a sequence of full-width sections with a `max-width: 1190px` inner container:

1. Floating header.
2. Split hero.
3. Benefits strip.
4. About split.
5. Purple services band.
6. Why Choose Us split.
7. FAQ lavender band.
8. Pricing.
9. Purple testimonials band.
10. Blog.
11. Newsletter/footer.

## Section rules

- Use `py-[100px]` for normal white sections on desktop.
- Use `py-[180px]` for sections with wave dividers.
- On tablet, use `px-5 py-20`.
- On mobile, use `px-5 py-[50px]`.
- Keep section backgrounds locked to either white, `#F7F4FF` or purple radial gradient.

## Wave divider

The original uses Elementor SVG waves at top and bottom. In a custom build:

- Reuse a simple wave SVG as a section pseudo-element or inline SVG.
- Top wave fill should match the previous section background.
- Bottom wave fill should match the next section background.
- Height: 100px desktop, 50px mobile.
- Width: about 200% to 220% for the stretched Elementor look.

## Typography rules

- Use `Work Sans` for H1-H4, nav and buttons.
- Use `Roboto` for body, descriptions, forms and muted text.
- Preserve heading line-height of `1.3`.
- Do not use all-caps section labels. The original subtitle style is title case.
- Preserve highlight words as inline background rectangles, not gradient text.

## Component implementation notes

Header:

- Make it relative/absolute over hero with high z-index.
- Use a rounded light surface.
- Mobile menu should slide from left and use the same nav labels.

Hero:

- Do not center the hero.
- Preserve 44/56 split on desktop.
- Use the portrait panel as a large visual mass, not a small image card.
- Metric cards should overlap the hero image area.

Buttons:

- Implement hover with transform and solid offset shadow.
- Keep text on one line.
- Use `transition: transform .3s, box-shadow .3s, background .3s`.

Cards:

- Service cards should reveal or emphasize the "Learn More" link on hover.
- Avoid making all cards identical white cards. The system needs purple, lavender and transparent variants.

Pricing:

- If rebuilding, make all three cards equal height.
- Keep the Professional badge visually small and yellow/purple.
- Use a real plan-card component, not a generic content card.

FAQ:

- Keep one item open by default.
- Use accessible button elements with `aria-expanded`.
- Body copy should be collapsible without layout jump.

Testimonials:

- If avoiding a slider dependency, show one featured quote and add small pagination dots.
- If using a slider, autoplay at 3500ms and pause on hover for accessibility.

Blog:

- Rename the section eyebrow from "Our Pricing" to "Latest Blog" or remove it. The source has a content mismatch.
- Keep image ratio close to 16:9 and content padding 20px.

Newsletter:

- Inline form on desktop, stacked on mobile.
- Preserve split radius: input left corners, submit right corners on desktop.

## Accessibility notes

- Ensure yellow button text `#0C023C` passes contrast.
- Add meaningful alt text for portrait and blog images. The original has several empty alts.
- Do not rely only on color for active nav state. Keep the underline.
- Respect reduced motion for entry animations, card hover rotation and testimonial autoplay.
- Use visible focus states for nav, buttons, form fields and accordion headers.

## Content cleanup before production

- Replace all lorem ipsum.
- Replace fake names like "Michael Doe" and generic "Client" attribution.
- Audit fake metrics like 2.590K, +50K, 85%, 92% and 95%. Use real data or remove precision.
- Fix grammar in headings:
  - "Why Your Website Need SEO?" should become "Why Your Website Needs SEO?"
  - "We Provide The Best Service For You Business" should become "We Provide The Best Service For Your Business"
  - "What Our Clients Saying" should become "What Our Clients Are Saying"
- Fix the blog section label currently set to "Our Pricing".

## Elementor rebuild notes

If staying in Elementor:

- Create global colors matching `tokens.json`.
- Set global fonts: Work Sans for primary/secondary, Roboto for text/accent.
- Use global button style: yellow background, 10px radius, 15px 30px padding.
- Use section templates for white split, purple wave band and lavender FAQ band.
- Keep all repeated cards as reusable sections or containers to avoid drift.
