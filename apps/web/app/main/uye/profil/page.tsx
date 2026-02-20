import { SiteHeader } from "../../../../components/site-layout";
import { homePageData, memberProfileData } from "../../../mock-data";

export default function ProfilePage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel profile">
        <h1>{memberProfileData.username}</h1>
        <p>{memberProfileData.bio}</p>
      </section>
    </main>
  );
}
