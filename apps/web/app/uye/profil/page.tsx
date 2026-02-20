import type { MemberProfileDto } from "@deepertr/types";
import { SiteHeader } from "../../../components/site-layout";
import { getApiData } from "../../api-client";

export default async function ProfilePage() {
  const [home, profile] = await Promise.all([
    getApiData<{ nav: Array<{ label: string; href: string }> }>("/api/home"),
    getApiData<MemberProfileDto>("/api/member/profile")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={home.nav} />
      <section className="container panel profile">
        <h1>{profile.username}</h1>
        <p>{profile.bio}</p>
        <div className="badge-row">
          {profile.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
        <h3>Okuma Listesi</h3>
        <div className="cards-row">
          {profile.readingList.map((series) => (
            <article key={series.id} className="series-card" style={{ background: series.accent }}>
              <h4>{series.title}</h4>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
