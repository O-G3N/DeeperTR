import type { HTMLAttributes, PropsWithChildren } from 'react';

import './containers.css';

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function PageContainer({ className = '', ...props }: ContainerProps) {
  return <div className={`page-container ${className}`.trim()} {...props} />;
}

export function SectionContainer({ className = '', ...props }: ContainerProps) {
  return <section className={`section-container ${className}`.trim()} {...props} />;
}

export function CardContainer({ className = '', ...props }: ContainerProps) {
  return <article className={`card-container ${className}`.trim()} {...props} />;
}

export function PanelContainer({ className = '', ...props }: ContainerProps) {
  return <div className={`panel-container ${className}`.trim()} {...props} />;
}
