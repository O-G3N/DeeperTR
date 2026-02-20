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
- admin panel yolu: `/ad-min-panel`

## Firebase entegrasyon hazırlığı

Backend `/api/firebase/config` endpointi üzerinden Firebase ortam değişkenlerini döner. Aşağıdaki env değişkenlerini tanımlayarak projeyi gerçek Firebase servislerine bağlayabilirsiniz:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Admin paneli bu endpointi okuyarak entegrasyonun hazır olup olmadığını gösterir.
