import { MobileNav } from "@/components/mobile-nav";

const NAV_LINKS = [
  { href: "/investment-opportunities", label: "Opportunities" },
  { href: "/market-insights-intelligence", label: "Insights" },
  { href: "/strategic-partnerships", label: "Services" },
  { href: "/events-networking-hub", label: "Events" },
  { href: "/sector-analysis-mining-resources", label: "Sectors" },
  { href: "/our-story", label: "About" },
] as const;

export type ActiveNavHref = (typeof NAV_LINKS)[number]["href"];

type SiteHeaderProps = {
  activeHref?: ActiveNavHref;
  fixed?: boolean;
};

export function SiteHeader({ activeHref, fixed = true }: SiteHeaderProps) {
  return (
    <header
      className={`bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary w-full z-50 ${
        fixed ? "fixed top-0" : "sticky top-0"
      }`}
    >
      <nav className="flex min-w-0 w-full items-center justify-between gap-3 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
        <a
          href="/"
          className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed shrink-0 truncate"
        >
          EastWest Africa
        </a>
        <div className="hidden md:flex items-center space-x-stack-lg">
          {NAV_LINKS.map(({ href, label }) => {
            const active = activeHref === href;
            return (
              <a
                key={href}
                className={`font-body-md text-body-md transition-colors duration-200 ${
                  active
                    ? "text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1"
                    : "text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed"
                }`}
                href={href}
              >
                {label}
              </a>
            );
          })}
        </div>
        <div className="flex shrink-0 items-center space-x-2 md:space-x-stack-md">
          <MobileNav />
          <div className="hidden md:flex items-center space-x-stack-md">
            <a
              href="/login"
              className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            >
              Login
            </a>
            <a
              href="/contact-support"
              className="bg-primary text-on-primary px-6 py-2 rounded-lg font-body-md font-bold hover:opacity-80 transition-opacity"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
