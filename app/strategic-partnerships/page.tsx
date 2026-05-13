import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
<>
{/* TopNavBar */}
<header className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary fixed top-0 w-full z-50">
<nav className="flex min-w-0 w-full items-center justify-between gap-3 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed shrink-0 truncate">EastWest Africa</a>
<div className="hidden md:flex items-center space-x-stack-lg">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1 transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/our-story">About</a>
</div>
<div className="flex shrink-0 items-center space-x-2 md:space-x-stack-md">
<MobileNav />
<div className="hidden md:flex items-center space-x-stack-md">
<button className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors">Login</button>
<a href="/contact-support" className="bg-primary text-on-primary px-6 py-2 rounded font-body-md font-bold hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</nav>
</header>
<main className="pt-20">
{/* Hero Section: Value Proposition */}
<section className="relative min-h-[50svh] md:h-[600px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyl22hnVOMqmVLMAg5jZ9vQ6X5TTi60oBAQBIKpzHtq7GcQe486eKCQjYIm1Swl4MXgI5-NNBzbUVvF9gso37eDY2qV3mLAASMrjt84vCo_4ndIDKOEz-Xv7DvJ5nkSohjfsvylXtDRT6rvJBteZhUt3K0Li6KG08mQv4luW4midRuV4MRWo_c1BKd5RlyNXjDPXu3Cf3sUAgusfPsR7-xmG1NryLxFZFn5se2s2oAKADGrTTX1PJ5NrXtl_RLfaud3DcrPqZDebv" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary">
<div className="max-w-2xl">
<span className="font-label-caps text-label-caps text-secondary-fixed-dim block mb-stack-sm">STRATEGIC ALLIANCE</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md leading-tight">Partner With Us to Architect Africa's Economic Future</h1>
<p className="font-body-lg text-body-lg mb-stack-lg text-on-primary-container brightness-200">We bridge the gap between global institutional capital and high-impact regional development. Join our network of sovereign funds, enterprise leaders, and institutional investors.</p>
<div className="flex flex-col gap-stack-md sm:flex-row sm:items-center sm:gap-stack-md">
<button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-bold hover:brightness-95 transition-all">Become a Partner</button>
<button className="border border-on-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:bg-on-primary hover:text-primary transition-all flex items-center">
                            Partner Portal
                            <span className="material-symbols-outlined ml-2">login</span>
</button>
</div>
</div>
</div>
</section>
{/* Partner Tiers: Bento Grid Layout */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="mb-stack-lg text-center">
<h2 className="font-headline-md text-headline-md text-primary mb-4">Tiers of Partnership</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">Precision-engineered collaboration frameworks designed for diverse institutional objectives and capital structures.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Strategic Partner */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-shadow">
<div className="mb-stack-md bg-primary-container w-12 h-12 rounded-lg flex items-center justify-center text-secondary-fixed-dim">
<span className="material-symbols-outlined">account_balance</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-stack-sm">Strategic</h3>
<p className="text-on-surface-variant mb-stack-lg grow">Institutional investors and sovereign entities seeking long-term exposure to infrastructure and large-scale manufacturing sectors.</p>
<ul className="space-y-stack-sm border-t border-outline-variant pt-stack-md">
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> Governance Seat</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> First-Look Rights</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> Custom Data Pipeline</li>
</ul>
</div>
{/* Operational Partner */}
<div className="bg-primary-container text-on-primary p-stack-lg rounded-xl flex flex-col hover:shadow-xl transition-shadow scale-105 shadow-md">
<div className="mb-stack-md bg-secondary-container w-12 h-12 rounded-lg flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">settings_suggest</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-stack-sm">Operational</h3>
<p className="text-on-primary-container brightness-200 mb-stack-lg grow">Technical and logistical leaders providing the core expertise to execute cross-border operations between Rwanda and Guinea.</p>
<ul className="space-y-stack-sm border-t border-on-primary-container/30 pt-stack-md">
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-secondary-fixed-dim mr-2 text-[18px]">check_circle</span> Execution Oversight</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-secondary-fixed-dim mr-2 text-[18px]">check_circle</span> Regulatory Fast-track</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-secondary-fixed-dim mr-2 text-[18px]">check_circle</span> Joint Venture Access</li>
</ul>
</div>
{/* Network Partner */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-lg rounded-xl flex flex-col hover:shadow-lg transition-shadow">
<div className="mb-stack-md bg-surface-container-high w-12 h-12 rounded-lg flex items-center justify-center text-primary">
<span className="material-symbols-outlined">hub</span>
</div>
<h3 className="font-headline-sm text-headline-sm mb-stack-sm">Network</h3>
<p className="text-on-surface-variant mb-stack-lg grow">Industry associations, diplomatic missions, and advisory firms expanding the ecosystem's reach and intellectual capital.</p>
<ul className="space-y-stack-sm border-t border-outline-variant pt-stack-md">
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> Advisory Councils</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> Ecosystem Events</li>
<li className="flex items-center text-sm font-medium"><span className="material-symbols-outlined text-tertiary-fixed-dim mr-2 text-[18px]">check_circle</span> Brand Co-Marketing</li>
</ul>
</div>
</div>
</section>
{/* Case Studies: High-End Asymmetric Layout */}
<section className="bg-surface-container-low py-12 md:py-section-padding overflow-hidden">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row gap-gutter">
<div className="md:w-1/2">
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md">Cross-Border Success Stories</h2>
<p className="text-body-lg mb-stack-lg text-on-surface-variant">Real-world impact generated through EastWest Africa’s institutional collaboration frameworks.</p>
{/* Case Card 1 */}
<div className="bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150"></div>
<div className="relative z-10">
<span className="font-label-caps text-secondary font-bold">LOGISTICS CORRIDOR</span>
<h4 className="font-headline-sm mt-2 mb-stack-sm">The Guinea-Rwanda Air Bridge</h4>
<p className="text-sm text-on-surface-variant mb-stack-md">A strategic partnership between national carriers and private cargo firms that reduced transit times by 40% and shipping costs by 22% for mineral exports.</p>
<div className="flex items-center text-primary font-bold text-sm cursor-pointer hover:underline">
                                    View Full Framework <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 flex flex-col justify-end">
{/* Case Card 2 */}
<div className="bg-primary-container text-on-primary p-stack-lg rounded-xl mb-gutter relative">
<div className="flex gap-stack-md mb-stack-md">
<div className="w-1/2 bg-surface-container-high/20 h-32 rounded-lg flex items-center justify-center">
<img className="w-full h-full object-cover rounded-lg opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYgQLJrljyGyddUldyvW_OLogE2AIRX-CSVRMNbGf_CVltEIBy8zkWYIJofZrlnGH1Kp76nVoewZvtbDCiyzB-27k3guqjdoN04nRBV2c_5XU8-U5inMSFALFguehH8rLCMxVmwoY65C14TVZvGglQEFxX68VHyyIAXNER0V2vXOHr6xacDspyCfqjxYiHxb2CqCixlk1sT03htfazQjt-p_mWvIp-aEJcAqmVYJUNz_sfRHCXPsrpSohZ6yhY2pKxwxsu_tSCpz73" />
</div>
<div className="w-1/2 bg-surface-container-high/20 h-32 rounded-lg flex items-center justify-center">
<img className="w-full h-full object-cover rounded-lg opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSdkEuo3r0hDcMNHlEl7Gks33GPA25B4YnMtGeQmxW5BQ1MQy_4SCI6lMEF7eCI1oKf3ws8TsDN5FIw02NNrzQKMl3fz3q7VIov4CuGr1MsYbVg2JLk_buoGqjl9IoL68ZqH7z28pIGwt6e07bWc9-HK4_sJsmraVS08kWBqBKPTREzv7MahXntpJLgm7Hl32WOyhrK8A9pdMF59AUWkF2bIX15I2660coBfgErfYPKw3a3M_yLzWTKs3uEYtXn80L9W1ZxTxubGH7" />
</div>
</div>
<span className="font-label-caps text-secondary-fixed-dim">FINTECH &amp; SOVEREIGN</span>
<h4 className="font-headline-sm mt-2 mb-stack-sm">Digital Trade Settlement System</h4>
<p className="text-sm text-on-primary-container brightness-200 mb-stack-md">Collaboration with regional central banks to implement a blockchain-based settlement platform for institutional traders, reducing currency risk by 65%.</p>
<div className="flex items-center text-secondary-fixed-dim font-bold text-sm cursor-pointer hover:brightness-110">
                                Download Case Study <span className="material-symbols-outlined ml-2 text-[18px]">download</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Onboarding Process: Clean Disciplined Steps */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<h2 className="font-headline-md text-headline-md text-primary text-center mb-12 md:mb-section-padding">Institutional Onboarding Journey</h2>
<div className="relative flex flex-col md:flex-row gap-gutter">
{/* Connector Line */}
<div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant -z-10"></div>
{/* Step 1 */}
<div className="flex-1 bg-surface group">
<div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md mx-auto border-4 border-surface group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[32px]">assignment</span>
</div>
<div className="text-center">
<h5 className="font-headline-sm mb-2">1. Alignment</h5>
<p className="text-sm text-on-surface-variant px-4">Submit institutional profile and strategic objectives for initial ecosystem fit assessment.</p>
</div>
</div>
{/* Step 2 */}
<div className="flex-1 bg-surface group">
<div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md mx-auto border-4 border-surface group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[32px]">verified_user</span>
</div>
<div className="text-center">
<h5 className="font-headline-sm mb-2">2. Verification</h5>
<p className="text-sm text-on-surface-variant px-4">Standard due diligence and KYC procedures following international financial protocols.</p>
</div>
</div>
{/* Step 3 */}
<div className="flex-1 bg-surface group">
<div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md mx-auto border-4 border-surface group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[32px]">handshake</span>
</div>
<div className="text-center">
<h5 className="font-headline-sm mb-2">3. Integration</h5>
<p className="text-sm text-on-surface-variant px-4">Execution of partnership agreements and onboarding onto the secure digital platform.</p>
</div>
</div>
{/* Step 4 */}
<div className="flex-1 bg-surface group">
<div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md mx-auto border-4 border-surface group-hover:border-primary transition-all">
<span className="material-symbols-outlined text-primary text-[32px]">rocket_launch</span>
</div>
<div className="text-center">
<h5 className="font-headline-sm mb-2">4. Activation</h5>
<p className="text-sm text-on-surface-variant px-4">Immediate access to the portal, investment pipelines, and operational workgroups.</p>
</div>
</div>
</div>
</section>
{/* Final CTA: Login Portal Entry */}
<section className="bg-primary-container py-12 md:py-section-padding relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6O8s4u2g_7Pb3QfgGiaD2IMBUbEaogaN4DdrusFA-5_aVtVvh9yty1mF0Y3vgmMEJNIYxCH6UmDqIL9yH6U0cNyK0YGjKZCO5x_9boxbeT1M37zZueQrq_thXg7AgM9wo7iOcXwAT1PJWpGGW0BZSgjVjzHqY6b_SxQq2T8o6t_8sNX7my0zjrqpcQ-g8k8oC59qmMCCezG7-j54tkQAPpan271FSUfQhRqQBUA6FvrFhjStEzlhGOUZydv_OCeD0m4KBgmtFzU0Z" />
</div>
<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
<h2 className="font-display-lg text-display-lg text-on-primary mb-stack-md">Ready to Scale the Corridor?</h2>
<p className="text-on-primary-container brightness-200 mb-stack-lg max-w-2xl mx-auto">Existing partners can access their dashboard to manage investments, view real-time logistics data, and engage with the regulatory hub.</p>
<div className="flex flex-col md:flex-row justify-center gap-stack-md">
<button className="bg-secondary-container text-on-secondary-container px-12 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">Inquire About Partnership</button>
<button className="bg-white/10 backdrop-blur-md text-on-primary border border-white/20 px-12 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center">
<span className="material-symbols-outlined mr-2">lock</span>
                        Partner Login
                    </button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
<div className="col-span-1 md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="text-on-surface-variant dark:text-on-primary-container text-sm">Providing the institutional framework for high-impact cross-border collaboration between Rwanda and Guinea.</p>
</div>
<div>
<h6 className="font-label-caps text-label-caps mb-stack-md">Governance</h6>
<ul className="space-y-stack-sm">
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors text-secondary dark:text-secondary-fixed font-semibold" href="#">Investment Framework</a></li>
</ul>
</div>
<div>
<h6 className="font-label-caps text-label-caps mb-stack-md">Support</h6>
<ul className="space-y-stack-sm">
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="/contact-support">Contact Support</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Newsletter</a></li>
<li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Partner Portal</a></li>
</ul>
</div>
<div>
<h6 className="font-label-caps text-label-caps mb-stack-md">Contact</h6>
<p className="text-on-surface-variant text-sm mb-2">Kigali Corporate Center, Level 12</p>
<p className="text-on-surface-variant text-sm">partnership@eastwestafrica.com</p>
<div className="flex space-x-4 mt-stack-md">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">mail</span>
</div>
</div>
</div>
<div className="px-margin-mobile md:px-margin-desktop py-stack-md border-t border-outline-variant/30 text-center text-xs text-on-surface-variant">
            © 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.
        </div>
</footer>
</>
  );
}
