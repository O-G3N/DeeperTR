export type HealthResponseDto = {
  status: "ok";
  uptime: number;
};

export type ApiErrorDto = {
  message: string;
  code: string;
};

export type NavItemDto = {
  label: string;
  href: string;
};

export type HeroSlideDto = {
  id: string;
  genre: string;
  title: string;
  description: string;
  score: number;
};

export type FeaturedCardDto = {
  id: string;
  title: string;
  chapters: number;
  score: number;
  accent: string;
  status: "devam-ediyor" | "tamamlandi";
};

export type ReleaseItemDto = {
  id: string;
  series: string;
  chapter: number;
  team: string;
  author: string;
  when: string;
};

export type ScheduleItemDto = {
  id: string;
  dayLabel: string;
  dayShort: string;
  series: string;
  chapter: number;
  hour: string;
};

export type SupportCardDto = {
  title: string;
  description: string;
  ctaLabel: string;
};

export type CommunityBannerDto = {
  title: string;
  description: string;
  ctaLabel: string;
};

export type HomePageResponseDto = {
  nav: NavItemDto[];
  heroSlides: HeroSlideDto[];
  editorPick: FeaturedCardDto;
  popularSeries: FeaturedCardDto[];
  communityBanner: CommunityBannerDto;
  latestReleases: ReleaseItemDto[];
  schedule: ScheduleItemDto[];
  support: SupportCardDto;
  tags: string[];
};

export type ArchiveFilterDto = {
  query: string;
  genre: string;
  status: string;
};

export type ArchivePageResponseDto = {
  filters: ArchiveFilterDto;
  items: FeaturedCardDto[];
};

export type MemberProfileDto = {
  id: string;
  username: string;
  role: "uye" | "editor" | "admin";
  bio: string;
  avatarSeed: string;
  readingList: FeaturedCardDto[];
  badges: string[];
};

export type AdminMetricDto = {
  label: string;
  value: string;
  trend: string;
};

export type AdminPageResponseDto = {
  metrics: AdminMetricDto[];
  moderationQueue: Array<{
    id: string;
    type: string;
    target: string;
    reporter: string;
    status: "beklemede" | "inceleniyor";
  }>;
};
