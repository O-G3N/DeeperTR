import type { ArchivePageResponseDto } from "@deepertr/types";
import { SiteHeader } from "../../components/site-layout";
import { getApiData } from "../api-client";

export default async function ArchivePage() {
  const [home, archive] = await Promise.all([
    getApiData<{ nav: Array<{ label: string; href: string }> }>("/api/home"),
    getApiData<ArchivePageResponseDto>("/api/archive")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={home.nav} />
      <section className="container panel">
        <h1>Arşiv</h1>
        <p>Filtreler: {archive.filters.genre} • {archive.filters.status}</p>
        <div className="cards-row">
          {archive.items.map((item) => (
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
