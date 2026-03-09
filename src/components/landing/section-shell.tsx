import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-16 sm:scroll-mt-28 sm:py-22 lg:py-28", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-7 lg:px-10">
        {(eyebrow || title || description) && (
          <header className="max-w-3xl space-y-3 sm:space-y-4">
            {eyebrow && (
              <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase sm:text-sm">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-balance text-2xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-100">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-pretty text-sm leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                {description}
              </p>
            )}
          </header>
        )}

        <div className={cn("mt-8 sm:mt-10", contentClassName)}>{children}</div>
      </div>
    </section>
  );
}
