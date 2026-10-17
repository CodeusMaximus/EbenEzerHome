import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";

export const metadata: Metadata = { title: "Terms of Use", description: "Terms governing use of the Eben-Ezer House of Hope website.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <LegalPageLayout eyebrow="Website information" title="Terms of Use" updated="October 17, 2026" intro="Please read these terms before using the Eben-Ezer House of Hope website or submitting a referral or inquiry." sections={[
    { id: "purpose", title: "1. Website Purpose", content: <p>This website provides general information about Eben-Ezer House of Hope and its plans to establish supportive recovery housing on Long Island, New York. Information may change as the organization develops its program and secures a residence.</p> },
    { id: "housing", title: "2. No Guarantee of Housing", content: <p>The organization is currently searching for a residential property. Submission of an inquiry, referral, or application does not guarantee eligibility, admission, placement, a particular location, or a move-in date. Housing availability and admission criteria are subject to confirmation.</p> },
    { id: "conduct", title: "3. Acceptable Use", content: <p>You agree not to misuse the website, submit deliberately false or unlawful information, interfere with site operation, attempt unauthorized access, or use the forms to harass others. You are responsible for providing accurate information in your own submissions.</p> },
    { id: "information", title: "4. Informational Content", content: <p>Website content is provided for general information and is not medical, legal, emergency, or individualized housing advice. Program descriptions and external resources are not guarantees of service availability. For emergencies, call 911; for U.S. mental health crises, call or text 988.</p> },
    { id: "privacy", title: "5. Privacy and Submissions", content: <p>Personal information submitted through the website is addressed in our <a href="/privacy">Privacy Policy</a>. Please avoid submitting unnecessary sensitive information through general contact channels.</p> },
    { id: "thirdparty", title: "6. Third-Party Links", content: <p>Links to outside websites are provided for convenience. Eben-Ezer House of Hope does not control their content, privacy practices, or availability, and inclusion of a link does not necessarily imply endorsement.</p> },
    { id: "intellectual", title: "7. Website Content", content: <p>Unless otherwise stated, the website's original text, design, and branding are intended for the organization's use. You may view and share links to public pages for lawful, noncommercial purposes. Third-party materials remain subject to their owners' rights.</p> },
    { id: "availability", title: "8. Availability and Changes", content: <p>We may revise website information, forms, or these terms at any time. We cannot promise uninterrupted availability or that every page will be free from errors. Nothing in these terms excludes rights or protections that cannot legally be waived.</p> },
    { id: "contact", title: "9. Questions", content: <p>For questions about the website or these terms, use the <a href="/#contact">contact section</a>.</p> },
  ]} />;
}
