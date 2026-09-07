# Lana Tech — Design Guidelines

## Aesthetic: Product-Led SaaS

Palette rooted in pale lavender-gray and white alternating sections, with indigo as the single primary action color and charcoal for text. Geometric humanist sans throughout — no serif.

## Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FFFFFF` | Page base, alternating sections |
| `--section-alt` | `#F7F6FB` | Alternating section background |
| `--primary` | `#4F46E5` | Buttons, links, key accents |
| `--foreground` | `#1F2033` | Body text, headings |
| `--muted-foreground` | `#6B6E8E` | Captions, labels, secondary text |
| `--border` | `#E4E3F0` | Hairline rules, card borders |

## Typography

- **Family:** Inter (Google Fonts) — geometric humanist, no fallback to serif
- **Display headings:** 600–700 weight, tight tracking (-0.02em to -0.04em)
- **Body:** 400–500 weight, 1.6 line-height
- **Labels / caps:** 500 weight, small-caps or uppercase with 0.08em tracking

## Shape & Layout

- Border radius: 12px for cards, 999px (pill) for primary buttons
- Centered composition on all sections
- Max content width: 1120px
- Soft diffuse shadow on hero product mockup: `0 24px 80px rgba(79,70,229,0.12)`
- No hairline rules in composition — use background alternation for section separation

## Components

- **Buttons:** pill-shaped, indigo fill, white text — no gradient
- **Feature cards:** white, 12px radius, subtle border, generous padding
- **Logo row:** grayscale filter, low opacity (0.4–0.6)
- **Hero mockup:** rounded 16px, soft indigo-tinted shadow, floating effect
