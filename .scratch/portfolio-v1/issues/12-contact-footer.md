# 12: Contact and Footer

**What to build:** The Contact Section gives the Visitor an email link that opens their mail app (address is a Placeholder), a link to `https://github.com/PhuwanaiMark24` with the GitHub icon, and "Download resume" as the `primary` action. Below the Sections, the Footer shows "© <build year> <Owner name>" (name is a Placeholder, year computed at build time) and a GitHub link. Icon-only links carry an accessible label.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** resolved

- [x] Seam A test: Contact contains at least one `mailto:` link
- [x] Seam A test: every Resume link on the page (Hero and Contact) is an anchor to the Resume PDF with `download`
- [x] Seam A test: every external link has `target="_blank"` and `rel="noopener noreferrer"`
- [x] Seam A test: every link without visible text has an accessible name
- [x] Footer is not a Section and is not linked from the Navbar
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): `mailto:` links, accessible labels, computing values at build time

## Comments

- 2026-11-08: Resolved in 9e8c28e.
  - **Placeholders replaced**: the Owner asked for real values, so the email (`phuwanaimark.work@gmail.com`, BRIEF.md §1) and name are used instead of Placeholders. The email and the GitHub profile URL live only in `content/site.ts` (`email`, `githubUrl`).
  - **Recorded in DESIGN.md §8** (Owner-confirmed):
    - Contact button order: "Download resume" (`primary`), then email (`secondary`), then GitHub (`ghost`).
    - Footer layout: top border, `h-16`, `small` muted text, © on the left and an icon-only GitHub link with `aria-label` on the right.
  - **360px**: the Owner checked by eye; the buttons wrap without overflow.
  - **Tests**:
    - The mailto and Footer tests use literal expected values taken from BRIEF, not `site`.
    - The year is checked as any 4 digits, not recomputed the way the code does it.
    - The external-link test from ticket 11 already covers the Contact and Footer links.
    - The accessible-name test passed on its first run. It was verified to fail when the Footer's `aria-label` is removed.
  - **Build output**: the home page HTML now has no `[[TODO`. The only remaining deploy blocker for this page is `public/resume.pdf`.
  - **Known**: the Footer's icon-link classes repeat the Navbar link classes. It also sets `target`/`rel` by hand, because Button takes no `aria-label`. Consider extracting a shared text-link component if a third use appears.

### คำอธิบาย (ภาษาไทย)

**ลิงก์ `mailto:`**: `href="mailto:phuwanaimark.work@gmail.com"` เมื่อกด เบราว์เซอร์จะเปิดแอปอีเมลของคนดู และใส่ช่องผู้รับไว้ให้แล้ว ไม่ต้องมีฟอร์มและไม่ต้องมี server จึงใช้กับ GitHub Pages ได้ ลิงก์นี้ไม่ขึ้นต้นด้วย `http` จึงไม่นับเป็นลิงก์ภายนอก Button เลยไม่ใส่ `target="_blank"` ให้ ซึ่งถูกต้อง เพราะไม่มีเหตุผลที่ต้องเปิดแท็บใหม่

**Accessible labels**:
- **ลิงก์ GitHub ใน Contact**: มีข้อความ "GitHub" อยู่แล้ว ไอคอนจึงเป็นแค่ของตกแต่ง และถูกซ่อนจาก screen reader ด้วย `aria-hidden`
- **ลิงก์ใน Footer**: มีแต่ไอคอน ไม่มีข้อความ ถ้าไม่ใส่อะไรเพิ่ม screen reader จะอ่านได้แค่ว่า "link" โดยไม่รู้ว่าไปที่ไหน จึงใส่ `aria-label="GitHub"` ไว้ที่ตัว `<a>` ทั้งลิงก์จะได้ชื่อว่า "GitHub" ส่วนไอคอนยังถูกซ่อนเหมือนเดิม ถ้าไปใส่ label ที่ไอคอนแทน screen reader บางตัวจะอ่านซ้ำสองครั้ง

**คำนวณค่าตอน build**: `const year = new Date().getFullYear()` อยู่ใน Server Component และเว็บนี้เป็น static export โค้ดบรรทัดนี้จึงรันครั้งเดียวตอน `npm run build` แล้วตัวเลขปีจะถูกเขียนลงไฟล์ HTML ไปเลย เบราว์เซอร์ของคนดูไม่ได้คำนวณอะไร ปีจะเปลี่ยนเองเมื่อ build ใหม่ในปีถัดไป ไม่ต้องแก้ด้วยมือ
