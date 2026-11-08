# DESIGN — Design System

> กฎของไฟล์นี้: **ใช้ token ที่นิยามไว้ที่นี่เท่านั้น** ถ้าต้องการค่าใหม่ ให้เสนอเพิ่มในไฟล์นี้ก่อน แล้วค่อยใช้ในโค้ด
> อารมณ์: จริงจัง มืออาชีพ โทนเข้ม สีเน้นฟ้า/น้ำเงิน

## 1. หลักการ

1. **เรียบและชัด**: เนื้อหามาก่อนลูกเล่น ทุกอย่างบนจอต้องมีเหตุผล
2. **ลำดับชั้นด้วยขนาดและน้ำหนักตัวอักษร**: ไม่ใช้สีหลายสีมาแบ่งความสำคัญ
3. **สีเน้นใช้น้อย**: ฟ้าใช้กับสิ่งที่กดได้หรือจุดที่ต้องการให้มอง ไม่ใช้ตกแต่ง
4. **แยกพื้นผิวด้วยเส้นขอบบางๆ**: บนพื้นเข้ม เงาแทบมองไม่เห็น

## 2. สี (Color tokens)

| Token | ค่า | ใช้กับ |
|---|---|---|
| `bg` | `#0B0D12` | พื้นหลังหลักของหน้า |
| `surface` | `#12151C` | การ์ด, navbar |
| `surface-2` | `#1A1E27` | พื้นผิวยกขึ้นอีกขั้น, hover ของการ์ด |
| `border` | `#262B36` | เส้นขอบทั่วไป |
| `border-strong` | `#353B48` | เส้นขอบตอน hover, input |
| `text` | `#E6E8EC` | ข้อความหลัก |
| `text-muted` | `#9AA3B2` | ข้อความรอง, คำอธิบาย |
| `text-subtle` | `#6B7280` | ข้อความเล็กที่ไม่สำคัญ (ห้ามใช้กับเนื้อหาหลัก) |
| `accent` | `#60A5FA` | ลิงก์, ข้อความเน้น, focus ring |
| `accent-strong` | `#2563EB` | พื้นปุ่มหลัก |
| `accent-strong-hover` | `#1D4ED8` | ปุ่มหลักตอน hover |
| `on-accent` | `#FFFFFF` | ข้อความบนปุ่มหลัก |

ความต่างสี (contrast) ผ่านเกณฑ์ WCAG AA ทุกคู่ที่ใช้กับข้อความ:
- `text` บน `bg` ≈ 15:1
- `text-muted` บน `bg` ≈ 7.6:1
- `accent` บน `bg` ≈ 7.6:1
- `on-accent` บน `accent-strong` ≈ 5.2:1
- `text-subtle` บน `bg` ≈ 4.0:1 ซึ่ง **ไม่ผ่าน** AA สำหรับข้อความปกติ ใช้ได้แค่ข้อความขนาด 18px ขึ้นไป หรือส่วนตกแต่งเท่านั้น

## 3. ตัวอักษร (Typography)

- **Sans**: Inter ใช้กับทุกข้อความ
- **Mono**: JetBrains Mono ใช้เฉพาะ tech stack tag, โค้ด และ label เล็ก
- โหลดฟอนต์ด้วย `next/font/google` ซึ่ง self-host ตอน build จึงใช้กับ static export ได้

| Token | ขนาด / line-height | น้ำหนัก | ใช้กับ |
|---|---|---|---|
| `display` | 48px / 1.1 | 600 | ชื่อใน Hero บนจอใหญ่ (`md:text-display`) |
| `display-sm` | 36px / 1.1 | 600 | ชื่อใน Hero บนมือถือ (`text-display-sm`) |
| `h1` | 32px / 1.2 | 600 | หัวข้อ section |
| `h2` | 24px / 1.3 | 600 | ชื่อการ์ดงาน |
| `h3` | 20px / 1.4 | 500 | หัวข้อย่อย, บรรทัดตำแหน่งใต้ชื่อใน Hero (ใช้บนแท็ก `<p>` ไม่ใช่ heading) |
| `body` | 16px / 1.6 | 400 | เนื้อหา |
| `small` | 14px / 1.5 | 400 | คำอธิบายรอง |
| `caption` | 12px / 1.4 | 500 | tag, label (มักใช้ mono) |

ความกว้างบรรทัดของเนื้อหาไม่เกิน ~70 ตัวอักษร (`max-w-prose`)

### Token → HTML tag

ชื่อ token เป็นชื่อ **ขนาด** ไม่ใช่ชื่อแท็ก หน้านี้มี `<h1>` ได้ตัวเดียว (ชื่อใน Hero) ระดับหัวข้อจึงเลื่อนลงหนึ่งขั้น:

| Token (class) | แท็ก HTML | ใช้กับ |
|---|---|---|
| `display` / `display-sm` | `<h1>` | ชื่อใน Hero (มีตัวเดียวทั้งหน้า) |
| `h1` | `<h2>` | หัวข้อ section |
| `h2` | `<h3>` | ชื่อการ์ดงาน |
| `h3` | `<h4>` | หัวข้อย่อย |

ตัวอย่าง: `<h2 className="text-h1">Projects</h2>`

**กฎหลัก: เลือกแท็กตามลำดับหัวข้อจริงในหน้า (ห้ามข้ามระดับ) ส่วน token เลือกตามขนาดที่ต้องการ** ตารางด้านบนคือกรณีปกติ ถ้าหัวข้อย่อยอยู่ใต้ `<h2>` โดยตรง ให้ใช้ `<h3>` แม้จะใช้ token `h3` เช่น หัวข้อ "Skills" ใน About คือ `<h3 className="text-h3">Skills</h3>`

## 4. ระยะห่าง (Spacing)

ใช้ฐาน 4px:

| Token | ค่า | ใช้กับ |
|---|---|---|
| `0` | 0px | ค่ารีเซ็ต ไม่ใช่ระยะห่าง เช่น `top-0` ของ Navbar ที่เป็น sticky |
| `1` | 4px | ช่องไฟระหว่างไอคอนกับข้อความ |
| `2` | 8px | ช่องว่างภายใน tag, ระหว่าง tag |
| `4` | 16px | padding ปุ่ม/การ์ดบนมือถือ, ช่องว่างระหว่างย่อหน้า |
| `6` | 24px | padding การ์ด, ช่องว่างระหว่างการ์ด |
| `8` | 32px | ช่องว่างระหว่างหัวข้อกับเนื้อหา section |
| `12` | 48px | ระยะห่างแนวตั้งของ section บนมือถือ |
| `16` | 64px | — |
| `24` | 96px | ระยะห่างแนวตั้งของ section บนจอใหญ่ |

> แผนเดิมกำหนดไว้ 4/8/16/24 ไฟล์นี้เพิ่ม 32/48/64/96 สำหรับระยะห่างระดับ section

**ใช้ได้เฉพาะค่าในตารางนี้เท่านั้น** ตัวคูณ spacing ของ Tailwind ถูกปิดไว้ (ดูหัวข้อ 11) ดังนั้น class ที่ไม่มีใน token เช่น `w-5`, `p-3`, `gap-7` จะไม่ถูกสร้างและใช้ไม่ได้ ส่วน class ที่ไม่ได้อิง spacing เช่น `w-full`, `h-full`, `max-w-prose` ยังใช้ได้ตามปกติ

Layout: เนื้อหาอยู่ในกรอบกว้างไม่เกิน `container-page` (1120px, class `max-w-page`) อยู่กึ่งกลาง ขอบซ้ายขวา `4` (16px, มือถือ) / `6` (24px, จอใหญ่)

| Token | ค่า | ใช้กับ |
|---|---|---|
| `container-page` | 1120px | ความกว้างสูงสุดของ `Container` |

### Breakpoint

ใช้ breakpoint เริ่มต้นของ Tailwind (ไม่ reset) คำว่า **"จอใหญ่"** ในไฟล์นี้หมายถึง `md` (≥768px) เสมอ ส่วน "มือถือ" คือค่าที่ไม่มี prefix (mobile-first) เช่น `py-12 md:py-24`, `px-4 md:px-6`, `text-display-sm md:text-display`

## 5. มุมมน (Radius)

| Token | ค่า | ใช้กับ |
|---|---|---|
| `sm` | 4px | tag |
| `md` | 8px | ปุ่ม, input |
| `lg` | 12px | การ์ด |
| `full` | 9999px | รูปโปรไฟล์ (ถ้ามี) |

## 6. เงาและเส้นขอบ (Elevation)

- ใช้เส้นขอบ `1px solid border` เป็นหลัก
- เงามีตัวเดียว: `shadow-card` = `0 1px 2px rgb(0 0 0 / 0.4)`
- การ์ด **ไม่มี hover state** เพราะตัวการ์ดเองกดไม่ได้ สิ่งที่กดได้คือลิงก์ demo/code ข้างใน ถ้าการ์ดเปลี่ยนสีตอน hover คนดูจะเข้าใจผิดว่าทั้งการ์ดกดได้
- ถ้าวันหนึ่งมีการ์ดที่ทั้งใบเป็นลิงก์ จึงค่อยใช้ hover นี้: เปลี่ยนพื้นเป็น `surface-2` + ขอบเป็น `border-strong` ไม่ยกการ์ดด้วยเงาใหญ่

## 7. การเคลื่อนไหว (Motion)

- transition เฉพาะสีและขอบ: `150ms ease-out`
- ไม่มี animation ตอนโหลดหน้า ไม่มี parallax ไม่มี scroll animation ในรอบแรก
- เคารพ `prefers-reduced-motion`

## 8. Components พื้นฐาน (`components/ui/`)

| Component | Variants | หมายเหตุ |
|---|---|---|
| `Button` | `primary` (พื้น accent-strong → hover `accent-strong-hover`), `secondary` (ขอบ border, พื้นโปร่ง → hover ขอบ `border-strong`), `ghost` (ไม่มีขอบ → hover พื้น `surface-2`) ตัวอักษร `text-body` ทุกแบบ | ขนาด `md` เดียวก่อน; ถ้ามี `href` จะ render เป็น `<a>` ธรรมดา ถ้าไม่มีจะเป็น `<button>` (ดูด้านล่าง) |
| `Card` | — | พื้น `surface`, ขอบ `border`, radius `lg`, padding `4` (มือถือ) / `6` (จอใหญ่), เงา `shadow-card`, ไม่มี hover (ดู §6) |
| `Tag` | — | mono, `caption`, พื้น `surface-2`, ตัวอักษร `text-muted`, radius `sm`, padding `px-2 py-1` |
| `Navbar` | — | sticky บนสุด, สูง `h-16`, **พื้นทึบ `bg`** (ไม่โปร่ง ไม่ blur), ขอบล่าง `border` (ดูด้านล่าง) |
| `Section` | — | wrapper ใส่ `id`, หัวข้อ (`<h2 class="text-h1">`), ระยะห่างแนวตั้งมาตรฐาน, `scroll-mt-16` |
| `Container` | — | กรอบกว้าง `max-w-page` + ขอบซ้ายขวา |

### ลิงก์

- ใช้ `<a>` ธรรมดา ไม่ใช้ `next/link` เพราะลิงก์ในเว็บมีแค่ anchor (`#projects`), ไฟล์ (`/resume.pdf`) และลิงก์ภายนอก ไม่มีการเปลี่ยนหน้าภายในเว็บ
- ลิงก์ resume ใส่ `download`
- ลิงก์ภายนอกใส่ `target="_blank" rel="noopener noreferrer"`

### Navbar

- ไม่มีเมนู hamburger ใช้ลิงก์เป็นแถว (About, Projects, Contact) ขนาด `small` ทุกจอ
- บนมือถือซ่อนชื่อ/โลโก้ทางซ้าย และแสดงตั้งแต่ `md` ขึ้นไป
- เป็น Server Component ไม่ต้องใช้ `"use client"`
- `Section` ใช้ `scroll-mt-16` (เท่ากับความสูง navbar) เพื่อไม่ให้หัวข้อโดน navbar บังเวลาคลิก anchor
- ไม่ใช้ smooth scroll (§7)

### การ์ดงาน (ProjectCard)

ลำดับจากบนลงล่าง (อยู่ใน `Card` ไม่มี hover):

1. Project type (`text-small text-text-muted`) + Tag สถานะ "In progress" ต่อท้ายในแถวเดียวกัน (งานที่ Finished ไม่มี Tag)
2. ชื่องาน `<h3 class="text-h2">`
3. description สี `text-muted` กว้างไม่เกิน `max-w-prose`
4. Stack เป็นแถว Tag
5. ลิงก์: "Live demo" ใช้ Button `secondary`, "Source code" ใช้ Button `ghost` (แสดงเฉพาะลิงก์ที่มี)

Projects เป็นคอลัมน์เดียว การ์ดกว้างเต็ม Container

### Contact

- ปุ่ม 3 ตัวเรียงแถวเดียว ขึ้นบรรทัดใหม่ได้ (`flex flex-wrap gap-4`) ตามลำดับ: "Download resume" (`primary`) → อีเมล (`secondary`, ข้อความบนปุ่มคือตัวอีเมล) → "GitHub" + ไอคอน (`ghost`)
- Resume มาก่อนเพราะเป็น action หลักของ Recruiter (BRIEF §3)

### Footer

- ไม่ใช่ Section ไม่มีลิงก์ใน Navbar
- ขอบบน `border`, สูง `h-16`, ตัวอักษร `small` สี `text-muted`
- ซ้าย: `© <ปีที่ build> <ชื่อ Owner>` ขวา: ไอคอน GitHub (มี `aria-label` เพราะไม่มีข้อความประกบ)

### Focus ring

ทุก component ที่กดได้ต้องมี focus ring: `2px` สี `accent`, ห่างจากขอบ `2px`

ให้ใช้ **`outline`** ห้ามใช้ `ring-*` เพราะใน Tailwind v4 `ring` ทำงานด้วย `box-shadow` ซึ่งนับเป็นเงาสีฟ้าที่ §10 ห้ามไว้:

```
focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
```

## 9. ไอคอน

- ใช้ไลบรารีเดียว: **lucide-react**, ขนาด 16 หรือ 20px, stroke 1.5–2
- โลโก้ GitHub ใช้ SVG ทางการของ GitHub
- ทุกไอคอนที่ไม่มีข้อความประกบต้องมี `aria-label`
- กำหนดขนาดด้วย prop `size` ของ lucide (`<Mail size={16} />`) ห้ามใช้ class อย่าง `w-5 h-5` เพราะ 20px ไม่มีใน spacing token และ class เหล่านี้ใช้ไม่ได้ (ดูหัวข้อ 4)
- **ข้อยกเว้นข้อเดียว:** โลโก้ GitHub ทำเป็น `components/ui/GithubIcon.tsx` เป็น inline SVG ทางการของ GitHub ใช้ `fill="currentColor"` และรับ prop `size` แบบเดียวกับ lucide (lucide เลิกรองรับไอคอนแบรนด์แล้ว)

## 10. กฎห้าม (สำคัญ)

- ❌ ห้ามใช้ gradient (ทั้งพื้นหลัง ข้อความ และขอบ)
- ❌ ห้ามใช้อีโมจิแทนไอคอน
- ❌ ห้ามใช้สี ขนาด ระยะ หรือมุมมนนอก token (รวมถึงค่าแบบ `text-[#123456]` หรือ `p-[13px]` ใน Tailwind)
- ❌ ห้ามใช้ glassmorphism, glow, neon, เงาสีฟ้า
- ❌ ห้ามใช้แถบ % บอกระดับทักษะ
- ❌ ห้ามใช้รูป stock หรือภาพประกอบ AI ทั่วไป
- ❌ ห้ามใช้ข้อความ placeholder แบบ lorem ipsum ในงานที่ deploy

## 11. ที่เก็บ token ในโค้ด

- Tailwind v4 (ค่าเริ่มต้นของ `create-next-app` ตอนนี้) ไม่มี `tailwind.config.js` แล้ว ให้นิยาม token ใน `app/globals.css` ด้วย `@theme` ซึ่งจะสร้างทั้ง CSS variables และ class ของ Tailwind ให้ในคราวเดียว
- ปิดค่าเริ่มต้นของ Tailwind ทุก namespace ที่ไฟล์นี้นิยามไว้ แล้วนิยามเฉพาะ token ของเรา เพื่อให้ class นอก token ไม่ถูกสร้างเลย:
  - `--color-*: initial;` สี
  - `--spacing: initial;` และ `--spacing-*: initial;` ระยะห่าง (ปิดตัวคูณ แล้วนิยาม `--spacing-0` … `--spacing-24` ทีละตัว)
  - `--text-*: initial;` ขนาดตัวอักษร
  - `--radius-*: initial;` มุมมน
  - `--shadow-*: initial;` เงา
- breakpoint (`--breakpoint-*`) ไม่ reset และใช้ค่าเริ่มต้นของ Tailwind
- ใช้ชื่อ token ตามไฟล์นี้ตรงๆ ไม่ตั้งชื่อใหม่ แม้ class จะดูซ้ำ เช่น `bg-bg`, `text-text`, `text-text-muted`, `border-border`
- ค่าแบบ arbitrary (`p-[13px]`) ยังเขียนได้ทางเทคนิค เพราะไม่มี lint plugin คอยจับ ให้ `/code-review` ตรวจแทน
- หน้า `/styleguide` แสดงทุก token และทุก component เพื่อตรวจด้วยตา หน้านี้ deploy ขึ้นเว็บจริงด้วย (ไม่มีลิงก์ใน navbar) และตั้ง `robots: { index: false }` ไว้
