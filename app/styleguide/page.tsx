import type { Metadata } from "next";
import Button, { type ButtonVariant } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import GithubIcon from "@/components/ui/GithubIcon";
import Tag from "@/components/ui/Tag";

// Dev-facing page for checking Tokens and Base components by eye (DESIGN.md §11).
// Not linked from the Navbar and hidden from search engines.
export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false },
};

// Tailwind only generates classes it finds as full strings in source code,
// so each entry spells out its whole class name (never build it like `bg-${name}`).
// Values are copied from app/globals.css @theme so they can be compared by eye.

const colors = [
  { name: "bg", value: "#0b0d12", className: "bg-bg" },
  { name: "surface", value: "#12151c", className: "bg-surface" },
  { name: "surface-2", value: "#1a1e27", className: "bg-surface-2" },
  { name: "border", value: "#262b36", className: "bg-border" },
  { name: "border-strong", value: "#353b48", className: "bg-border-strong" },
  { name: "text", value: "#e6e8ec", className: "bg-text" },
  { name: "text-muted", value: "#9aa3b2", className: "bg-text-muted" },
  { name: "text-subtle", value: "#6b7280", className: "bg-text-subtle" },
  { name: "accent", value: "#60a5fa", className: "bg-accent" },
  { name: "accent-strong", value: "#2563eb", className: "bg-accent-strong" },
  {
    name: "accent-strong-hover",
    value: "#1d4ed8",
    className: "bg-accent-strong-hover",
  },
  { name: "on-accent", value: "#ffffff", className: "bg-on-accent" },
];

const textSizes = [
  { name: "display", value: "48px / 1.1 / 600", className: "text-display" },
  { name: "display-sm", value: "36px / 1.1 / 600", className: "text-display-sm" },
  { name: "h1", value: "32px / 1.2 / 600", className: "text-h1" },
  { name: "h2", value: "24px / 1.3 / 600", className: "text-h2" },
  { name: "h3", value: "20px / 1.4 / 500", className: "text-h3" },
  { name: "body", value: "16px / 1.6 / 400", className: "text-body" },
  { name: "small", value: "14px / 1.5 / 400", className: "text-small" },
  { name: "caption", value: "12px / 1.4 / 500", className: "text-caption" },
];

const spacings = [
  { name: "1", value: "4px", className: "w-1" },
  { name: "2", value: "8px", className: "w-2" },
  { name: "4", value: "16px", className: "w-4" },
  { name: "6", value: "24px", className: "w-6" },
  { name: "8", value: "32px", className: "w-8" },
  { name: "12", value: "48px", className: "w-12" },
  { name: "16", value: "64px", className: "w-16" },
  { name: "24", value: "96px", className: "w-24" },
];

const radii = [
  { name: "sm", value: "4px", className: "rounded-sm" },
  { name: "md", value: "8px", className: "rounded-md" },
  { name: "lg", value: "12px", className: "rounded-lg" },
  { name: "full", value: "9999px", className: "rounded-full" },
];

const buttonVariants: ButtonVariant[] = ["primary", "secondary", "ghost"];

// Real Stack of this site plus the In progress status (spec: Content model).
const tagSamples = ["Next.js", "TypeScript", "Tailwind CSS", "In progress"];

// Shared label for a Token: its name, then its value in muted mono.
function TokenLabel({ name, value }: { name: string; value: string }) {
  return (
    <p className="text-small">
      <span className="font-mono">{name}</span>{" "}
      <span className="font-mono text-text-muted">{value}</span>
    </p>
  );
}

export default function StyleguidePage() {
  return (
    <main className="mx-auto w-full max-w-page px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-display-sm md:text-display">Styleguide</h1>
      <p className="mt-4 max-w-prose text-body text-text-muted">
        Every Token from DESIGN.md, for checking by eye.
      </p>

      <section className="mt-16">
        <h2 className="text-h1">Color</h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {colors.map((color) => (
            <li key={color.name}>
              <div
                className={`h-16 rounded-md border border-border ${color.className}`}
              />
              <div className="mt-2">
                <TokenLabel name={color.name} value={color.value} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Text size</h2>
        <ul className="mt-8 flex flex-col gap-6">
          {textSizes.map((size) => (
            <li key={size.name}>
              <TokenLabel name={size.name} value={size.value} />
              <p className={size.className}>Frontend Developer</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Spacing</h2>
        <ul className="mt-8 flex flex-col gap-4">
          {spacings.map((spacing) => (
            <li key={spacing.name} className="flex items-center gap-4">
              <div className={`h-4 shrink-0 bg-accent ${spacing.className}`} />
              <TokenLabel name={spacing.name} value={spacing.value} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Radius</h2>
        <ul className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {radii.map((radius) => (
            <li key={radius.name}>
              <div
                className={`size-16 border border-border-strong bg-surface-2 ${radius.className}`}
              />
              <div className="mt-2">
                <TokenLabel name={radius.name} value={radius.value} />
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Shadow</h2>
        <div className="mt-8 h-16 w-full rounded-lg border border-border bg-surface shadow-card md:w-1/2" />
        <div className="mt-2">
          <TokenLabel name="card" value="0 1px 2px rgb(0 0 0 / 0.4)" />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Layout</h2>
        <div className="mt-8">
          <TokenLabel name="container-page" value="1120px (max-w-page)" />
        </div>
      </section>

      <section id="button" className="mt-16">
        <h2 className="text-h1">Button</h2>
        <ul className="mt-8 flex flex-col gap-6">
          {buttonVariants.map((variant) => (
            <li key={variant}>
              <p className="font-mono text-small">{variant}</p>
              <div className="mt-2 flex flex-wrap gap-4">
                <Button variant={variant} href="#button">
                  {variant} link
                </Button>
                <Button variant={variant}>{variant} button</Button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Tag</h2>
        <ul className="mt-8 flex flex-wrap gap-2">
          {tagSamples.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Card</h2>
        <div className="mt-8 md:w-1/2">
          <Card>
            <h3 className="text-h2">Card</h3>
            <p className="mt-2 text-small text-text-muted">
              surface, border, radius lg, padding 4 / md:6, shadow card. No
              hover state.
            </p>
          </Card>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">Container</h2>
        <p className="mt-4 max-w-prose text-small text-text-muted">
          The outline is the full width; the filled bar is the content area
          inside the side padding.
        </p>
        <div className="mt-8 border border-dashed border-border-strong">
          <Container>
            <div className="h-8 bg-surface-2" />
          </Container>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-h1">GitHub icon</h2>
        <ul className="mt-8 flex flex-wrap items-center gap-8">
          <li className="flex items-center gap-2">
            <GithubIcon size={16} />
            <TokenLabel name="size" value="16 (decorative)" />
          </li>
          <li className="flex items-center gap-2">
            <GithubIcon size={20} />
            <TokenLabel name="size" value="20 (decorative)" />
          </li>
          {/* Demo of the label prop. In real UI, label only icon-only links. */}
          <li className="flex items-center gap-2">
            <GithubIcon size={20} aria-label="GitHub" />
            <TokenLabel name="aria-label" value="GitHub" />
          </li>
        </ul>
      </section>
    </main>
  );
}
