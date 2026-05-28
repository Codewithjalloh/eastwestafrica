export function SiteFooter() {
  return (
    <footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <a
            href="/"
            className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed"
          >
            EastWest Africa
          </a>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container mt-2">
            Strategic economic bridges between East and West Africa.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Account</h5>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/login"
          >
            Login
          </a>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/register"
          >
            Register
          </a>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/partner-login"
          >
            Partner Portal
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Partnerships</h5>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/inquire-partnership"
          >
            Inquire About Partnership
          </a>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/contact-support"
          >
            Contact Support
          </a>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="/strategic-partnerships"
          >
            Services
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Legal</h5>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant dark:text-on-primary-container hover:text-primary transition-colors"
            href="#"
          >
            Terms of Service
          </a>
        </div>
      </div>
      <div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/30 text-center text-on-surface-variant dark:text-on-primary-container text-sm">
        © 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.
      </div>
    </footer>
  );
}
