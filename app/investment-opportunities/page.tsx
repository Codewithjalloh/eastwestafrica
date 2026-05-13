export default function Page() {
  return (
<>
{/* TopNavBar */}
<header className="bg-surface border-b border-outline-variant h-20 flex items-center sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
<div className="flex items-center gap-12">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<nav className="hidden md:flex gap-8">
<a className="font-body-md text-body-md text-primary font-bold border-b-2 border-secondary-fixed-dim pb-1 hover:text-secondary transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors duration-200" href="/our-story">About</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 border border-primary text-primary font-label-caps hover:bg-surface-container-high transition-colors">Login</button>
<a href="/contact-support" className="px-6 py-2 bg-primary text-on-primary font-label-caps hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</header>
<main className="max-w-container-max mx-auto px-margin-desktop py-12">
{/* Dashboard Header */}
<section className="mb-12">
<h1 className="font-display-lg text-display-lg text-primary mb-4">Investment Portal</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Access curated business opportunities across Rwanda and Guinea's high-growth sectors. Data-driven insights for strategic institutional investors.</p>
</section>
{/* Market Metrics Stats */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-lg">
<span className="font-label-caps text-on-surface-variant block mb-2 uppercase">Current Pipeline</span>
<div className="font-headline-md text-headline-md text-primary">$1.4B+</div>
<div className="flex items-center text-on-tertiary-container text-data-tabular mt-2">
<span className="material-symbols-outlined text-[16px] mr-1">trending_up</span>
                    12% YoY Growth
                </div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-lg">
<span className="font-label-caps text-on-surface-variant block mb-2 uppercase">Rwanda GDP Proj.</span>
<div className="font-headline-md text-headline-md text-primary">7.2%</div>
<div className="text-on-surface-variant text-data-tabular mt-2">2024 IMF Estimate</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-lg">
<span className="font-label-caps text-on-surface-variant block mb-2 uppercase">Guinea Sector Alpha</span>
<div className="font-headline-md text-headline-md text-primary">Mining</div>
<div className="text-on-surface-variant text-data-tabular mt-2">Bauxite Expansion</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-lg">
<span className="font-label-caps text-on-surface-variant block mb-2 uppercase">Investor Network</span>
<div className="font-headline-md text-headline-md text-primary">340+</div>
<div className="text-on-surface-variant text-data-tabular mt-2">Institutional Entities</div>
</div>
</section>
{/* Search & Filter Bar */}
<section className="flex flex-col md:flex-row gap-gutter mb-12 items-center justify-between">
<div className="relative w-full md:w-1/3">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant focus:border-primary focus:ring-0 rounded-lg font-body-md" placeholder="Search sectors, countries, or project names..." type="text"/>
</div>
<div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
<button className="px-5 py-2 bg-primary text-on-primary font-label-caps whitespace-nowrap rounded-lg">All Sectors</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Mining</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Agri-Tech</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Renewables</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Logistics</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Rwanda</button>
<button className="px-5 py-2 bg-surface-container border border-outline-variant text-on-surface font-label-caps whitespace-nowrap rounded-lg hover:bg-surface-container-high">Guinea</button>
</div>
</section>
{/* Content Grid with Sidebar */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Main Grid */}
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Opportunity Card 1 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKAhRoUH4vMWGG3gWEArfAr-h11YHqBn4RtcBEQnyNBgdDg9fKqR3x1auGDQ_5BiruFgM00tFgeQndPgiTz3eGJkzWdMS3_feYRyAAyHll9aWZyVAgCkGPHrildudMdhKifpiE052X5thU6F_4QLRRmUNitdypCR4v_9KA_IcKhp5gD79S1gDsKZUxfVAGlXvNrAf1m2T1XIj5ivLx6jkorudw3TliH8pF_SStbyNDAzR4S2RHDxd4RLc6VeXSLx0fRMdZn-d2-d3s" />
</div>
<div className="p-stack-lg flex-1">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-label-caps rounded-full uppercase">Renewables</span>
<span className="font-data-tabular text-on-surface-variant flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Rwanda
                            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Kigali Smart Grid Expansion</h3>
<p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Scaling metropolitan electrical infrastructure with integrated IoT monitoring systems for efficient energy distribution.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">ROI Potential</span>
<span className="font-headline-sm text-on-tertiary-container">14.5%</span>
</div>
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">Project Stage</span>
<span className="font-data-tabular text-primary">Late Growth</span>
</div>
</div>
</div>
<div className="p-stack-lg bg-surface border-t border-outline-variant flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[10px] border border-surface-container-lowest">EW</div>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container text-[10px] border border-surface-container-lowest">GR</div>
</div>
<button className="text-primary font-label-caps flex items-center hover:gap-2 transition-all">
                            View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
</button>
</div>
</div>
{/* Opportunity Card 2 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt4jyV_k2U5oI1yL0w7GO0T6js8qNjUCf-AkhL6LZwQxK-flRCGlX2F1W401VaXo5nmg_86v46qoeC-LOLCTiedL2j7D7yn3kSPbctlb-oCrx5mT-nxzP2iKcBSM3xXKuyf661H3l4DgIG09mS8jEB_HCI4nD_LtBku0f8v00yteL6dJM_cvq5sHmN-HRKkXy0Ex2Ou5Ot070hKLGg0BQuBF3SawIsGM2Z62sKdVVH4HnMli8ejGxRKzOD8Rr2feFs_8QhXSTC_h68" />
</div>
<div className="p-stack-lg flex-1">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-label-caps rounded-full uppercase">Mining</span>
<span className="font-data-tabular text-on-surface-variant flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Guinea
                            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Boke Bauxite Corridor</h3>
<p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Greenfield extraction and logistics cluster development in Guinea’s prime mineral province with secured port access.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">ROI Potential</span>
<span className="font-headline-sm text-on-tertiary-container">18.2%</span>
</div>
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">Project Stage</span>
<span className="font-data-tabular text-primary">Pre-Production</span>
</div>
</div>
</div>
<div className="p-stack-lg bg-surface border-t border-outline-variant flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-[10px] border border-surface-container-lowest">AG</div>
<div className="w-8 h-8 rounded-full bg-outline flex items-center justify-center text-white text-[10px] border border-surface-container-lowest">+3</div>
</div>
<button className="text-primary font-label-caps flex items-center hover:gap-2 transition-all">
                            View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
</button>
</div>
</div>
{/* Opportunity Card 3 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGnSfgpk_r_kBs_hunteOmSCW7Qw1h62dsL4XdpZnPWH0SFv00jB7z7LjLrsxRx6YE7DRG2wzSZpnJOFq5RndJOfQARlzOOtfJrlYl2mtuPL4j2V77GiQ9GCM5yll03Q43TK2_BNAvrJ4gR_VpdAbAqbkOStq66D0CaX3USSi34IRF3uYmdvPutTGelfUT_G3WImbAyiTOEpuRj6aLBFH067VXf4sGQtkvVJRN3m216JW_yQ00sBO2WHyAhKDY1GH559RFoSTHYExq" />
</div>
<div className="p-stack-lg flex-1">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-tertiary-fixed-dim text-on-tertiary-fixed-variant text-[10px] font-label-caps rounded-full uppercase">Agri-Tech</span>
<span className="font-data-tabular text-on-surface-variant flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Rwanda
                            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Urban Vertical Farms</h3>
<p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">High-yield hydroponic facilities designed to solve food security challenges in Kigali’s rapidly growing metropolitan area.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">ROI Potential</span>
<span className="font-headline-sm text-on-tertiary-container">12.1%</span>
</div>
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">Project Stage</span>
<span className="font-data-tabular text-primary">Seed/Pilot</span>
</div>
</div>
</div>
<div className="p-stack-lg bg-surface border-t border-outline-variant flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-fixed text-[10px] border border-surface-container-lowest">VC</div>
</div>
<button className="text-primary font-label-caps flex items-center hover:gap-2 transition-all">
                            View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
</button>
</div>
</div>
{/* Opportunity Card 4 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="h-48 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHjNJUsFfwcY7ye7UHvu1LgrOVQ0CyhxK3GWxjvR7NivDCxuBTPWtSMDSkzT1NbTGE1tRffj56_2horLhitEjmBYwfNjG0xXsPvsrIE_BfT1Ty0xsCtU8ZAiUm4JIcYsXy0NauRo4uZ9qtU9VzlfYyU-JTWM29p9RIGkYo1QsdWFU3jMl8BbKcwQdpw0z8doMI5vJF27CRfNKCKZTh8glPB0R0Y58GpjzJUKW8SJ2BXwxILBBVfUJDt9iEs79LHsZneAeK-F-zqwLq" />
</div>
<div className="p-stack-lg flex-1">
<div className="flex justify-between items-start mb-4">
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-label-caps rounded-full uppercase">Logistics</span>
<span className="font-data-tabular text-on-surface-variant flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1">location_on</span> Guinea
                            </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Conakry Port Terminal Expansion</h3>
<p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">Modernizing Guinea's primary maritime gateway with automated container handling and cold storage facilities.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">ROI Potential</span>
<span className="font-headline-sm text-on-tertiary-container">16.8%</span>
</div>
<div>
<span className="block font-label-caps text-on-surface-variant text-[10px] uppercase">Project Stage</span>
<span className="font-data-tabular text-primary">In Construction</span>
</div>
</div>
</div>
<div className="p-stack-lg bg-surface border-t border-outline-variant flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-white text-[10px] border border-surface-container-lowest">DP</div>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-[10px] border border-surface-container-lowest">GS</div>
</div>
<button className="text-primary font-label-caps flex items-center hover:gap-2 transition-all">
                            View Details <span className="material-symbols-outlined ml-1">arrow_forward</span>
</button>
</div>
</div>
</div>
{/* Sidebar */}
<aside className="lg:col-span-4 space-y-gutter">
{/* Trending Widget */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-stack-lg">
<h3 className="font-headline-sm text-headline-sm text-primary mb-6">Trending Now</h3>
<div className="space-y-6">
<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ3u1VMHupKqG7zWWiHQPCRjxCxqMxts32gON33lFL91MMAT8FO89f7u9eHcyWoHT7dFFPy9GumfEsrm6Li9FWr5Vsn3lAgqSZfreCb_LaZVo-wuIasfSWkXwnjbTGy0SlR4lLsV9Zv7NKUBFM1NmEl3BygrhXD4hSOFQNNqzXmuCyX52wO3pIuR-6I-lIiT16W0k0mEaf6w7z3yGqnhyogpHkaME4xx_t87ddd2qolGdRV3HeUwmLx1IHVoBy90b2C_DhAn8anUX8" />
</div>
<div>
<span className="font-label-caps text-secondary text-[10px] uppercase">Tech Hub</span>
<h4 className="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">Kigali Semiconductor Park</h4>
<p className="text-[12px] text-on-surface-variant">Over 60% funded in 3 months.</p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpVx-ntulfvMHiQU21gQ5TdyZZsJNmH8hh3fMmQXT37LbeRD5ZdUWoLCJnzigCPuRu0JgmX_UiUm60g2ixnOQ6wHxv1G-whzxiXOZwI1GTZH57N4-edwXHUWo6jW9rah7Z3Gsi2NzpFiDTLPv8Wwxr-EPY5cGdalZU0fqxpJ3eo1BTLNpCQ2bH9GKUZ4nsHfVyX-4thXZE4gxIyDm_-EuTc0GN9vf7GEa26jgTTIArrifmO3t-iQ62LlU60CgIOCL8njHZ0d-I-pMe" />
</div>
<div>
<span className="font-label-caps text-secondary text-[10px] uppercase">Energy</span>
<h4 className="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">Cross-Border Power Link</h4>
<p className="text-[12px] text-on-surface-variant">Regulatory approval confirmed.</p>
</div>
</div>
<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container flex-shrink-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdG5W9I_-3FDvw-NgEXN8pEKuUneq-tyUZVlLgWt1kdMWhBCyxrOxAjW5FFjmfXt-tNuZqfNHvED1YQ7XDcyoybx6tsYO6CIOW6bvFRrih2aRlJT7Ab4zynJxq6yecBk78-9zStzQ0iMk7vIAHw7Eygf92kAaeyV679Fi5V51G1a7pDQKKPTqfzYa5JhwZvdiH3j758K4HSpH3GaoRYadoY9y2KaMGOlhX5xFkrspjBz3NUyDwbnU4j-rNiGKHAz02vdetkWTYMBgj" />
</div>
<div>
<span className="font-label-caps text-secondary text-[10px] uppercase">Fintech</span>
<h4 className="font-body-md font-bold text-primary group-hover:text-secondary transition-colors">Pan-African Gateway</h4>
<p className="text-[12px] text-on-surface-variant">Acquisition inquiry pending.</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-3 border border-outline-variant text-primary font-label-caps rounded-lg hover:bg-surface-container transition-colors">See All Trending</button>
</div>
{/* Insights Newsletter */}
<div className="bg-primary-container text-on-primary-fixed rounded-lg p-stack-lg relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-secondary-fixed-dim text-4xl mb-4">analytics</span>
<h3 className="font-headline-sm text-headline-sm mb-2 text-white">Market Intelligence</h3>
<p className="font-body-md text-on-primary-container mb-6 text-sm">Get bi-weekly updates on policy changes, macro shifts, and new high-alpha projects directly in your inbox.</p>
<input className="w-full px-4 py-3 bg-on-primary-fixed-variant border-none text-white placeholder:text-on-primary-container rounded-lg mb-3 focus:ring-1 focus:ring-secondary-fixed-dim" placeholder="Professional Email" type="email"/>
<button className="w-full py-3 bg-secondary-fixed-dim text-on-secondary-fixed font-label-caps rounded-lg hover:bg-secondary-container transition-colors">Subscribe Now</button>
</div>
{/* Decorative element */}
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary-fixed opacity-10 rounded-full"></div>
</div>
{/* Recent Downloads */}
<div className="bg-surface border border-outline-variant rounded-lg p-stack-lg">
<h3 className="font-label-caps text-on-surface-variant mb-4 uppercase">Investment Resources</h3>
<ul className="space-y-4">
<li className="flex items-center justify-between text-body-md text-primary font-medium hover:text-secondary cursor-pointer transition-colors">
<div className="flex items-center">
<span className="material-symbols-outlined mr-3 text-on-surface-variant">picture_as_pdf</span>
                                Rwanda H2 2024 Report
                            </div>
<span className="material-symbols-outlined text-sm">download</span>
</li>
<li className="flex items-center justify-between text-body-md text-primary font-medium hover:text-secondary cursor-pointer transition-colors">
<div className="flex items-center">
<span className="material-symbols-outlined mr-3 text-on-surface-variant">picture_as_pdf</span>
                                Guinea Mining Framework
                            </div>
<span className="material-symbols-outlined text-sm">download</span>
</li>
<li className="flex items-center justify-between text-body-md text-primary font-medium hover:text-secondary cursor-pointer transition-colors">
<div className="flex items-center">
<span className="material-symbols-outlined mr-3 text-on-surface-variant">description</span>
                                EastWest Ag-Tech Map
                            </div>
<span className="material-symbols-outlined text-sm">download</span>
</li>
</ul>
</div>
</aside>
</div>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="text-on-surface-variant text-sm pr-4">Strategic capital facilitation and market intelligence connecting the world to Rwanda and Guinea's economic potential.</p>
</div>
<div>
<h4 className="font-label-caps text-primary mb-6 uppercase">Legal &amp; Governance</h4>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Investment Framework</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-primary mb-6 uppercase">Company</h4>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="/contact-support">Contact Support</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Newsletter</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-primary mb-6 uppercase">Offices</h4>
<div className="text-on-surface-variant text-sm space-y-4">
<p><strong>Kigali:</strong> KN 3 Rd, Kigali, Rwanda</p>
<p><strong>Conakry:</strong> Cité des Nations, Conakry, Guinea</p>
</div>
</div>
</div>
<div className="px-margin-desktop py-8 border-t border-outline-variant text-center md:text-left">
<p className="text-on-surface-variant text-sm">© 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.</p>
</div>
</footer>
</>
  );
}
