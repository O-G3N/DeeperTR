import type { HomePageResponseDto } from "@deepertr/types";
import { Footer, SiteHeader } from "../../../components/site-layout";
import { getApiData } from "../../api-client";

export default async function TakvimPage() {
  const homePageData = await getApiData<HomePageResponseDto>("/api/home");

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />
      <section className="container panel">
        <h1>Takvim</h1>
        {homePageData.schedule.map((item) => (
          <div className="row-item" key={item.id}>
            <div>
              <strong>{item.series}</strong>
              <small>
                {item.dayLabel} • Bölüm {item.chapter}
              </small>
            </div>
            <small>{item.hour}</small>
          </div>
        ))}
      </section>
      <Footer tags={homePageData.tags} />
    </main>
  );
}
