import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PropertiesService {
  constructor() { }

  // Real Saudi Arabia Property Data with Multi-language support (EN/AR/TR)
  private properties = [
    {
      id: '1',
      title: {
        en: 'Luxury Villa in Al-Hamra District',
        ar: 'فيلا فاخرة في حي الحمراء',
        tr: 'Al-Hamra Bölgesinde Lüks Villa'
      },
      description: {
        en: 'Stunning 6-bedroom villa featuring modern architecture with traditional Saudi elements. Marble flooring throughout, private swimming pool, landscaped garden, and separate maid quarters. Located in the prestigious Al-Hamra district with 24/7 security.',
        ar: 'فيلا مذهلة مكونة من 6 غرف نوم تتميز بالهندسة المعمارية الحديثة مع عناصر سعودية تقليدية. أرضيات رخامية في جميع الأنحاء، مسبح خاص، حديقة منسقة، وغرفة خادمة منفصلة. تقع في حي الحمراء الراقي مع حراسة أمنية على مدار الساعة.',
        tr: 'Geleneksel Suudi unsurlarıyla modern mimariyi bir araya getiren muhteşem 6 yatak odalı villa. Her yerde mermer zemin, özel yüzme havuzu, peyzajlı bahçe ve ayrı hizmetli odası. Prestijli Al-Hamra bölgesinde 7/24 güvenlik ile.'
      },
      price: 2850000,
      type: 'VILLA',
      location: { lat: 24.7136, lng: 46.6753, city: 'Riyadh', address: 'Al-Hamra District, Riyadh' },
      images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800'],
      features: { bedrooms: 6, bathrooms: 7, area: 450, parking: 3 },
      status: 'PUBLISHED'
    },
    {
      id: '2',
      title: {
        en: 'Modern Apartment with Sea View',
        ar: 'شقة حديثة بإطلالة بحرية',
        tr: 'Deniz Manzaralı Modern Daire'
      },
      description: {
        en: 'Breathtaking 3-bedroom apartment in a premium waterfront tower in Jeddah. Floor-to-ceiling windows offering panoramic Red Sea views. High-end finishes, smart home system, gym, and infinity pool in the building.',
        ar: 'شقة خلابة مكونة من 3 غرف نوم في برج فاخر على الواجهة البحرية في جدة. نوافذ ممتدة من الأرض حتى السقف توفر إطلالات بانورامية على البحر الأحمر. تشطيبات عالية الجودة، نظام منزل ذكي، صالة رياضية، ومسبح انفينيتي في المبنى.',
        tr: 'Cidde\'de premium bir sahil kulesinde nefes kesici 3 yatak odalı daire. Kızıldeniz\'in panoramik manzarasını sunan yerden tavana pencereler. Üst düzey bitiş, akıllı ev sistemi, spor salonu ve binada sonsuzluk havuzu.'
      },
      price: 1650000,
      type: 'APARTMENT',
      location: { lat: 21.4858, lng: 39.1925, city: 'Jeddah', address: 'Al-Corniche, Jeddah' },
      images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
      features: { bedrooms: 3, bathrooms: 3, area: 220, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '3',
      title: {
        en: 'Traditional Villa Near Masjid Al-Nabawi',
        ar: 'فيلا تقليدية بالقرب من المسجد النبوي',
        tr: 'Mescid-i Nebevi Yakınında Geleneksel Villa'
      },
      description: {
        en: 'Exquisite 5-bedroom villa just 10 minutes from the Prophet\'s Mosque. Combines traditional Islamic architecture with modern comfort. Large family majlis, private courtyard, and rooftop terrace with mosque views.',
        ar: 'فيلا رائعة مكونة من 5 غرف نوم على بعد 10 دقائق فقط من المسجد النبوي. تجمع بين العمارة الإسلامية التقليدية والراحة الحديثة. مجلس عائلي كبير، فناء خاص، وتراس على السطح مع إطلالة على المسجد.',
        tr: 'Hz. Peygamber\'in Mescidi\'ne sadece 10 dakika mesafede muhteşem 5 yatak odalı villa. Geleneksel İslami mimariyi modern konforla birleştiriyor. Geniş aile meclisi, özel avlu ve cami manzaralı çatı terası.'
      },
      price: 3200000,
      type: 'VILLA',
      location: { lat: 24.4672, lng: 39.6112, city: 'Al Madinah', address: 'Al-Haram District, Al Madinah' },
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
      features: { bedrooms: 5, bathrooms: 5, area: 380, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '4',
      title: {
        en: 'Penthouse in Kingdom Tower',
        ar: 'بنتهاوس في برج المملكة',
        tr: 'Kingdom Kulesi\'nde Çatı Katı Dairesi'
      },
      description: {
        en: 'Ultra-luxury penthouse in the iconic Kingdom Centre. 360-degree views of Riyadh skyline. Private elevator, designer interiors by Italian architects, home cinema, and dedicated concierge service.',
        ar: 'بنتهاوس فائق الفخامة في مركز المملكة الشهير. إطلالات 360 درجة على أفق الرياض. مصعد خاص، تصميمات داخلية من مهندسين إيطاليين، سينما منزلية، وخدمة كونسيرج مخصصة.',
        tr: 'İkonik Kingdom Centre\'da ultra lüks çatı katı. Riyad silüetinin 360 derecelik manzarası. Özel asansör, İtalyan mimarlar tarafından tasarlanmış iç mekanlar, ev sineması ve özel concierge hizmeti.'
      },
      price: 8500000,
      type: 'APARTMENT',
      location: { lat: 24.7116, lng: 46.6742, city: 'Riyadh', address: 'King Fahd Road, Riyadh' },
      images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
      features: { bedrooms: 4, bathrooms: 5, area: 520, parking: 4 },
      status: 'PUBLISHED'
    },
    {
      id: '5',
      title: {
        en: 'Commercial Building in Al-Olaya',
        ar: 'مبنى تجاري في العليا',
        tr: 'Al-Olaya\'da Ticari Bina'
      },
      description: {
        en: 'Prime commercial building in Riyadh\'s business district. 8 floors, 2,400 sqm total. Ideal for corporate headquarters or medical center. Modern infrastructure with fiber optic connectivity.',
        ar: 'مبنى تجاري رئيسي في منطقة الأعمال بالرياض. 8 طوابق، إجمالي 2,400 متر مربع. مثالي للمقار الرئيسية للشركات أو المركز الطبي. بنية تحتية حديثة مع اتصال بالألياف الضوئية.',
        tr: 'Riyad\'ın iş bölgesinde birinci sınıf ticari bina. 8 kat, toplam 2.400 m². Şirket merkezi veya tıp merkezi için ideal. Fiber optik bağlantılı modern altyapı.'
      },
      price: 12000000,
      type: 'COMMERCIAL',
      location: { lat: 24.6948, lng: 46.6852, city: 'Riyadh', address: 'Al-Olaya District, Riyadh' },
      images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800'],
      features: { bedrooms: 0, bathrooms: 16, area: 2400, parking: 40 },
      status: 'PUBLISHED'
    },
    {
      id: '6',
      title: {
        en: 'Beachfront Villa in Obhur',
        ar: 'فيلا على شاطئ البحر في أبحر',
        tr: 'Obhur\'da Sahil Villası'
      },
      description: {
        en: 'Exclusive beachfront villa in Jeddah\'s prestigious Obhur area. Private beach access, infinity pool overlooking the Red Sea, 4 ensuite bedrooms, and a boat dock. Perfect for a luxurious coastal lifestyle.',
        ar: 'فيلا حصرية على شاطئ البحر في منطقة أبحر الراقية بجدة. وصول خاص للشاطئ، مسبح انفينيتي يطل على البحر الأحمر، 4 غرف نوم مع حمامات خاصة، ورصيف للقوارب. مثالية لنمط حياة ساحلي فاخر.',
        tr: 'Cidde\'nin prestijli Obhur bölgesinde özel sahil villası. Özel plaj erişimi, Kızıldeniz manzaralı sonsuzluk havuzu, 4 banyolu yatak odası ve tekne iskelesi. Lüks bir sahil yaşam tarzı için mükemmel.'
      },
      price: 5800000,
      type: 'VILLA',
      location: { lat: 21.7254, lng: 39.1234, city: 'Jeddah', address: 'Obhur Al-Shamaliyah, Jeddah' },
      images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800'],
      features: { bedrooms: 4, bathrooms: 5, area: 400, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '7',
      title: {
        en: 'Investment Land in NEOM',
        ar: 'أرض استثمارية في نيوم',
        tr: 'NEOM\'da Yatırım Arazisi'
      },
      description: {
        en: 'Strategic investment land parcel in the NEOM development zone. 5,000 sqm plot approved for mixed-use development. Part of Saudi Vision 2030. Exceptional growth potential in the city of the future.',
        ar: 'قطعة أرض استثمارية استراتيجية في منطقة تطوير نيوم. قطعة أرض 5,000 متر مربع معتمدة للتطوير متعدد الاستخدامات. جزء من رؤية السعودية 2030. إمكانات نمو استثنائية في مدينة المستقبل.',
        tr: 'NEOM geliştirme bölgesinde stratejik yatırım arazisi. Karma kullanımlı geliştirme için onaylanmış 5.000 m² arsa. Suudi Vizyon 2030\'un bir parçası. Geleceğin şehrinde olağanüstü büyüme potansiyeli.'
      },
      price: 15000000,
      type: 'LAND',
      location: { lat: 28.0000, lng: 35.0000, city: 'NEOM', address: 'NEOM Development Zone, Tabuk' },
      images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
      features: { bedrooms: 0, bathrooms: 0, area: 5000, parking: 0 },
      status: 'PUBLISHED'
    },
    {
      id: '8',
      title: {
        en: 'Family Compound in Diplomatic Quarter',
        ar: 'مجمع سكني في الحي الدبلوماسي',
        tr: 'Diplomatik Mahallede Aile Kompleksi'
      },
      description: {
        en: 'Secure 3-villa compound in Riyadh\'s prestigious Diplomatic Quarter. Each villa has 5 bedrooms, shared pool and tennis court, 24/7 security, and landscaped communal gardens. Ideal for expat families.',
        ar: 'مجمع آمن من 3 فلل في الحي الدبلوماسي الراقي بالرياض. كل فيلا تحتوي على 5 غرف نوم، مسبح مشترك وملعب تنس، حراسة أمنية على مدار الساعة، وحدائق مشتركة منسقة. مثالي للعائلات الوافدة.',
        tr: 'Riyad\'ın prestijli Diplomatik Mahallesi\'nde güvenli 3 villalı kompleks. Her villa 5 yatak odası, ortak havuz ve tenis kortu, 7/24 güvenlik ve peyzajlı ortak bahçelere sahip. Yabancı aileler için ideal.'
      },
      price: 7200000,
      type: 'VILLA',
      location: { lat: 24.6761, lng: 46.6254, city: 'Riyadh', address: 'Diplomatic Quarter, Riyadh' },
      images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
      features: { bedrooms: 15, bathrooms: 18, area: 1200, parking: 9 },
      status: 'PUBLISHED'
    },
    {
      id: '9',
      title: {
        en: 'Studio Apartment in Al-Khobar',
        ar: 'شقة استوديو في الخبر',
        tr: 'Al-Khobar\'da Stüdyo Daire'
      },
      description: {
        en: 'Modern studio apartment perfect for young professionals. Located in Al-Khobar\'s vibrant downtown area. Fully furnished, smart TV, high-speed internet, and access to building amenities including gym and rooftop lounge.',
        ar: 'شقة استوديو حديثة مثالية للمهنيين الشباب. تقع في وسط مدينة الخبر النابض بالحياة. مفروشة بالكامل، تلفزيون ذكي، إنترنت عالي السرعة، والوصول إلى مرافق المبنى بما في ذلك صالة الألعاب الرياضية وصالة على السطح.',
        tr: 'Genç profesyoneller için mükemmel modern stüdyo daire. Al-Khobar\'ın canlı şehir merkezinde yer almaktadır. Tamamen mobilyalı, akıllı TV, yüksek hızlı internet ve spor salonu ve çatı salonu dahil bina olanaklarına erişim.'
      },
      price: 380000,
      type: 'APARTMENT',
      location: { lat: 26.2172, lng: 50.1971, city: 'Al-Khobar', address: 'Downtown Al-Khobar' },
      images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
      features: { bedrooms: 0, bathrooms: 1, area: 45, parking: 1 },
      status: 'PUBLISHED'
    },
    {
      id: '10',
      title: {
        en: 'Historic House in Al-Balad',
        ar: 'بيت تاريخي في البلد',
        tr: 'Al-Balad\'da Tarihi Ev'
      },
      description: {
        en: 'Charming restored heritage house in Jeddah\'s UNESCO World Heritage Al-Balad district. Original Roshan windows preserved, traditional coral stone architecture. Perfect for boutique hotel or cultural center conversion.',
        ar: 'بيت تراثي ساحر تم ترميمه في حي البلد التاريخي بجدة المدرج في قائمة اليونسكو للتراث العالمي. نوافذ الروشان الأصلية محفوظة، عمارة تقليدية من الحجر المرجاني. مثالي للتحويل إلى فندق بوتيك أو مركز ثقافي.',
        tr: 'Cidde\'nin UNESCO Dünya Mirası Al-Balad bölgesinde restore edilmiş büyüleyici miras evi. Orijinal Roshan pencereleri korunmuş, geleneksel mercan taşı mimarisi. Butik otel veya kültür merkezi dönüşümü için mükemmel.'
      },
      price: 4500000,
      type: 'COMMERCIAL',
      location: { lat: 21.4825, lng: 39.1784, city: 'Jeddah', address: 'Al-Balad Historic District, Jeddah' },
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
      features: { bedrooms: 8, bathrooms: 6, area: 350, parking: 0 },
      status: 'PUBLISHED'
    },
    {
      id: '11',
      title: {
        en: 'Luxury Duplex in Al-Nakheel',
        ar: 'دوبلكس فاخر في النخيل',
        tr: 'Al-Nakheel\'de Lüks Dubleks'
      },
      description: {
        en: 'Spectacular duplex apartment in Riyadh\'s upscale Al-Nakheel neighborhood. Double-height living room, private terrace garden, Italian marble, and Miele appliances. Walking distance to premium shopping and dining.',
        ar: 'شقة دوبلكس رائعة في حي النخيل الراقي بالرياض. غرفة معيشة بارتفاع مضاعف، حديقة تراس خاصة، رخام إيطالي، وأجهزة ميلي. على مسافة قريبة من التسوق والمطاعم الراقية.',
        tr: 'Riyad\'ın lüks Al-Nakheel mahallesinde muhteşem dubleks daire. Çift yükseklikli oturma odası, özel teras bahçesi, İtalyan mermeri ve Miele cihazları. Premium alışveriş ve restoranlarına yürüme mesafesinde.'
      },
      price: 2100000,
      type: 'APARTMENT',
      location: { lat: 24.7654, lng: 46.7123, city: 'Riyadh', address: 'Al-Nakheel District, Riyadh' },
      images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800'],
      features: { bedrooms: 4, bathrooms: 4, area: 320, parking: 2 },
      status: 'PUBLISHED'
    },
    {
      id: '12',
      title: {
        en: 'Farm Estate in Al-Kharj',
        ar: 'مزرعة في الخرج',
        tr: 'Al-Kharj\'da Çiftlik Mülkü'
      },
      description: {
        en: 'Expansive 10,000 sqm farm estate with modern villa. Productive date palm orchard, vegetable gardens, livestock facilities, and private well. Main villa has 6 bedrooms plus guest house. Perfect weekend retreat.',
        ar: 'مزرعة واسعة بمساحة 10,000 متر مربع مع فيلا حديثة. بستان نخيل مثمر، حدائق خضروات، مرافق للماشية، وبئر خاص. الفيلا الرئيسية تحتوي على 6 غرف نوم بالإضافة إلى بيت ضيافة. ملاذ مثالي لعطلة نهاية الأسبوع.',
        tr: 'Modern villa ile geniş 10.000 m² çiftlik mülkü. Verimli hurma bahçesi, sebze bahçeleri, hayvancılık tesisleri ve özel kuyu. Ana villa 6 yatak odası artı misafir evi. Mükemmel hafta sonu kaçamağı.'
      },
      price: 3800000,
      type: 'LAND',
      location: { lat: 24.1551, lng: 47.3112, city: 'Al-Kharj', address: 'Al-Kharj Farms Area' },
      images: ['https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800'],
      features: { bedrooms: 6, bathrooms: 5, area: 10000, parking: 5 },
      status: 'PUBLISHED'
    }
  ];

  async create(createPropertyDto: Prisma.PropertyCreateInput) {
    const newProp = {
      id: Date.now().toString(),
      ...createPropertyDto,
      location: JSON.parse(createPropertyDto.location as string),
      images: JSON.stringify(createPropertyDto.images),
      features: JSON.stringify(createPropertyDto.features),
      status: 'PUBLISHED'
    };
    return newProp;
  }

  async findAll(query: { location?: string; type?: string; minPrice?: string; maxPrice?: string; sort?: string }) {
    let filtered = [...this.properties];

    // Filter by Location (City or Address)
    if (query.location) {
      const loc = query.location.toLowerCase();
      filtered = filtered.filter(p =>
        p.location.city.toLowerCase().includes(loc) ||
        p.location.address.toLowerCase().includes(loc)
      );
    }

    // Filter by Type
    if (query.type && query.type !== 'ALL') {
      filtered = filtered.filter(p => p.type === query.type);
    }

    // Filter by Price
    if (query.minPrice) {
      filtered = filtered.filter(p => p.price >= parseFloat(query.minPrice!));
    }
    if (query.maxPrice) {
      filtered = filtered.filter(p => p.price <= parseFloat(query.maxPrice!));
    }

    // Sorting
    if (query.sort) {
      switch (query.sort) {
        case 'price_asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price_desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
        default:
          filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
          break;
      }
    }

    return filtered;
  }

  async findOne(id: string) {
    return this.properties.find(p => p.id === id);
  }
}
