import type { AdminPageResponseDto, FirebaseConfigDto, HomePageResponseDto, MemberProfileDto } from "@deepertr/types";
import { Footer, SiteHeader } from "../../components/site-layout";
import { getApiData } from "../api-client";
import { AdminPanel } from "./admin-panel";

export default async function PrivateAdminPage() {
  const [homePageData, memberProfileData, adminPageData, firebaseConfig] = await Promise.all([
    getApiData<HomePageResponseDto>("/api/home"),
    getApiData<MemberProfileDto>("/api/member/profile"),
    getApiData<AdminPageResponseDto>("/api/admin/dashboard"),
    getApiData<FirebaseConfigDto>("/api/firebase/config")
  ]);

  return (
    <main className="page-shell">
      <SiteHeader nav={homePageData.nav} brand={homePageData.brand} />
      <section className="container panel">
        <h1>Admin Panel</h1>
        <p>
          Giriş yapan kullanıcı: <strong>{memberProfileData.username}</strong> ({memberProfileData.role})
        </p>
        <p className="muted">
          Firebase hazır durumu: {firebaseConfig.enabled ? `aktif (${firebaseConfig.projectId})` : "env bekleniyor"}
        </p>
        <AdminPanel initialData={adminPageData} />
      </section>
      <Footer tags={homePageData.tags} />
    </main>
  );
}
