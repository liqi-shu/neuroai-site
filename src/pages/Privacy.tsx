import PageContainer from "../components/layout/PageContainer";
import Section from "../components/ui/Section";

function Privacy() {
  return (
    <PageContainer>
      <Section
        eyebrow="Privacy Policy"
        title="Privacy Policy for NeuroAI LLC"
        description="Last updated: April 13, 2026"
      />

      <section className="policy">
        <h3>1. Overview</h3>
        <p>
          NeuroAI LLC ("NeuroAI", "we", "our", "us") is committed to protecting
          your privacy. This policy explains how we collect, use, and safeguard
          information when you use our websites and software products.
        </p>

        <h3>2. Information We May Collect</h3>
        <p>
          Depending on product usage, we may collect account identifiers, contact
          information, usage analytics, device and session information, and
          preference signals used to personalize content delivery.
        </p>

        <h3>3. How We Use Information</h3>
        <p>
          We use information to operate and improve our services, personalize
          content relevance, provide customer support, maintain platform security,
          and communicate product updates or service notices.
        </p>

        <h3>4. Data Sharing</h3>
        <p>
          We do not sell personal information. We may share data with trusted
          service providers who help us operate our platform, subject to
          contractual confidentiality and security requirements, or as required by
          law.
        </p>

        <h3>5. Data Retention</h3>
        <p>
          We retain data for as long as reasonably necessary to provide services,
          satisfy legal obligations, resolve disputes, and enforce agreements.
        </p>

        <h3>6. Security</h3>
        <p>
          We implement reasonable administrative, technical, and organizational
          safeguards designed to protect data from unauthorized access, loss, or
          misuse.
        </p>

        <h3>7. Medical Disclaimer</h3>
        <p>
          NeuroAI products are intended for research discovery and educational
          support. They do not provide medical advice, diagnosis, or treatment,
          and should not substitute professional clinical judgment.
        </p>

        <h3>8. Your Choices</h3>
        <p>
          You may contact us to request access, correction, or deletion of certain
          personal information, subject to applicable law and technical
          limitations.
        </p>

        <h3>9. Changes to This Policy</h3>
        <p>
          We may update this policy periodically. Material changes will be
          reflected by an updated effective date on this page.
        </p>

        <h3>10. Contact</h3>
        <p>
          For privacy-related inquiries, contact{" "}
          <a href="mailto:founder@neuroai.health">founder@neuroai.health</a>.
        </p>
      </section>
    </PageContainer>
  );
}

export default Privacy;
