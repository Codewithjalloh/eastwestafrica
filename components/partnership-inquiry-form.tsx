import type { ReactNode } from "react";

const inputClass =
  "border border-outline p-3 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none w-full bg-white";
const labelClass = "font-label-caps text-label-caps uppercase text-on-surface-variant";
const sectionClass = "md:col-span-2 pt-stack-md border-t border-outline-variant first:border-t-0 first:pt-0";

const SECTORS = [
  "Mining & Extraction",
  "Agriculture",
  "Technology & Digital Infrastructure",
  "Logistics & Trade",
  "Hospitality & Real Estate",
  "Energy & Utilities",
  "Financial Services",
] as const;

function FormField({
  label,
  htmlFor,
  children,
  className = "",
  hint,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-on-surface-variant">{hint}</p> : null}
    </div>
  );
}

function SectionHeading({ title, description }: { title: string; description?: string }) {
  return (
    <div className={sectionClass}>
      <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{title}</h3>
      {description ? (
        <p className="font-body-md text-on-surface-variant mb-stack-md">{description}</p>
      ) : null}
    </div>
  );
}

export function PartnershipInquiryForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
      <SectionHeading
        title="Your details"
        description="Primary contact for this partnership inquiry."
      />

      <FormField label="First Name *" htmlFor="firstName">
        <input
          id="firstName"
          className={inputClass}
          placeholder="Jane"
          type="text"
          name="firstName"
          autoComplete="given-name"
          required
        />
      </FormField>

      <FormField label="Last Name *" htmlFor="lastName">
        <input
          id="lastName"
          className={inputClass}
          placeholder="Doe"
          type="text"
          name="lastName"
          autoComplete="family-name"
          required
        />
      </FormField>

      <FormField label="Job Title *" htmlFor="jobTitle">
        <input
          id="jobTitle"
          className={inputClass}
          placeholder="Managing Director, Head of Investments"
          type="text"
          name="jobTitle"
          autoComplete="organization-title"
          required
        />
      </FormField>

      <FormField label="Work Email *" htmlFor="email">
        <input
          id="email"
          className={inputClass}
          placeholder="jane@company.com"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </FormField>

      <FormField label="Phone" htmlFor="phone" hint="Include country code, e.g. +250 or +224">
        <input
          id="phone"
          className={inputClass}
          placeholder="+250 788 000 000"
          type="tel"
          name="phone"
          autoComplete="tel"
        />
      </FormField>

      <FormField label="Preferred Contact Method" htmlFor="contactMethod">
        <select id="contactMethod" className={`${inputClass} appearance-none`} name="contactMethod" defaultValue="email">
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="video">Video call</option>
          <option value="in-person">In-person meeting</option>
        </select>
      </FormField>

      <SectionHeading
        title="Organization"
        description="Tell us about the institution or company representing this inquiry."
      />

      <FormField label="Organization Name *" htmlFor="organization" className="md:col-span-2">
        <input
          id="organization"
          className={inputClass}
          placeholder="Institution or enterprise name"
          type="text"
          name="organization"
          autoComplete="organization"
          required
        />
      </FormField>

      <FormField label="Organization Type *" htmlFor="organizationType">
        <select
          id="organizationType"
          className={`${inputClass} appearance-none`}
          name="organizationType"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select type
          </option>
          <option value="sovereign">Sovereign Fund / Government Entity</option>
          <option value="financial">Financial Institution</option>
          <option value="multinational">Multinational Enterprise</option>
          <option value="sme">SME / Growth Company</option>
          <option value="logistics">Logistics &amp; Trade Operator</option>
          <option value="advisory">Advisory / Professional Services</option>
          <option value="ngo">NGO / Diplomatic Mission</option>
          <option value="association">Industry Association</option>
          <option value="other">Other</option>
        </select>
      </FormField>

      <FormField label="Organization Size" htmlFor="organizationSize">
        <select id="organizationSize" className={`${inputClass} appearance-none`} name="organizationSize" defaultValue="">
          <option value="">Select size (optional)</option>
          <option value="1-50">1–50 employees</option>
          <option value="51-250">51–250 employees</option>
          <option value="251-1000">251–1,000 employees</option>
          <option value="1000+">1,000+ employees</option>
        </select>
      </FormField>

      <FormField label="Website" htmlFor="website">
        <input
          id="website"
          className={inputClass}
          placeholder="https://www.company.com"
          type="url"
          name="website"
          autoComplete="url"
        />
      </FormField>

      <FormField label="Headquarters Country *" htmlFor="hqCountry">
        <input
          id="hqCountry"
          className={inputClass}
          placeholder="Rwanda, Guinea, UAE, etc."
          type="text"
          name="hqCountry"
          autoComplete="country-name"
          required
        />
      </FormField>

      <SectionHeading
        title="Partnership scope"
        description="How you wish to engage within the Guinea–Rwanda economic corridor."
      />

      <FormField label="Partnership Tier *" htmlFor="partnershipTier">
        <select
          id="partnershipTier"
          className={`${inputClass} appearance-none`}
          name="partnershipTier"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select tier
          </option>
          <option value="strategic">Strategic — institutional capital &amp; long-term exposure</option>
          <option value="operational">Operational — execution &amp; cross-border operations</option>
          <option value="network">Network — ecosystem, advisory &amp; reach</option>
          <option value="undecided">Not sure — advise me</option>
        </select>
      </FormField>

      <FormField label="Corridor Focus *" htmlFor="corridorFocus">
        <select
          id="corridorFocus"
          className={`${inputClass} appearance-none`}
          name="corridorFocus"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select focus
          </option>
          <option value="rwanda">Rwanda (East Africa)</option>
          <option value="guinea">Guinea (West Africa)</option>
          <option value="both">Both Rwanda &amp; Guinea</option>
          <option value="regional">Broader regional expansion</option>
        </select>
      </FormField>

      <fieldset className="md:col-span-2 flex flex-col gap-3">
        <legend className={labelClass}>Sectors of Interest *</legend>
        <p className="text-xs text-on-surface-variant -mt-1">Select all that apply.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SECTORS.map((sector) => {
            const id = `sector-${sector.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <label
                key={sector}
                htmlFor={id}
                className="flex items-start gap-3 p-3 rounded-lg border border-outline-variant hover:border-secondary cursor-pointer transition-colors has-[:checked]:border-primary has-[:checked]:bg-surface-container-low"
              >
                <input
                  id={id}
                  type="checkbox"
                  name="sectors"
                  value={sector}
                  className="mt-0.5 rounded border-outline"
                />
                <span className="font-body-md text-sm text-on-surface">{sector}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <FormField label="Estimated Investment / Commitment" htmlFor="investmentRange">
        <select id="investmentRange" className={`${inputClass} appearance-none`} name="investmentRange" defaultValue="">
          <option value="">Select range (optional)</option>
          <option value="under-1m">Under USD 1M</option>
          <option value="1m-10m">USD 1M – 10M</option>
          <option value="10m-50m">USD 10M – 50M</option>
          <option value="50m-250m">USD 50M – 250M</option>
          <option value="250m+">USD 250M+</option>
          <option value="non-capital">Non-capital / advisory partnership</option>
        </select>
      </FormField>

      <FormField label="Target Timeline *" htmlFor="timeline">
        <select
          id="timeline"
          className={`${inputClass} appearance-none`}
          name="timeline"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Select timeline
          </option>
          <option value="immediate">Immediate (0–3 months)</option>
          <option value="near-term">Near-term (3–6 months)</option>
          <option value="medium-term">Medium-term (6–12 months)</option>
          <option value="long-term">Long-term (12+ months)</option>
          <option value="exploratory">Exploratory / no fixed date</option>
        </select>
      </FormField>

      <SectionHeading
        title="Proposal details"
        description="Share context so our partnerships team can prepare a tailored response."
      />

      <FormField label="Strategic Objectives *" htmlFor="objectives" className="md:col-span-2">
        <textarea
          id="objectives"
          className={inputClass}
          placeholder="Describe your partnership goals, expected outcomes, and any existing operations in Rwanda or Guinea."
          rows={5}
          name="objectives"
          required
        />
      </FormField>

      <FormField
        label="Current Stage"
        htmlFor="currentStage"
        hint="Where are you in the partnership or investment process?"
      >
        <select id="currentStage" className={`${inputClass} appearance-none`} name="currentStage" defaultValue="exploring">
          <option value="exploring">Exploring options</option>
          <option value="due-diligence">Due diligence in progress</option>
          <option value="term-sheet">Term sheet / MOU stage</option>
          <option value="ready-to-execute">Ready to execute</option>
        </select>
      </FormField>

      <FormField label="How did you hear about us?" htmlFor="referralSource">
        <select id="referralSource" className={`${inputClass} appearance-none`} name="referralSource" defaultValue="">
          <option value="">Select (optional)</option>
          <option value="website">EastWest Africa website</option>
          <option value="event">Event or summit</option>
          <option value="referral">Referral from partner</option>
          <option value="media">Press / media</option>
          <option value="linkedin">LinkedIn / social</option>
          <option value="other">Other</option>
        </select>
      </FormField>

      <FormField label="Additional Information" htmlFor="additionalInfo" className="md:col-span-2">
        <textarea
          id="additionalInfo"
          className={inputClass}
          placeholder="Regulatory considerations, joint-venture preferences, local partners, or documents you plan to share."
          rows={4}
          name="additionalInfo"
        />
      </FormField>

      <div className="md:col-span-2 flex flex-col gap-stack-md pt-stack-sm">
        <label className="flex items-start gap-3 text-sm text-on-surface-variant cursor-pointer">
          <input type="checkbox" className="mt-1 rounded border-outline" name="consent" required />
          <span>
            I authorize EastWest Africa to contact me regarding this inquiry and to process the information
            provided in accordance with the{" "}
            <a href="#" className="text-primary font-semibold hover:underline">
              Privacy Policy
            </a>
            . *
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm text-on-surface-variant cursor-pointer">
          <input type="checkbox" className="mt-1 rounded border-outline" name="newsletter" />
          <span>Keep me informed about corridor insights, events, and partnership opportunities.</span>
        </label>

        <button
          type="submit"
          className="bg-primary text-on-primary w-full py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Submit Partnership Inquiry
          <span className="material-symbols-outlined">send</span>
        </button>

        <p className="text-center text-xs text-on-surface-variant">
          Typical response time: within 2 business days. For urgent matters, email{" "}
          <a className="text-primary font-semibold hover:underline" href="mailto:partnership@eastwestafrica.com">
            partnership@eastwestafrica.com
          </a>
          .
        </p>
      </div>
    </form>
  );
}
