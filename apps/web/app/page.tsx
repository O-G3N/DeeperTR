import type { HomePageResponseDto } from "@deepertr/types";
import { BookIcon, ChevronRightIcon, HeartIcon } from "../components/icons";
import { Footer, SiteHeader } from "../components/site-layout";
import { getApiData } from "./api-client";

export default async function HomePage() {
  const data = await getApiData<HomePageResponseDto>("/api/home");
  const hero = data.heroSlides[0];

  return (
    <main className="page-shell">
      <SiteHeader nav={data.nav} />

      <section className="container hero-grid">
        <article className="panel hero-main">
          <span className="pill">{hero.genre}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            <button className="primary-btn">
              <BookIcon /> Oku
            </button>
            <button className="ghost-btn">Takip</button>
          </div>
        </article>

        <aside className="panel hero-side">
          <span className="editor-pill">Editörün Seçimi</span>
          <h3>{data.editorPick.title}</h3>
          <p>Skor: {data.editorPick.score} / 10</p>
          <button className="white-pill">
            Hemen Oku <ChevronRightIcon />
          </button>
        </aside>
      </section>

      <section className="container">
        <h2>Popüler Seriler</h2>
        <div className="cards-row">
          {data.popularSeries.map((item) => (
            <article key={item.id} className="series-card" style={{ background: item.accent }}>
              <small>{item.chapters}</small>
              <h3>{item.title}</h3>
              <span>★ {item.score}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container panel community">
        <h3>{data.communityBanner.title}</h3>
        <p>{data.communityBanner.description}</p>
        <button className="white-pill">{data.communityBanner.ctaLabel}</button>
      </section>

      <section className="container list-grid">
        <article className="panel">
          <h3>Son Yüklenenler</h3>
          {data.latestReleases.map((release) => (
            <div key={release.id} className="row-item">
              <div>
                <strong>{release.series}</strong>
                <small>Bölüm {release.chapter} • {release.team}</small>
              </div>
              <small>{release.when}</small>
            </div>
          ))}
        </article>
        <aside>
          <article className="panel mb16">
            <h3>Güncel Takvim</h3>
            {data.schedule.map((item) => (
              <div key={item.id} className="row-item">
                <div>
                  <strong>{item.series}</strong>
                  <small>Bölüm {item.chapter}</small>
                </div>
                <small>{item.hour}</small>
              </div>
            ))}
          </article>
          <article className="panel support">
            <HeartIcon />
            <h3>{data.support.title}</h3>
            <p>{data.support.description}</p>
            <button className="white-pill">{data.support.ctaLabel}</button>
          </article>
        </aside>
      </section>

      <Footer tags={data.tags} />
    </main>
  );
}
