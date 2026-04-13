import { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="section">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
      {children}
    </section>
  );
}

export default Section;
