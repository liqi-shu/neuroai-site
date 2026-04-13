import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return <div className="container page-container">{children}</div>;
}

export default PageContainer;
