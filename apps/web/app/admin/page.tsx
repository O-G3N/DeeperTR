import type { AdminPageResponseDto } from "@deepertr/types";
import { SiteHeader } from "../../components/site-layout";
import { getApiData, type HomeNavDto } from "../api-client";

export default async function AdminPage() {
  const [home, admin] = await Promise.all([
    getApiData<HomeNavDto>("/api/home"),
    getApiData<AdminPageResponseDto>("/api/admin/dashboard")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={home.nav} />
      <section className="container panel">
        <h1>Admin Panel</h1>
        <div className="metric-grid">
          {admin.metrics.map((metric) => (
            <article key={metric.label} className="panel metric-item">
              <small>{metric.label}</small>
              <strong>{metric.value}</strong>
              <span>{metric.trend}</span>
            </article>
          ))}
        </div>
        <h3>Moderasyon Kuyruğu</h3>
        {admin.moderationQueue.map((item) => (
          <div key={item.id} className="row-item">
            <strong>{item.type}: {item.target}</strong>
            <small>{item.status}</small>
          </div>
        ))}
      </section>
    </main>
  );
}
