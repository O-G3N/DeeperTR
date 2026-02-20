import { SiteHeader } from "../../components/site-layout";
import { adminPageData, homePageData, memberProfileData } from "../mock-data";

export default function AdminPage() {
  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} />
      <section className="container panel">
        <h1>Admin Panel</h1>
        <p>
          Giriş yapan kullanıcı: <strong>{memberProfileData.username}</strong> ({memberProfileData.role})
        </p>
        <div className="metric-grid">
          {adminPageData.metrics.map((metric) => (
            <article key={metric.label} className="panel metric-item">
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <span>{metric.trend}</span>
            </article>
          ))}
        </div>
        <h3>Moderasyon Kuyruğu</h3>
        {adminPageData.moderationQueue.map((item) => (
          <div key={item.id} className="row-item">
            <strong>
              {item.type}: {item.target}
            </strong>
            <small>{item.status}</small>
          </div>
        ))}
      </section>
    </main>
  );
}
