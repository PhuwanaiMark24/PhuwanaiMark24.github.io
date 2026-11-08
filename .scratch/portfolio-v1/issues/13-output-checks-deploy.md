# 13: Build-output checks and deploy to GitHub Pages

**What to build:** On every push to `main`, after lint, test and build pass, the workflow checks the built output and then deploys it to GitHub Pages using the official Pages actions (upload Pages artifact, then deploy Pages). The deploy is blocked if any check fails:
- any `[[TODO` appears anywhere in the build output
- the Resume PDF is missing from the build output
- the home page HTML contains a noindex directive
- the Styleguide HTML lacks a noindex directive

Accepted consequence: deploys stay blocked until the Owner fills every Placeholder. Pull requests still run lint, test and build only (ticket 04).

**Blocked by:** 04 (CI), 05 (Styleguide page), 09 (Hero), 10 (About), 11 (Projects), 12 (Contact and Footer)

**Status:** resolved

- [x] Each of the four checks fails the workflow with a clear message naming the problem
- [x] Each check is verified to fail on bad input (for example a temporary `[[TODO` or a missing Resume) and pass on good input
- [x] Deploy runs only on `main` and only after all checks pass
- [x] The workflow has the permissions the Pages actions need
- [x] Manual step documented for the Owner: set the repo's Pages source to "GitHub Actions"
- [x] `npm run lint`, `npm test` and `npm run build` pass locally
- [x] Explanation (in Thai) of each check and how to read a failed run

## Comments

- 2026-11-08: Resolved in 676ac22. The deploy job was added to the single `ci.yml`, per the spec ("One workflow").
  - **Checks**: `scripts/check-output.sh [dir]` runs all four checks. It prints one `::error::` line per problem, then exits 1, and it also fails if `index.html` or `styleguide.html` is missing. Workflow steps on push to `main` only: build → "Check build output" → `actions/upload-pages-artifact@v5`. Then job `deploy` (`needs: check`) runs `actions/deploy-pages@v5`.
  - **Permissions**: workflow default `contents: read`. The deploy job gets `pages: write` and `id-token: write`. `concurrency` stops overlapping deploys and does not cancel a running one. Pull requests and other branches still only lint, test and build.
  - **Verified locally**: a clean build passes (exit 0). Broken copies of `out/` fail with a clear message for each check: an injected `[[TODO`, a removed `resume.pdf`, noindex added to the home page, and noindex removed from the Styleguide. All four at once report together.
  - **Verified with source edits**: a `[[TODO` in `content/site.ts` is found in `index.html` and in Next's `.txt` payloads. `robots: { index: false }` in `app/layout.tsx` fails the home-page check. Both edits were reverted.
  - **Manual step**: the Owner set Pages source to "GitHub Actions". The step is documented in the `ci.yml` header and in README "Deploy".
  - **Not yet seen**: the first real deploy, and `::error::` annotations on GitHub. Both show on the first push.
  - **Known**:
    - The favicon is still a `[[TODO: favicon]]` comment in `app/layout.tsx`. Comments are not in `out/`, so the check does not catch it; the site deploys without a favicon.
    - `actions/checkout` and `actions/setup-node` stay at v5 from ticket 04, while v7 is out.

### คำอธิบาย (ภาษาไทย)

**4 ข้อที่เช็ก** (ใน `scripts/check-output.sh`):
1. **`[[TODO`**: Placeholder ห้ามขึ้นเว็บจริง (GLOSSARY) สคริปต์ค้นหาทุกไฟล์ใน `out/` รวมไฟล์ `.txt` ของ Next.js ด้วย ถ้าลืมเติมข้อมูลไว้ตรงไหน deploy จะไม่ผ่าน
2. **`resume.pdf`**: ปุ่ม "Download resume" คือ action หลักของ Recruiter ถ้าไม่มีไฟล์นี้ คนที่กดจะเจอหน้า 404
3. **หน้า home ต้องไม่มี noindex**: ถ้าเผลอใส่ `robots: { index: false }` ไว้ที่ layout หรือที่หน้า home ทั้งเว็บจะหายไปจาก Google
4. **Styleguide ต้องมี noindex**: หน้านี้ใช้ตอนพัฒนาเท่านั้น จึงไม่ควรโผล่ในผลการค้นหา

สคริปต์จะรันครบทั้ง 4 ข้อก่อน แล้วรายงานทุกปัญหาที่เจอพร้อมกันในรอบเดียว ไม่หยุดที่ข้อแรก ก่อน push ลองรันเองในเครื่องได้ด้วย `npm run build` แล้วตามด้วย `bash scripts/check-output.sh out`

**วิธีอ่านผลเมื่อ run ล้ม**:
1. เข้าแท็บ Actions บน GitHub แล้วกดที่ run สีแดง
2. ดูกล่อง "Annotations" ด้านบน ข้อความ `::error::` จะมารวมอยู่ที่นี่ แต่ละข้อความบอกทั้งปัญหาและวิธีแก้ เช่น "Resume missing: out/resume.pdf not found. Add public/resume.pdf."
3. ถ้าอยากดูละเอียด กดเข้า job `check` แล้วเปิดขั้น "Check build output"
4. ถ้า run ล้มตั้งแต่ lint, test หรือ build ขั้นถัดๆ ไปจะถูกข้าม job `deploy` จะขึ้นว่า skipped แปลว่าเว็บเวอร์ชันเดิมยังอยู่ ไม่มีอะไรเสียหาย
