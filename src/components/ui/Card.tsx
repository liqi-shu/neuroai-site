import { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export default Card;
