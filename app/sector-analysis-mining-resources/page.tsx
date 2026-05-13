import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
<>
{/* TopNavBar */}
<header className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary fixed top-0 w-full z-50">
<div className="flex min-w-0 w-full items-center justify-between gap-3 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed shrink-0 truncate">EastWest Africa</a>
<nav className="hidden md:flex space-x-stack-lg items-center">
<a className="text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1 font-body-md text-body-md" href="/sector-analysis-mining-resources">Sectors</a>
<a className="text-on-surface-variant dark:text-on-primary-container font-body-md text-body-md hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/our-story">About</a>
</nav>
<div className="flex shrink-0 items-center space-x-2 md:space-x-stack-md">
<MobileNav />
<div className="hidden md:flex items-center space-x-stack-md">
<button className="px-6 py-2 border border-primary text-primary font-label-caps text-label-caps rounded-lg hover:bg-primary hover:text-on-primary transition-all">Login</button>
<a href="/contact-support" className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</div>
</header>
<main className="pt-20">
{/* Hero Section */}
<section className="relative min-h-[50svh] md:h-[614px] flex items-center">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDSIHkQVDVdx457W6o5N3Fq6XZJ3HKUspmYYi3HMhTUekQnab_CSDgb2l7OqmczvQykAIfbr2kM9xKdTUBbE2nOaL-pTep5FV8_TC7dz4-y4TWD4WrU15uZIcrOMWQfdZzDMrBbsyZcRWkcOeyP2isvy69rDt6uANn1s2L6y6moy1w50VoxgF3HVOVW5MIKd_c2WlWEGko6pd1tr4wwSdjM7vhjmipyzzHIzXnLhKg5XCM1VUOovEQMeMdnvr_nABSAdMv4i8G0RmI" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-white">
<span className="font-label-caps text-label-caps text-secondary-fixed tracking-widest block mb-4">SECTOR STRATEGY</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg max-w-2xl mb-6">Sustainable Energy &amp; Infrastructure</h1>
<p className="font-body-lg text-body-lg max-w-xl text-primary-fixed opacity-90">Deep-diving into the backbone of East-West connectivity, focusing on renewable power generation and transnational logistics corridors.</p>
</div>
</section>
{/* Market Overview Bento */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="mb-stack-lg flex justify-between items-end">
<div>
<h2 className="font-headline-md text-headline-md">Market Intelligence</h2>
<p className="text-on-surface-variant font-body-md max-w-md">Real-time data and economic forecasting for Rwanda and Guinea's energy landscape.</p>
</div>
<div className="flex space-x-4">
<span className="flex items-center px-4 py-2 bg-surface-container border border-outline-variant rounded-lg font-data-tabular text-data-tabular">
<span className="material-symbols-outlined mr-2">trending_up</span> CAGR: 12.4%
                    </span>
</div>
</div>
<div className="bento-grid">
{/* Large Stats Card */}
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<h3 className="font-headline-sm text-headline-sm mb-4">Total Addressable Market (2025-2030)</h3>
<div className="h-64 bg-surface-container rounded-lg flex items-end justify-between p-8 gap-4">
<div className="w-full bg-primary/10 h-1/4 rounded-t-lg relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-xs px-2 py-1 rounded">2022</div>
</div>
<div className="w-full bg-primary/20 h-1/2 rounded-t-lg"></div>
<div className="w-full bg-primary/40 h-3/4 rounded-t-lg"></div>
<div className="w-full bg-primary h-full rounded-t-lg relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-primary">$4.2B</div>
</div>
</div>
<p className="mt-stack-md text-on-surface-variant font-body-md">Projected growth across hydroelectric, solar, and grid modernization projects in Rwanda and coastal Guinea.</p>
</div>
{/* Circular Stat */}
<div className="col-span-12 md:col-span-4 bg-primary-container text-white p-stack-lg rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary-fixed">POLICY RATING</span>
<h3 className="font-headline-md text-headline-md mt-2">AAA Stable</h3>
</div>
<div className="my-8 flex justify-center">
<div className="w-32 h-32 rounded-full border-8 border-secondary border-t-transparent flex items-center justify-center">
<span className="font-headline-sm text-headline-sm text-secondary-fixed">88%</span>
</div>
</div>
<p className="text-sm opacity-80">Infrastructure implementation readiness index based on EWA's 2024 Framework.</p>
</div>
{/* Small Detail Cards */}
<div className="col-span-12 md:col-span-4 bg-surface-container-high p-stack-md rounded-xl border border-outline-variant">
<div className="flex items-center mb-2">
<span className="material-symbols-outlined text-secondary mr-2">account_balance</span>
<h4 className="font-label-caps text-label-caps">Incentive Programs</h4>
</div>
<p className="font-body-md text-on-surface">15-year tax holiday for renewable IPPs exceeding 25MW capacity.</p>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-high p-stack-md rounded-xl border border-outline-variant">
<div className="flex items-center mb-2">
<span className="material-symbols-outlined text-secondary mr-2">public</span>
<h4 className="font-label-caps text-label-caps">Carbon Offsets</h4>
</div>
<p className="font-body-md text-on-surface">Integration with EU carbon credit markets via EastWest corridor trade pacts.</p>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-high p-stack-md rounded-xl border border-outline-variant">
<div className="flex items-center mb-2">
<span className="material-symbols-outlined text-secondary mr-2">speed</span>
<h4 className="font-label-caps text-label-caps">Permit Velocity</h4>
<span className="ml-auto text-on-tertiary-container font-data-tabular">Fast-Track</span>
</div>
<p className="font-body-md text-on-surface">Licensing reduced from 18 months to 90 days for qualified investors.</p>
</div>
</div>
</section>
{/* Regulatory & Infrastructure */}
<section className="bg-surface-container-low py-12 md:py-section-padding">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="font-headline-md text-headline-md mb-stack-lg">Regulatory Framework &amp; Policy</h2>
<ul className="space-y-stack-md">
<li className="flex gap-4">
<div className="w-10 h-10 bg-primary text-white flex-shrink-0 flex items-center justify-center rounded-lg">1</div>
<div>
<h4 className="font-headline-sm text-[18px] leading-6 mb-1">Energy Act 2023 Amendment</h4>
<p className="text-on-surface-variant">Allows 100% foreign ownership of utility-scale energy storage solutions.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 bg-primary text-white flex-shrink-0 flex items-center justify-center rounded-lg">2</div>
<div>
<h4 className="font-headline-sm text-[18px] leading-6 mb-1">Regional Grid Synchronization</h4>
<p className="text-on-surface-variant">Standardized tariff structures across the Rwanda-Guinea economic bridge.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 bg-primary text-white flex-shrink-0 flex items-center justify-center rounded-lg">3</div>
<div>
<h4 className="font-headline-sm text-[18px] leading-6 mb-1">Public-Private Partnership (PPP) Law</h4>
<p className="text-on-surface-variant">Government-backed guarantees for sovereign-linked infrastructure debt.</p>
</div>
</li>
</ul>
</div>
<div>
<h2 className="font-headline-md text-headline-md mb-stack-lg">Infrastructure Assets</h2>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square relative rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDw-BMnb3KWKkomMeuZjx9zBoG4f_9QX-fjlWzlVVhdAG73XN-xrfoQbdFYNMRlBcyNUTsNsYXGaAIUy5LKuJImM2gMTGOUKY1jfgPJYxa2GrOvh1M1c-ZlXgy3Di8YoDBD2Wpk67Aw3n4uJA9OlMfSuL3VwHQChM__BioiTKWkYyxC_zClhRPhIxYpTuaEUxpTpYnam9qBedNtqqAabdFamiF95sUJ8dwG_0EC6t4JdBe55JOYxaajsOf0qjOXwK786zNxPHoqSF" />
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-white font-label-caps text-[10px]">GUINEA COASTAL WIND</span>
</div>
</div>
<div className="aspect-square relative rounded-xl overflow-hidden group">
<img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9mKu83Otj5XGuM4WCIeTEMMkBS0yOWgV2BNlN4aez74FzLY63rSeMUTrrP6acyi57j8vYdA9gj5GTRsBIq9wd3YdhFVYVAAcZ5Ip-edcngBNrOB75b707zL51TumKGa8FL21flRs15zh97ONsCYlfWAMqVMraP_1_lKLkNFPrwP7z_ECrlf8Ri50X4Xs1DB3wio8U19igvLhbGiPdNSbO_8CQO_6SncWQjTblR_u4XCq_PIOlyvOMPzE4rm5E9gXszvxpAY8dCCYm" />
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-white font-label-caps text-[10px]">RWANDA SOLAR CORE</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Active Opportunities */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md">Active Investment Opportunities</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto mt-4">Vetted pipeline projects currently seeking equity partners or lead contractors.</p>
</div>
<div className="space-y-6">
{/* Opportunity Card */}
<div className="flex flex-col md:flex-row items-center bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-colors">
<div className="w-full md:w-64 h-48 flex-shrink-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANKm4OF1ZatP3LzlWCdIkGS3avGTCKq4wtOtYrovL4RECEu2SBj3M50Qzz9zEDGf0SMlIo_lqYYMaQwWNvDlMIixp-RJfXlL8Mf9XaGUeG2BylhyaU02Lw90QSZmBE-zeaLoE5iRnRMx2PgNIuGPK96DcbVqW1VdmchfPcHOpdQaCe9ixZf2hooe7u9zmcBIpnOd6xUOaHsUh5ZfyVQG9PsFV3Wm1rC544_CLaeg_JIovvOey5bstioxqWQ2g11MHWo13x5FJ4S_EI" />
</div>
<div className="p-stack-lg flex-grow flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold mb-2">ENERGY STORAGE</span>
<h3 className="font-headline-sm text-headline-sm">Kigali Pumped Hydro Facility</h3>
<p className="text-on-surface-variant font-body-md mt-1">200MW capacity energy storage project to stabilize regional grid fluctuations.</p>
</div>
<div className="text-right flex-shrink-0">
<div className="font-headline-sm text-headline-sm text-primary mb-1">$450M</div>
<div className="text-on-surface-variant text-[12px] font-label-caps">VALUATION</div>
<button className="mt-4 px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded hover:opacity-90">Review IM</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center bg-surface border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-colors">
<div className="w-full md:w-64 h-48 flex-shrink-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6GUSI_Do12FdHFn4gK6yi8unJim_qQOgXP2fbtgoNkho1UeHSPRrD88XSyRaNSW5pIISuMqdAjM2MME-UDJuAMYoo72QsGKU9OLo-pA0OD-TaJ_1ug5jZhgO8qup2h-iJdbhABF9u7j6JPJy3TCFQh73JY09E4-nW6SvIzCqhQ3q09jq3Ho9FKy-iM81zRvx5oyJJ8sb-e87Lzg7Yk-u0wtPlZmSNM02T8hU_krzBYc53QB3ImEyUDi9Fb-6WMdK7kJR-3-oVJ1C7" />
</div>
<div className="p-stack-lg flex-grow flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold mb-2">GRID CONNECTIVITY</span>
<h3 className="font-headline-sm text-headline-sm">East Coast Interconnector</h3>
<p className="text-on-surface-variant font-body-md mt-1">400kV HVDC line connecting mining districts to coastal Guinea ports.</p>
</div>
<div className="text-right flex-shrink-0">
<div className="font-headline-sm text-headline-sm text-primary mb-1">$1.2B</div>
<div className="text-on-surface-variant text-[12px] font-label-caps">VALUATION</div>
<button className="mt-4 px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded hover:opacity-90">Review IM</button>
</div>
</div>
</div>
</div>
</section>
{/* Insights & Events */}
<section className="bg-primary-container text-white py-12 md:py-section-padding">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-2">
<h2 className="font-headline-md text-headline-md mb-8">Expert Analysis</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-on-primary-fixed-variant p-stack-lg rounded-xl">
<p className="italic font-body-lg text-primary-fixed mb-6">"The integration of Guinea’s raw mineral wealth with Rwanda’s tech-driven grid management creates a unique arbitrage opportunity for global capital."</p>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-surface-variant mr-4"></div>
<div>
<div className="font-bold">Dr. Alisa Chen</div>
<div className="text-xs opacity-70">Chief Economist, EWA</div>
</div>
</div>
</div>
<div className="bg-on-primary-fixed-variant p-stack-lg rounded-xl">
<p className="italic font-body-lg text-primary-fixed mb-6">"Policy stability is the new gold. Rwanda's recent legislation sets a benchmark for the entire continent’s infrastructure framework."</p>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-surface-variant mr-4"></div>
<div>
<div className="font-bold">Jean-Paul Nsanga</div>
<div className="text-xs opacity-70">Regulatory Lead, Kigali Office</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white/5 p-stack-lg rounded-xl border border-white/10">
<h3 className="font-headline-sm text-headline-sm mb-6">Sector Events</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="text-center bg-secondary-fixed text-primary px-3 py-2 rounded">
<div className="font-bold">12</div>
<div className="text-[10px] font-label-caps">NOV</div>
</div>
<div>
<h4 className="font-bold">Renewable Summit</h4>
<p className="text-xs opacity-70">Kigali, Rwanda</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-center bg-secondary-fixed text-primary px-3 py-2 rounded">
<div className="font-bold">24</div>
<div className="text-[10px] font-label-caps">NOV</div>
</div>
<div>
<h4 className="font-bold">PPP Finance Forum</h4>
<p className="text-xs opacity-70">Conakry, Guinea</p>
</div>
</div>
<div className="flex gap-4">
<div className="text-center bg-secondary-fixed text-primary px-3 py-2 rounded">
<div className="font-bold">05</div>
<div className="text-[10px] font-label-caps">DEC</div>
</div>
<div>
<h4 className="font-bold">Investors Circle</h4>
<p className="text-xs opacity-70">Virtual Webinar</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 border border-secondary-fixed text-secondary-fixed font-label-caps text-label-caps rounded hover:bg-secondary-fixed hover:text-primary transition-all">View All Events</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
<div className="col-span-1 md:col-span-2">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="text-on-surface-variant dark:text-on-primary-container max-w-sm mb-6">Strategic investment bridge connecting the Great Lakes region with West African coastal markets. Focused on sustainable growth and economic integration.</p>
<p className="text-on-surface-variant dark:text-on-primary-container text-body-md font-body-md">© 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.</p>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4">RESOURCES</h4>
<nav className="flex flex-col space-y-2">
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md" href="#">Investment Framework</a>
</nav>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary dark:text-primary-fixed mb-4">SUPPORT</h4>
<nav className="flex flex-col space-y-2">
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md" href="/contact-support">Contact Support</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md" href="#">Newsletter</a>
</nav>
</div>
</div>
</footer>
</>
  );
}
