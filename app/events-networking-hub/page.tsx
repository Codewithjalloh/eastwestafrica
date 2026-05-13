import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
<>
{/* TopNavBar */}
<header className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary docked full-width top-0 z-50 sticky">
<nav className="flex min-w-0 w-full items-center justify-between gap-3 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
<div className="flex min-w-0 items-center gap-stack-lg">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed shrink-0 truncate">EastWest Africa</a>
<div className="hidden md:flex items-center gap-stack-md">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-primary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary-fixed-dim pb-1 transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/our-story">About</a>
</div>
</div>
<div className="flex shrink-0 items-center gap-2 md:gap-stack-md">
<MobileNav />
<div className="hidden md:flex items-center gap-stack-md">
<button className="hidden lg:flex items-center gap-2 px-4 py-2 border border-outline rounded-lg font-label-caps text-label-caps text-on-surface-variant hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[20px]">search</span>
                    Search
                </button>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary transition-colors duration-200" href="#">Login</a>
<a href="/contact-support" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-caps text-label-caps hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</nav>
</header>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding space-y-12 md:space-y-section-padding">
{/* Featured Event Section */}
<section className="relative min-h-[280px] h-[52svh] md:h-[600px] rounded-xl overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10"></div>
<img alt="Featured Event" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDafVxkN8i-VaN8ayy4CIyBn4V7NgvrF2_ipAaudf_E5F1TwTWmIPpwiKSsNZL15DDeIvJoDuAg2pOqaHm9oFSjIp9g3Bj8pKiHRDUvFuvsXugblt3OMwQAd55ff89jUkgsVWeQ-kJZ8CDc15BdMmpdUlnjQxCTK7CP5j5r3CmZ0MzfwGb9CL96GfcY0YyvotRUs2oDtYDiubRSq9-gg1YSIJD1B9awJJi5IFUc_Bbv3-qIGPuZxXQiVygK8jOqykkOdGF9JjdJvmLv" />
<div className="relative z-20 h-full flex flex-col justify-center px-margin-mobile py-8 md:px-12 max-w-2xl text-on-primary">
<span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-caps text-label-caps mb-4">Flagship Event</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">East-West Investment Summit 2024</h1>
<p className="font-body-lg text-body-lg mb-8 opacity-90">Join over 500 global investors and African policymakers in Kigali for the definitive forum on transcontinental economic infrastructure.</p>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 mb-10 text-on-primary/80">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-data-tabular text-data-tabular">October 14-16, 2024</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined">location_on</span>
<span className="font-data-tabular text-data-tabular">Kigali Convention Centre</span>
</div>
</div>
<div className="flex flex-wrap gap-3">
<button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-secondary-fixed-dim transition-colors">Register Now</button>
<button className="border border-on-primary text-on-primary px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-on-primary/10 transition-colors">Download Agenda</button>
</div>
</div>
</section>
{/* Filters & Search */}
<section className="flex flex-col md:flex-row justify-between items-end gap-gutter border-b border-outline-variant pb-8">
<div className="space-y-stack-sm w-full md:w-auto">
<h2 className="font-headline-sm text-headline-sm">Upcoming Opportunities</h2>
<div className="flex flex-wrap gap-stack-md">
<button className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label-caps text-label-caps">All Events</button>
<button className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-caps text-label-caps hover:bg-surface-variant">Business Forums</button>
<button className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-caps text-label-caps hover:bg-surface-variant">Webinars</button>
<button className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label-caps text-label-caps hover:bg-surface-variant">Trade Missions</button>
</div>
</div>
<div className="flex gap-stack-md w-full md:w-auto">
<div className="relative flex-grow">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full md:w-64 pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none font-body-md" placeholder="Search by city or keyword..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-surface-container-high border border-outline-variant rounded-lg font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[20px]">tune</span>
                    Location
                </button>
</div>
</section>
{/* Chronological Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* Event Card 1 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
<div className="h-48 relative">
<img alt="Guinea-Rwanda Trade Dialogue" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYjJS6PQWHoink3WzjPxGfPaBd_hZ8RhHtT-sFl7ng72G_cOtzQTJlBttp91-2JcM0IyxkME0RMGQ2uuxWGjnmah6_5XFUK2Rvf9Jo5Vy7yjwpDxJHXpmBfk4P9MfctMqCrH-58dQl5lJxq6XnAS1ObX7kP5VC3uV0nE_hdcx-BzgJDgNFtvbsCSXfQS5jqB2hXZGtiVXsEi5-VjwmiokNpWPuX-VZHALaCujfWNCE8LIGfObAVQA-OYc9sbiQtGuY9lGBGTuDcMm" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded text-center">
<span className="block font-bold text-headline-sm leading-tight">12</span>
<span className="block font-label-caps text-[10px] uppercase">Nov</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-secondary">Business Forum</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span className="font-data-tabular text-[12px]">Conakry, Guinea</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm">Guinea-Rwanda Trade Dialogue</h3>
<p className="text-on-surface-variant font-body-md line-clamp-2">Exploration of bilateral trade agreements and logistics corridors for mining equipment and services.</p>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant">
<span className="font-data-tabular text-data-tabular">Seats remaining: 14</span>
<button className="text-primary font-label-caps text-label-caps hover:underline">Register Now</button>
</div>
</div>
</article>
{/* Event Card 2 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
<div className="h-48 relative">
<img alt="Pan-African Fintech Outlook" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp9ZvSTCvM9Nx-ZH9AmlXKMQNPcW4-vuSidSUR3YbOPt6ol6MbOmKzUwhdIAP45qPJtsPPHGzkNWH82-fgVnDdHjrECIttvWUyj1QgkUxsyZrrWkKC7OH9jMqn7r4C33xlSWKXkWMVNhVIUUMHIhkpcH6qJ8O31xEF32hdVtDvQZu2qxabZMoL0ZBs0MeIS8oqBO0mbf4Nssx5nJam5_zj3Jny5Ixgr4HkD2qbhJVj_evCnHYK6WUKsZXyRSO4-qR1B7kDxpuhvjbK" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded text-center">
<span className="block font-bold text-headline-sm leading-tight">05</span>
<span className="block font-label-caps text-[10px] uppercase">Dec</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-on-tertiary-container">Webinar</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">videocam</span>
<span className="font-data-tabular text-[12px]">Virtual Session</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm">Pan-African Fintech Outlook</h3>
<p className="text-on-surface-variant font-body-md line-clamp-2">Expert panel discussion on cross-border payment regulations and digital asset management in Sub-Saharan Africa.</p>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant">
<span className="font-data-tabular text-data-tabular">Free Admission</span>
<button className="text-primary font-label-caps text-label-caps hover:underline">Register Now</button>
</div>
</div>
</article>
{/* Event Card 3 */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
<div className="h-48 relative">
<img alt="Logistics &amp; Infrastructure Tour" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEQYrUv5EE76oN9l8wIlGkoTlQWGsG2jLLTslZKySk7at9ganpJ8P1FsU2dfNK33SwnHy96WGO8RN3g48U6taK04eLnOKZGNBnhdYtFlBv0nbTdo7A0kgu_xBwWJDvrFHZUSuoQGffB18P8y4bdaet-JgBwZvllbUGcU34_2jebJiWl-iCqAUcTnsDVxGXFcG1wKiv9OTKvEyscbKRUh1Y2EPsAp4WzT2WDgt1LNjfDfrWlBprCEEpQAPGWMrDWenzQ-I94ytShFra" />
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded text-center">
<span className="block font-bold text-headline-sm leading-tight">22</span>
<span className="block font-label-caps text-[10px] uppercase">Jan</span>
</div>
</div>
<div className="p-6 space-y-4">
<div className="flex justify-between items-start">
<span className="font-label-caps text-label-caps text-secondary">Trade Mission</span>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">location_on</span>
<span className="font-data-tabular text-[12px]">Kigali, Rwanda</span>
</div>
</div>
<h3 className="font-headline-sm text-headline-sm">Logistics &amp; Infrastructure Tour</h3>
<p className="text-on-surface-variant font-body-md line-clamp-2">A guided mission through Rwanda's key special economic zones and the Bugesera Airport construction site.</p>
<div className="pt-4 flex items-center justify-between border-t border-outline-variant">
<span className="font-data-tabular text-data-tabular">Delegation: 25 max</span>
<button className="text-primary font-label-caps text-label-caps hover:underline">Inquire</button>
</div>
</div>
</article>
</section>
{/* Past Highlights Gallery */}
<section className="space-y-stack-lg">
<div className="flex justify-between items-center">
<h2 className="font-headline-md text-headline-md">Past Highlights</h2>
<button className="flex items-center gap-2 text-primary font-label-caps text-label-caps group">
                    View Full Archive
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
</button>
</div>
<div className="bento-grid h-[500px]">
<div className="col-span-12 md:col-span-8 relative rounded-xl overflow-hidden group">
<img alt="Highlight 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARJtpL2oBTBnwBuOCSiyE9YIYewKGD4KTX5_1LSesOohnOjwWUHcVA-xl8OaV83yvZSqqMhFWUlIezlEfuRQLtMUkk1tQW9e92OhzfAarPunTplJPN2F2cwNV-_PJUR2rqzxmJ1cGWDPDlpJIofcmz5jKdVeumfnInd1BLwFRqNhYdXuoQiVDPmc4TovG2TPvsBUX5o9H1AxzUUkhheDADZ923ibzKugCJOwIbbJoNKijtyofPFoOEM4w5Rc1YOvg2MDhMfV5hGqaR" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
<div>
<h4 className="text-on-primary font-headline-sm mb-2">East-West Energy Forum 2023</h4>
<p className="text-on-primary/70 font-body-md">Conakry, Guinea • 1,200+ Attendees</p>
</div>
</div>
</div>
<div className="col-span-6 md:col-span-4 relative rounded-xl overflow-hidden group">
<img alt="Highlight 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJM9ry_iFkMZlldXjp6WJDeioyW-T8hjuzxIGAbAaTSZUsop3b8ImUC7NBtiWIuv03Sau5ryVSJ98eOi6KnYnpq_i8yblwPMYJk5yL666f-ZT3cKm_QuJWBRmm6JaGp-RFnnZnNji1QaD1PLHk-zZQR8rULdO2OjLjnAC_QzitDOdaOjd-seAPTdLUhHFEeIZvs20KdyVu_1M0zL5pwo_WzMQ5SHfYWH0OnHJuksrNjzTR956tnv70akYzyUnRVcVomq1K9Rwpwx8G" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
<p className="text-on-primary font-body-md font-bold">VIP Networking Gala</p>
</div>
</div>
<div className="hidden md:block md:col-span-4 relative rounded-xl overflow-hidden group">
<img alt="Highlight 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmNl4yfIVvOsvOgD8Y8C4CM8vmhf2WhAH31fp8tdnNWEP_uN9n3O7r83KsNMTJtNzY3E94fpckQEwvWp6vm7JuUj49KvxeEwC5nnp0DXObqDEAqXFPshn1N4_ZjAELmxHSBUEgRALovAjMn029mXZOuFy62M1TdrFAlB-VIS8KxJID-cwWD1emPa7iDc3nfUBO5PnjRUzvuZWHidQ9vsM_-t1bRxdYInLip08a8VWP7HEsxWF3TLEmA-LYa9S4uP_GEHqyf0eGTGks" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
<p className="text-on-primary font-body-md font-bold">Tech Innovators Summit</p>
</div>
</div>
</div>
</section>
{/* Newsletter CTA */}
<section className="bg-primary-container rounded-2xl p-12 text-center space-y-stack-md">
<h2 className="font-display-lg text-display-lg text-on-primary">Stay Informed on Upcoming Missions</h2>
<p className="text-on-primary-container font-body-lg max-w-2xl mx-auto">Get exclusive invitations to trade missions and private business forums directly in your inbox.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
<input className="flex-grow bg-surface-container-highest border-none rounded-lg px-6 py-3 text-on-surface focus:ring-2 focus:ring-secondary-fixed outline-none" placeholder="Professional email address" type="email"/>
<button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-lg font-label-caps text-label-caps hover:bg-secondary-fixed-dim transition-colors whitespace-nowrap" type="submit">Subscribe</button>
</form>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
<div className="space-y-stack-md">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="font-body-md text-on-surface-variant dark:text-on-primary-container">Connecting Rwanda &amp; Guinea through strategic investment and operational excellence.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed">Network</h4>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/market-insights-intelligence">Insights</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed">Company</h4>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/our-story">About Us</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="/contact-support">Contact Support</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-label-caps text-label-caps text-on-surface dark:text-on-primary-fixed">Legal</h4>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Investment Framework</a>
<a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Newsletter</a>
</div>
</div>
<div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant max-w-container-max mx-auto">
<p className="font-body-md text-center md:text-left text-on-surface-variant dark:text-on-primary-container">© 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.</p>
</div>
</footer>
</>
  );
}
