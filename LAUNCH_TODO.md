# Nandarang Launch TODO

## Completed in this pass

- Fixed broken launch-critical links for order/menu/privacy flows.
- Added a real `#order` contact block with call and email actions.
- Replaced temporary external structured-data imagery with stable local site images.
- Added metadata base, icon metadata, publisher/creator/category metadata, and safer JSON-LD serialization.
- Added social `sameAs` links to Restaurant JSON-LD for entity/AEO/GEO clarity.
- Added `/privacy` page and included it in `sitemap.xml`.
- Improved FAQ click behavior so the button controls the accordion directly.
- Replaced the remote map image dependency with a local facade-backed location card and Google Maps CTA.

## Needs owner confirmation before launch

- Confirm the official online ordering URL, delivery platform URLs, and reservation URL if available.
- Add the official menu PDF or replace the menu CTA with a verified menu platform link.
- Confirm current hours, holiday hours, happy hour details, valet pricing, and accepted payment methods.
- Confirm the preferred Google Business Profile URL instead of the current share link.
- Confirm whether the restaurant wants Korean-language content, bilingual SEO copy, or only English.
- Add verified review/testimonial copy only if those quotes are approved for publication.
- Confirm production analytics, Search Console, and Google Business Profile tracking ownership.

## Final launch checklist

- Run one production build before deployment.
- Test desktop, tablet, and mobile hero/contact/order flows.
- Validate JSON-LD with Google Rich Results Test and Schema Markup Validator.
- Submit sitemap in Google Search Console after deployment.
- Check Open Graph preview for Facebook, KakaoTalk, iMessage, and X/Twitter.
- Verify `https://nandarangla.com`, `https://www.nandarangla.com`, and canonical redirects.
