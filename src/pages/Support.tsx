import PageContainer from "../components/layout/PageContainer";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

function Support() {
  return (
    <PageContainer>
      <Section
        eyebrow="Support"
        title="NeuroAI LLC Support"
        description="For product support, account assistance, and general inquiries, contact our team directly."
      />

      <section className="support-panel">
        <Card title="Contact Email">
          <a href="mailto:founder@neuroai.health">founder@neuroai.health</a>
        </Card>
        <Card title="Response Expectations">
          We aim to respond to support requests within 2-3 business days.
        </Card>
        <Card title="Please Include">
          A clear description of your issue, relevant screenshots if available,
          and the device/platform you are using.
        </Card>
      </section>

      <section className="policy-note">
        <p>
          NeuroAI LLC products are intended to support research discovery and
          learning workflows. They are not intended to provide direct medical
          advice.
        </p>
      </section>
    </PageContainer>
  );
}

export default Support;
