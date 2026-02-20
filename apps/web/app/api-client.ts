import type { AdminPageResponseDto, ArchivePageResponseDto, HomePageResponseDto, MemberProfileDto } from "@deepertr/types";
import { homePageData } from "./site-data";

const API_BASE = process.env.API_BASE_URL ?? "http://127.0.0.1:4000";

const staticArchive: ArchivePageResponseDto = {
  filters: { query: "", genre: "Tümü", status: "Yayında" },
  items: homePageData.popularSeries
};

const staticProfile: MemberProfileDto = {
  id: "user-42",
  username: "lunaReader",
  role: "editor",
  bio: "Karanlık fantazi ve seinen odaklı içerik editörü.",
  avatarSeed: "luna-reader",
  readingList: homePageData.popularSeries.slice(0, 3),
  badges: ["Top Contributor", "Spoiler Guard", "Translator"]
};

const staticAdmin: AdminPageResponseDto = {
  metrics: [
    { label: "Aktif Üye", value: "12.840", trend: "+6.2%" },
    { label: "Günlük Okuma", value: "58.902", trend: "+2.7%" },
    { label: "Bekleyen Seri", value: "42", trend: "-1.5%" },
    { label: "Rapor", value: "19", trend: "+0.4%" }
  ],
  moderationQueue: [
    { id: "m1", type: "Yorum", target: "Blue Lock #242", reporter: "kei0", status: "beklemede" },
    { id: "m2", type: "Profil", target: "user/voidline", reporter: "adminbot", status: "inceleniyor" }
  ]
};

const staticMap: Record<string, unknown> = {
  "/api/home": homePageData,
  "/api/archive": staticArchive,
  "/api/member/profile": staticProfile,
  "/api/admin/dashboard": staticAdmin
};

export async function getApiData<T>(path: string): Promise<T> {
  if (process.env.NEXT_PUBLIC_STATIC_MODE === "true") {
    return staticMap[path] as T;
  }

  try {
    const response = await fetch(`${API_BASE}${path}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch {
    return staticMap[path] as T;
  }
}

export type HomeNavDto = Pick<HomePageResponseDto, "nav">;
