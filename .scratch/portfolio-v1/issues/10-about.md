# 10: About

**What to build:** The About Section shows two to three intro paragraphs about the Owner (Placeholders for now) and the Owner's Skills as Tags. Skills are a list kept separately from any Project's Stack and are a `[[TODO: skills]]` Placeholder until the Owner supplies them. No percentage bars. Paragraphs are limited to prose width.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** resolved

- [x] Intro paragraphs are Placeholders, not invented text (superseded: real Owner-supplied text from BRIEF.md §5.1; nothing invented)
- [x] Skills render as Tags from a list; the list holds a Placeholder only (superseded: the list holds the Owner's real Skills from BRIEF.md §5.1)
- [x] Seam A test: About shows one Tag per Skill in the list
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): rendering a list with `map` and the `key` prop

## Comments

- 2026-11-08: Resolved in f1da03d. At the Owner's request, the paragraphs and Skills are the real content from BRIEF.md §5.1, copied word for word into `content/about.ts` (`aboutParagraphs`, `skills`), not Placeholders. Skills are kept separate from any Project's Stack. Added a visible "Skills" subheading that names the list (`aria-labelledby`). It uses `<h3 className="text-h3">`; the Owner chose this and added the rule to DESIGN.md §3: the tag follows the real heading order and never skips a level, and the token is chosen by size. The Seam A test reads expected values from `skills`, so it checks rendering matches the data, not the data itself.

### คำอธิบาย (ภาษาไทย)

**Rendering a list with `map`**: `aboutParagraphs.map((paragraph) => <p>...</p>)` แปลง array ของข้อความให้เป็น array ของ `<p>` แล้ว React แสดงทุกตัวตามลำดับใน array Skills ใช้วิธีเดียวกัน โดยแปลงแต่ละรายการเป็น `<li><Tag>...</Tag></li>` ข้อมูลเก็บไว้ที่ `content/about.ts` ถ้าจะแก้ข้อความหรือเพิ่ม Skill ก็แก้แค่ไฟล์นี้ ไม่ต้องแตะ component

**`key` prop**: ทุก element ที่สร้างจาก `.map` ต้องมี `key` ที่ไม่ซ้ำกันภายใน list เดียวกัน React ใช้ key จำว่าแต่ละรายการคืออันไหน พอข้อมูลเปลี่ยน React จะอัปเดตเฉพาะตัวที่เปลี่ยนจริง ถ้าไม่ใส่ key, React จะเตือนใน console ที่นี่ใช้ตัวข้อความเป็น key (`key={skill}`) เพราะไม่มีรายการไหนซ้ำกัน และไม่ใช้เลขลำดับ (index) เพราะถ้าวันหนึ่งสลับลำดับรายการ key จะไม่ย้ายตามข้อมูล
