import { MobileNav } from "@/components/mobile-nav";

export default function Page() {
  return (
<>
{/* TopNavBar */}
<header className="bg-surface dark:bg-primary-container border-b border-outline-variant dark:border-primary docked full-width top-0 z-50 sticky">
<div className="flex min-w-0 w-full items-center justify-between gap-3 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto h-20">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed shrink-0 truncate">EastWest Africa</a>
<nav className="hidden md:flex items-center space-x-stack-lg">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/investment-opportunities">Opportunities</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/market-insights-intelligence">Insights</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/strategic-partnerships">Services</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/events-networking-hub">Events</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/sector-analysis-mining-resources">Sectors</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200" href="/our-story">About</a>
</nav>
<div className="flex shrink-0 items-center space-x-2 md:space-x-stack-md">
<MobileNav />
<div className="hidden md:flex items-center space-x-stack-md">
<a href="/login" className="hidden lg:block text-on-surface font-semibold hover:text-secondary transition-colors duration-200">Login</a>
<a href="/contact-support" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition-opacity">Contact Us</a>
</div>
</div>
</div>
</header>
<main>
{/* Hero Section */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-b border-outline-variant">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-md">Global Access, <span className="text-secondary">Local Presence</span>.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Connecting Rwanda and Guinea through strategic partnership and investment framework excellence. Reach out to our executive team.</p>
</section>
{/* Contact Form & Specialist Paths */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Inquiry Form */}
<div className="lg:col-span-7 bg-surface-container-lowest p-stack-lg rounded-xl border border-outline-variant shadow-sm">
<h2 className="font-headline-md text-headline-md mb-stack-lg">Send an Inquiry</h2>
<form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps uppercase text-on-surface-variant">Full Name</label>
<input className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-caps text-label-caps uppercase text-on-surface-variant">Company Name</label>
<input className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="Enterprise Ltd" type="text"/>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<label className="font-label-caps text-label-caps uppercase text-on-surface-variant">Interest Area</label>
<select className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none bg-white">
<option>Investment Framework</option>
<option>General Partnerships</option>
<option>Media Inquiries</option>
<option>Logistic Support</option>
</select>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<label className="font-label-caps text-label-caps uppercase text-on-surface-variant">Message</label>
<textarea className="border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" placeholder="How can we assist your business expansion?" rows={5}></textarea>
</div>
<div className="md:col-span-2 pt-stack-sm">
<button className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">Submit Request</button>
</div>
</form>
</div>
{/* Specialized Paths */}
<div className="lg:col-span-5 flex flex-col gap-stack-md">
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant group hover:border-secondary transition-colors">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary text-3xl">campaign</span>
<div>
<h3 className="font-headline-sm text-headline-sm mb-1">Media Inquiries</h3>
<p className="font-body-md text-on-surface-variant">For press releases, brand assets, and interview requests with our leadership.</p>
<a className="text-primary font-bold mt-2 block hover:underline" href="mailto:media@eastwestafrica.com">media@eastwestafrica.com</a>
</div>
</div>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant group hover:border-secondary transition-colors">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
<div>
<h3 className="font-headline-sm text-headline-sm mb-1">Investment Support</h3>
<p className="font-body-md text-on-surface-variant">Strategic guidance for high-net-worth individuals and corporate institutions.</p>
<a className="text-primary font-bold mt-2 block hover:underline" href="mailto:invest@eastwestafrica.com">invest@eastwestafrica.com</a>
</div>
</div>
</div>
<div className="bg-surface-container p-6 rounded-xl border border-outline-variant group hover:border-secondary transition-colors">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary text-3xl">handshake</span>
<div>
<h3 className="font-headline-sm text-headline-sm mb-1">General Partnerships</h3>
<p className="font-body-md text-on-surface-variant">Explore collaborative opportunities within the Guinea-Rwanda economic corridor.</p>
<a className="text-primary font-bold mt-2 block hover:underline" href="mailto:partners@eastwestafrica.com">partners@eastwestafrica.com</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Office Details & Map Section */}
<section className="bg-surface-container-high py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
<div>
<h2 className="font-display-lg text-display-lg mb-stack-lg">Regional Headquarters</h2>
<div className="space-y-stack-lg">
<div className="flex gap-stack-md">
<div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm">Kigali, Rwanda</h4>
<p className="text-on-surface-variant mt-1">Nyarutarama Business District, KG 9 Ave<br />Level 4, EastWest Plaza, Kigali</p>
<p className="font-semibold text-primary mt-2">+250 788 000 000</p>
</div>
</div>
<div className="flex gap-stack-md">
<div className="bg-primary text-on-primary w-12 h-12 flex items-center justify-center rounded-lg shrink-0">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<h4 className="font-headline-sm text-headline-sm">Conakry, Guinea</h4>
<p className="text-on-surface-variant mt-1">Cité des Nations, Kaloum District<br />Immeuble Horizon, Conakry</p>
<p className="font-semibold text-primary mt-2">+224 622 000 000</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl overflow-hidden h-[450px] shadow-lg border border-outline-variant relative">
<img className="w-full h-full object-cover grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZYHPlapSp4Zh2NHrveRMmDHs7Gjexy2HpjFatYOjw2TYBpKAT3vNRN9PQKSVI_o7g-Lf3qa6Dcj65Vx5Jqxls_yho5mTtMKLnkgR-OBZtG3yTfhPgOKDlU7wsEYg7jFJXBgOY9D1czyA8ttnRP-Rdt_mHOOCT3Iy578iL92HXa9_v-zYFqBh1PAXhhXlQ0XgjCcNf5r-Erodm-KV04SCa9Er3HMpwoHZJuAW2GyrWsFlfU8JhBnJl4GPBU2FFWR2A2jPjGH05bQCs" />
<div className="absolute inset-0 bg-primary/20 pointer-events-none"></div>
<div className="absolute bottom-6 left-6 bg-surface-container-lowest p-4 rounded-lg shadow-xl border border-outline-variant">
<p className="font-label-caps text-label-caps uppercase text-on-surface-variant">Operational Hubs</p>
<p className="font-body-md font-bold">Kigali &amp; Conakry</p>
</div>
</div>
</div>
</div>
</section>
{/* FAQ Section */}
<section className="py-12 md:py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center mb-stack-lg">
<h2 className="font-headline-md text-headline-md">Frequently Asked Questions</h2>
<p className="text-on-surface-variant">Quick answers for potential investors and partners.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
<div className="p-6 border-b border-outline-variant">
<h4 className="font-body-lg font-bold mb-2">How do I register as a potential investor?</h4>
<p className="font-body-md text-on-surface-variant">Submit your initial inquiry via the form above selecting 'Investment Support'. Our compliance team will reach out within 48 hours with the framework documentation.</p>
</div>
<div className="p-6 border-b border-outline-variant">
<h4 className="font-body-lg font-bold mb-2">Are there physical offices in both countries?</h4>
<p className="font-body-md text-on-surface-variant">Yes, EastWest Africa maintains fully staffed operational headquarters in both Kigali and Conakry to facilitate localized business operations.</p>
</div>
<div className="p-6 border-b border-outline-variant">
<h4 className="font-body-lg font-bold mb-2">What sectors do you primarily support?</h4>
<p className="font-body-md text-on-surface-variant">We focus on strategic sectors including Mining, Agriculture, Digital Infrastructure, and Logistics to drive bilateral economic growth.</p>
</div>
<div className="p-6 border-b border-outline-variant">
<h4 className="font-body-lg font-bold mb-2">Can I request a direct meeting?</h4>
<p className="font-body-md text-on-surface-variant">Direct meetings with regional directors can be scheduled following an initial project review. Please provide a summary of your proposal in your message.</p>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-surface-container-highest dark:bg-primary-container border-t border-outline-variant dark:border-primary">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-12 md:py-section-padding max-w-container-max mx-auto">
<div className="md:col-span-1">
<a href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed">EastWest Africa</a>
<p className="font-body-md text-body-md text-on-surface-variant dark:text-on-primary-container">Strategic economic bridges between East and West Africa.</p>
</div>
<div className="flex flex-col gap-2">
<h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Legal</h5>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Investment Framework</a>
</div>
<div className="flex flex-col gap-2">
<h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Contact</h5>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/contact-support">Contact Support</a>
<a className="text-on-surface-variant dark:text-on-primary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Newsletter</a>
</div>
<div className="flex flex-col gap-2">
<h5 className="font-label-caps text-label-caps uppercase text-primary mb-2">Subscribe</h5>
<div className="flex border border-outline rounded-lg overflow-hidden">
<input className="bg-transparent p-2 outline-none w-full border-none focus:ring-0" placeholder="Email Address" type="email"/>
<button className="bg-primary text-on-primary px-4"><span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>
<div className="px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/30 text-center text-on-surface-variant dark:text-on-primary-container text-sm">
            © 2024 EastWest Africa. All rights reserved. Connecting Rwanda &amp; Guinea.
        </div>
</footer>
</>
  );
}
