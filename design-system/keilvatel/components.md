# Components

## Header

Visual role: floating command bar above the hero.

Spec:

- Surface: `#F7F4FF`.
- Radius: 20px.
- Padding: 20px 30px.
- Container: 1190px.
- Height: nav wrapper 70px.
- Logo: header logo image at 80% column width.
- Nav type: Work Sans 16px, weight 500.
- Nav color: `#0C023C`.
- Active/hover: `#FBB53E` with 1px bottom border.
- Dropdown: purple `#6E59A4`, radius 10px, padding 10px, min width 200px, subtle warm shadow.
- Mobile: slide-in drawer from left, max width 360px, background `#f7f7f7`.

## Buttons

Primary CTA:

- Background: `#FBB53E`.
- Hover background: `#EEA934`.
- Text: `#0C023C`.
- Font: Work Sans 16px, weight 600, letter spacing 0.2px.
- Padding: 15px 30px.
- Radius: 10px.
- Hover motion: translate X 5px, translate Y -5px.
- Hover shadow: solid offset, usually `-8px 8px 0 #F7F4FF`.

Ghost/text CTA:

- Transparent background.
- Text: `#0C023C`, hover `#FBB53E`.
- Used for "Watch Intro" and phone number.

Video button:

- Circle 57px.
- Transparent background.
- 1px border `#0C023C`.
- Play icon 20px.
- Hover fills with `#FBB53E`.

## Heading block

Pattern:

- Optional subtitle as H5, 20px, weight 500.
- Main heading in Work Sans 38px or 46px.
- Description in Roboto 16px.
- Description width usually 60% to 80% desktop, 98% on tablet/mobile.
- Highlighted words are wrapped in purple rectangles with white text and 0 10px horizontal padding.

Variants:

- Light section: heading `#0C023C`, body `#3E3D3D`, highlight background `#6E59A4`.
- Dark purple section: heading white, body `#F7F4FF`, highlight background `#5A4591`.

## Hero visual panel

Spec:

- Right column width: 56%.
- Background: radial gradient at center right from `#CAB5FF` to `#6E59A4`.
- Overlay: white circular accent image at 20% opacity.
- Portrait: cutout PNG, high brightness/contrast adjustment.
- Side margins: 80px desktop, 20px mobile.
- Top padding: 270px desktop, 50px tablet.
- Metric cards overlap the portrait area with negative margins.

Metric cards:

- Surface: `#F7F4FF`.
- Radius: 20px.
- Padding: 20px.
- Text: Roboto 16px for label, Work Sans 24px/600 or H5 for values.
- Icon color: `#FBB53E`.
- Example metrics: Total Revenue 2.590K, New Visitor +50K, 85% Growth.

## Benefit cards

Used in the "Why Your Website Need SEO?" strip.

Featured card:

- Background: purple radial gradient.
- Radius: 20px.
- Padding: 30px 30px 15px.
- Icon: 65px yellow circle, 40px icon.
- Title: white H4.
- Body: `#F7F4FF`.

Plain cards:

- Background: transparent.
- Icon: 65px yellow circle.
- Border dividers between cards on desktop.
- Title: `#0C023C`.
- Body: `#3E3D3D`.

## About icon boxes

Spec:

- No outer card background.
- Icon: Font Awesome/Jeg icon, 40px, yellow.
- Title: H3, `#0C023C`.
- Body: Roboto 16px, `#3E3D3D`.
- Two-column row inside the right content column.

## Service cards

Used in the purple "Our Services" band.

Spec:

- Background: mostly transparent or `#5A4591` for active/hover state.
- Border: 2px solid `#F7F4FF` or `#5A4591`.
- Radius: 20px.
- Padding: 50px 40px 10px, changing to 30px 40px on hover.
- Icon: service PNG, about 50px.
- Title: H4 24px/600, white.
- Body: `#F7F4FF`.
- Link: Work Sans 16px/600, hidden/transparent until hover, then yellow.
- Hover: rotate -1deg and reveal link.

## Pie chart block

Used in "Why Choose Us".

Spec:

- Chart canvas: 110x110.
- Cutout: 90.
- Stroke: `#FBB53E`.
- Background: white.
- Values: 92 and 95.
- Animation duration: 3600ms.
- Content type: percentage.
- Title: H4 24px/600.
- Description: body 16px.

## FAQ accordion

Spec:

- Section background: `#F7F4FF`.
- First item expanded by default.
- Header title: H5 scale, 20px/500.
- Body: Roboto 16px.
- Icons: Jeg down/up arrows.
- Interaction: click opens item by target id.

Questions:

- How Does SEO Work?
- What are the 5 important concepts of SEO?
- What are the 4 important stages in SEO?
- Does my business need SEO?

## Pricing card

Spec:

- White/light card with background overlay.
- Padding: 30px.
- Bottom margin: 30px.
- Title: H3 26px/600.
- Price number: Work Sans 50px/600.
- Price unit: body scale.
- Divider line after description.
- Checklist: Font Awesome check icons.
- CTA: full-width or block primary button.

Plans:

- Basic: $29/month.
- Professional: $49/month, includes "Popular" badge.
- Startup: $99/month.

## Testimonials

Spec:

- Purple gradient section with top and bottom waves.
- Left heading column, right slider column.
- Quote icon above slider.
- Slider: one item per viewport, autoplay 3500ms, no dots/navigation visible.
- Testimonial quote: Roboto italic 23px, line-height 1.5.
- Profile image: 150x150.
- Stars: yellow/gold icons.
- Profile name: H5 scale, 20px/500.
- Role: body scale.

## Blog cards

Spec:

- Three posts.
- Image container height: 200px.
- Content padding: 20px.
- Category badge overlays image at left.
- Title: H4 24px/600.
- Meta date: 14px.
- Excerpt: body 16px.
- Read more: Work Sans 16px/600 with right arrow icon.

## Newsletter form

Spec:

- Purple radial footer band.
- Heading: H2 white with purple highlight.
- Inline form desktop.
- Input: transparent background, white text, border 2px solid `#F7F4FF`, radius 10px left side.
- Placeholder: `#EBE8F4`.
- Submit: yellow background, 2px white border except left, radius right side.
- Mobile: input and submit stack full width with 10px radius on both.
