import type {
  AdminPageResponseDto,
  ArchivePageResponseDto,
  FeaturedCardDto,
  HomePageResponseDto,
  MemberProfileDto
} from "@deepertr/types";

const baseSeries: FeaturedCardDto[] = [
  { id: "jjk", title: "Jujutsu Kaisen", chapters: 241, score: 9.8, accent: "#1A1D24", status: "devam-ediyor" },
  { id: "chainsaw-man", title: "Chainsaw Man", chapters: 146, score: 9.2, accent: "#9B0B10", status: "devam-ediyor" },
  { id: "vinland", title: "Vinland Saga", chapters: 206, score: 9.1, accent: "#36485B", status: "tamamlandi" },
  { id: "blue-lock", title: "Blue Lock", chapters: 242, score: 8.9, accent: "#0F4FB8", status: "devam-ediyor" },
  { id: "opm", title: "One Punch Man", chapters: 195, score: 9, accent: "#E5C51C", status: "devam-ediyor" }
];

export const homePageData: HomePageResponseDto = {
  nav: [
    { label: "Anasayfa", href: "/index.html" },
    { label: "Kütüphane", href: "/main/arsiv" },
    { label: "Takvim", href: "/main/takvim" },
    { label: "Topluluk", href: "/main/topluluk" },
    { label: "Profil", href: "/main/uye/profil" },
    { label: "Admin", href: "/main/admin" }
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
  popularSeries: baseSeries,
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

export const archiveData: ArchivePageResponseDto = {
  filters: {
    query: "",
    genre: "Tümü",
    status: "Yayında"
  },
  items: baseSeries
};

export const memberProfileData: MemberProfileDto = {
  id: "user-og3n",
  username: "o_g3n_admin",
  role: "admin",
  bio: "Platform yöneticisi. Yayın, moderasyon ve duyuru akışlarını yönetir.",
  avatarSeed: "o-g3n-admin",
  readingList: baseSeries.slice(0, 3),
  badges: ["Site Admin", "Top Contributor", "Moderator"]
};

export const adminPageData: AdminPageResponseDto = {
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
