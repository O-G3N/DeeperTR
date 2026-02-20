import Link from "next/link";
import type { HomePageResponseDto } from "@deepertr/types";
import { Footer, SiteHeader } from "../../../components/site-layout";
import { getApiData } from "../../api-client";

export default async function ToplulukPage() {
  const homePageData = await getApiData<HomePageResponseDto>("/api/home");

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />
      <section className="container panel">
        <h1>Topluluk</h1>
        <p>{homePageData.communityBanner.description}</p>
        <div className="hero-actions">
          <Link href="/main/arsiv" className="white-pill">
            Arşive Git
          </Link>
          <Link href="/main/takvim" className="ghost-btn">
            Yayın Takvimi
          </Link>
        </div>
      </section>
      <Footer tags={homePageData.tags} />
    </main>
  );
}
