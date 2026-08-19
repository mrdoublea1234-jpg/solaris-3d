export interface LocalizedString {
  en: string;
  hi: string;
  bn: string;
}

export interface DetailedPlanetInfo {
  overview: LocalizedString;
  physicalCharacteristics: {
    mass: LocalizedString;
    diameter: LocalizedString;
    gravity: LocalizedString;
  };
  atmosphere: LocalizedString;
  orbitAndRotation: LocalizedString;
  moons: LocalizedString;
  surface: LocalizedString;
  exploration: LocalizedString;
  didYouKnow: LocalizedString[];
}

export interface PlanetData {
  id: string;
  type: 'Star' | 'Planet';
  name: LocalizedString;
  description: LocalizedString;
  radius: number;           // Visual scale for 3D rendering
  distance: number;         // Distance from the Sun in 3D units
  orbitSpeed: number;       // Multiplier for orbital movement
  rotationSpeed: number;    // Multiplier for axial rotation
  color: string;            // Primary base color
  hasRings?: boolean;       // Specific to Saturn/Uranus
  atmosphereColor?: string; // Optional atmosphere glow
  textureUrl?: string;      // Placeholder for future textures
  highResTextureUrl?: string; // High-quality 2K/4K realistic texture
  modelUrl?: string;        // Optional true .glb model for future support
  details: DetailedPlanetInfo;
}

export const planets: PlanetData[] = [
  {
    id: 'sun',
    type: 'Star',
    name: { en: 'Sun', hi: 'सूर्य (Surya)', bn: 'সূর্য (Surya)' },
    description: {
      en: 'The star at the center of the Solar System, providing light and energy to all planets.',
      hi: 'हमारे सौर मंडल के केंद्र में स्थित तारा, जो सभी ग्रहों को प्रकाश और ऊर्जा प्रदान करता है।',
      bn: 'সৌরজগতের কেন্দ্রে অবস্থিত নক্ষত্র, যা সমস্ত গ্রহকে আলো এবং শক্তি প্রদান করে।'
    },
    radius: 3,
    distance: 0,
    orbitSpeed: 0,
    rotationSpeed: 0.002,
    color: '#ff9900',
    textureUrl: '/textures/sun.jpg',
    highResTextureUrl: '/textures/high-res/sun.jpg',
    details: {
      overview: {
        en: 'The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit.',
        hi: 'सूर्य एक पीला बौना तारा है, जो हमारे सौर मंडल के केंद्र में चमकती गैसों का एक गर्म गोला है। इसका गुरुत्वाकर्षण सौर मंडल को एक साथ बांधे रखता है।',
        bn: 'সূর্য একটি হলুদ বামন নক্ষত্র, যা আমাদের সৌরজগতের কেন্দ্রে জ্বলন্ত গ্যাসের একটি উত্তপ্ত বল। এর মহাকর্ষ সৌরজগতকে একসাথে ধরে রাখে।'
      },
      physicalCharacteristics: {
        mass: { en: '1.989 × 10^30 kg (333,000 Earths)', hi: '1.989 × 10^30 किग्रा (333,000 पृथ्वी)', bn: '1.989 × 10^30 কেজি (৩৩৩,০০০ পৃথিবীর সমান)' },
        diameter: { en: '1.39 million km', hi: '1.39 मिलियन किमी', bn: '১.৩৯ মিলিয়ন কিমি' },
        gravity: { en: '274 m/s² (28x Earth)', hi: '274 m/s² (पृथ्वी से 28 गुना)', bn: '২৭৪ মি/সে² (পৃথিবীর ২৮ গুণ)' }
      },
      atmosphere: {
        en: 'The Sun\'s atmosphere consists of the photosphere (visible surface), the chromosphere, and the corona (outermost layer).',
        hi: 'सूर्य के वायुमंडल में प्रकाशमंडल (दृश्य सतह), वर्णमंडल और कोरोना (सबसे बाहरी परत) शामिल हैं।',
        bn: 'সূর্যের বায়ুমণ্ডল ফটোস্ফিয়ার (দৃশ্যমান পৃষ্ঠ), ক্রোমোস্ফিয়ার এবং করোনা (সর্ববহিঃস্থ স্তর) নিয়ে গঠিত।'
      },
      orbitAndRotation: {
        en: 'The Sun rotates on its axis once every 27 Earth days at its equator, but takes 31 days at its poles. It orbits the center of the Milky Way galaxy.',
        hi: 'सूर्य अपनी धुरी पर भूमध्य रेखा पर 27 पृथ्वी दिनों में और ध्रुवों पर 31 दिनों में एक चक्कर पूरा करता है।',
        bn: 'সূর্য তার অক্ষে নিরক্ষীয় অঞ্চলে ২৭ পৃথিবী দিনে এবং মেরু অঞ্চলে ৩১ দিনে একবার ঘোরে।'
      },
      moons: {
        en: 'The Sun does not have moons, but it has 8 planets, numerous dwarf planets, and millions of asteroids orbiting it.',
        hi: 'सूर्य के पास कोई चंद्रमा नहीं है, लेकिन इसके चारों ओर 8 ग्रह और लाखों क्षुद्रग्रह परिक्रमा करते हैं।',
        bn: 'সূর্যের কোন চাঁদ নেই, তবে এর চারপাশে ৮টি গ্রহ এবং লক্ষ লক্ষ গ্রহাণু ঘোরে।'
      },
      surface: {
        en: 'The Sun does not have a solid surface. Its visible surface, the photosphere, is a layer of plasma at about 5,500°C.',
        hi: 'सूर्य की कोई ठोस सतह नहीं है। इसकी दृश्य सतह, प्रकाशमंडल, लगभग 5,500°C पर प्लाज्मा की एक परत है।',
        bn: 'সূর্যের কোন কঠিন পৃষ্ঠ নেই। এর দৃশ্যমান পৃষ্ঠ, ফটোস্ফিয়ার, প্রায় ৫,৫০০°C তাপমাত্রার প্লাজমার একটি স্তর।'
      },
      exploration: {
        en: 'Studied by numerous spacecraft like the Parker Solar Probe, SOHO, and the Solar Dynamics Observatory.',
        hi: 'पार्कर सोलर प्रोब, SOHO और सोलर डायनेमिक्स ऑब्जर्वेटरी जैसे कई अंतरिक्ष यानों द्वारा इसका अध्ययन किया गया है।',
        bn: 'পার্কার সোলার প্রোব, SOHO এবং সোলার ডায়নামিক্স অবজারভেটরির মতো অসংখ্য মহাকাশযান দ্বারা এটি অধ্যয়ন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'The Sun accounts for 99.86% of the mass in the solar system.', hi: 'सौर मंडल के कुल द्रव्यमान का 99.86% हिस्सा केवल सूर्य का है।', bn: 'সৌরজগতের মোট ভরের ৯৯.৮৬% কেবল সূর্যের।' },
        { en: 'About one million Earths could fit inside the Sun.', hi: 'सूर्य के अंदर लगभग दस लाख पृथ्वी समा सकती हैं।', bn: 'সূর্যের ভিতরে প্রায় এক মিলিয়ন পৃথিবী এঁটে যেতে পারে।' }
      ]
    }
  },
  {
    id: 'mercury',
    type: 'Planet',
    name: { en: 'Mercury', hi: 'बुध (Budha)', bn: 'বুধ (Budh)' },
    description: {
      en: 'The smallest and closest planet to the Sun, with a surface heavily cratered and barren.',
      hi: 'सूर्य के सबसे करीब और हमारे सौर मंडल का सबसे छोटा ग्रह।',
      bn: 'সূর্যের নিকটতম এবং আমাদের সৌরজগতের ক্ষুদ্রতম গ্রহ.'
    },
    radius: 0.5,
    distance: 4,
    orbitSpeed: 0.04,
    rotationSpeed: 0.01,
    color: '#a8a8a8',
    textureUrl: '/textures/mercury.jpg',
    highResTextureUrl: '/textures/high-res/mercury.jpg',
    details: {
      overview: {
        en: 'Mercury is the smallest planet in our solar system and the closest to the Sun. It is a rocky world with a heavily cratered surface, resembling Earth\'s Moon.',
        hi: 'बुध हमारे सौर मंडल का सबसे छोटा और सूर्य के सबसे निकट का ग्रह है। यह पृथ्वी के चंद्रमा के समान गड्ढों वाली सतह वाला एक पथरीला ग्रह है।',
        bn: 'বুধ আমাদের সৌরজগতের ক্ষুদ্রতম এবং সূর্যের নিকটতম গ্রহ। এটি পৃথিবীর চাঁদের মতো গর্তযুক্ত পৃষ্ঠের একটি পাথুরে গ্রহ।'
      },
      physicalCharacteristics: {
        mass: { en: '3.30 × 10^23 kg (0.055 Earths)', hi: '3.30 × 10^23 किग्रा', bn: '৩.৩০ × 10^23 কেজি' },
        diameter: { en: '4,879 km', hi: '4,879 किमी', bn: '৪,৮৭৯ কিমি' },
        gravity: { en: '3.7 m/s² (0.38 Earths)', hi: '3.7 m/s²', bn: '৩.৭ মি/সে²' }
      },
      atmosphere: {
        en: 'Mercury has virtually no atmosphere. Instead, it has a thin exosphere made up of atoms blasted off the surface by the solar wind.',
        hi: 'बुध का लगभग कोई वायुमंडल नहीं है। इसके बजाय, इसमें सौर हवा से उड़ने वाले परमाणुओं से बना एक बहुत ही पतला बाह्यमंडल है।',
        bn: 'বুধের কার্যত কোন বায়ুমণ্ডল নেই। এর পরিবর্তে, সৌর বায়ু দ্বারা পৃষ্ঠ থেকে ছিটকে পড়া পরমাণু দিয়ে তৈরি একটি পাতলা এক্সোস্ফিয়ার রয়েছে।'
      },
      orbitAndRotation: {
        en: 'It orbits the Sun in just 88 Earth days, traveling at nearly 29 miles per second. It completes one rotation every 59 Earth days.',
        hi: 'यह केवल 88 पृथ्वी दिनों में सूर्य की परिक्रमा करता है। यह हर 59 पृथ्वी दिनों में एक घूर्णन पूरा करता है।',
        bn: 'এটি মাত্র ৮৮ পৃথিবী দিনে সূর্যের চারদিকে ঘোরে। এটি প্রতি ৫৯ পৃথিবী দিনে একবার ঘোরে।'
      },
      moons: {
        en: 'Mercury has no moons.',
        hi: 'बुध का कोई चंद्रमा नहीं है।',
        bn: 'বুধের কোন চাঁদ নেই।'
      },
      surface: {
        en: 'The surface experiences extreme temperature variations, from 430°C during the day to -180°C at night.',
        hi: 'सतह पर अत्यधिक तापमान भिन्नता का अनुभव होता है, दिन में 430°C से लेकर रात में -180°C तक।',
        bn: 'পৃষ্ঠের তাপমাত্রা দিনে ৪৩০°C থেকে রাতে -১৮০°C পর্যন্ত ওঠানামা করে।'
      },
      exploration: {
        en: 'Explored by Mariner 10 and MESSENGER. The upcoming BepiColombo mission will arrive in 2025.',
        hi: 'मैरिनर 10 और मैसेंजर द्वारा अध्ययन किया गया। BepiColombo मिशन 2025 में पहुंचेगा।',
        bn: 'মেরিনার ১০ এবং মেসেঞ্জার দ্বারা অন্বেষণ করা হয়েছে। BepiColombo মিশন ২০২৫ সালে পৌঁছাবে।'
      },
      didYouKnow: [
        { en: 'Your weight on Mercury would be 38% of your weight on Earth.', hi: 'बुध पर आपका वजन पृथ्वी पर आपके वजन का 38% होगा।', bn: 'বুধে আপনার ওজন পৃথিবীতে আপনার ওজনের ৩৮% হবে।' },
        { en: 'Despite being closest to the Sun, Venus is actually hotter.', hi: 'सूर्य के सबसे करीब होने के बावजूद, शुक्र वास्तव में अधिक गर्म है।', bn: 'সূর্যের নিকটতম হওয়া সত্ত্বেও, শুক্র আসলে বেশি উত্তপ্ত।' }
      ]
    }
  },
  {
    id: 'venus',
    type: 'Planet',
    name: { en: 'Venus', hi: 'शुक्र (Shukra)', bn: 'শুক্র (Shukra)' },
    description: {
      en: 'A hot, toxic planet with a thick atmosphere that traps heat in a runaway greenhouse effect.',
      hi: 'एक बेहद गर्म ग्रह, जिसका वातावरण बहुत घना और विषैला है।',
      bn: 'একটি অত্যন্ত উত্তপ্ত গ্রহ, যার বায়ুমণ্ডল খুব ঘন এবং বিষাক্ত।'
    },
    radius: 0.8,
    distance: 6,
    orbitSpeed: 0.015,
    rotationSpeed: -0.005,
    color: '#e3bb76',
    atmosphereColor: '#ffcc99',
    textureUrl: '/textures/venus.jpg',
    highResTextureUrl: '/textures/high-res/venus.jpg',
    details: {
      overview: {
        en: 'Venus is the second planet from the Sun and Earth\'s closest planetary neighbor. It’s one of the four inner, terrestrial planets, and its often called Earth’s twin because it’s similar in size and density.',
        hi: 'शुक्र सूर्य से दूसरा ग्रह है। इसे अक्सर पृथ्वी का जुड़वां ग्रह कहा जाता है क्योंकि इसका आकार और घनत्व पृथ्वी के समान है।',
        bn: 'শুক্র সূর্য থেকে দ্বিতীয় গ্রহ। এটিকে প্রায়শই পৃথিবীর জমজ বলা হয় কারণ এর আকার এবং ঘনত্ব পৃথিবীর মতো।'
      },
      physicalCharacteristics: {
        mass: { en: '4.87 × 10^24 kg (0.815 Earths)', hi: '4.87 × 10^24 किग्रा', bn: '৪.৮৭ × 10^24 কেজি' },
        diameter: { en: '12,104 km', hi: '12,104 किमी', bn: '১২,১০৪ কিমি' },
        gravity: { en: '8.87 m/s² (0.9 Earths)', hi: '8.87 m/s²', bn: '৮.৮৭ মি/সে²' }
      },
      atmosphere: {
        en: 'Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid.',
        hi: 'शुक्र का वायुमंडल बहुत घना और विषैला है, जो मुख्य रूप से कार्बन डाइऑक्साइड से बना है।',
        bn: 'শুক্রের একটি ঘন, বিষাক্ত বায়ুমণ্ডল রয়েছে যা কার্বন ডাই অক্সাইডে ভরা।'
      },
      orbitAndRotation: {
        en: 'It orbits the Sun in 225 Earth days. Unusually, Venus spins in the opposite direction of most planets (retrograde rotation), taking 243 days.',
        hi: 'यह 225 पृथ्वी दिनों में सूर्य की परिक्रमा करता है। शुक्र अन्य ग्रहों की विपरीत दिशा में घूमता है।',
        bn: 'এটি ২২৫ পৃথিবী দিনে সূর্যের চারদিকে ঘোরে। শুক্র অন্যান্য গ্রহের বিপরীত দিকে ঘোরে।'
      },
      moons: {
        en: 'Venus has no moons.',
        hi: 'शुक्र का कोई चंद्रमा नहीं है।',
        bn: 'শুক্রের কোন চাঁদ নেই।'
      },
      surface: {
        en: 'The hottest planet in the solar system, with a surface temperature of 475°C. The surface pressure is 90 times that of Earth.',
        hi: 'सौर मंडल का सबसे गर्म ग्रह, जिसकी सतह का तापमान 475°C है।',
        bn: 'সৌরজগতের সবচেয়ে উত্তপ্ত গ্রহ, যার পৃষ্ঠের তাপমাত্রা ৪৭৫°C।'
      },
      exploration: {
        en: 'Explored by numerous Soviet Venera probes (which landed on the surface) and NASA\'s Magellan orbiter.',
        hi: 'सोवियत वेनेरा प्रोब और नासा के मैगेलन ऑर्बिटर द्वारा खोज की गई।',
        bn: 'সোভিয়েত ভেনেরা প্রোব এবং নাসার ম্যাগেলান অরবিটার দ্বারা অন্বেষণ করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'A day on Venus is longer than a year on Venus.', hi: 'शुक्र पर एक दिन शुक्र पर एक वर्ष से लंबा होता है।', bn: 'শুক্রের একদিন শুক্রের এক বছরের চেয়ে দীর্ঘ।' },
        { en: 'The Soviet Venera 13 lander survived for just 127 minutes on the surface before being crushed and melted.', hi: 'सतह पर नष्ट होने से पहले वेनेरा 13 लैंडर केवल 127 मिनट तक चला।', bn: 'ভূপৃষ্ঠে ধ্বংস হওয়ার আগে ভেনেরা ১৩ ল্যান্ডার মাত্র ১২৭ মিনিট টিকে ছিল।' }
      ]
    }
  },
  {
    id: 'earth',
    type: 'Planet',
    name: { en: 'Earth', hi: 'पृथ्वी (Prithvi)', bn: 'পৃথিবী (Prithvi)' },
    description: {
      en: 'Our home planet, and the only known world to harbor life, with vast oceans and a diverse atmosphere.',
      hi: 'हमारा घर, और जीवन को आश्रय देने वाला एकमात्र ज्ञात ग्रह।',
      bn: 'আমাদের বাড়ি, এবং জীবন ধারণকারী একমাত্র পরিচিত গ্রহ।'
    },
    radius: 0.85,
    distance: 8.5,
    orbitSpeed: 0.01,
    rotationSpeed: 0.02,
    color: '#2b82c9',
    atmosphereColor: '#4db8ff',
    textureUrl: '/textures/earth.jpg',
    highResTextureUrl: '/textures/high-res/earth.jpg',
    details: {
      overview: {
        en: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earth\'s surface is land consisting of continents and islands.',
        hi: 'पृथ्वी सूर्य से तीसरा ग्रह है और जीवन वाला एकमात्र ज्ञात खगोलीय पिंड है। इसका लगभग 71% हिस्सा पानी से ढका है।',
        bn: 'পৃথিবী সূর্য থেকে তৃতীয় গ্রহ এবং জীবন ধারণকারী একমাত্র পরিচিত মহাজাগতিক বস্তু। এর প্রায় ৭১% জলে ঢাকা।'
      },
      physicalCharacteristics: {
        mass: { en: '5.97 × 10^24 kg', hi: '5.97 × 10^24 किग्रा', bn: '৫.৯৭ × 10^24 কেজি' },
        diameter: { en: '12,742 km', hi: '12,742 किमी', bn: '১২,৭৪২ কিমি' },
        gravity: { en: '9.807 m/s²', hi: '9.807 m/s²', bn: '৯.৮০৭ মি/সে²' }
      },
      atmosphere: {
        en: 'Composed of 78% nitrogen, 21% oxygen, and 1% other ingredients—the perfect balance to breathe and live.',
        hi: 'इसमें 78% नाइट्रोजन, 21% ऑक्सीजन और 1% अन्य गैसें हैं, जो जीवन के लिए एकदम सही हैं।',
        bn: '৭৮% নাইট্রোজেন, ২১% অক্সিজেন এবং ১% অন্যান্য উপাদানে গঠিত - যা শ্বাস নেওয়া এবং বেঁচে থাকার জন্য উপযুক্ত।'
      },
      orbitAndRotation: {
        en: 'Earth completes one orbit every 365.25 days. It rotates on its axis every 23.9 hours.',
        hi: 'पृथ्वी हर 365.25 दिनों में एक परिक्रमा पूरी करती है। यह हर 23.9 घंटे में अपनी धुरी पर घूमती है।',
        bn: 'পৃথিবী প্রতি ৩৬৫.২৫ দিনে একবার সূর্যকে প্রদক্ষিণ করে। এটি প্রতি ২৩.৯ ঘণ্টায় তার অক্ষে ঘোরে।'
      },
      moons: {
        en: 'Earth has one natural satellite, The Moon, which is the largest moon in the solar system relative to the size of its planet.',
        hi: 'पृथ्वी का एक प्राकृतिक उपग्रह चंद्रमा है।',
        bn: 'পৃথিবীর একটি প্রাকৃতিক উপগ্রহ চাঁদ রয়েছে।'
      },
      surface: {
        en: '71% of Earth\'s surface is water-covered. The planet has a dynamically active surface with tectonic plates, mountains, valleys, and deep ocean trenches.',
        hi: 'पृथ्वी की सतह का 71% हिस्सा पानी से ढका है।',
        bn: 'পৃথিবীর পৃষ্ঠের ৭১% জলে ঢাকা।'
      },
      exploration: {
        en: 'Extensively studied by humans and thousands of artificial satellites.',
        hi: 'मनुष्यों और हजारों कृत्रिम उपग्रहों द्वारा बड़े पैमाने पर अध्ययन किया गया है।',
        bn: 'মানুষ এবং হাজার হাজার কৃত্রিম উপগ্রহ দ্বারা ব্যাপকভাবে অধ্যয়ন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'Earth is not a perfect sphere; it is slightly squashed at the poles.', hi: 'पृथ्वी एक आदर्श गोला नहीं है; यह ध्रुवों पर थोड़ी चपटी है।', bn: 'পৃথিবী নিখুঁত গোলক নয়; এটি মেরুতে সামান্য চ্যাপ্টা।' },
        { en: 'The Earth has a powerful magnetic field that protects it from harmful solar radiation.', hi: 'पृथ्वी का एक शक्तिशाली चुंबकीय क्षेत्र है जो इसे हानिकारक सौर विकिरण से बचाता है।', bn: 'পৃথিবীর একটি শক্তিশালী চৌম্বক ক্ষেত্র রয়েছে যা এটিকে ক্ষতিকারক সৌর বিকিরণ থেকে রক্ষা করে।' }
      ]
    }
  },
  {
    id: 'mars',
    type: 'Planet',
    name: { en: 'Mars', hi: 'मंगल (Mangal)', bn: 'মঙ্গল (Mangal)' },
    description: {
      en: 'A dusty, cold, desert world with a very thin atmosphere, often called the "Red Planet".',
      hi: 'एक धूल भरा, ठंडा और रेगिस्तानी ग्रह, जिसे अक्सर "लाल ग्रह" कहा जाता है।',
      bn: 'একটি ধুলোময়, শীতল এবং মরুভূমির মতো গ্রহ, যাকে প্রায়শই "লাল গ্রহ" বলা হয়।'
    },
    radius: 0.6,
    distance: 11,
    orbitSpeed: 0.008,
    rotationSpeed: 0.02,
    color: '#c1440e',
    atmosphereColor: '#ff6600',
    textureUrl: '/textures/mars.jpg',
    highResTextureUrl: '/textures/high-res/mars.jpg',
    details: {
      overview: {
        en: 'Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. It is a dynamic planet with seasons, polar ice caps, canyons, and extinct volcanoes.',
        hi: 'मंगल सूर्य से चौथा ग्रह है। यह बहुत ही पतले वायुमंडल वाला एक धूल भरा, ठंडा और रेगिस्तानी ग्रह है।',
        bn: 'মঙ্গল সূর্য থেকে চতুর্থ গ্রহ। এটি খুব পাতলা বায়ুমণ্ডল সহ একটি ধুলোময়, শীতল এবং মরুভূমি বিশ্ব।'
      },
      physicalCharacteristics: {
        mass: { en: '6.39 × 10^23 kg (0.11 Earths)', hi: '6.39 × 10^23 किग्रा', bn: '৬.৩৯ × 10^23 কেজি' },
        diameter: { en: '6,779 km', hi: '6,779 किमी', bn: '৬,৭৭৯ কিমি' },
        gravity: { en: '3.71 m/s² (0.38 Earths)', hi: '3.71 m/s²', bn: '৩.৭১ মি/সে²' }
      },
      atmosphere: {
        en: 'The atmosphere is mostly made of carbon dioxide, argon, and nitrogen. It is too thin to easily support life as we know it.',
        hi: 'वायुमंडल मुख्य रूप से कार्बन डाइऑक्साइड से बना है।',
        bn: 'বায়ুমণ্ডল বেশিরভাগ কার্বন ডাই অক্সাইড দিয়ে তৈরি।'
      },
      orbitAndRotation: {
        en: 'Mars takes 687 Earth days to orbit the Sun. A day on Mars (sol) is 24.6 hours, very similar to Earth.',
        hi: 'मंगल को सूर्य की परिक्रमा करने में 687 पृथ्वी दिन लगते हैं। मंगल पर एक दिन 24.6 घंटे का होता है।',
        bn: 'সূর্যকে প্রদক্ষিণ করতে মঙ্গলের ৬৮৭ পৃথিবী দিন সময় লাগে। মঙ্গলের এক দিন ২৪.৬ ঘণ্টা।'
      },
      moons: {
        en: 'Mars has two small, irregularly shaped moons named Phobos and Deimos.',
        hi: 'मंगल के दो छोटे चंद्रमा हैं जिनके नाम फोबोस और डीमोस हैं।',
        bn: 'মঙ্গলের দুটি ছোট চাঁদ রয়েছে যাদের নাম ফোবোস এবং ডেইমোস।'
      },
      surface: {
        en: 'The surface is colored red by iron oxide (rust). It hosts Olympus Mons, the largest volcano, and Valles Marineris, a massive canyon system.',
        hi: 'आयरन ऑक्साइड (जंग) के कारण सतह का रंग लाल होता है। यहाँ सौर मंडल का सबसे बड़ा ज्वालामुखी ओलिंपस मॉन्स है।',
        bn: 'আয়রন অক্সাইডের (মরিচা) কারণে পৃষ্ঠের রঙ লাল। এখানে সৌরজগতের বৃহত্তম আগ্নেয়গিরি অলিম্পাস মনস রয়েছে।'
      },
      exploration: {
        en: 'The most explored planet after Earth. Currently hosted by multiple rovers (Curiosity, Perseverance) and orbiters.',
        hi: 'पृथ्वी के बाद सबसे अधिक अध्ययन किया जाने वाला ग्रह। वर्तमान में कई रोवर्स वहाँ हैं।',
        bn: 'পৃথিবীর পর সবচেয়ে বেশি অন্বেষণ করা গ্রহ। বর্তমানে একাধিক রোভার সেখানে রয়েছে।'
      },
      didYouKnow: [
        { en: 'Mars is home to Olympus Mons, a volcano three times taller than Mount Everest.', hi: 'मंगल पर ओलिंपस मॉन्स है, जो माउंट एवरेस्ट से तीन गुना ऊंचा है।', bn: 'মঙ্গলে অলিম্পাস মনস রয়েছে, যা মাউন্ট এভারেস্টের চেয়ে তিনগুণ উঁচু।' },
        { en: 'Pieces of Mars have fallen to Earth as meteorites.', hi: 'उल्कापिंडों के रूप में मंगल के टुकड़े पृथ्वी पर गिरे हैं।', bn: 'উল্কা হিসেবে মঙ্গলের টুকরো পৃথিবীতে পড়েছে।' }
      ]
    }
  },
  {
    id: 'jupiter',
    type: 'Planet',
    name: { en: 'Jupiter', hi: 'बृहस्पति (Brihaspati)', bn: 'বৃহস্পতি (Brihaspati)' },
    description: {
      en: 'The largest planet in our solar system, a gas giant with swirling cloud stripes and a massive storm called the Great Red Spot.',
      hi: 'हमारे सौर मंडल का सबसे बड़ा ग्रह, जो मुख्य रूप से गैसों से बना है।',
      bn: 'আমাদের সৌরজগতের বৃহত্তম গ্রহ, যা প্রধানত গ্যাস দিয়ে তৈরি।'
    },
    radius: 2.2,
    distance: 16,
    orbitSpeed: 0.004,
    rotationSpeed: 0.05,
    color: '#d39c7e',
    textureUrl: '/textures/jupiter.jpg',
    highResTextureUrl: '/textures/high-res/jupiter.jpg',
    details: {
      overview: {
        en: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined.',
        hi: 'बृहस्पति सूर्य से पांचवां ग्रह है और सौर मंडल में सबसे बड़ा है।',
        bn: 'বৃহস্পতি সূর্য থেকে পঞ্চম গ্রহ এবং সৌরজগতের বৃহত্তম গ্রহ।'
      },
      physicalCharacteristics: {
        mass: { en: '1.898 × 10^27 kg (317 Earths)', hi: '1.898 × 10^27 किग्रा', bn: '১.৮৯৮ × 10^27 কেজি' },
        diameter: { en: '139,820 km', hi: '139,820 किमी', bn: '১৩৯,৮২০ কিমি' },
        gravity: { en: '24.79 m/s² (2.4 Earths)', hi: '24.79 m/s²', bn: '২৪.৭৯ মি/সে²' }
      },
      atmosphere: {
        en: 'Made mostly of hydrogen and helium. Its iconic swirling clouds form bright bands and violent storms.',
        hi: 'मुख्य रूप से हाइड्रोजन और हीलियम से बना है।',
        bn: 'প্রধানত হাইড্রোজেন এবং হিলিয়াম দিয়ে তৈরি।'
      },
      orbitAndRotation: {
        en: 'It orbits the Sun every 12 Earth years. It has the shortest day in the solar system, taking just 10 hours to rotate.',
        hi: 'यह हर 12 पृथ्वी वर्षों में सूर्य की परिक्रमा करता है। इसका दिन सबसे छोटा (लगभग 10 घंटे) होता है।',
        bn: 'এটি প্রতি ১২ পৃথিবী বছরে সূর্যকে প্রদক্ষিণ করে। এর দিন সবচেয়ে ছোট (প্রায় ১০ ঘণ্টা)।'
      },
      moons: {
        en: 'Jupiter has 95 recognized moons. The four largest are Io, Europa, Ganymede, and Callisto (the Galilean moons).',
        hi: 'बृहस्पति के 95 ज्ञात चंद्रमा हैं, जिनमें आयो, यूरोपा, गेनीमेड और कैलिस्टो सबसे बड़े हैं।',
        bn: 'বৃহস্পতির ৯৫টি স্বীকৃত চাঁদ রয়েছে, যার মধ্যে আইও, ইউরোপা, গ্যানিমিড এবং ক্যালিস্টো বৃহত্তম।'
      },
      surface: {
        en: 'As a gas giant, Jupiter doesn\'t have a true surface. The planet is mostly swirling gases and liquids.',
        hi: 'गैस विशाल होने के कारण, बृहस्पति की कोई ठोस सतह नहीं है।',
        bn: 'গ্যাস দৈত্য হওয়ায়, বৃহস্পতির কোন কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Explored by spacecraft like Pioneer 10, Voyager 1 & 2, Galileo, and currently the Juno orbiter.',
        hi: 'पायनियर, वॉयजर, गैलीलियो और वर्तमान में जूनो ऑर्बिटर द्वारा अध्ययन किया गया।',
        bn: 'পায়োনিয়ার, ভয়েজার, গ্যালিলিও এবং বর্তমানে জুনো অরবিটার দ্বারা অধ্যয়ন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'Jupiter’s Great Red Spot is a gigantic storm that’s about twice the size of Earth and has raged for over a century.', hi: 'बृहस्पति का ग्रेट रेड स्पॉट एक विशाल तूफान है जो पृथ्वी के आकार का लगभग दोगुना है।', bn: 'বৃহস্পতির গ্রেট রেড স্পট একটি বিশাল ঝড় যা পৃথিবীর আকারের প্রায় দ্বিগুণ।' }
      ]
    }
  },
  {
    id: 'saturn',
    type: 'Planet',
    name: { en: 'Saturn', hi: 'शनि (Shani)', bn: 'শনি (Shani)' },
    description: {
      en: 'A gas giant known for its complex and beautiful ring system made of ice and rock.',
      hi: 'एक गैस विशालकाय ग्रह, जो अपने सुंदर और जटिल वलय (रिंग्स) के लिए जाना जाता है।',
      bn: 'একটি গ্যাস দৈত্য গ্রহ, যা এর সুন্দর এবং জটিল বলয় (রিং) এর জন্য পরিচিত।'
    },
    radius: 1.8,
    distance: 22,
    orbitSpeed: 0.002,
    rotationSpeed: 0.028,
    color: '#e3e0c0',
    hasRings: true,
    textureUrl: '/textures/saturn.jpg',
    highResTextureUrl: '/textures/high-res/saturn.jpg',
    details: {
      overview: {
        en: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is adorned with a dazzling system of icy rings.',
        hi: 'शनि सूर्य से छठा ग्रह है और सौर मंडल का दूसरा सबसे बड़ा ग्रह है। यह अपने छल्लों के लिए प्रसिद्ध है।',
        bn: 'শনি সূর্য থেকে ষষ্ঠ গ্রহ এবং সৌরজগতের দ্বিতীয় বৃহত্তম গ্রহ। এটি এর বলয়ের জন্য বিখ্যাত।'
      },
      physicalCharacteristics: {
        mass: { en: '5.68 × 10^26 kg (95 Earths)', hi: '5.68 × 10^26 किग्रा', bn: '৫.৬৮ × 10^26 কেজি' },
        diameter: { en: '116,460 km', hi: '116,460 किमी', bn: '১১৬,৪৬০ কিমি' },
        gravity: { en: '10.44 m/s² (1.06 Earths)', hi: '10.44 m/s²', bn: '১০.৪৪ মি/সে²' }
      },
      atmosphere: {
        en: 'Composed primarily of hydrogen and helium, featuring bands of clouds and intense winds.',
        hi: 'मुख्य रूप से हाइड्रोजन और हीलियम से बना है।',
        bn: 'প্রধানত হাইড্রোজেন এবং হিলিয়াম দিয়ে তৈরি।'
      },
      orbitAndRotation: {
        en: 'Takes 29.4 Earth years to orbit the Sun. A day on Saturn is just 10.7 hours long.',
        hi: 'सूर्य की परिक्रमा करने में 29.4 पृथ्वी वर्ष लगते हैं। यहाँ का दिन 10.7 घंटे का होता है।',
        bn: 'সূর্যকে প্রদক্ষিণ করতে ২৯.৪ পৃথিবী বছর সময় লাগে। এর দিন ১০.৭ ঘণ্টার।'
      },
      moons: {
        en: 'Saturn has 146 moons, the most of any planet. Titan is its largest moon and has its own thick atmosphere.',
        hi: 'शनि के 146 चंद्रमा हैं। टाइटन इसका सबसे बड़ा चंद्रमा है।',
        bn: 'শনির ১৪৬টি চাঁদ রয়েছে। টাইটান এর বৃহত্তম চাঁদ।'
      },
      surface: {
        en: 'Like Jupiter, Saturn is a gas giant and lacks a solid surface.',
        hi: 'बृहस्पति की तरह, शनि एक गैस विशाल है और इसकी कोई ठोस सतह नहीं है।',
        bn: 'বৃহস্পতির মতো, শনি একটি গ্যাস দৈত্য এবং এর কোন কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Visited by Pioneer 11, Voyager, and extensively studied by the Cassini-Huygens mission.',
        hi: 'पायनियर 11, वॉयजर और कैसिनी-ह्यूजेंस मिशन द्वारा अध्ययन किया गया।',
        bn: 'পায়োনিয়ার ১১, ভয়েজার এবং ক্যাসিনি-হাইগেনস মিশন দ্বারা ব্যাপকভাবে অধ্যয়ন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'Saturn is the only planet in our solar system that is less dense than water; it could float in a giant bathtub.', hi: 'शनि हमारे सौर मंडल का एकमात्र ग्रह है जिसका घनत्व पानी से कम है।', bn: 'শনি আমাদের সৌরজগতের একমাত্র গ্রহ যার ঘনত্ব জলের চেয়ে কম।' }
      ]
    }
  },
  {
    id: 'uranus',
    type: 'Planet',
    name: { en: 'Uranus', hi: 'अरुण (Arun)', bn: 'ইউরেনাস (Uranus)' },
    description: {
      en: 'An ice giant that rotates on its side, featuring a pale cyan color due to methane in its atmosphere.',
      hi: 'एक बर्फ का विशाल ग्रह जो अपनी धुरी पर काफी झुका हुआ है।',
      bn: 'একটি বরফ দৈত্য গ্রহ যা তার অক্ষে অনেকটা হেলে আছে।'
    },
    radius: 1.2,
    distance: 27,
    orbitSpeed: 0.001,
    rotationSpeed: -0.03,
    color: '#d1e7e7',
    atmosphereColor: '#aee4e4',
    textureUrl: '/textures/uranus.jpg',
    details: {
      overview: {
        en: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It is classified as an ice giant.',
        hi: 'अरुण सूर्य से सातवां ग्रह है। इसे आइस जाइंट (बर्फ का विशालकाय) के रूप में वर्गीकृत किया गया है।',
        bn: 'ইউরেনাস সূর্য থেকে সপ্তম গ্রহ। এটিকে বরফ দৈত্য হিসাবে শ্রেণীবদ্ধ করা হয়েছে।'
      },
      physicalCharacteristics: {
        mass: { en: '8.68 × 10^25 kg (14 Earths)', hi: '8.68 × 10^25 किग्रा', bn: '৮.৬৮ × 10^25 কেজি' },
        diameter: { en: '50,724 km', hi: '50,724 किमी', bn: '৫০,৭২৪ কিমি' },
        gravity: { en: '8.69 m/s² (0.88 Earths)', hi: '8.69 m/s²', bn: '৮.৬৯ মি/সে²' }
      },
      atmosphere: {
        en: 'Made of hydrogen, helium, and methane. The methane gives Uranus its signature blue-green color.',
        hi: 'हाइड्रोजन, हीलियम और मीथेन से बना है। मीथेन इसे नीला-हरा रंग देता है।',
        bn: 'হাইড্রোজেন, হিলিয়াম এবং মিথেন দিয়ে তৈরি। মিথেন এটিকে নীল-সবুজ রঙ দেয়।'
      },
      orbitAndRotation: {
        en: 'Orbits the Sun every 84 Earth years. Unique among planets, Uranus rotates on its side, rolling like a barrel.',
        hi: 'हर 84 पृथ्वी वर्षों में सूर्य की परिक्रमा करता है। यह अपनी तरफ लेटा हुआ घूमता है।',
        bn: 'প্রতি ৮৪ পৃথিবী বছরে সূর্যকে প্রদক্ষিণ করে। এটি তার পাশে শুয়ে ঘোরে।'
      },
      moons: {
        en: 'Uranus has 27 known moons, named after characters from the works of William Shakespeare and Alexander Pope.',
        hi: 'अरुण के 27 ज्ञात चंद्रमा हैं।',
        bn: 'ইউরেনাসের ২৭টি পরিচিত চাঁদ রয়েছে।'
      },
      surface: {
        en: 'Does not have a true surface. Mostly consists of a hot, dense fluid of "icy" materials (water, methane, and ammonia).',
        hi: 'इसकी कोई ठोस सतह नहीं है।',
        bn: 'এর কোন কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Only visited once, by the Voyager 2 spacecraft in 1986.',
        hi: 'केवल एक बार 1986 में वॉयजर 2 अंतरिक्ष यान द्वारा देखा गया।',
        bn: '১৯৮৬ সালে শুধুমাত্র ভয়েজার ২ মহাকাশযান দ্বারা একবার পরিদর্শন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'Because it rotates on its side, a season on Uranus lasts for 21 Earth years.', hi: 'चूंकि यह अपनी तरफ घूमता है, इसलिए अरुण पर एक मौसम 21 पृथ्वी वर्षों तक रहता है।', bn: 'যেহেতু এটি তার পাশে ঘোরে, ইউরেনাসের একটি ঋতু ২১ পৃথিবী বছর ধরে স্থায়ী হয়।' }
      ]
    }
  },
  {
    id: 'neptune',
    type: 'Planet',
    name: { en: 'Neptune', hi: 'वरुण (Varun)', bn: 'নেপচুন (Neptune)' },
    description: {
      en: 'The most distant planet, a dark, cold, and very windy ice giant.',
      hi: 'सूर्य से सबसे दूर स्थित, एक बहुत ही ठंडा और हवादार बर्फ का ग्रह।',
      bn: 'সূর্য থেকে সবচেয়ে দূরে অবস্থিত, একটি অত্যন্ত শীতল এবং ঝড়ো বরফ গ্রহ।'
    },
    radius: 1.15,
    distance: 31,
    orbitSpeed: 0.0008,
    rotationSpeed: 0.032,
    color: '#3f54ba',
    atmosphereColor: '#5c7ee6',
    textureUrl: '/textures/neptune.jpg',
    details: {
      overview: {
        en: 'Neptune is the eighth and farthest-known Solar planet from the Sun. Dark, cold, and whipped by supersonic winds, it is the last of the planets in our solar system.',
        hi: 'वरुण सूर्य से आठवां और सबसे दूर ज्ञात ग्रह है। यह अंधेरा, ठंडा और सुपरसोनिक हवाओं से भरा है।',
        bn: 'নেপচুন সূর্য থেকে অষ্টম এবং সবচেয়ে দূরে পরিচিত গ্রহ। এটি অন্ধকার, শীতল এবং অতিস্বনক বাতাসে পূর্ণ।'
      },
      physicalCharacteristics: {
        mass: { en: '1.02 × 10^26 kg (17 Earths)', hi: '1.02 × 10^26 किग्रा', bn: '১.০২ × 10^26 কেজি' },
        diameter: { en: '49,244 km', hi: '49,244 किमी', bn: '৪৯,২৪৪ কিমি' },
        gravity: { en: '11.15 m/s² (1.14 Earths)', hi: '11.15 m/s²', bn: '১১.১৫ মি/সে²' }
      },
      atmosphere: {
        en: 'Composed of hydrogen, helium, and methane, which gives it a rich blue color. Contains the most active weather in the solar system.',
        hi: 'हाइड्रोजन, हीलियम और मीथेन से बना है, जो इसे गहरा नीला रंग देता है।',
        bn: 'হাইড্রোজেন, হিলিয়াম এবং মিথেন দিয়ে তৈরি, যা এটিকে গাঢ় নীল রঙ দেয়।'
      },
      orbitAndRotation: {
        en: 'Takes 165 Earth years to orbit the Sun. A day on Neptune takes about 16 hours.',
        hi: 'सूर्य की परिक्रमा करने में 165 पृथ्वी वर्ष लगते हैं।',
        bn: 'সূর্যকে প্রদক্ষিণ করতে ১৬৫ পৃথিবী বছর সময় লাগে।'
      },
      moons: {
        en: 'Neptune has 14 known moons. Triton is the largest and orbits backwards relative to the planet\'s rotation.',
        hi: 'वरुण के 14 ज्ञात चंद्रमा हैं। ट्राइटन सबसे बड़ा है।',
        bn: 'নেপচুনের ১৪টি পরিচিত চাঁদ রয়েছে। ট্রাইটন বৃহত্তম।'
      },
      surface: {
        en: 'An ice giant with no solid surface. Mostly composed of a hot, dense fluid of icy materials above a solid core.',
        hi: 'बिना किसी ठोस सतह के एक बर्फ का विशाल ग्रह।',
        bn: 'কোন কঠিন পৃষ্ঠ ছাড়া একটি বরফ দৈত্য গ্রহ।'
      },
      exploration: {
        en: 'Only visited once, by Voyager 2 in 1989.',
        hi: '1989 में वॉयजर 2 द्वारा केवल एक बार दौरा किया गया।',
        bn: '১৯৮৯ সালে ভয়েজার ২ দ্বারা শুধুমাত্র একবার পরিদর্শন করা হয়েছে।'
      },
      didYouKnow: [
        { en: 'Winds on Neptune can reach up to 1,200 mph (2,000 km/h) — the fastest in the solar system.', hi: 'वरुण पर हवाएं 2,000 किमी/घंटा तक पहुँच सकती हैं - सौर मंडल में सबसे तेज़।', bn: 'নেপচুনে বাতাসের গতি ২,০০০ কিমি/ঘণ্টা পৌঁছতে পারে - সৌরজগতের দ্রুততম।' }
      ]
    }
  }
];
