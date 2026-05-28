import { PartnershipInquiryForm } from "@/components/partnership-inquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader activeHref="/strategic-partnerships" />
      <main className="pt-20">
        <section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant">
          <span className="font-label-caps text-label-caps text-secondary block mb-stack-sm">
            STRATEGIC ALLIANCE
          </span>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md">
            Inquire About <span className="text-secondary">Partnership</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Complete the form below so our partnerships team can assess fit across our Strategic,
            Operational, and Network collaboration frameworks.
          </p>
        </section>

        <section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8 bg-surface-container-lowest p-stack-lg md:p-10 rounded-xl border border-outline-variant shadow-sm">
              <div className="mb-stack-lg">
                <h2 className="font-headline-md text-headline-md mb-2">Partnership Inquiry</h2>
                <p className="font-body-md text-on-surface-variant">
                  Fields marked with * are required. The more detail you provide, the faster we can
                  route your inquiry to the right regional director.
                </p>
              </div>
              <PartnershipInquiryForm />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-stack-md">
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm mb-4">Partnership tiers</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-label-caps text-label-caps text-secondary mb-1">Strategic</p>
                    <p className="text-sm text-on-surface-variant">
                      Sovereign funds and institutional investors with long-term infrastructure exposure.
                    </p>
                  </li>
                  <li>
                    <p className="font-label-caps text-label-caps text-secondary mb-1">Operational</p>
                    <p className="text-sm text-on-surface-variant">
                      Technical and logistics leaders executing cross-border operations.
                    </p>
                  </li>
                  <li>
                    <p className="font-label-caps text-label-caps text-secondary mb-1">Network</p>
                    <p className="text-sm text-on-surface-variant">
                      Associations, missions, and advisory firms expanding ecosystem reach.
                    </p>
                  </li>
                </ul>
                <a
                  href="/strategic-partnerships"
                  className="inline-flex items-center gap-1 text-primary font-bold text-sm mt-4 hover:underline"
                >
                  Compare tiers
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>

              <div className="bg-primary-container p-8 rounded-xl text-on-primary">
                <h3 className="font-headline-sm text-headline-sm mb-3">Already a partner?</h3>
                <p className="font-body-md text-on-primary-container mb-stack-md">
                  Access your secure dashboard to manage investments, logistics data, and regulatory
                  resources.
                </p>
                <a
                  href="/partner-login"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-on-primary px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-xl">lock</span>
                  Partner Login
                </a>
              </div>

              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
                <h3 className="font-headline-sm text-headline-sm mb-2">Direct contact</h3>
                <p className="font-body-md text-on-surface-variant mb-3">
                  Prefer email? Reach our partnerships desk directly.
                </p>
                <a
                  className="text-primary font-bold hover:underline block mb-1"
                  href="mailto:partnership@eastwestafrica.com"
                >
                  partnership@eastwestafrica.com
                </a>
                <p className="text-sm text-on-surface-variant">Kigali &amp; Conakry headquarters</p>
              </div>

              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant">
                <p className="font-body-md text-on-surface-variant">
                  New to EastWest Africa?{" "}
                  <a className="text-primary font-bold hover:underline" href="/register">
                    Create an account
                  </a>{" "}
                  or{" "}
                  <a className="text-primary font-bold hover:underline" href="/login">
                    sign in
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
