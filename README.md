# Coding bootcamp testimonials slider

My solution to the [Coding bootcamp testimonials slider](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL)
challenge on Frontend Mentor.

![](./screenshot.webp)

- Live: https://coding-bootcamp-testimonials-slider.abdelrhman-ahmed8881.workers.dev
- Code: https://github.com/MrBlackvanta/coding-bootcamp-testimonials-slider

## Built with

- Next.js 16, App Router
- React 19 and TypeScript
- Tailwind CSS v4

## Notes

Where I didn't follow the design exactly:

- **The role text is darker.** `#b9b9ce` is under 2:1 on white. The replacement keeps hue
  and saturation and clears 4.5:1 on white and on the pale curve behind it at mobile.
- **The quote panel is 632px, not 635.** Figma's line 2 on slide 2 measures 634.8px, so
  Chrome fits a word that Figma wrapped. 632 reproduces both slides' line breaks, and
  since the panel has no visible edge its width is only observable through the wrap.
- **The composition is centred vertically** rather than pinned to the frame's offset, so
  it holds at any viewport height. That's about 8px lower at 1440x800 and nothing else
  moves.
- **The curve is 154px tall** because that's what's in Frontend Mentor's own SVG; the
  Figma node says 150.9. I kept the shipped artwork.

A couple of offsets moved by a pixel to stay on the spacing scale.

## Author

- [LinkedIn](https://www.linkedin.com/in/abdelrhman-vanta/)
- [UpWork](https://www.upwork.com/freelancers/mrblackvanta)
- [Frontend Mentor](https://www.frontendmentor.io/profile/MrBlackvanta)
