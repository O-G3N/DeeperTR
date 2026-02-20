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

## GitHub Pages yayın notu

Frontend, GitHub Actions ortamında otomatik olarak `https://o-g3n.github.io/DeeperTR/` adresine uygun üretim alacak şekilde ayarlanmıştır (`basePath=/DeeperTR`, `output=export`).

## Test admin üyeliği

`kullanıcılar` dosyasında admin hesabı tanımlıdır:

- kullanıcı adı: `o_g3n_admin`
- şifre: `DeeperTR!2026`
- admin panel yolu: `/admin`
