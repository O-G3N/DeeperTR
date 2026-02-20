import Fastify from "fastify";
import type {
  AdminActionRequestDto,
  AdminActionResultDto,
  FirebaseConfigDto,
  HealthResponseDto
} from "@deepertr/types";
import { adminPageData, archiveData, homePageData, memberProfileData } from "./data";

const app = Fastify({ logger: true });
const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

app.addHook("onRequest", async (_request, reply) => {
  reply.header("Access-Control-Allow-Origin", "*");
  reply.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  reply.header("Access-Control-Allow-Headers", "Content-Type");
});

app.options("*", async (_request, reply) => {
  reply.status(204).send();
});

app.get<{ Reply: HealthResponseDto }>("/health", async () => ({ status: "ok", uptime: process.uptime() }));
app.get("/api/home", async () => homePageData);
app.get("/api/archive", async () => archiveData);
app.get("/api/member/profile", async () => memberProfileData);
app.get("/api/admin/dashboard", async () => adminPageData);
app.get<{ Reply: FirebaseConfigDto }>("/api/firebase/config", async () => ({
  enabled: Boolean(process.env.FIREBASE_PROJECT_ID),
  projectId: process.env.FIREBASE_PROJECT_ID ?? "",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ?? "",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ?? "",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID ?? "",
  appId: process.env.FIREBASE_APP_ID ?? ""
}));

app.post<{ Body: AdminActionRequestDto; Reply: AdminActionResultDto }>("/api/admin/action", async (request) => {
  const { type, targetId, payload } = request.body;

  if (type === "chapter-upload") {
    const title = payload?.title?.trim();
    const series = payload?.series?.trim();
    if (!title || !series) {
      return { ok: false, message: "Bölüm başlığı ve seri adı zorunludur.", dashboard: adminPageData };
    }

    adminPageData.chapters.unshift({
      id: `ch-${Date.now()}`,
      title,
      series,
      status: "taslak"
    });

    return { ok: true, message: "Yeni bölüm taslağı oluşturuldu.", dashboard: adminPageData };
  }


  if (type === "site-settings-update") {
    const siteName = payload?.siteName?.trim();
    const tagline = payload?.tagline?.trim();
    const logoPosition = payload?.logoPosition;

    if (!siteName || !tagline || !logoPosition) {
      return { ok: false, message: "Site adı, slogan ve logo yeri zorunludur.", dashboard: adminPageData };
    }

    homePageData.brand.siteName = siteName;
    homePageData.brand.tagline = tagline;
    homePageData.brand.logoPosition = logoPosition;

    adminPageData.siteSettings.siteName = siteName;
    adminPageData.siteSettings.tagline = tagline;
    adminPageData.siteSettings.logoPosition = logoPosition;

    return { ok: true, message: "Site ayarları güncellendi.", dashboard: adminPageData };
  }

  if (!targetId) {
    return { ok: false, message: "Hedef kimliği zorunludur.", dashboard: adminPageData };
  }

  if (type === "chapter-delete") {
    adminPageData.chapters = adminPageData.chapters.filter((chapter) => chapter.id !== targetId);
    return { ok: true, message: "Bölüm silindi.", dashboard: adminPageData };
  }

  if (type === "user-ban") {
    adminPageData.users = adminPageData.users.map((user) =>
      user.id === targetId ? { ...user, isBanned: true } : user
    );
    return { ok: true, message: "Kullanıcı banlandı.", dashboard: adminPageData };
  }

  if (type === "comment-delete") {
    adminPageData.comments = adminPageData.comments.filter((comment) => comment.id !== targetId);
    return { ok: true, message: "Yorum kaldırıldı.", dashboard: adminPageData };
  }

  return { ok: false, message: "Desteklenmeyen işlem.", dashboard: adminPageData };
});

const start = async () => {
  try {
    await app.listen({ port, host });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
