# 05: Styleguide page (Tokens)

**What to build:** The Owner can open the Styleguide and check every Token by eye: color swatches with names and values, each type size, the spacing scale, radii and the card shadow. The page is exported with the site but is not linked from the Navbar and tells search engines not to index it.

**Blocked by:** 03 (Tokens, fonts and dark theme)

**Status:** resolved

- [x] Styleguide shows every color, text size, spacing, radius and shadow Token, labelled with its name
- [x] Styleguide metadata sets robots to not index; the home page does not
- [x] The built output contains the Styleguide HTML with a noindex directive
- [x] Uses only Tokens (no arbitrary values)
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai) of the route file, page metadata and mapping over arrays to render swatches

## Comments

- 2026-11-08: Resolved in 7cf219e. `out/styleguide.html` has `<meta name="robots" content="noindex"/>`; `out/index.html` has no noindex. Also shows `container-page` (GLOSSARY: "every Token"). Follow-up: switch the inline `main`/`section` markup to `Container`/`Section` once tickets 07–08 add them.

### คำอธิบาย (ภาษาไทย)

**Route file**: ใน App Router ชื่อโฟลเดอร์คือ URL ไฟล์ `app/styleguide/page.tsx` จึงกลายเป็นหน้า `/styleguide` โดยไม่ต้องตั้ง router เอง ตอน build แบบ static export, Next.js จะสร้าง `out/styleguide.html` ให้ ฟังก์ชันที่ `export default` คือตัวหน้า และเป็น Server Component จึงไม่ต้องใส่ `"use client"`

**Page metadata**: `export const metadata` คือวิธีที่ Next.js ใช้ใส่แท็กใน `<head>` ค่าที่ตั้งในหน้าจะทับค่าที่มาจาก `layout.tsx` ในหน้านี้ตั้ง `robots: { index: false }` ไว้ Next.js จึงสร้าง `<meta name="robots" content="noindex">` ให้เฉพาะหน้านี้ หน้า home ไม่ได้รับผลด้วย

**Mapping over arrays**: เก็บข้อมูล Token ไว้ใน array (เช่น `colors`) แล้วใช้ `colors.map(...)` แปลงแต่ละรายการเป็น `<li>` ทุก element ที่สร้างจาก `.map` ต้องมี `key` ที่ไม่ซ้ำกัน (ในหน้านี้ใช้ `name`) เพื่อให้ React แยกได้ว่ารายการไหนเป็นรายการไหน

ใน array ต้องเขียนชื่อ class แบบเต็ม เช่น `"bg-surface-2"` ห้ามต่อ string เป็น `` `bg-${name}` `` เพราะ Tailwind หา class จากข้อความในโค้ดตรงๆ ถ้าต่อ string ตอนรัน Tailwind จะหา class นั้นไม่เจอและไม่สร้างให้

**`TokenLabel`**: component เล็กๆ ที่อยู่ในไฟล์เดียวกัน รับ props `name` กับ `value` แล้วแสดงชื่อ Token ตามด้วยค่า (ตัว mono สีจาง) หน้านี้เรียกใช้ 6 ที่ จึงผ่านกฎ "ใช้ ≥ 2 ที่ค่อยสร้าง abstraction"
