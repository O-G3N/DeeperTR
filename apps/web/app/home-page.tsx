import type { HomePageResponseDto } from "@deepertr/types";
import Link from "next/link";
import { BookIcon, ChevronRightIcon, HeartIcon } from "../components/icons";
import { Footer, SiteHeader } from "../components/site-layout";
import { getApiData } from "./api-client";

export async function HomePageContent() {
  const homePageData = await getApiData<HomePageResponseDto>("/api/home");
  const hero = homePageData.heroSlides[0];

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />

      <section className="container hero-grid dynamic-surface">
        <article className="panel hero-main">
          <span className="pill">{hero.genre}</span>
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
          <div className="hero-actions">
            <Link href="/main/berserk/1-bolum" className="primary-btn">
              <BookIcon /> Oku
            </Link>
            <button className="ghost-btn">Takip</button>
          </div>
        </article>

        <aside className="panel hero-side">
          <span className="editor-pill">Editörün Seçimi</span>
          <h3>{homePageData.editorPick.title}</h3>
          <p>Skor: {homePageData.editorPick.score} / 10</p>
          <Link href="/main/berserk/1-bolum" className="white-pill">
            Hemen Oku <ChevronRightIcon />
          </Link>
        </aside>
      </section>

      <section className="container dynamic-surface">
        <h2>Popüler Seriler</h2>
        <div className="cards-row">
          {homePageData.popularSeries.map((item) => (
            <article key={item.id} className="series-card" style={{ background: item.accent }}>
              <small>{item.chapters}</small>
              <h3>{item.title}</h3>
              <span>★ {item.score}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container panel community dynamic-surface">
        <h3>{homePageData.communityBanner.title}</h3>
        <p>{homePageData.communityBanner.description}</p>
        <Link href="/main/topluluk" className="white-pill">
          {homePageData.communityBanner.ctaLabel}
        </Link>
      </section>

      <section className="container list-grid dynamic-surface">
        <article className="panel">
          <h3>Son Yüklenenler</h3>
          {homePageData.latestReleases.map((release) => (
            <div key={release.id} className="row-item">
              <div>
                <strong>{release.series}</strong>
                <small>
                  Bölüm {release.chapter} • {release.team}
                </small>
              </div>
              <small>{release.when}</small>
            </div>
          ))}
        </article>
        <aside>
          <article className="panel mb16">
            <h3>Güncel Takvim</h3>
            {homePageData.schedule.map((item) => (
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
            <h3>{homePageData.support.title}</h3>
            <p>{homePageData.support.description}</p>
            <button className="white-pill">{homePageData.support.ctaLabel}</button>
          </article>
        </aside>
      </section>

      <Footer tags={homePageData.tags} />
    </main>
  );
}
