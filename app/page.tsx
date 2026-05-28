import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
<>
{/* TopNavBar */}
<nav className="bg-surface border-b border-outline-variant fixed top-0 left-0 right-0 z-50 h-20 flex items-center">
<div className="flex min-w-0 items-center justify-between gap-3 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary shrink-0 truncate">EastWest Africa</a>
<div className="hidden md:flex gap-stack-lg items-center">
<a className="text-primary font-bold border-b-2 border-secondary-fixed-dim pb-1 font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="text-on-surface-variant font-body-md text-body-md hover:text-secondary transition-colors duration-200" href="/our-story">About</a>
</div>
<div className="flex shrink-0 items-center gap-2 md:gap-stack-md">
<MobileNav />
<div className="hidden md:flex items-center gap-stack-md">
<a href="/contact-support" className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</div>
</nav>
<main className="pt-20">
{/* Hero Section */}
<section className="relative min-h-[70svh] md:min-h-[870px] flex items-center overflow-hidden bg-primary-container">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyYiLn-LOA4vmAzxmMTWM5WhpmftRvYk4Bn_eWhC6ChePNFyVFDmgnwWnOm8YzqvMTF-vgXPaCYvuRmmv5ouEKAUxQOgaYV4OkyA9Kamsn5xYa132Ksd3sTAWPJrLnZCrzTzDkGvSgqCl0IrMFiB1zcWSBX12gviWHIsbcdQD5Yup0LNwfJTaOxFS7n5TU8s9RY83PnfCAPCvqecZbawuqdcB4RFpr2LKuoKLbL9OXZ6Ag6FhYBKPRAi1reduV9nDO_JYbVQE401p" />
<div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 md:py-section-padding">
<div className="max-w-3xl">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-stack-md leading-tight">Connecting East &amp; West African Opportunity</h1>
<p className="font-body-lg text-body-lg text-white mb-stack-lg max-w-2xl">Helping businesses, investors, and entrepreneurs navigate opportunities between Rwanda, Guinea, and the wider African market.</p>
<div className="flex flex-wrap gap-stack-md">
<button className="px-8 py-4 bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps shadow-lg hover:bg-on-secondary-container transition-colors uppercase">Explore Opportunities</button>
<button className="px-8 py-4 border border-white text-white rounded-lg font-label-caps text-label-caps hover:bg-white/10 transition-colors uppercase">Partner With Us</button>
</div>
</div>
</div>
</section>
{/* Trust Section */}
<section className="py-12 md:py-section-padding bg-surface">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md text-primary mb-2">Our Strategic Advantage</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Bridging the gap with local expertise and global standards.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Cards */}
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">insights</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Market Intelligence</h3>
<p className="text-on-surface-variant">Data-driven analysis of emerging sectors and cross-border regulatory frameworks.</p>
</div>
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">handshake</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Business Matchmaking</h3>
<p className="text-on-surface-variant">Connecting high-growth startups with strategic enterprise partners across regions.</p>
</div>
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">query_stats</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Investment Insights</h3>
<p className="text-on-surface-variant">Exclusive reports on high-yield opportunities in the Rwanda-Guinea corridor.</p>
</div>
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">groups</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Local Partnerships</h3>
<p className="text-on-surface-variant">Deep-rooted relationships with government bodies and local private sectors.</p>
</div>
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">swap_horiz</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Cross-Border Trade</h3>
<p className="text-on-surface-variant">Facilitating seamless logistics and trade finance solutions between trade hubs.</p>
</div>
<div className="p-8 bg-surface-container-lowest border border-outline-variant rounded-xl hover:shadow-xl transition-shadow duration-300">
<span className="material-symbols-outlined text-4xl text-secondary mb-4">strategy</span>
<h3 className="font-headline-sm text-headline-sm mb-3">Strategic Advisory</h3>
<p className="text-on-surface-variant">Expert guidance on market entry, scale-up operations, and risk mitigation.</p>
</div>
</div>
</div>
</section>
{/* Opportunities Bento Grid */}
<section className="py-12 md:py-section-padding bg-surface-container-low">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-headline-md text-headline-md text-primary">Strategic Sectors</h2>
<p className="text-on-surface-variant">Key investment opportunities currently being mobilized.</p>
</div>
<a className="text-secondary font-label-caps flex items-center gap-1 hover:gap-2 transition-all" href="/sector-analysis-mining-resources">VIEW ALL SECTORS <span className="material-symbols-outlined">arrow_forward</span></a>
</div>
<div className="bento-grid">
{/* Mining */}
<div className="col-span-12 md:col-span-8 group relative h-80 rounded-xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2eVrYtZ8F_FG8K_4CDuos3NXBavB4bzAYZL8qaGVlnpCQPFZdrnNFNWfS_w8PKjF0EIckSTwcYJVCJNY03-dAFduVtMgtJNv4cC6L7b8W-72cozUaD1x8g_E-u7K8GgDR5-XmEM_VVw6yUm6WLjWucPPkhjF0UD0Sn9zi-4NptSIOJTDwSJXI7CVIFP3ISNU_2dOUHMzBsQDwI_7u37pqcbondrmMCPiNAKB7xYymtVKqCqcQ8Ufl7L6xRPuXc0EDmLuR9JFP0J2X" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<span className="px-3 py-1 bg-secondary text-on-secondary rounded font-label-caps text-[10px] w-fit mb-2">HIGH GROWTH</span>
<h4 className="font-headline-sm text-white">Mining &amp; Extraction</h4>
<p className="text-white/70 max-w-md">Capitalizing on Guinea's world-class bauxite and iron ore reserves with sustainable tech.</p>
</div>
</div>
{/* Agriculture */}
<div className="col-span-12 md:col-span-4 group relative h-80 rounded-xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA817E_jFwfXX5coLQNDyVrFd0zfiWBUzXZphSz_RsQJkeX85JDvGj7KNyUz3PiT2DEoem5NYaU-Ftb3sPUVVL47zqkWza639P7GsRXqSDya5fTRysg0GG_7hc0C2YW4K8NHKN_pEKUjQaQ_DJPGAtTayhKu0m6OgcVQRAaY_82sDv2W3BPBXME1eOGkAa0OXvla3GOBjbY7w0s3l2f67pAcGLT0nSQlICG67B2kFMuqaiYxmqND7pAQytAVxHnr-Mpz69hOy9BAtJL" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<h4 className="font-headline-sm text-white">Agriculture</h4>
<p className="text-white/70">Export-oriented high-value crops and food security systems.</p>
</div>
</div>
{/* Tech */}
<div className="col-span-12 md:col-span-4 group relative h-80 rounded-xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0hViwUdfqUKDPaEtcvI5HlgRhcaWWVoS32arx9lvGveinkOG6ilysr1uTRE6kFXHPv6Iv1aBLo8-k7FVIlozArMJ1JtmS5hY4wW01z403aR2NahU8fhdJAfoft-P9mkEbBcKgX3vtrzvEm-DSsFmCVgbMnPuNcZiPphG_VEpd-5R8qBZv4IJaEfxzpCilVgNf8wUm-iq4y4SRuIpeaOq_CUi1WWW4ZWqqrB6DtuJBq5uzKw1Imlcu_2miIlocyxXg25Rmda8G956i" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<h4 className="font-headline-sm text-white">Technology</h4>
<p className="text-white/70">Rwanda's burgeoning software development and AI ecosystem.</p>
</div>
</div>
{/* Logistics */}
<div className="col-span-12 md:col-span-4 group relative h-80 rounded-xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYAeGbIvD5J4SYLv0-8HLd5yGOcua2jT6vaUhIFMyVg7omyabUJbgsOv2VQh_iTOCrXPENljz3aV3-EaNC4HMx5eQgsi97rZUwmV9jKmtz1EWUcoPljzA_YbAI4Q6viGBsSHwjpjTjoCY6gfwZr0UcrQYJxQ4Mq1IcEslhc8SvR2D5lxCPNlLus2knFNNvDPIvfBuNbUx_6oe3zam-nxCqRKATQd7ymvUKODashIRsvJnhd14Yz7sncybOKH-xIbLo26krnLrc9RHI" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<h4 className="font-headline-sm text-white">Logistics</h4>
<p className="text-white/70">Connecting East and West through optimized freight corridors.</p>
</div>
</div>
{/* Hospitality */}
<div className="col-span-12 md:col-span-4 group relative h-80 rounded-xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYzjz5zpL59tr6Du-sMATDwNHSg9-ckDsDZm5MK_Kuv2xDWNqBcfbmMDy3sqrhse7LLI8xzAFRH5DA3mIpRpQLpBr4JLv8D6L0QR3VzC9Yn47JpFfXPbRNWRCmF2h8YLRy6fg0B5g4j1ma1ABTBL88XT9wt6hhRYY5sQ5VcyqhltNqjH9JFUHEhK1kW5HX9d9SvLC-zijNkvIJ-J5AEQbhQlg3XWz21mcZz0DaIjGgQ0DxmwpfxetDN0gi3D97FvltpJHFo6VYEEZo" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
<h4 className="font-headline-sm text-white">Hospitality</h4>
<p className="text-white/70">Luxury tourism and high-end corporate accommodations.</p>
</div>
</div>
</div>
</div>
</section>
{/* Rwanda <=> Guinea Split Screen */}
<section className="flex flex-col md:flex-row md:min-h-screen">
<div className="relative min-h-[50svh] flex-1 group overflow-hidden border-b border-outline-variant md:min-h-0 md:border-b-0 md:border-r md:border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp_VoPikPR3uXmZ2FEnh2A61JQThDrSFBAJD6VnPTH0gBC2QdtSSNqIpLgx2PAmYhpHjCkrk70QKadHNmpFuvn31QZJE5t6_OLvWgK0Vy-bJr4h5kKQSqhnwFFN0tEu4q6gQoIyB9-JuH4KAr0Cu8VpWNP3CX_XVyloQo3W7GpTQQtiFoNPR9TYdYFJkBcIj1FtT14ixs-05_m_aq0Am8sxVtgIlEDCuw_w628cnKpsy8WM3RUkUApvpkPM_Cc_YETrL9d5S8VXwOo" />
<div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
<div className="relative flex h-full min-h-[50svh] flex-col justify-center items-center text-center px-margin-mobile py-12 md:min-h-0 md:p-12 text-white">
<h3 className="font-display-lg text-3xl md:text-4xl mb-4 italic">Rwanda</h3>
<p className="font-body-lg mb-8 max-w-sm">Innovation hubs, technology-driven ecosystems, and the continent's cleanest business environment.</p>
<button className="px-6 py-2 border border-white rounded font-label-caps hover:bg-white hover:text-primary transition-all">DISCOVER RWANDA</button>
</div>
</div>
<div className="relative min-h-[50svh] flex-1 group overflow-hidden md:min-h-0">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNXeDMPpM0qWYcFs12ERb2gVqvy6VpsFDCUBA_4TWJg6EGUn6osMaV9kvvzb7lO-nxfnAWSjTtQDdC5lFwBv5_ZbkEhEPsLse9Dq4rb93F5A_0SqIifuMCKC9hQKgT96_huHEStGemCXlQ7V_ruqiyurFc7pD0iavfsGKMLpXiIiNhgkfci8d69FFhIBygHD46k0i5FTqg1BSWMH78EJBo8At6sDefkQVqSsfWj_cjzWdOMIQN5vbKpT87TBmO81FHgrpr_l-4uxDF" />
<div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/20 transition-colors"></div>
<div className="relative flex h-full min-h-[50svh] flex-col justify-center items-center text-center px-margin-mobile py-12 md:min-h-0 md:p-12 text-white">
<h3 className="font-display-lg text-3xl md:text-4xl mb-4 italic">Guinea</h3>
<p className="font-body-lg mb-8 max-w-sm">Unmatched natural resources, burgeoning mining clusters, and rich agricultural potential.</p>
<button className="px-6 py-2 border border-white rounded font-label-caps hover:bg-white hover:text-secondary transition-all">DISCOVER GUINEA</button>
</div>
</div>
</section>
{/* Insights & News */}
<section className="py-12 md:py-section-padding bg-surface">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="border-b border-primary pb-4 mb-12 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-end">
<h2 className="font-headline-md text-headline-md text-primary uppercase tracking-tighter italic">Investment Insights</h2>
<span className="text-on-surface-variant font-label-caps shrink-0">LAST UPDATED: 24 MAY 2024</span>
</div>
<div className="grid grid-cols-12 gap-gutter">
{/* Featured Article */}
<div className="col-span-12 md:col-span-8 flex flex-col gap-6">
<img className="w-full h-96 object-cover rounded shadow-sm border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHDC-I2-Ze8ukC7iyT7XLlC2pMdpZ50SOax7xXAkTGiW3TEURr9YG17zYmLqLAO29v1DclLvVHeTgw6NqI_DSAjXvNckNvYobKu2OZ9dtWE6qACA8Bw9RgdlAvhbpCfnMlZeKGLyaXmZp99FaYJsiJ-NYvtkC7_bkLSO9pxSkGxCqtYWApVsRu4rdYfElTAf2_pwFW4akWroTpqT3hfRJAKCS0KPzWsOe1D8RL1x0ZhoMIk7I59v6iRmVO5RAXfwB67K3dE9gIjm17" />
<div>
<span className="text-secondary font-label-caps block mb-2">QUARTERLY REPORT</span>
<h3 className="font-display-lg text-3xl mb-4 hover:text-secondary cursor-pointer transition-colors">The Bauxite Corridor: Guinea's Roadmap to 2030</h3>
<p className="text-on-surface-variant font-body-lg mb-6">An in-depth analysis of regulatory shifts and infrastructure investments transforming the West African mineral landscape. Learn how international partnerships are reshaping value chains.</p>
<div className="flex items-center gap-4 text-on-surface-variant font-label-caps border-t border-outline-variant pt-4">
<span>BY MARCUS OSEI</span>
<span>•</span>
<span>12 MIN READ</span>
</div>
</div>
</div>
{/* Side Articles */}
<div className="col-span-12 md:col-span-4 flex flex-col gap-8">
<div className="border-b border-outline-variant pb-6 group">
<span className="text-on-tertiary-container font-label-caps block mb-2 uppercase">Tech Policy</span>
<h4 className="font-headline-sm text-lg group-hover:text-secondary cursor-pointer transition-colors">Rwanda's AI Regulatory Sandbox: What Investors Need to Know</h4>
<p className="text-on-surface-variant text-sm mt-2">New incentives for fintech startups entering the Kigali Innovation City ecosystem.</p>
</div>
<div className="border-b border-outline-variant pb-6 group">
<span className="text-secondary font-label-caps block mb-2 uppercase">Logistics</span>
<h4 className="font-headline-sm text-lg group-hover:text-secondary cursor-pointer transition-colors">Port of Conakry Expansion Milestone Reached</h4>
<p className="text-on-surface-variant text-sm mt-2">Phase 2 completion increases annual throughput capacity by 25%.</p>
</div>
<div className="border-b border-outline-variant pb-6 group">
<span className="text-secondary font-label-caps block mb-2 uppercase">Market Update</span>
<h4 className="font-headline-sm text-lg group-hover:text-secondary cursor-pointer transition-colors">Cross-Border Banking Protocol Signed</h4>
<p className="text-on-surface-variant text-sm mt-2">New framework simplifies capital movement between Rwandan and Guinean financial institutions.</p>
</div>
<button className="w-full py-4 border border-primary text-primary font-label-caps hover:bg-primary hover:text-white transition-all uppercase tracking-widest">Access All Reports</button>
</div>
</div>
</div>
</section>
{/* Events Section */}
<section className="py-12 md:py-section-padding bg-surface-container-highest">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-md text-headline-md">Upcoming Events</h2>
<p className="text-on-surface-variant mt-2">Exclusive networking opportunities for institutional partners.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-lowest flex flex-col md:flex-row rounded-xl overflow-hidden border border-outline-variant group">
<div className="w-full md:w-1/3 bg-primary p-8 flex flex-col justify-center items-center text-on-primary">
<span className="text-4xl font-bold font-display-lg">15</span>
<span className="font-label-caps">JUNE</span>
</div>
<div className="p-8 flex-1">
<h4 className="font-headline-sm mb-2 group-hover:text-secondary transition-colors">EastWest Investment Forum</h4>
<p className="text-on-surface-variant mb-4">Kigali, Rwanda • Hybrid Event</p>
<p className="text-sm mb-6">Annual summit bringing together 50+ C-suite executives from Guinea and Rwanda to discuss collaborative infrastructure projects.</p>
<button className="text-secondary font-label-caps underline hover:text-primary transition-colors">REGISTER NOW</button>
</div>
</div>
<div className="bg-surface-container-lowest flex flex-col md:flex-row rounded-xl overflow-hidden border border-outline-variant group">
<div className="w-full md:w-1/3 bg-secondary p-8 flex flex-col justify-center items-center text-on-secondary">
<span className="text-4xl font-bold font-display-lg">22</span>
<span className="font-label-caps">JULY</span>
</div>
<div className="p-8 flex-1">
<h4 className="font-headline-sm mb-2 group-hover:text-secondary transition-colors">Mining Innovation Workshop</h4>
<p className="text-on-surface-variant mb-4">Conakry, Guinea • In-Person</p>
<p className="text-sm mb-6">Technical roundtable on implementing AI-driven geological surveying in West African mining concessions.</p>
<button className="text-secondary font-label-caps underline hover:text-primary transition-colors">REGISTER NOW</button>
</div>
</div>
</div>
</div>
</section>
{/* Investor CTA */}
<section className="py-12 md:py-section-padding bg-primary text-on-primary">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
<h2 className="font-display-lg text-4xl mb-6">Looking to Expand Into African Markets?</h2>
<p className="font-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">Our strategic advisors are ready to help you navigate the complexity of emerging market growth with confidence and integrity.</p>
<div className="flex flex-wrap justify-center gap-stack-md">
<button className="px-10 py-4 bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps hover:bg-on-secondary-container transition-all">Book Consultation</button>
<button className="px-10 py-4 border border-on-primary-container text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-white/10 transition-all">Explore Markets</button>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
<div className="col-span-1 md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary mb-6 block">EastWest Africa</a>
<p className="text-on-surface-variant text-sm leading-relaxed">Pioneering the corridor of growth between East and West Africa through unparalleled market intelligence and strategic networking.</p>
</div>
<div>
<h5 className="font-label-caps text-primary mb-6">RESOURCES</h5>
<ul className="flex flex-col gap-4 text-on-surface-variant font-body-md">
<li><a className="hover:text-primary transition-colors" href="#">Investment Framework</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Newsletter</a></li>
<li><a className="hover:text-primary transition-colors" href="/contact-support">Contact Support</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-primary mb-6">LEGAL</h5>
<ul className="flex flex-col gap-4 text-on-surface-variant font-body-md">
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-primary mb-6">CONNECT</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl">share</span>
</a>
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-secondary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl">mail</span>
</a>
</div>
<p className="mt-8 text-on-surface-variant text-xs font-label-caps uppercase">© 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.</p>
</div>
</div>
</footer>
</>
  );
}
