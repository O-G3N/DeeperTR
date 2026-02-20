import type { HomePageResponseDto, MemberProfileDto } from "@deepertr/types";
import { Footer, SiteHeader } from "../../../../components/site-layout";
import { getApiData } from "../../../api-client";

export default async function ProfilePage() {
  const [homePageData, memberProfileData] = await Promise.all([
    getApiData<HomePageResponseDto>("/api/home"),
    getApiData<MemberProfileDto>("/api/member/profile")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />
      <section className="container panel profile">
        <h1>{memberProfileData.username}</h1>
        <p>{memberProfileData.bio}</p>
        <div className="badge-row">
          {memberProfileData.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </section>
      <Footer tags={homePageData.tags} />
    </main>
  );
}
