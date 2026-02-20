import {
  CardContainer,
  PageContainer,
  PanelContainer,
  SectionContainer,
} from '../../../../packages/ui/src/containers';

export function ContainersDemo() {
  return (
    <PageContainer>
      <SectionContainer className="ui-gradient-hero ui-grid-pattern" style={{ borderRadius: 'var(--radius-xl)' }}>
        <CardContainer className="ui-glow-ring" style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-3)' }}>
            Design System Surface
          </h1>
          <p>
            Tokens, patternler ve container yapısı `packages/ui` içinde tanımlandı. Uygulama tarafı CSS variable ile
            doğrudan bu tokenlara bağlandı.
          </p>
          <PanelContainer style={{ marginTop: 'var(--space-6)' }}>
            <strong style={{ fontSize: 'var(--font-size-sm)' }}>PanelContainer</strong>
            <p style={{ marginTop: 'var(--space-2)' }}>İçerik segmentleri için ikincil yüzey.</p>
          </PanelContainer>
        </CardContainer>
      </SectionContainer>
    </PageContainer>
  );
}
