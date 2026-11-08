import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  // With href: renders a plain <a> (DESIGN.md §8: no next/link).
  // Without href: renders a <button>.
  href?: string;
  // Only applies to links (e.g. the resume PDF).
  download?: boolean;
  children: ReactNode;
};

// Shared by every variant: size md, focus outline (never ring, DESIGN.md §8),
// and a 150ms color transition that is turned off for reduced motion (§7).
const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-body transition-colors duration-150 ease-out motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Primary and ghost use a transparent border so all variants are the same height.
const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-accent-strong text-on-accent hover:bg-accent-strong-hover",
  secondary:
    "border-border bg-transparent text-text hover:border-border-strong",
  ghost: "border-transparent text-text hover:bg-surface-2",
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export default function Button({
  variant = "primary",
  href,
  download,
  children,
}: ButtonProps) {
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    const externalProps = isExternal(href)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a
        href={href}
        download={download}
        className={className}
        {...externalProps}
      >
        {children}
      </a>
    );
  }

  // No onClick yet: every current use is a link. Add handler props
  // when a real action button is needed.
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
