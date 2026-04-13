import PageContainer from "../components/layout/PageContainer";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";

function About() {
  return (
    <PageContainer>
      <Section
        eyebrow="About NeuroAI LLC"
        title="Focused on better research discovery for healthcare and science."
        description="NeuroAI LLC is a health-tech and research technology company building software to improve how people engage with important scientific literature."
      />

      <Section
        eyebrow="The Problem"
        title="High-quality knowledge is abundant, but attention is limited."
      >
        <div className="card-grid">
          <Card title="Information Overload">
            Clinicians and researchers face a constant stream of publications
            across journals and disciplines.
          </Card>
          <Card title="Time Constraints">
            Most users do not have enough time for long-form review throughout
            the day.
          </Card>
          <Card title="Fragmented Discovery">
            Existing workflows can make relevant updates difficult to identify
            consistently.
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Our Vision"
        title="A dependable interface for daily research awareness."
        description="We believe research discovery in healthcare and science should be personalized, concise, and easy to use. Our long-term vision is to help users maintain a higher-quality signal of important literature with less friction."
      />

      <Section
        eyebrow="Operating Principles"
        title="Practical, responsible product development."
      >
        <div className="card-grid">
          <Card title="Clarity">
            Present information in a format that is quick to interpret and easy
            to revisit.
          </Card>
          <Card title="Relevance">
            Prioritize utility and context so users can focus their attention
            effectively.
          </Card>
          <Card title="Responsibility">
            Build with care and avoid overstating outcomes or replacing expert
            decision-making.
          </Card>
        </div>
      </Section>
    </PageContainer>
  );
}

export default About;
