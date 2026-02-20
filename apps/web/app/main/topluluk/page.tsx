import { SiteHeader } from "../../../components/site-layout";
import { homePageData } from "../../mock-data";

export default function ToplulukPage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel">
        <h1>Topluluk</h1>
        <p>Discord, ekip alımları ve öneriler bu sayfada.</p>
      </section>
    </main>
  );
}
