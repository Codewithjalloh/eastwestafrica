import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20 min-h-[calc(100vh-5rem)] flex flex-col">
        <section className="flex-1 py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-stack-lg">
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">
                Login
              </h1>
              <p className="font-body-lg text-on-surface-variant">
                Sign in to access insights, events, and your EastWest Africa account.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-stack-lg">
              <form className="flex flex-col gap-stack-md">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Email
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="you@company.com"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
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
                    autoComplete="current-password"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-on-surface-variant cursor-pointer">
                    <input type="checkbox" className="rounded border-outline" name="remember" />
                    Remember me
                  </label>
                  <a href="#" className="text-primary font-semibold hover:underline">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  Sign In
                </button>
              </form>

              <p className="text-center font-body-md text-on-surface-variant mt-stack-lg">
                Don&apos;t have an account?{" "}
                <a className="text-primary font-bold hover:underline" href="/register">
                  Register
                </a>
              </p>

              <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant">
                <a
                  href="/partner-login"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-outline-variant text-primary font-bold hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined">lock</span>
                  Partner Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
