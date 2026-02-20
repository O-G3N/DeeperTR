import { SiteHeader } from "../../../components/site-layout";
import { homePageData } from "../../mock-data";

export default function TakvimPage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel">
        <h1>Takvim</h1>
        <p>Yaklaşan bölüm yayınları burada listelenecek.</p>
      </section>
    </main>
  );
}
