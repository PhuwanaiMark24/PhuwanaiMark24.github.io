# 09: Hero

**What to build:** At the top of the page, above the Sections, the Hero shows the Owner's name as the only top-level heading (`display-sm`, `display` on Large screen), the role "Frontend Developer" and the tagline. Two actions follow: "Download resume" (`primary`, downloads the Resume) and "View projects" (`secondary`, jumps to the Projects Section). The name and tagline are Placeholders. The Hero is not a Section.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** resolved

- [x] Seam A test: exactly one level-1 heading on the page, in the Hero
- [x] Seam A test: the Hero's Resume link is an anchor to the Resume PDF with `download`
- [x] Seam A test: "View projects" links to the Projects Section id
- [x] Name and tagline are Placeholders (`[[TODO: ...]]`), not invented text (superseded: the Owner supplied real values in 83ad421 and 6d3ce3f; nothing invented)
- [x] No load animation
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): what the Hero composes and how responsive classes work

## Comments

- 2026-11-08: Resolved in 9077761. The name and tagline are real values the Owner set in `content/site.ts` (83ad421, 6d3ce3f; the tagline was reworded in 9077761 to avoid repeating "Frontend Developer"), so they are no longer Placeholders. Added `site.role` because it is used twice: in the Hero and in the metadata title. Owner-confirmed: the role line uses `text-h3` on a `<p>`, not a heading, recorded in DESIGN.md §3. Hero tests check reading order (the link comes before the first Section) instead of DOM structure. Known: `/resume.pdf` does not exist yet, so the link 404s until the Owner adds it; the ticket 13 CI check will block deploy until then.

### คำอธิบาย (ภาษาไทย)

**Hero ประกอบด้วยอะไร**: Hero เป็น component ของหน้า อยู่ใน `components/` ไม่ใช่ `components/ui/` เพราะไม่ใช่ Base component ข้างในไม่ได้สร้างอะไรใหม่ แค่เอาข้อมูลจาก `site` (ชื่อ, ตำแหน่ง, tagline) มาวางเรียงกัน แล้วใช้ `Button` จาก ticket 06 อีก 2 ตัว ได้แก่ `primary` สำหรับ "Download resume" และ `secondary` สำหรับ "View projects" Hero ใช้ `<div>` ธรรมดาแทน `Section` ด้วย 2 เหตุผล ข้อแรกคือตาม GLOSSARY แล้ว Hero ไม่ใช่ Section จึงไม่มี id และไม่มีลิงก์ใน Navbar ข้อสองคือถ้าใช้ `Section` จะกลายเป็น region ตัวที่ 4 แล้ว test ที่เช็กว่ามี Section 3 ส่วนจะไม่ผ่าน

**Responsive classes**: Tailwind เป็นแบบ mobile-first class ที่ไม่มี prefix ใช้กับทุกขนาดจอ ส่วน class ที่มี `md:` ใช้เฉพาะจอที่กว้างตั้งแต่ 768px ขึ้นไป และจะทับค่าเดิม
- `text-display-sm md:text-display`: ชื่อขนาด 36px บนมือถือ และ 48px บนจอใหญ่
- `pt-12 md:pt-24`: ระยะด้านบน 48px บนมือถือ และ 96px บนจอใหญ่
- `flex flex-wrap gap-4`: ปุ่ม 2 ตัวอยู่แถวเดียวกัน ถ้าจอแคบเกินไปปุ่มจะขึ้นบรรทัดใหม่เอง ไม่ต้องใช้ `md:`
