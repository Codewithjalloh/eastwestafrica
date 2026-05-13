"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/investment-opportunities", label: "Opportunities" },
  { href: "/market-insights-intelligence", label: "Insights" },
  { href: "/strategic-partnerships", label: "Services" },
  { href: "/events-networking-hub", label: "Events" },
  { href: "/sector-analysis-mining-resources", label: "Sectors" },
  { href: "/our-story", label: "About" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
        aria-expanded={open}
        aria-controls="ew-mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="material-symbols-outlined text-[22px]">
          {open ? "close" : "menu"}
        </span>
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-primary/30 backdrop-blur-[1px]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            id="ew-mobile-nav-panel"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(20rem,calc(100vw-2rem))] flex-col border-l border-outline-variant bg-surface shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-outline-variant px-margin-mobile py-4">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-surface-container"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-margin-mobile py-4">
              <Link
                href="/"
                className={`rounded-lg px-3 py-3 font-body-md text-body-md ${
                  pathname === "/"
                    ? "bg-surface-container-high font-semibold text-primary"
                    : "text-on-surface hover:bg-surface-container-low"
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              {NAV.map(({ href, label }) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-lg px-3 py-3 font-body-md text-body-md ${
                      active
                        ? "border-l-4 border-secondary-fixed-dim bg-surface-container-low pl-2 font-semibold text-primary"
                        : "text-on-surface hover:bg-surface-container-low"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-outline-variant px-margin-mobile py-4 space-y-2">
              <button
                type="button"
                className="w-full rounded-lg border border-outline px-4 py-3 font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-container"
              >
                Login
              </button>
              <Link
                href="/contact-support"
                className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 font-label-caps text-label-caps text-on-primary hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
