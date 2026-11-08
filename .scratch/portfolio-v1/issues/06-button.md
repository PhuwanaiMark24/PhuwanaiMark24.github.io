# 06: Button

**What to build:** A Button Base component with `primary`, `secondary` and `ghost` variants in one size (`md`). Given a destination, it renders a plain anchor (not the framework's client-side link). Otherwise it renders a `<button>`. It supports `download`, and for external destinations sets `target="_blank"` and `rel="noopener noreferrer"`. Every variant shows a 2px `accent` outline with a 2px offset on keyboard focus (outline, not ring). All variants appear on the Styleguide as both link and button.

**Blocked by:** 05 (Styleguide page (Tokens))

**Status:** resolved

- [x] Three variants match DESIGN.md §8 and use only Tokens
- [x] With a destination it renders an anchor; without one it renders a button
- [x] `download` and external-link attributes are supported as described
- [x] Keyboard focus shows the outline; no ring utilities are used
- [x] Color transitions are 150ms ease-out and respect reduced motion
- [x] Styleguide shows every variant as link and as button
- [x] `npm run lint`, `npm test` and `npm run build` pass
- [x] Explanation (in Thai): props, variants and conditional rendering (anchor vs button). Behavior is tested through Seam A in later tickets.

## Comments

- 2026-11-08: Resolved in 0096c67. Hover styles (primary → `accent-strong-hover`, secondary → border `border-strong`, ghost → bg `surface-2`) and `text-body` label are now recorded in DESIGN.md §8. Built CSS verified to contain every class, including `border-transparent`/`bg-transparent` after the `--color-*` reset. Known limits: the `<button>` form has no `onClick` yet (add when a real action button is needed); "external" means `http://`/`https://` only; the variant list in the Styleguide repeats the `ButtonVariant` union.

### คำอธิบาย (ภาษาไทย)

**Props**: props คือค่าที่ส่งเข้า component คล้าย argument ของฟังก์ชัน Button รับ 4 ตัว:
- `variant`: หน้าตาของปุ่ม ถ้าไม่ส่งมาจะเป็น `"primary"` (เป็นค่า default ที่ตั้งไว้ตอนแยก props ออกมา)
- `href`: ปลายทางของลิงก์ ไม่บังคับ
- `download`: ใช้กับลิงก์เท่านั้น เช่นลิงก์ดาวน์โหลด resume
- `children`: สิ่งที่อยู่ระหว่างแท็กเปิดกับแท็กปิด เช่น `<Button>Download resume</Button>`

**Variants**: type `ButtonVariant = "primary" | "secondary" | "ghost"` ทำให้ TypeScript แจ้ง error ทันทีถ้าพิมพ์ค่าอื่น class ของแต่ละแบบเก็บไว้ใน object `variantClasses` แล้วดึงออกมาด้วย `variantClasses[variant]` จึงไม่ต้องเขียน if แยกทีละแบบ `Record<ButtonVariant, string>` บังคับให้ object นี้มีครบทุก variant ถ้าเพิ่ม variant ใหม่แล้วลืมใส่ class จะ build ไม่ผ่าน

**Conditional rendering**: component เป็นแค่ฟังก์ชัน จึงใช้ `if` เลือกได้ว่าจะคืน JSX แบบไหน
- ถ้ามี `href` จะคืน `<a>` และถ้าลิงก์ขึ้นต้นด้วย `http://` หรือ `https://` จะเพิ่ม `target="_blank" rel="noopener noreferrer"` ให้เอง
- ถ้าไม่มี `href` จะคืน `<button type="button">`

`{...externalProps}` คือการกระจาย object ออกเป็น props ถ้าเป็นลิงก์ภายนอก object นี้จะมี `target` กับ `rel` ถ้าไม่ใช่ object จะว่างเปล่า ปุ่มก็จะไม่มี attribute เพิ่ม

Button เป็น Server Component ไม่ต้องใส่ `"use client"` เพราะไม่มี state และไม่มี `onClick`
