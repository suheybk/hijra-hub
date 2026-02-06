# 🏠 Arkam's Way / Erkam'ın Yolu

**Suudi Arabistan'a Göç Edenlere Yönelik Emlak ve Yerleşim Platformu**

Arkam's Way (Erkam'ın Yolu), Suudi Arabistan 2030 Vizyonu kapsamında ülkeye göç eden yabancı yatırımcı, profesyonel ve aileler için kapsamlı bir emlak ve yerleşim hizmetleri platformudur.

---

## 📋 İçindekiler

1. [Proje Hakkında](#proje-hakkında)
2. [Teknoloji Yığını](#teknoloji-yığını)
3. [Özellikler](#özellikler)
4. [Proje Yapısı](#proje-yapısı)
5. [Kurulum](#kurulum)
6. [Veritabanı Şeması](#veritabanı-şeması)
7. [API Endpoints](#api-endpoints)
8. [Çoklu Dil Desteği](#çoklu-dil-desteği)
9. [Sayfalar](#sayfalar)

---

## 🎯 Proje Hakkında

Arkam's Way şu hedeflere hizmet eder:

- **Mülk Arama:** Suudi Arabistan'daki villa, daire, arsa ve ticari mülkleri keşfetme
- **Premium İkamet:** Suudi Premium Residency (altın vize) başvuru desteği
- **İş Fırsatları:** Krallıktaki kariyer ve iş ilanlarına erişim
- **Yerleşim Hizmetleri:** Taşınma, hukuki danışmanlık ve iş kurulum desteği

### Hedef Kitle
- Suudi Arabistan'a taşınmak isteyen yabancılar
- Yatırım amaçlı mülk arayanlar
- Premium Residency başvurusu yapmak isteyenler
- Krallıkta kariyer fırsatı arayanlar

---

## 🛠️ Teknoloji Yığını

### Frontend
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| Next.js | 16.1.4 | React tabanlı full-stack framework |
| TypeScript | 5.x | Tip güvenli JavaScript |
| Tailwind CSS | 4.x | Utility-first CSS framework |
| Lucide React | - | Modern ikonlar |

### Backend
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| NestJS | 10.x | Node.js enterprise framework |
| Prisma | 6.x | Next-gen ORM |
| PostgreSQL | 15 | İlişkisel veritabanı |
| TypeScript | 5.x | Tip güvenli JavaScript |

### Altyapı
| Teknoloji | Açıklama |
|-----------|----------|
| Docker | Container yönetimi |
| Redis | Önbellekleme (opsiyonel) |
| OpenSearch | Tam metin arama (opsiyonel) |

---

## ✨ Özellikler

### 🏡 Mülk Yönetimi
- Mülk listeleme ve detay görüntüleme
- Gelişmiş filtreleme (tip, fiyat aralığı, konum)
- Çoklu görsel desteği
- Harita entegrasyonu (yakında)

### 🌍 Çoklu Dil Desteği
- 🇬🇧 İngilizce (Arkam's Way)
- 🇸🇦 Arapça (أركام واي) - RTL desteği
- 🇹🇷 Türkçe (Erkam'ın Yolu)

### 👤 Kullanıcı Rolleri
- **BUYER:** Mülk arayan kullanıcılar
- **SELLER:** Mülk sahipleri/satıcıları
- **BROKER:** Emlak danışmanları
- **ADMIN:** Sistem yöneticileri

### 📱 Modern UI/UX
- Responsive tasarım (mobil uyumlu)
- Glassmorphism efektleri
- Micro-animations
- Dark/Light mod hazırlığı

---

## 📁 Proje Yapısı

```
arkamsway/
├── backend/                    # NestJS Backend
│   ├── src/
│   │   ├── main.ts            # Uygulama giriş noktası
│   │   ├── app.module.ts      # Ana modül
│   │   ├── prisma/            # Prisma servisi
│   │   └── properties/        # Mülk modülü
│   │       ├── properties.controller.ts
│   │       ├── properties.service.ts
│   │       └── properties.module.ts
│   ├── prisma/
│   │   ├── schema.prisma      # Veritabanı şeması
│   │   └── seed.ts            # Örnek veri
│   └── .env                   # Ortam değişkenleri
│
├── frontend/                   # Next.js Frontend
│   ├── src/
│   │   ├── app/
│   │   │   └── [lang]/        # Dinamik dil rotası
│   │   │       ├── page.tsx           # Ana sayfa
│   │   │       ├── properties/        # Mülkler
│   │   │       ├── jobs/              # İş ilanları
│   │   │       ├── services/          # Hizmetler
│   │   │       ├── login/             # Giriş
│   │   │       └── create-property/   # Mülk ekle
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── FeaturedProperties.tsx
│   │   │   └── SearchBar.tsx
│   │   └── middleware.ts      # Dil yönlendirmesi
│   └── .env.local             # Ortam değişkenleri
│
└── docker-compose.yml          # Docker yapılandırması
```

---

## 🚀 Kurulum

### Ön Gereksinimler
- Node.js 18+
- npm veya yarn
- PostgreSQL 15+ (veya Docker)

### 1. Depoyu Klonlama
```bash
git clone https://github.com/suheybk/arkamsway.git
cd arkamsway
```

### 2. Docker ile Veritabanı (Önerilen)
```bash
docker-compose up -d postgres
```

### 3. Backend Kurulumu
```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npx prisma db seed  # Örnek veri
npm run start:dev
```

### 4. Frontend Kurulumu
```bash
cd frontend
npm install
npm run dev
```

### 5. Erişim
- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Türkçe: http://localhost:3000/tr
- Arapça: http://localhost:3000/ar
- İngilizce: http://localhost:3000/en

---

## 🗃️ Veritabanı Şeması

### User (Kullanıcı)
```prisma
model User {
  id        String   @id @default(uuid())
  phone     String   @unique
  email     String?  @unique
  fullName  String?
  role      String   @default("BUYER")  // BUYER, SELLER, ADMIN, BROKER
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Property (Mülk)
```prisma
model Property {
  id          String   @id @default(uuid())
  title       String                        // Çoklu dil JSON
  description String
  price       Float
  currency    String   @default("SAR")
  type        String                        // APARTMENT, VILLA, LAND, COMMERCIAL
  status      String   @default("PUBLISHED")
  location    Json                          // {city, address, lat, lng}
  features    Json                          // {bedrooms, bathrooms, area}
  images      String[]
  createdAt   DateTime @default(now())
}
```

### Lead (Potansiyel Müşteri)
```prisma
model Lead {
  id         String   @id @default(uuid())
  message    String?
  status     String   @default("NEW")
  buyerId    String
  sellerId   String
  propertyId String
  createdAt  DateTime @default(now())
}
```

---

## 🔌 API Endpoints

### Properties (Mülkler)
| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/properties` | Tüm mülkleri listele |
| GET | `/properties/:id` | Mülk detayı |
| POST | `/properties` | Yeni mülk ekle |
| GET | `/properties?type=VILLA` | Tipe göre filtrele |
| GET | `/properties?minPrice=X&maxPrice=Y` | Fiyata göre filtrele |

### Örnek İstek
```bash
# Tüm mülkleri getir
curl http://localhost:4000/properties

# Villa tipindeki mülkler
curl http://localhost:4000/properties?type=VILLA

# Fiyat aralığında ara
curl http://localhost:4000/properties?minPrice=500000&maxPrice=2000000
```

---

## 🌐 Çoklu Dil Desteği

Uygulama 3 dili destekler ve URL tabanlı routing kullanır:

- `/en/*` - İngilizce (Arkam's Way)
- `/ar/*` - Arapça (أركام واي) - RTL
- `/tr/*` - Türkçe (Erkam'ın Yolu)

### Middleware Yönlendirmesi
`middleware.ts` dosyası tarayıcı dilini algılayarak otomatik yönlendirme yapar.

### Bileşenlerde Çeviri
```tsx
const translations = {
  en: { title: "Find Your Home" },
  ar: { title: "ابحث عن منزلك" },
  tr: { title: "Evinizi Bulun" }
};

const t = translations[lang] || translations.en;
```

---

## 📄 Sayfalar

| Sayfa | Rota | Açıklama |
|-------|------|----------|
| Ana Sayfa | `/[lang]` | Hero, arama, öne çıkan mülkler, hizmetler |
| Mülkler | `/[lang]/properties` | Filtrelenebilir mülk listesi |
| Mülk Detay | `/[lang]/properties/[id]` | Tek mülk detayı |
| İş İlanları | `/[lang]/jobs` | Kariyer fırsatları |
| Hizmetler | `/[lang]/services` | Premium Residency, yerleşim hizmetleri |
| Giriş | `/[lang]/login` | Kullanıcı girişi |
| Mülk Ekle | `/[lang]/create-property` | Yeni mülk ilan formu |

---

## 📞 İletişim

Proje Geliştiricisi: **Suheybk**

---

## 📜 Lisans

Bu proje özel kullanım içindir.

---

*Son güncelleme: 6 Şubat 2026*
