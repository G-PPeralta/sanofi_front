import { PageConfig } from 'domain/entities/PageConfig';

export function PageContainer({ children }: PageConfig.ContainerProps) {
  return <div className="p-6 md:p-10 flex flex-col">{children}</div>;
}
