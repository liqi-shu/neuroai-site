import { Link } from "react-router-dom";
import PageContainer from "../components/layout/PageContainer";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

function Home() {
  return (
    <PageContainer>
      <section className="hero">
        <p className="eyebrow">NeuroAI LLC</p>
        <h1>
          AI-powered software for neurology, healthcare, and research knowledge
          delivery.
        </h1>
        <p className="hero-description">
          We are developing tools that help professionals discover and absorb
          high-value scientific and medical literature with greater efficiency.
        </p>
        <div className="hero-actions">
          <Link className="button-primary" to="/about">
            Learn about our mission
          </Link>
          <Link className="button-secondary" to="/support">
            Contact support
          </Link>
        </div>
      </section>

      <Section
        eyebrow="Current Product"
        title="A personalized feed of concise research article summaries."
        description="Our mobile product is designed around short, focused summaries in a scrollable feed experience so users can quickly assess relevance and dive deeper when needed."
      />

      <Section
        eyebrow="Mission"
        title="Helping clinicians, researchers, and advanced learners stay current."
        description="Important publications appear every day across specialties. Our mission is to reduce information overload and support consistent, efficient literature awareness."
      />

      <Section
        eyebrow="Approach"
        title="Built around relevance, speed, and usability."
      >
        <div className="card-grid">
          <Card title="Personalization">
            Surface research aligned with user interests, specialty focus, and
            learning goals.
          </Card>
          <Card title="Concise Summaries">
            Transform dense publications into short, clear briefs that preserve
            essential context.
          </Card>
          <Card title="Relevance First">
            Prioritize timely and meaningful literature so users spend time on
            what matters most.
          </Card>
          <Card title="Fast Workflow">
            Support high-frequency review in limited time windows with a focused
            feed interface.
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Why It Matters"
        title="Healthcare and science move quickly. Knowledge delivery should too."
        description="NeuroAI LLC focuses on practical tools that make research discovery more manageable without replacing professional judgment or clinical decision-making."
      />

      <section className="cta-banner">
        <h2>Interested in NeuroAI LLC?</h2>
        <p>
          For product, partnership, or general inquiries, reach us at{" "}
          <a href="mailto:founder@neuroai.health">founder@neuroai.health</a>.
        </p>
      </section>
    </PageContainer>
  );
}

export default Home;
