# 07: Tag, Card, Container and GitHub icon

**What to build:** The remaining small Base components, each shown on the Styleguide:
- **Tag**: mono, `caption`, `surface-2`, radius `sm`
- **Card**: `surface`, `border`, radius `lg`, padding `6`, no hover state
- **Container**: max width `container-page`, horizontal padding `4` on Mobile and `6` on Large screen
- **GitHub icon**: the official GitHub mark as inline SVG with `currentColor` fill and a `size` prop matching `lucide-react`. It is the only icon not from `lucide-react`.

**Blocked by:** 06 (Button)

**Status:** resolved

- [x] Each component matches DESIGN.md §5, §6, §8 and §9 and uses only Tokens
- [x] Card has no hover styles
- [x] GitHub icon is decorative by default and can take an accessible label when used alone
- [x] Styleguide shows each component
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): `children` prop for Card/Container, and why the GitHub icon is an exception

## Comments

- 2026-11-08: Resolved in dfb4be2. Owner-confirmed choices, now recorded in DESIGN.md §8: Tag text `text-muted` and padding `px-2 py-1`; Card padding `4` (Mobile) / `6` (Large screen) and `shadow-card`. GitHub icon uses `mark-github-24.svg` fetched from primer/octicons (the current mark). Without a label it renders `aria-hidden="true"`; with `aria-label` it renders `role="img"` and the label (verified in `out/styleguide.html`). Known limit: `GithubIcon` takes only `size` (number) and `aria-label`, not `className` or other SVG props like lucide; add them when a real use needs them.

### คำอธิบาย (ภาษาไทย)

**`children` prop (Card, Container, Tag)**: `children` คือสิ่งที่อยู่ระหว่างแท็กเปิดกับแท็กปิด เช่น

```tsx
<Card>
  <h3>Portfolio</h3>
  <p>...</p>
</Card>
```

ในตัวอย่างนี้ `<h3>` กับ `<p>` จะส่งเข้ามาเป็น `children` ของ Card แล้วไปแสดงตรงที่เขียน `{children}` ไว้ Card จึงทำหน้าที่เป็นแค่กรอบ ไม่ต้องรู้ว่าข้างในมีอะไร เลยใช้ซ้ำได้ทุกที่ type `ReactNode` แปลว่ารับได้ทุกอย่างที่ React แสดงผลได้ เช่น ข้อความ, element หรือ array ทั้ง 3 ตัวไม่ต้องใส่ `"use client"` เพราะไม่มี state และไม่มี event

**ทำไม GitHub icon เป็นข้อยกเว้น**: DESIGN.md §9 กำหนดให้ไอคอนทุกตัวมาจาก `lucide-react` แต่ lucide เลิกทำไอคอนแบรนด์ไปแล้ว จึงต้องเขียนโลโก้ GitHub เป็น SVG เอง และใช้ path ทางการ เพื่อให้คนเห็นแล้วรู้ทันทีว่าเป็น GitHub

- **ใช้แทน lucide ได้ทันที**: props ทำให้เหมือน lucide คือ `size` ที่ค่า default เป็น 24 เรียกใช้แบบ `<GithubIcon size={16} />` ได้เหมือน `<Mail size={16} />`
- **สีตามข้อความรอบข้าง**: `fill="currentColor"` ทำให้ไอคอนใช้สีตัวอักษรของ element ที่ครอบอยู่
- **การเข้าถึง (a11y)**:
  - ปกติเป็นไอคอนตกแต่ง จึงใส่ `aria-hidden` ไว้ screen reader จะข้ามไป เพราะข้างๆ มีข้อความอยู่แล้ว
  - ถ้าส่ง `aria-label` มา ไอคอนจะกลายเป็นรูปที่มีชื่อ (`role="img"`) ใช้กับลิงก์ที่มีแต่ไอคอนอย่างเดียว
