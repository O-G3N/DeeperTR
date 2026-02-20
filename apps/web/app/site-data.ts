import type { HomePageResponseDto } from "@deepertr/types";

export const homePageData: HomePageResponseDto = {
  nav: [
    { label: "Anasayfa", href: "/" },
    { label: "Kütüphane", href: "/arsiv" },
    { label: "Takvim", href: "/takvim" },
    { label: "Discord", href: "/topluluk" }
  ],
  heroSlides: [
    {
      id: "one-piece",
      genre: "Shounen / Macera",
      title: "One Piece",
      description: "Hasır Şapka Luffy ve tayfasının, Korsanlar Kralı olma yolunda Grand Line'daki destansı macerası.",
      score: 9.7
    }
  ],
  editorPick: {
    id: "berserk",
    title: "Berserk",
    chapters: 380,
    score: 9.8,
    accent: "#1C1B2B",
    status: "tamamlandi"
  },
  popularSeries: [
    { id: "jjk", title: "Jujutsu Kaisen", chapters: 241, score: 9.8, accent: "#1A1D24", status: "devam-ediyor" },
    { id: "chainsaw-man", title: "Chainsaw Man", chapters: 146, score: 9.2, accent: "#9B0B10", status: "devam-ediyor" },
    { id: "vinland", title: "Vinland Saga", chapters: 206, score: 9.1, accent: "#36485B", status: "tamamlandi" },
    { id: "blue-lock", title: "Blue Lock", chapters: 242, score: 8.9, accent: "#0F4FB8", status: "devam-ediyor" },
    { id: "opm", title: "One Punch Man", chapters: 195, score: 9, accent: "#E5C51C", status: "devam-ediyor" }
  ],
  communityBanner: {
    title: "Tsuki Topluluğu",
    description: "Manga tartışmaları, spoiler sohbetleri ve çeviri ekibi başvuruları için aynı karanlık yüzünde buluşalım.",
    ctaLabel: "Daveti Kabul Et"
  },
  latestReleases: [
    { id: "sl", series: "Solo Leveling: Ragnarok", chapter: 21, team: "Tsuki Scans", author: "ShadowMonarch", when: "10 dk önce" },
    { id: "jjk", series: "Jujutsu Kaisen", chapter: 241, team: "Red Stream", author: "GojoSatoru", when: "42 dk önce" },
    { id: "nm", series: "Nano Machine", chapter: 120, team: "Tsuki Scans", author: "NanoUser", when: "1 saat önce" },
    { id: "eleceed", series: "Eleceed", chapter: 265, team: "Kedi Squadron", author: "Kayden", when: "2 saat önce" }
  ],
  schedule: [
    { id: "s1", dayLabel: "BUGÜN", dayShort: "Pt", series: "Solo Leveling", chapter: 179, hour: "20:00" },
    { id: "s2", dayLabel: "YARIN", dayShort: "Sa", series: "Chainsaw Man", chapter: 145, hour: "18:30" },
    { id: "s3", dayLabel: "ÇAR", dayShort: "Ça", series: "Oshi no Ko", chapter: 123, hour: "21:00" }
  ],
  support: {
    title: "Tsuki'ye Destek Ol",
    description: "Sunucu masraflarımızı karşılamak ve daha hızlı bölümler için bize destek olabilirsin.",
    ctaLabel: "Bağış Yap"
  },
  tags: ["Aksiyon", "Romantizm", "Isekai", "Dram", "Seinen"]
};
