import { LocalizedString } from './exoplanets';

export interface StarSystem {
  id: string;
  name: LocalizedString;
  badge: string; // Emoji or short code
  hostStar: LocalizedString;
  distance: LocalizedString;
  tagline: LocalizedString;
  planetIds: string[];
}

export const STAR_SYSTEMS: StarSystem[] = [
  {
    id: 'trappist-1',
    name: {
      en: 'TRAPPIST-1 System',
      hi: 'ट्रैपिस्ट-1 प्रणाली',
      bn: 'ট্রাপিস্ট-১ সৌরজগৎ'
    },
    badge: '🔴',
    hostStar: {
      en: 'TRAPPIST-1 (Red Dwarf)',
      hi: 'ट्रैपिस्ट-1 (लाल बौना)',
      bn: 'ট্রাপিস্ট-১ (লাল বামন तारा)'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    tagline: {
      en: 'An ultra-cool red dwarf orbited by 7 rocky Earth-sized worlds, with 3 in the habitable zone.',
      hi: '7 पृथ्वी के आकार के चट्टानी ग्रहों वाला एक लाल बौना तारा तंत्र, जिनमें से 3 रहने योग्य क्षेत्र में हैं।',
      bn: '৭টি পৃথিবী-আকারের পাথুরে গ্রহ বিশিষ্ট সৌরজগৎ, যার ৩টি গ্রহ সম্ভাব্য বাসযোগ্য অঞ্চলে অবস্থিত।'
    },
    planetIds: [
      'trapist-1',
      'trappist-1b',
      'trappist-1c',
      'trappist-1d',
      'trappist-1e',
      'trappist-1f',
      'trappist-1g',
      'trappist-1h'
    ]
  },
  {
    id: 'kepler-90',
    name: {
      en: 'Kepler-90 System',
      hi: 'केप्लर-90 प्रणाली',
      bn: 'কেপলার-৯০ সৌরজগৎ'
    },
    badge: '☀️',
    hostStar: {
      en: 'Kepler-90 (G-type Star)',
      hi: 'केप्लर-90 (जी-प्रकार तारा)',
      bn: 'কেপলার-৯০ (জি-টাইপ নক্ষত্র)'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    tagline: {
      en: 'The first known star system with 8 planets, matching the planetary count of our own Solar System.',
      hi: '8 ग्रहों वाला एकमात्र ज्ञात तारा तंत्र, जो हमारे सौर मंडल के ग्रहों की संख्या के बराबर है।',
      bn: 'আমাদের সৌরজগতের মতোই সমান ৮টি গ্রহ থাকা প্রথম আবিষ্কৃত বিশাল নক্ষত্রমণ্ডল।'
    },
    planetIds: [
      'kepler-90',
      'kepler-90b',
      'kepler-90c',
      'kepler-90i',
      'kepler-90d',
      'kepler-90e',
      'kepler-90f',
      'kepler-90g',
      'kepler-90h'
    ]
  },
  {
    id: '55-cancri',
    name: {
      en: '55 Cancri System',
      hi: '55 कैनकरी प्रणाली',
      bn: '৫৫ ক্যানক্রি সৌরজগৎ'
    },
    badge: '🟡',
    hostStar: {
      en: '55 Cancri A (Copernicus)',
      hi: '55 कैनकरी ए (कोपरनिकस)',
      bn: '৫৫ ক্যানক্রি এ (কোপারনিকাস)'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    tagline: {
      en: 'A crowded 5-planet system featuring the scorched lava super-Earth Janssen (55 Cancri e).',
      hi: '5 ग्रहों का एक तंत्र जिसमें अत्यधिक गर्म लावा की दुनिया 55 कैनकरी ई शामिल है।',
      bn: 'লাভাচ্ছন্ন অতি-উত্তপ্ত জ্যানসেন (৫৫ ক্যানক্রি-ই) সহ ৫টি বৈচিত্র্যময় গ্রহের সৌরজগৎ।'
    },
    planetIds: [
      '55-cancri',
      '55-cancri-e',
      '55-cancri-b',
      '55-cancri-c',
      '55-cancri-f',
      '55-cancri-d'
    ]
  },
  {
    id: 'proxima-centauri',
    name: {
      en: 'Proxima Centauri',
      hi: 'प्रॉक्सिमा सेंटॉरी प्रणाली',
      bn: 'প্রক্সিমা সেন্টরাই সৌরজগৎ'
    },
    badge: '✨',
    hostStar: {
      en: 'Proxima Centauri (Red Dwarf)',
      hi: 'प्रॉक्सिमा सेंटॉरी (लाल बौना)',
      bn: 'প্রক্সিমা সেন্টরাই (লাল বামন)'
    },
    distance: {
      en: '4.24 Light Years',
      hi: '4.24 प्रकाश वर्ष',
      bn: '৪.২৪ আলোকবর্ষ'
    },
    tagline: {
      en: 'Our nearest stellar neighbor, hosting planets located right in Earth’s cosmic backyard.',
      hi: 'हमारा सबसे निकटतम तारा तंत्र, जो पृथ्वी के सबसे पास स्थित है।',
      bn: 'পৃথিবীর সবচেয়ে নিকটবর্তী সৌরজগৎ, যা মাত্র ৪.২৪ আলোকবর্ষ দূরত্বে অবস্থিত।'
    },
    planetIds: [
      'proxima-b',
      'proxima-centauri-d'
    ]
  },
  {
    id: 'kepler-habitable',
    name: {
      en: 'Kepler Habitable Worlds',
      hi: 'केप्लर रहने योग्य ग्रह',
      bn: 'কেপলার বাসযোগ্য গ্রহসমূহ'
    },
    badge: '🌍',
    hostStar: {
      en: 'Kepler Host Stars',
      hi: 'केप्लर मेजबान तारे',
      bn: 'কেপলার হোস্ট নক্ষত্র'
    },
    distance: {
      en: '582 – 1,800 Light Years',
      hi: '582 - 1,800 प्रकाश वर्ष',
      bn: '৫৮২ - ১,৮০০ আলোকবর্ষ'
    },
    tagline: {
      en: 'Milestone Earth cousins discovered in the habitable zones of their stars where liquid water may exist.',
      hi: 'रहने योग्य क्षेत्रों में खोजे गए प्रसिद्ध ऐतिहासिक एक्सोप्लैनेट्स जहां पानी हो सकता है।',
      bn: 'কেপলার টেলিস্কোপে আবিষ্কৃত পৃথিবীর যমজ বা সাদৃশ্যপূর্ণ সম্ভাব্য বাসযোগ্য এক্সোপ্ল্যানেটসমূহ।'
    },
    planetIds: [
      'kepler-186f',
      'kepler-22b',
      'kepler-452b'
    ]
  },
  {
    id: 'hr-8799',
    name: {
      en: 'HR 8799 System',
      hi: 'एचआर 8799 प्रणाली',
      bn: 'এইচআর ৮৭৯৯ সৌরজগৎ'
    },
    badge: '⭐',
    hostStar: {
      en: 'HR 8799 (Lambda Boötis Star)',
      hi: 'एचआर 8799 तारा',
      bn: 'এইচআর ৮৭৯৯ নক্ষত্র'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    tagline: {
      en: 'A young, energetic star world-famous for the first direct photography of exoplanets.',
      hi: 'एक युवा तारा जो सीधे फोटो खींचे जाने वाले पहले ग्रहीय तंत्र के लिए प्रसिद्ध है।',
      bn: 'একটি তরুণ নক্ষত্র, যার চারপাশের গ্রহগুলোর প্রথমবারের মতো সরাসরি ছবি তোলা সম্ভব হয়েছিল।'
    },
    planetIds: [
      'hr-8799'
    ]
  }
];

export function getSystemForPlanet(planetId: string): StarSystem | undefined {
  return STAR_SYSTEMS.find(sys => sys.planetIds.includes(planetId));
}
