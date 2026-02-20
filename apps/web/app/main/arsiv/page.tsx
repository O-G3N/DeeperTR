import { SiteHeader } from "../../../components/site-layout";
import { archiveData, homePageData } from "../../mock-data";

export default function ArchivePage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel">
        <h1>Arşiv</h1>
        <p>
          Filtreler: {archiveData.filters.genre} • {archiveData.filters.status}
        </p>
        <div className="cards-row">
          {archiveData.items.map((item) => (
            <article key={item.id} className="series-card" style={{ background: item.accent }}>
              <h3>{item.title}</h3>
              <small>{item.status}</small>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
