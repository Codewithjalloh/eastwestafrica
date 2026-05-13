export default function Page() {
  return (
<>
{/* TopNavBar (Shared Component) */}
<header className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<nav className="hidden lg:flex items-center space-x-stack-lg">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/our-story">About</a>
</nav>
<div className="flex items-center space-x-stack-md">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-primary w-64" placeholder="Search insights..." type="text"/>
</div>
<a href="/contact-support" className="px-5 py-2 rounded-lg bg-primary text-on-primary font-label-caps hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-desktop py-12">
{/* Featured Lead Story Section */}
<section className="mb-section-padding">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<div className="lg:col-span-8 group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-stack-md aspect-[16/9]">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7XF_wJFXG20fJB8i9pTXwNMinxcyo8m_nTpY_PCCJ00yE5etNYm1uYSOAewQk6_hcpJ1P_Gv9wsQg5b-hLcxDsQT5alRnGRsuhvXGUcKvweNPWHOTuN8Ql8rqADOouGewfctsiQXGtQl1Wy-rc1Yu1JkSAHoet7ClSqUYxv4Ag4SQI3By3wDaIsGYFNXCgtDnPfxnnLtmLvBH_5ff0Ds0e6vWNwlaWm9deankIWzK5kkqqqlxC7K68e3Qt7Oa1aTAJUXx24ibXu5e" />
<div className="absolute top-4 left-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-caps uppercase">Economic Reports</span>
</div>
</div>
<div>
<p className="font-label-caps text-label-caps text-secondary mb-2 uppercase tracking-widest">Featured Analysis • 12 MIN READ</p>
<h1 className="font-display-lg text-display-lg mb-4 leading-tight hover:text-secondary transition-colors">The Rwanda-Guinea Corridor: A New Blueprint for Intra-African Trade Dynamics</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6 line-clamp-3">An in-depth examination of the logistical and regulatory framework connecting East and West Africa. As Kigali and Conakry strengthen bilateral ties, we analyze the emerging investment opportunities in infrastructure and digital banking services.</p>
<div className="flex items-center space-x-stack-sm text-on-surface-variant">
<span className="font-label-caps text-label-caps font-bold text-primary">Dr. Amara Kouyaté</span>
<span className="text-outline">•</span>
<span className="font-label-caps text-label-caps">October 24, 2024</span>
</div>
</div>
</div>
{/* Secondary Stories Sidebar */}
<div className="lg:col-span-4 flex flex-col space-y-8 divide-y divide-outline-variant">
<div className="group cursor-pointer">
<span className="font-label-caps text-label-caps text-on-tertiary-container mb-2 block uppercase">Market Updates</span>
<h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Kigali Stock Exchange Sees Record Tech Listings</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Fintech startups lead a new wave of IPOs as regulatory hurdles decrease across the EAC block.</p>
</div>
<div className="group pt-8 cursor-pointer">
<span className="font-label-caps text-label-caps text-on-tertiary-container mb-2 block uppercase">Policy Analysis</span>
<h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">Guinea Mining Reforms: Implications for Sovereign Wealth</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">The new bauxite extraction framework promises higher local equity but raises concerns for long-term partners.</p>
</div>
<div className="group pt-8 cursor-pointer">
<span className="font-label-caps text-label-caps text-on-tertiary-container mb-2 block uppercase">Success Stories</span>
<h3 className="font-headline-sm text-headline-sm mb-2 group-hover:text-secondary transition-colors">EcoBuild Rwanda: Navigating the Middle-Income Housing Boom</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">How one construction firm scaled from local projects to regional enterprise using institutional capital.</p>
</div>
</div>
</div>
</section>
{/* Newsletter & Archive Bento Grid Section */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-section-padding">
{/* Market Updates Bento Card */}
<div className="md:col-span-8 bg-surface-container-low border border-outline-variant p-8 rounded-xl">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline-md text-headline-md">Latest Intelligence</h2>
<a className="text-primary font-label-caps border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors" href="#">View All Archive</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-lg">
<div className="space-y-4">
<div className="aspect-[4/3] rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMbwp39MgDFZf-hm0KVFwMrsZmTcZULGukxlz6NthxHXGYI8zehJuUTCuWoJGLvV56AhYl14hhrzWyH_SNNXjvSVyYyTmyRzEjEFm3fUGCWBcUMLvrMg3syBFx-S8R_PfVVO_9Sw4p-YB1-ahzuAIdXNM3O1FYDAomuV5ZHAVPVDqqy97ESzuXkuQeoVd2stwhWhZ9s0TgcY9HSICK6W3mYTK7hy5mkLNXdkoih6uNgx7bs86I7CyefvK0JryEXhKCdhftsGiNHr6" />
</div>
<h4 className="font-headline-sm text-headline-sm leading-snug">Quarterly GDP Growth: EAC vs ECOWAS Analysis</h4>
<p className="text-on-surface-variant text-body-md">A comparative study of recovery speeds post-global supply chain disruptions.</p>
</div>
<div className="space-y-4">
<div className="aspect-[4/3] rounded-lg overflow-hidden">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtgBHDoUDCHuuBptoGpKEO2yfUMcM1HrxA6zqaOA4lPYgpKueZ5_HnqTvJRVuuA3TYAKMsGNl-Yt776WxT37isbJULd2GVKCj6aHnKxh8Z7HNJuw4dKVwVQC2Fba-LeZXBwGDAnIZhA3KNmT-CG34MUeVQAgFYmIXe21MHppcOHadPK1-2rD6AQhrknydQk_cG12n_5OX6kuTjfAHALa9rUCyac26I6SP5gxTNIqfVDJm1ZTh_RbE4FLAcxn5qKI4bM0V8Rad0ae1M" />
</div>
<h4 className="font-headline-sm text-headline-sm leading-snug">The Digital Franc: Future of Regional Currency</h4>
<p className="text-on-surface-variant text-body-md">Central banks explore blockchain for cross-border settlement between East and West.</p>
</div>
</div>
</div>
{/* Newsletter Subscription Card */}
<div className="md:col-span-4 bg-primary-container text-on-primary-fixed p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary-container text-4xl mb-6">mail</span>
<h2 className="font-headline-md text-headline-md text-on-primary mb-4">The EastWest Briefing</h2>
<p className="text-on-primary-container font-body-md mb-8">Get exclusive insights, deal flows, and policy summaries delivered to your inbox every Monday morning.</p>
</div>
<form className="space-y-4">
<div>
<label className="font-label-caps text-on-primary-container block mb-2">WORK EMAIL</label>
<input className="w-full bg-on-primary-fixed-variant border-none rounded-lg p-3 text-on-primary placeholder:text-on-primary-container focus:ring-1 focus:ring-secondary-container" placeholder="executive@company.com" type="email"/>
</div>
<button className="w-full py-4 bg-secondary-container text-on-secondary-fixed font-label-caps rounded-lg hover:bg-secondary-fixed-dim transition-colors">Subscribe to Insights</button>
<p className="text-[10px] text-center text-on-primary-container">By subscribing, you agree to our Investment Framework and Privacy Policy.</p>
</form>
</div>
</section>
{/* Thematic Sections (Grid) */}
<section className="border-t border-outline-variant pt-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Sector: Logistics */}
<div className="space-y-6">
<h3 className="font-label-caps text-label-caps border-l-4 border-secondary pl-3 uppercase">Supply Chain &amp; Logistics</h3>
<ul className="space-y-8">
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Conakry Port Expansion: Phase 2 Funding Secured</h5>
<p className="text-on-surface-variant text-body-md">Bilateral investment group confirms $450M for deep-water berth expansion.</p>
</li>
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Air Freight Hubs: Rwanda's Strategic Pivot</h5>
<p className="text-on-surface-variant text-body-md">How the new Bugesera Airport will serve as a continental crossroads.</p>
</li>
</ul>
</div>
{/* Sector: Fintech */}
<div className="space-y-6">
<h3 className="font-label-caps text-label-caps border-l-4 border-on-tertiary-container pl-3 uppercase">Fintech &amp; Digital Economy</h3>
<ul className="space-y-8">
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Mobile Money Interoperability reaches 92%</h5>
<p className="text-on-surface-variant text-body-md">New protocols allow seamless transfers between Rwanda and Guinean providers.</p>
</li>
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Cybersecurity Frameworks for Regional Banks</h5>
<p className="text-on-surface-variant text-body-md">The essential guide for institutional security in the digital age.</p>
</li>
</ul>
</div>
{/* Sector: Agriculture */}
<div className="space-y-6">
<h3 className="font-label-caps text-label-caps border-l-4 border-primary pl-3 uppercase">Agri-Business &amp; Trade</h3>
<ul className="space-y-8">
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Coffee Export Boom: Quality Over Quantity</h5>
<p className="text-on-surface-variant text-body-md">Specialty beans from Rwanda find a growing market in West African urban centers.</p>
</li>
<li className="group cursor-pointer">
<h5 className="font-headline-sm text-headline-sm group-hover:text-secondary transition-colors mb-2">Sustainable Fertilizer Initiatives in Guinea</h5>
<p className="text-on-surface-variant text-body-md">Local production plants reduce reliance on erratic international imports.</p>
</li>
</ul>
</div>
</div>
</section>
</main>
{/* Footer (Shared Component) */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="text-on-surface-variant dark:text-on-primary-container font-body-md mb-6">
                    The bridge for strategic investment and economic synergy between the EAC and West African markets.
                </p>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4 uppercase">Ecosystem</h4>
<nav className="flex flex-col space-y-2">
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/investment-opportunities">Opportunities</a>
<a className="text-secondary dark:text-secondary-fixed font-semibold" href="/market-insights-intelligence">Insights</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/sector-analysis-mining-resources">Sectors</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Investment Framework</a>
</nav>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4 uppercase">Company</h4>
<nav className="flex flex-col space-y-2">
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/our-story">About</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/events-networking-hub">Events</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Terms of Service</a>
</nav>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4 uppercase">Connect</h4>
<nav className="flex flex-col space-y-2">
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/contact-support">Contact Support</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Newsletter</a>
<div className="flex space-x-4 mt-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">mail</span>
</div>
</nav>
</div>
</div>
<div className="px-margin-desktop py-8 max-w-container-max mx-auto border-t border-outline-variant dark:border-primary-fixed-dim/20">
<p className="text-on-surface-variant dark:text-on-primary-container text-body-md text-center">
                © 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.
            </p>
</div>
</footer>
</>
  );
}
