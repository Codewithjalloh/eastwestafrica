export default function Page() {
  return (
<>
{/* TopNavBar */}
<nav className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary docked full-width top-0 z-50 sticky">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<div className="hidden md:flex items-center gap-stack-lg">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1" href="/our-story">About</a>
</div>
<div className="flex items-center gap-stack-md">
<button className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container px-4 py-2 hover:text-primary transition-colors">Login</button>
<a href="/contact-support" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-body-md text-body-md hover:bg-opacity-90 transition-opacity">Contact Us</a>
</div>
</div>
</nav>
<main>
{/* Hero: Storytelling Canvas */}
<section className="relative py-section-padding bg-surface overflow-hidden">
<div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
<div className="lg:col-span-7 z-10">
<span className="font-label-caps text-label-caps text-secondary mb-stack-md block">OUR PURPOSE</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-lg max-w-2xl">Bridging the Continent Through the Rwanda-Guinea Corridor.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
                        EastWest Africa is a strategic investment and advisory firm dedicated to forging a high-velocity economic artery between East and West Africa, headquartered in Kigali and Conakry.
                    </p>
</div>
<div className="lg:col-span-5 relative">
<div className="rounded-xl overflow-hidden aspect-[4/5] shadow-xl">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXbkVKBZcLkslClVxDat38NVYsXU37yHJ6ag5kgsS2Siqg7-wJH8wK1kio_fL6x0MW-7L8i0D6D2ThkS25LiKJrty9nIPc43QkuzAnDDPdYpT2LrizwuwmUxEUcyNCnXqiR1JN2Oupwm0BnSDbn-B_7EVNkyhUamQsbkSqTgPLMI4RLFe_SzgzO2U7IHpZMBsDzkdq1H84yYPGRPYxMPN7PIHrTyMR2nmfzLQWkEOwIqHtbkWmWPg8iWxI3zBYOnPDrGcAKn4XwjDP" />
</div>
<div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-lg shadow-lg border border-outline-variant hidden md:block max-w-[280px]">
<p className="font-headline-sm text-headline-sm text-primary mb-2">$4.2B+</p>
<p className="font-label-caps text-label-caps text-on-surface-variant">Capital Facilitated Across the Corridor since 2021</p>
</div>
</div>
</div>
</section>
{/* Vision & Mission */}
<section className="py-section-padding bg-surface-container-low border-y border-outline-variant">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Our Vision</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                            To serve as the definitive institutional bridge for intra-African trade, where the logistical efficiency of the East meets the vast resource potential of the West, creating a unified economic powerhouse.
                        </p>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Our Mission</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
                            We provide the intelligence, networking, and capital frameworks necessary for enterprise leaders to navigate the Rwanda-Guinea corridor with absolute confidence and strategic clarity.
                        </p>
</div>
</div>
</div>
</section>
{/* The Corridor: Strategic Importance */}
<section className="py-section-padding bg-surface">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="mb-16">
<span className="font-label-caps text-label-caps text-secondary mb-stack-sm block">THE STRATEGY</span>
<h2 className="font-headline-md text-headline-md text-primary">The Rwanda-Guinea Connection</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="p-8 border border-outline-variant rounded-xl executive-gradient">
<span className="material-symbols-outlined text-secondary text-4xl mb-6">hub</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-4">Logistics Hub</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Leveraging Rwanda's position as a regional air cargo and digital services hub to streamline West African resource exports.
                        </p>
</div>
<div className="p-8 border border-outline-variant rounded-xl executive-gradient">
<span className="material-symbols-outlined text-secondary text-4xl mb-6">account_balance</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-4">Capital Flow</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Creating integrated investment frameworks that allow institutional capital to flow seamlessly between the Kigali International Financial Centre and Conakry.
                        </p>
</div>
<div className="p-8 border border-outline-variant rounded-xl executive-gradient">
<span className="material-symbols-outlined text-secondary text-4xl mb-6">handshake</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-4">Policy Synergy</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            Advising on bilateral trade agreements that reduce barriers for cross-continental enterprise expansion and talent mobility.
                        </p>
</div>
</div>
</div>
</section>
{/* Core Values: Bento Grid */}
<section className="py-section-padding bg-primary-container text-on-primary-fixed">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md text-white">Our Foundations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="md:col-span-2 bg-white/5 p-10 rounded-xl border border-white/10">
<span className="material-symbols-outlined text-secondary-fixed-dim text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
<h3 className="font-headline-sm text-headline-sm text-white mb-4">Transparency</h3>
<p className="font-body-md text-body-md text-on-primary-container">
                            Operating with the highest standards of institutional disclosure and data integrity. Every transaction and advisory engagement is grounded in verifiable economic reality and ethical governance.
                        </p>
</div>
<div className="bg-white/5 p-10 rounded-xl border border-white/10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary-fixed-dim text-5xl mb-6">military_tech</span>
<h3 className="font-headline-sm text-headline-sm text-white mb-4">Excellence</h3>
</div>
<p className="font-body-md text-body-md text-on-primary-container">Superior delivery in strategy and execution.</p>
</div>
<div className="bg-white/5 p-10 rounded-xl border border-white/10 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary-fixed-dim text-5xl mb-6">bolt</span>
<h3 className="font-headline-sm text-headline-sm text-white mb-4">Impact</h3>
</div>
<p className="font-body-md text-body-md text-on-primary-container">Measurable growth for local economies.</p>
</div>
</div>
</div>
</section>
{/* Leadership Team */}
<section className="py-section-padding bg-surface">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="mb-16">
<h2 className="font-headline-md text-headline-md text-primary">Executive Leadership</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-4">A team of seasoned policymakers and finance professionals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Leader 1 */}
<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKMS8j3jH9kH0dAoSap2OS4Q2Xsu0_BDY_gygXbNLVMhxCohXtFf3jZM6YXpagCiuQmAxHXfe6fb-5iAlWSIkbvC5UYj1VproQDBsTb2Cg1Z2lnzeyemlzziMQg48_KSFvcj1sDjZ457JsIZftJb79YCTIyaaCzffq5xbr7ZlWDyo5uWXOd_Fp7gLZhqtygSc0Ogg6VAx2SbQhH0mRB0GAyVfm_EPN1OdkMz-6S9M-hQG927yLvsiZPbDHHrjn625Yt7Y9wThFgwrn" />
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Dr. Aris Gakwaya</h4>
<p className="font-label-caps text-label-caps text-secondary mb-4">CHIEF EXECUTIVE OFFICER</p>
<p className="font-body-md text-body-md text-on-surface-variant">Former advisor to regional development banks with 20 years of experience in African macro-economics.</p>
</div>
{/* Leader 2 */}
<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRnjVMhHIGRExAGfqvpesltAnLhicZOPNjLf3wJMRQuUqeQlCYwKl7YuVP0TZ4tQvqDzQNvqgym_OBzbcLIuA2B_-5YnOM-6yrycm20N-jqSkfcAUrGg5UDdyhgjB9Ow2RKDsQ5wJmzOCvSJbqrkbx5UKwlzf7rZtOvzXdF3E75_DWzjlNkwlJjrmfu2GkXT8P6R8tg9NQncXEx-vzpn0vlQku3ClC5GRJKUFy2T6uICZR7Wc-XmPh92q2pYBh4qrmh9iPFn_a4Jjh" />
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Mariama Diallo</h4>
<p className="font-label-caps text-label-caps text-secondary mb-4">MANAGING DIRECTOR, CONAKRY</p>
<p className="font-body-md text-body-md text-on-surface-variant">Expert in mineral economics and public-private partnerships across the West African region.</p>
</div>
{/* Leader 3 */}
<div className="group">
<div className="aspect-[3/4] overflow-hidden rounded-xl mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYKxETl9vY2XIVVm6RqChsYp31_o5HCsNmCq-81VPBn1JnW_gSR48q95ZhngdZNDRpt3Wvge4qS-Uu1xvyvtIO2rORTt4EqiuPOqENIBtAT0ED1_5UeQfl7It_AM5DyNyPZYgmsC0dlm9d9GmfNyhcUbLvRRpJDXhNjMB3Bp_Ky14LB1x4MFhj9YquOHPKXR35hD8oQzbWY3fFV8e9MfsvgYSFlhQS3YghZx8__v8ZsGckNOTM2xfeiRGuBklM6Ri5F0R9KN8ZQKM" />
</div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Jean-Paul Ndoli</h4>
<p className="font-label-caps text-label-caps text-secondary mb-4">HEAD OF INVESTMENT ADVISORY</p>
<p className="font-body-md text-body-md text-on-surface-variant">Leading the capital markets division with a focus on cross-border trade finance and infrastructure debt.</p>
</div>
</div>
</div>
</section>
{/* Regional Presence: Map/List */}
<section className="py-section-padding bg-surface-container-low">
<div className="max-w-container-max mx-auto px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<span className="font-label-caps text-label-caps text-secondary mb-stack-sm block">LOCATIONS</span>
<h2 className="font-headline-md text-headline-md text-primary mb-8">Strategically Positioned</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-white">location_on</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Kigali, Rwanda</h4>
<p className="font-body-md text-body-md text-on-surface-variant">East African Headquarters<br />Kacyiru District, Financial Hub</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-white">location_on</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm text-primary mb-1">Conakry, Guinea</h4>
<p className="font-body-md text-body-md text-on-surface-variant">West African Headquarters<br />Kaloum Business Center</p>
</div>
</div>
</div>
</div>
<div className="relative bg-white p-4 rounded-xl shadow-lg border border-outline-variant aspect-video overflow-hidden">
<div className="w-full h-full bg-slate-100 flex items-center justify-center grayscale opacity-60">
{/* Placeholder for actual map implementation */}
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBoQQMhuji8OYKrEWaeid76YIxBgICVGmOpf8WGJJFmoyr_cUGdKiMhkIq8MvjmVqZb95taopBMlnQfhAAx1FB-t3YN6SG6nxdD_ZNhFjIyDLhEQ7cKApZWKuPpG-Yxh1sBmVdvGSZCFQhwTqiWVCr63F7ym0RR3p6H7N6LQ8L6NhoGksRW0nfiJCz8beDElVh4sgOJ1JdzLYUGlzClHDrxHxTrZoId_Tb1kWH_KlBrUrk7PNpAR9H-EUHm3rxBBuukWRBeFHsHqwa" />
</div>
</div>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container mb-4">
                    Connecting Rwanda &amp; Guinea through strategic capital and advisory excellence.
                </p>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-6">RESOURCES</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Investment Framework</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/market-insights-intelligence">Insights</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-6">LEGAL</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-6">SUPPORT</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/contact-support">Contact Support</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Offices</a></li>
</ul>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container">
                © 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.
            </p>
</div>
</footer>
</>
  );
}
