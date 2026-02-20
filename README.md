# DeeperTR Monorepo

## Yapı

- `apps/web`: Next.js App Router frontend
- `apps/api`: Fastify tabanlı TypeScript backend
- `packages/ui`: Ortak vector tabanlı UI yardımcıları
- `packages/config`: ESLint, Prettier, tsconfig ve style tokenları
- `packages/types`: Ortak DTO ve tipler

## Komutlar

```bash
npm install
npm run dev
```

## GitHub Pages (Anasayfa Yayını)

Anasayfayı `https://o-g3n.github.io/DeeperTR/` altında yayınlamak için:

1. GitHub repo ayarlarında **Settings → Pages → Source = GitHub Actions** seç.
2. `main` branch'e push yapınca `.github/workflows/deploy-pages.yml` otomatik çalışır.
3. Lokal statik çıktı almak için:

```bash
npm run export:web
```

> Not: Static modda web uygulaması API'ye bağımlı kalmamak için yerel fallback veri ile render edilir.
