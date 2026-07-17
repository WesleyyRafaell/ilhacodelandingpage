# Site Structure

## Stack and page shell

- WordPress 6.4.1 with Hello Elementor.
- Elementor page id `82` for the home page.
- Jeg Elementor Kit for navigation, headings, icon boxes, testimonials, accordion, pie charts, post blocks and newsletter.
- Global layout is boxed, usually `1190px`.

## Header

Purpose: primary navigation and phone CTA.

Structure:

- Floating boxed header, positioned over the hero with `margin-bottom: -130px`.
- Soft lavender surface `#F7F4FF`, radius 20px, padding 20px 30px.
- Logo column 20%, nav column about 57%, contact column 21%.
- Desktop nav: Home, About, Services, Projects, Pages, Blog, Contact.
- Dropdowns for Projects, Pages and Blog.
- Right CTA is phone icon in a yellow circle plus phone number text.
- Tablet/mobile switches to hamburger with a left slide drawer, max width 360px.

## Home page outline

1. Hero
   - Left content: social icons, subtitle "Welcome To Keilvatel", H1, body copy, primary CTA, video play button and "Watch Intro".
   - Right visual: purple radial panel, cutout businessman image, white circular pattern overlay, two floating metric cards.
   - Main message: "Marketing Agency Specializing in SEO".

2. SEO benefits strip
   - Four-column row.
   - First cell is a text heading: "Why Your Website Need SEO?"
   - Three benefit cards: Search Position, Target Market, Best Strategy.
   - First benefit card is visually promoted with purple gradient background.

3. About
   - Split 50/50.
   - Left: portrait inside purple radial image panel with large rounded bottom corners.
   - Right: subtitle, heading, description, two icon boxes and "About Us" CTA.

4. Services
   - Full-width purple gradient band.
   - Wave SVG divider on top and bottom.
   - Centered header.
   - Service cards in two rows: SEO Booster, Social Media Marketing, Marketing Strategy, Branding Identity, Data Analysis, Web Development.
   - Cards use icon images, dark card backgrounds, hover rise/rotate behavior and "Learn More" links.

5. Why Choose Us
   - Split 50/50.
   - Left: heading, description, two circular percentage charts, CTA.
   - Right: portrait in purple radial image panel.
   - Chart values: 92% Creative Solutions, 95% Digital Strategy.

6. FAQ
   - Light lavender section `#F7F4FF`.
   - Wave SVG divider on top and bottom.
   - Left heading and supporting text.
   - Right accordion with four questions.
   - First item is expanded by default.

7. Pricing
   - White section, centered header.
   - Three pricing cards: Basic, Professional, Startup.
   - Prices: $29/month, $49/month, $99/month.
   - Professional has a "Popular" badge.
   - Each card has six checklist items and a "Get Started" CTA.

8. Testimonials
   - Purple gradient band with wave SVG dividers.
   - Left: section heading.
   - Right: quote icon and testimonial slider.
   - Slider autoplay is 3500ms, one item per viewport.
   - Three testimonial records with 150x150 profile photos and star ratings.

9. Blog
   - White section, centered header.
   - Three-column post block.
   - Each post has image, category badge, title, date, excerpt and "Read More".
   - Note: subtitle says "Our Pricing" even though this is the blog section. Treat as a content bug.

10. Newsletter and Footer
   - Purple gradient footer with top wave.
   - Newsletter split 49/51 with heading and inline email form.
   - Footer columns: brand/about, Quick Links, Useful Links, Work Hours.
   - Bottom bar contains copyright text and template credit.

## Responsive behavior

- Tablet: hero columns stack to 100%, many card grids become two columns.
- Mobile: sections use 20px horizontal padding and 50px vertical rhythm.
- Header nav becomes hamburger at 1024px and below.
- Newsletter form becomes full-width stacked fields on mobile.
- Service card sets have separate desktop/tablet/mobile visibility logic in Elementor.

## Information architecture

Primary pages linked in navigation:

- Home
- About
- Services
- Projects
- Project Details
- Pricing
- Team
- FAQ
- 404 Page
- Blog
- Single Post
- Contact
