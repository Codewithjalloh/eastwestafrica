import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 min-h-[calc(100vh-5rem)] flex flex-col">
        <section className="flex-1 py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-stack-lg">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
                Register
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Create your account to explore opportunities, events, and market intelligence.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-stack-lg">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    First Name
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="Jane"
                    type="text"
                    name="firstName"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Last Name
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="Doe"
                    type="text"
                    name="lastName"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Work Email
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="jane@company.com"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Company / Organization
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="Your organization"
                    type="text"
                    name="company"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Password
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="••••••••"
                    type="password"
                    name="password"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Confirm Password
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="••••••••"
                    type="password"
                    name="confirmPassword"
                    autoComplete="new-password"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 text-sm text-on-surface-variant cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded border-outline" name="terms" required />
                    <span>
                      I agree to the{" "}
                      <a href="#" className="text-primary font-semibold hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-primary font-semibold hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <p className="text-center font-body-md text-on-surface-variant mt-stack-lg">
                Already have an account?{" "}
                <a className="text-primary font-bold hover:underline" href="/login">
                  Login
                </a>
              </p>

              <div className="mt-stack-md p-4 rounded-lg bg-surface-container border border-outline-variant text-center">
                <p className="font-body-md text-on-surface-variant text-sm">
                  Applying for institutional partnership?{" "}
                  <a className="text-primary font-bold hover:underline" href="/inquire-partnership">
                    Submit a partnership inquiry
                  </a>{" "}
                  instead.
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
