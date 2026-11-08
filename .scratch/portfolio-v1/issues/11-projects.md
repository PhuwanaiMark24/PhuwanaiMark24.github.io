# 11: Projects

**What to build:** The Projects Section shows one Card per Project from the project content module, in file order. Each card shows the name (level-3 heading), description, Project type, Stack as Tags, a status Tag only when In progress, and demo/code links that open in a new tab. The content module starts with exactly one Project, this portfolio: type Code/Web, In progress, Stack Next.js / TypeScript / Tailwind CSS, demo `https://phuwanaimark24.github.io`, code `https://github.com/PhuwanaiMark24/PhuwanaiMark24.github.io`. No second Project and no Placeholder Project. The layout looks complete with one card.

Project shape (agreed in spec): `name`, `description`, `type` (`"Code/Web" | "AI/Agent" | "Design"`), `stack` (string list), optional `status` (`"In progress"`, absent = Finished), `links` with optional `demo` and `code`.

**Blocked by:** 08 (Page shell: Navbar, Sections and metadata)

**Status:** resolved

- [x] Seam B test: every Project has at least one of demo or code
- [x] Seam B test: every Project type is an allowed value
- [x] Seam A test: one card per Project, in content order
- [x] Seam A test: an In progress Project shows a status label; a Finished Project shows none (test with fixture data if needed)
- [x] Seam A test: every external link on the page has `target="_blank"` and `rel="noopener noreferrer"`
- [x] Unknown Project type is a type error
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): TypeScript types for data, union types, optional fields, mapping data to components

## Comments

- 2026-11-08: Resolved in 81a74d0. Name and description come from BRIEF.md §6. The card layout is recorded in DESIGN.md §8 "การ์ดงาน": link labels "Live demo" (`secondary`) and "Source code" (`ghost`) were confirmed by the Owner, who also checked by eye that one card looks complete.
  - **Unknown type check**: `@ts-expect-error` on `type: "Blog"` in `__tests__/projects.test.ts`. Verified that `next build` type-checks `__tests__` and fails with TS2578 if the error disappears, so CI enforces it.
  - **Status test**: uses fixture data rendered through `<Projects projects={…} />`, because the real content has no Finished Project yet.
  - **External-link test**: passed on its first run, since Button has added `target`/`rel` since ticket 06. It was verified to fail when `rel` is removed from Button.
  - **Known limits**:
    - `key={project.name}` assumes Project names are unique.
    - The `ul > li > Tag` list now appears in both About and Projects. It is a candidate for extraction if a third use appears.

### คำอธิบาย (ภาษาไทย)

**TypeScript types สำหรับข้อมูล**: `type Project = { … }` บอกว่าข้อมูลงานแต่ละชิ้นต้องมีหน้าตาแบบไหน ถ้าพิมพ์ชื่อ field ผิด หรือลืมใส่ field ที่บังคับ เช่น `name`, TypeScript จะฟ้องใน editor ทันที และฟ้องอีกครั้งตอน build ส่วน `projects: Project[]` แปลว่าเป็น array ของ Project

**Union types**: `type ProjectType = "Code/Web" | "AI/Agent" | "Design"` รับได้แค่ 3 ค่านี้เท่านั้น ถ้าพิมพ์ `"Blog"` หรือ `"code/web"` (ตัวพิมพ์ต่างกัน) จะเป็น error เลย ไม่ต้องรอให้หน้าเว็บแสดงผิด `status?: "In progress"` ก็เป็น union ที่มีค่าเดียว

**Optional fields**: เครื่องหมาย `?` แปลว่าไม่ต้องใส่ก็ได้
- `status?` ถ้าไม่ใส่ แปลว่างานเสร็จแล้ว
- `links: { demo?; code? }` ไม่บังคับทั้งสองตัว แต่กฎ "ต้องมีอย่างน้อยหนึ่งอัน" ให้ TypeScript เช็กได้ไม่ง่าย จึงให้ test ใน Seam B เป็นคนเช็กแทน

ใน component ใช้ `{project.status && <Tag>…</Tag>}` คือถ้ามี status ก็แสดง Tag ถ้าไม่มีก็ไม่แสดงอะไร ลิงก์ demo และ code ก็ใช้วิธีเดียวกัน

**Mapping data to components**: `projects.map((project) => <ProjectCard key={project.name} project={project} />)` ส่ง object ของงานทั้งก้อนเป็น prop ให้การ์ดแต่ละใบ ถ้าจะเพิ่มงาน ก็แค่เพิ่ม object ใน `content/projects.ts` ไม่ต้องแตะ component ตรงตามที่ BRIEF §6 ต้องการ
