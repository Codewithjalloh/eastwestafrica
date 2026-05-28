import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader activeHref="/strategic-partnerships" />
      <main className="pt-20 min-h-[calc(100vh-5rem)] flex flex-col">
        <section className="flex-1 py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low">
          <div className="max-w-md mx-auto">
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-stack-lg">
              <div className="flex flex-col items-center text-center mb-stack-lg">
                <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mb-stack-md">
                  <span className="material-symbols-outlined text-3xl text-on-primary">lock</span>
                </div>
                <h1 className="font-headline-md text-headline-md text-primary mb-2">Partner Login</h1>
                <p className="font-body-md text-on-surface-variant">
                  Secure access for verified institutional and enterprise partners.
                </p>
              </div>

              <form className="flex flex-col gap-stack-md">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    Partner ID or Email
                  </label>
                  <input
                    className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full"
                    placeholder="partner@institution.com"
                    type="email"
                    name="email"
                    autoComplete="username"
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
                  className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">lock</span>
                  Sign in to Partner Portal
                </button>
              </form>

              <div className="mt-stack-lg pt-stack-lg border-t border-outline-variant text-center space-y-3">
                <p className="font-body-md text-on-surface-variant">
                  Not yet a partner?{" "}
                  <a className="text-primary font-bold hover:underline" href="/inquire-partnership">
                    Inquire about partnership
                  </a>
                </p>
                <p className="font-body-md text-on-surface-variant">
                  General member?{" "}
                  <a className="text-primary font-bold hover:underline" href="/login">
                    Login here
                  </a>
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
