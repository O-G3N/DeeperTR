import { SiteHeader } from "../../../components/site-layout";
import { homePageData, memberProfileData } from "../../mock-data";

export default function ProfilePage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel profile">
        <h1>{memberProfileData.username}</h1>
        <p>{memberProfileData.bio}</p>
        <div className="badge-row">
          {memberProfileData.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <h3>Okuma Listesi</h3>
        <div className="cards-row">
          {memberProfileData.readingList.map((series) => (
            <article key={series.id} className="series-card" style={{ background: series.accent }}>
              <h4>{series.title}</h4>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
