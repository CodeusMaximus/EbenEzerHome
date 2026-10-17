import type { Metadata } from "next";
import LegalPageLayout from "../components/LegalPageLayout";

export const metadata: Metadata = { title: "Accessibility Statement", description: "Our commitment to an accessible website and how to report accessibility barriers.", alternates: { canonical: "/accessibility" } };

export default function AccessibilityPage() {
  return <LegalPageLayout eyebrow="Everyone belongs" title="Accessibility Statement" updated="October 17, 2026" intro="Eben-Ezer House of Hope wants its website to be welcoming and usable for visitors with a wide range of abilities and assistive technologies." sections={[
    { id: "commitment", title: "1. Our Commitment", content: <p>We are committed to improving access to information about our developing Long Island recovery housing community. We aim to make the website understandable, navigable, and usable for as many people as possible.</p> },
    { id: "standards", title: "2. Accessibility Goals", content: <p>Our design and development goal is to work toward the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. This is a goal, not a claim that the website has been independently audited or fully conforms to that standard.</p> },
    { id: "features", title: "3. Accessibility Practices", content: <p>We aim to use semantic headings, descriptive links, keyboard-accessible controls, visible focus indicators, readable contrast, responsive layouts, and labels for form fields. These features should be checked through manual and assistive-technology testing.</p> },
    { id: "limitations", title: "4. Known Limitations", content: <p>Some third-party content, such as embedded maps or external websites, may have accessibility limitations outside our direct control. We will work to provide alternative information or assistance when reasonably possible.</p> },
    { id: "feedback", title: "5. Report a Barrier or Request Help", content: <><p>If you have trouble using the website, accessing a form, or reading information, please use the <a href="/#contact">contact section</a> to describe the page, the problem, and your preferred way to receive a response. Do not include unnecessary sensitive medical information.</p><p>We welcome requests for information in an alternative format or assistance completing a website inquiry.</p></> },
    { id: "improvement", title: "6. Ongoing Improvement", content: <p>Accessibility is an ongoing process. We intend to review reported issues and make practical improvements as the website evolves. This statement may be updated as testing and remediation progress.</p> },
  ]} />;
}
