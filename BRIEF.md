# BRIEF — Personal Portfolio

> ไฟล์นี้บอก "ทำอะไร เพื่อใคร" ส่วน "หน้าตาแบบไหน" อยู่ใน DESIGN.md
> ช่องที่เป็น `[[...]]` คือข้อมูลที่ยังต้องเติม ห้าม AI แต่งข้อมูลเหล่านี้ขึ้นเอง

## 1. เจ้าของเว็บ

- ชื่อที่แสดง: `Phuwanai Mark`
- ตำแหน่ง: **Frontend Developer**
- Tagline (1 บรรทัด): `Building with AI agents — and still reading every line of the diff.`
- GitHub username: `PhuwanaiMark24`
- อีเมล: `[[email]]`

## 2. เป้าหมาย

เว็บ portfolio ที่ทำให้คนดูรู้ภายใน 10 วินาทีว่า:
1. เราคือใคร ทำอะไร (Frontend Developer)
2. มีงานอะไรให้ดู
3. ติดต่อหรือโหลด Resume ได้ทางไหน

เป้าหมายรอง: ตัวเว็บเองคือผลงานชิ้นแรก แสดงว่าเขียน Next.js + TypeScript ได้สะอาดและมีระบบ

## 3. กลุ่มผู้ชม

| กลุ่ม | ต้องการเห็น | สิ่งที่เว็บต้องมี |
|---|---|---|
| HR / บริษัท | ทักษะ ผลงาน ความเป็นมืออาชีพ | ปุ่มโหลด Resume เห็นได้ชัด, ลิงก์ GitHub |
| ลูกค้าฟรีแลนซ์ | ทำอะไรให้ได้ ติดต่อยังไง | งานที่มีผลลัพธ์ชัด, ช่องทางอีเมล |

## 4. ภาษาและน้ำเสียง

- เนื้อหาบนเว็บ: **ภาษาอังกฤษอย่างเดียว**
- น้ำเสียง: จริงจัง มืออาชีพ กระชับ ไม่โอ้อวด ไม่ใช้คำฟุ่มเฟือยแบบ "passionate", "cutting-edge", "rockstar"

## 5. โครงสร้างเว็บ

หน้าเดียว (single page) เลื่อนลงตามลำดับ มี navbar ลิงก์ไป About, Projects, Contact ด้วย anchor (`#about` เป็นต้น) — Hero ไม่ใช่ Section และไม่มีลิงก์ใน navbar (ดู GLOSSARY.md)

| ลำดับ | ส่วน | เนื้อหา |
|---|---|---|
| 1 | **Hero** | ชื่อ, ตำแหน่ง, tagline, ปุ่ม "View projects" + "Download resume" |
| 2 | **About** | แนะนำตัว 2–3 ย่อหน้า, รายการทักษะ/เครื่องมือ (เป็นข้อความหรือ tag ไม่ใช้แถบ % ทักษะ) |
| 3 | **Projects** | การ์ดงาน แต่ละใบมี: ชื่อ, คำอธิบาย 1–2 บรรทัด, ประเภท, tech stack, ลิงก์ demo/โค้ด |
| 4 | **Contact** | อีเมล (mailto), GitHub, ปุ่มดาวน์โหลด Resume (PDF) |
| — | Footer | © ปี + ชื่อ, ลิงก์ซ้ำ GitHub |

หน้า style guide (`/styleguide`) มีไว้ใช้ตอนพัฒนา ไม่ใส่ลิงก์ใน navbar

## 5.1 เนื้อหา About (ร่างแรก — Owner แก้ได้ภายหลัง)

**Paragraphs**

1. I'm a student and frontend developer who builds clean, accessible websites with React, Next.js and Tailwind CSS.
2. I work with AI coding agents like Claude Code, but not on autopilot. I write the brief and design rules first, break the work into small tickets, and review every change before it ships. This site was built that way — the spec, tickets and commit history are all on GitHub.
3. I'm open to junior frontend roles and freelance projects. If you need a fast, well-structured website, get in touch.

**Skills** (ลำดับตามนี้): HTML/CSS, JavaScript, React, Next.js, Tailwind CSS, Claude Code

## 6. ผลงาน (Projects)

ตอนนี้มีงานจริง 1–2 ชิ้น จึงออกแบบให้ **เพิ่มงานได้ง่ายโดยแก้ไฟล์ข้อมูลไฟล์เดียว** (เช่น `content/projects.ts`) ไม่ต้องแตะ component

| # | ชื่องาน | ประเภท | สถานะ |
|---|---|---|---|
| 1 | Personal portfolio (เว็บนี้) | Code / Web | กำลังทำ |

กฎ: ห้ามสร้างงานตัวอย่างปลอม ถ้ามีงานน้อยให้แสดงเท่าที่มี layout ต้องดูดีตั้งแต่ 1 ชิ้น

## 7. ช่องทางติดต่อ

- อีเมล: ลิงก์ `mailto:` (ไม่มีฟอร์ม เพราะ GitHub Pages ไม่มี server)
- GitHub: `https://github.com/PhuwanaiMark24`
- Resume: ไฟล์ `public/resume.pdf` → ลิงก์ดาวน์โหลด
- ไม่มี LinkedIn ในรอบแรก

## 8. ข้อจำกัดทางเทคนิค

- Next.js (App Router) + TypeScript + Tailwind CSS
- `output: 'export'` (static) → deploy บน GitHub Pages
- Repo ชื่อ `PhuwanaiMark24.github.io` → เว็บอยู่ที่ `https://phuwanaimark24.github.io` → **ไม่ต้องตั้ง `basePath`**
- `images: { unoptimized: true }`
- ห้ามใช้ฟีเจอร์ที่ต้องมี server: API routes, Server Actions, middleware, ISR

## 9. นอกขอบเขต (รอบแรก)

- บล็อก, หลายภาษา, ฟอร์มติดต่อ, dark/light toggle (เว็บเป็นโทนเข้มอย่างเดียว), analytics, CMS

## 10. นิยามว่า "เสร็จ"

- ครบ Hero + 3 Section (About, Projects, Contact) ตาม GLOSSARY.md, ใช้ได้ดีบนมือถือ (กว้าง 360px) ถึงจอใหญ่
- ใช้ token จาก DESIGN.md เท่านั้น
- Lighthouse: Accessibility ≥ 95, Performance ≥ 90
- Deploy ผ่าน GitHub Actions อัตโนมัติเมื่อ push เข้า `main`
