import type { ArchivePageResponseDto, HomePageResponseDto } from "@deepertr/types";
import { Footer, SiteHeader } from "../../../components/site-layout";
import { getApiData } from "../../api-client";

export default async function ArchivePage() {
  const [archiveData, homePageData] = await Promise.all([
    getApiData<ArchivePageResponseDto>("/api/archive"),
    getApiData<HomePageResponseDto>("/api/home")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />
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
      <Footer tags={homePageData.tags} />
    </main>
  );
}
