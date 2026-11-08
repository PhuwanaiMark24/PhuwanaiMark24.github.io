# 08: Page shell: Navbar, Sections and metadata

**What to build:** The home page has a sticky, solid Navbar (64px, bottom border) with links to About, Projects and Contact, and the three Sections exist with headings and matching ids. Clicking a Navbar link lands on the Section with its heading visible below the Navbar. No smooth scroll. On Mobile the Owner's name is hidden in the Navbar. The page title is "<Owner name> — Frontend Developer", the description is the tagline (both Placeholders for now), and the Vercel favicon is removed. The scaffold's default page content is gone.

**Blocked by:** 02 (Test harness), 07 (Tag, Card, Container and GitHub icon)

**Status:** resolved

- [x] Section Base component: id, level-2 heading styled with the `h1` Token, standard vertical spacing, scroll margin equal to Navbar height
- [x] Navbar Base component: Server Component, no hamburger, links in one row at `small` size
- [x] Seam A test: exactly three Sections (About, Projects, Contact), each with a level-2 heading and an id matching a Navbar link
- [x] Seam A test: Navbar has no link to the Hero
- [x] Metadata title/description set from Placeholders; favicon removed with a Placeholder noted
- [x] Unused scaffold assets in the public folder are removed
- [x] Layout works at 360px wide
- [x] Built CSS contains no `prefers-color-scheme` (the scaffold's `dark:` classes, such as `dark:invert`, are gone with the default page)
- [x] Styleguide page uses the Container and Section Base components instead of its hand-written `main`/`section` wrappers (follow-up from ticket 05)
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): layout vs page, composing Base components, anchor links

## Comments

- 2026-11-08: Resolved in 9331cc7, plus fac0e84 for the `prefers-color-scheme` criterion. The leftover rule did not come from the scaffold page: Tailwind v4 scans every repo file, so `dark:invert` in ticket text, and the banned example classes in DESIGN.md (`p-[13px]`, `text-[#123456]`), were generated into the built CSS. Fixed with `@source not "../**/*.md"` in `app/globals.css`. `top-0` did not exist because spacing is reset, so the sticky Navbar did not stick; added the Owner-confirmed spacing token `0` (`--spacing-0: 0px`, DESIGN.md §4). Owner-confirmed: name and tagline Placeholders live in `content/site.ts`; Navbar links are right-aligned on Mobile. The Owner checked 360px by eye: links fit one row, Navbar sticks, headings are not hidden. Known: Navbar `links` repeat the Section ids in `app/page.tsx` (the Seam A test catches drift); `public/` is empty until `resume.pdf` is added.

### คำอธิบาย (ภาษาไทย)

**Layout กับ page**: `app/layout.tsx` ครอบทุกหน้าของเว็บ ใช้เก็บสิ่งที่ทุกหน้าต้องมี เช่น `<html>`, `<body>`, ฟอนต์ และ metadata ตั้งต้น ส่วน `app/page.tsx` คือเนื้อหาของหน้า `/` ซึ่งจะไปแสดงตรงที่ `{children}` ใน layout Navbar อยู่ใน `page.tsx` ไม่ได้อยู่ใน layout เพราะถ้าใส่ใน layout หน้า `/styleguide` ก็จะมี Navbar ไปด้วย ทั้งที่ลิงก์ `#about` ในหน้านั้นไม่มีที่ให้ไป

**ประกอบ Base component**: หน้า home ไม่เขียน class เองเลย มีแค่ `Navbar`, `Container` และ `Section` ซ้อนกัน แต่ละตัวทำหน้าที่เดียว คือ `Container` คุมความกว้าง, `Section` คุมหัวข้อและระยะห่าง และ `Navbar` ใช้ `Container` ข้างในอีกที ถ้าจะเปลี่ยนระยะห่างของทุก Section ก็แก้ไฟล์เดียว

**Anchor links**: `href="#about"` พาเลื่อนไปที่ element ที่มี `id="about"` ในหน้าเดียวกัน ไม่ต้องใช้ JavaScript หรือ router แต่ Navbar ติดอยู่ด้านบน หัวข้อจึงอาจโดนบัง `scroll-mt-16` (64px เท่าความสูง Navbar) ทำให้เบราว์เซอร์หยุดเลื่อนก่อนถึงตำแหน่งจริง 64px ส่วน `aria-labelledby` ตั้งชื่อ `<section>` ตามหัวข้อ screen reader จึงประกาศเป็น region "About" ได้ และ test ก็ใช้ชื่อนี้ค้นหา Section
