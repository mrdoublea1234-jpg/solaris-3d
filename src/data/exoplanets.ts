export interface LocalizedString {
  en: string;
  hi: string;
  bn: string;
}

export interface DetailedExoplanetInfo {
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

export interface ExoplanetData {
  id: string;
  type: 'Star' | 'Exoplanet';
  name: LocalizedString;
  description: LocalizedString;
  distance: LocalizedString;
  radius: number;           
  modelType: 'glb' | 'texture'; 
  modelPath: string;        // Path to .glb or .jpg depending on modelType
  color?: string;           // Optional fallback color/glow
  details: DetailedExoplanetInfo;
}

export const exoplanets: ExoplanetData[] = [
  {
    id: 'kepler-186f',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-186f',
      hi: 'केप्लर-186एफ',
      bn: 'কেপলার-১৮৬এফ'
    },
    description: {
      en: 'The first Earth-sized planet in the habitable zone of another star.',
      hi: 'किसी अन्य तारे के रहने योग्य क्षेत्र में पहला पृथ्वी के आकार का ग्रह।',
      bn: 'অন্য একটি নক্ষত্রের বাসযোগ্য অঞ্চলে আবিষ্কৃত প্রথম পৃথিবী-আকারের গ্রহ।'
    },
    distance: {
      en: '582 Light Years',
      hi: '582 प्रकाश वर्ष',
      bn: '৫৮২ আলোকবর্ষ'
    },
    radius: 1.1,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler.jpg',
    details: {
      overview: {
        en: 'Kepler-186f is an exoplanet orbiting the red dwarf Kepler-186, about 582 light-years from Earth. It was the first planet with a radius similar to Earths to be discovered in the habitable zone of another star.',
        hi: 'केप्लर-186एफ एक एक्सोप्लैनेट है जो पृथ्वी से लगभग 582 प्रकाश-वर्ष दूर लाल बौने तारे केप्लर-186 की परिक्रमा करता है।',
        bn: 'কেপলার-১৮৬এফ হলো একটি এক্সোপ্ল্যানেট যা পৃথিবী থেকে প্রায় ৫৮২ আলোকবর্ষ দূরে অবস্থিত। এটি বাসযোগ্য অঞ্চলে পাওয়া প্রথম পৃথিবী-আকারের গ্রহ।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated ~1.44 Earths)',
          hi: 'अज्ञात (अनुमानित ~1.44 पृथ्वी)',
          bn: 'অজানা (আনুমানিক ১.৪৪ পৃথিবীর সমান)'
        },
        diameter: {
          en: 'Approx. 14,000 km (1.11 Earths)',
          hi: 'लगभग 14,000 किमी (1.11 पृथ्वी)',
          bn: 'প্রায় ১৪,০০০ কি.মি. (পৃথিবীর ১.১১ গুণ)'
        },
        gravity: {
          en: 'Estimated similar to Earth',
          hi: 'पृथ्वी के समान अनुमानित',
          bn: 'পৃথিবীর কাছাকাছি বলে অনুমান করা হয়'
        }
      },
      atmosphere: {
        en: 'Unknown. Its atmosphere is currently beyond the reach of our telescopes to analyze.',
        hi: 'अज्ञात। इसका वायुमंडल वर्तमान में हमारे दूरबीनों की पहुंच से बाहर है।',
        bn: 'অজানা। আমাদের টেলিস্কোপগুলোর ক্ষমতার বাইরে হওয়ায় এর বায়ুমণ্ডল সম্পর্কে এখনো কিছু জানা যায়নি।'
      },
      orbitAndRotation: {
        en: 'It orbits its star every 130 days. It might be tidally locked, meaning one side always faces the star.',
        hi: 'यह हर 130 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ১৩০ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে। এটি টাইডালি লকড হতে পারে, অর্থাৎ এর একদিক সবসময় নক্ষত্রের দিকে থাকে।'
      },
      moons: {
        en: 'Unknown',
        hi: 'अज्ञात',
        bn: 'অজানা'
      },
      surface: {
        en: 'Expected to be rocky. If it has an Earth-like atmosphere, liquid water could exist on its surface.',
        hi: 'चट्टानी होने की उम्मीद है। यदि इसमें पृथ्वी जैसा वातावरण है, तो पानी मौजूद हो सकता है।',
        bn: 'এটি পাথুরে হওয়ার সম্ভাবনা প্রবল। যদি এর বায়ুমণ্ডল পৃথিবীর মতো হয়, তবে এর পৃষ্ঠে তরল পানি থাকতে পারে।'
      },
      exploration: {
        en: 'Discovered by the Kepler Space Telescope in 2014 using the transit method.',
        hi: '2014 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৪ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'It receives about one-third of the heat energy that Earth gets from the Sun.',
          hi: 'इसे पृथ्वी को सूर्य से मिलने वाली ऊष्मीय ऊर्जा का लगभग एक-तिहाई प्राप्त होता है।',
          bn: 'সূর্য থেকে পৃথিবী যে পরিমাণ তাপ পায়, এটি তার নক্ষত্র থেকে তার মাত্র এক-তৃতীয়াংশ তাপ পায়।'
        },
        {
          en: 'High noon on Kepler-186f would look like the late afternoon on Earth.',
          hi: 'केप्लर-186एफ पर दोपहर पृथ्वी पर देर दोपहर की तरह दिखेगी।',
          bn: 'কেপলার-১৮৬এফ এর ভরদুপুর বেলা দেখতে আমাদের পৃথিবীর পড়ন্ত বিকেলের মতো মনে হবে।'
        }
      ]
    }
  },
  {
    id: 'proxima-b',
    type: 'Exoplanet',
    name: {
      en: 'Proxima Centauri b',
      hi: 'प्रॉक्सिमा सेंटॉरी बी',
      bn: 'প্রক্সিমা সেন্টরাই বি'
    },
    description: {
      en: 'The closest known exoplanet to the Solar System.',
      hi: 'सौर मंडल का निकटतम ज्ञात एक्सोप्लैनेट।',
      bn: 'সৌরজগতের সবচেয়ে কাছের পরিচিত এক্সোপ্ল্যানেট।'
    },
    distance: {
      en: '4.24 Light Years',
      hi: '4.24 प्रकाश वर्ष',
      bn: '৪.২৪ আলোকবর্ষ'
    },
    radius: 1.07,
    modelType: 'glb',
    modelPath: '/models/proxima.glb',
    details: {
      overview: {
        en: 'Proxima Centauri b is a super-Earth exoplanet orbiting within the habitable zone of the red dwarf star Proxima Centauri, the closest star to the Sun.',
        hi: 'प्रॉक्सिमा सेंटॉरी बी एक सुपर-अर्थ है जो प्रॉक्सिमा सेंटॉरी के रहने योग्य क्षेत्र में परिक्रमा करता है।',
        bn: 'প্রক্সিমা সেন্টরাই বি হলো একটি সুপার-আর্থ এক্সোপ্ল্যানেট যা আমাদের সূর্যের সবচেয়ে কাছের নক্ষত্র প্রক্সিমা সেন্টরাই-এর বাসযোগ্য অঞ্চলে আবর্তন করছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Min. 1.07 Earths',
          hi: 'न्यूनतम 1.07 पृथ्वी',
          bn: 'অন্তত ১.০৭ পৃথিবীর সমান'
        },
        diameter: {
          en: 'Estimated slightly larger than Earth',
          hi: 'अनुमानित पृथ्वी से थोड़ा बड़ा',
          bn: 'পৃথিবীর চেয়ে সামান্য বড় বলে ধারণা করা হয়'
        },
        gravity: {
          en: 'Likely slightly higher than Earths',
          hi: 'संभवतः पृथ्वी से थोड़ा अधिक',
          bn: 'সম্ভবত পৃথিবীর চেয়ে সামান্য বেশি'
        }
      },
      atmosphere: {
        en: 'Subject to intense stellar wind and solar flares from its host star, making atmospheric retention uncertain.',
        hi: 'इसके तारे से तीव्र तारकीय हवाओं के अधीन, जिससे वायुमंडल का अस्तित्व अनिश्चित है।',
        bn: 'এর নক্ষত্র থেকে আসা প্রবল রেডিয়েশন ও সোলার ফ্লেয়ারের কারণে এর বায়ুমণ্ডল টিকে আছে কি না তা এখনো নিশ্চিত নয়।'
      },
      orbitAndRotation: {
        en: 'Orbits every 11.2 Earth days. Likely tidally locked.',
        hi: 'हर 11.2 दिन में परिक्रमा करता है।',
        bn: 'মাত্র ১১.২ দিনে এর এক বছর হয়। এটি সম্ভবত টাইডালি লকড।'
      },
      moons: {
        en: 'Unknown',
        hi: 'अज्ञात',
        bn: 'অজানা'
      },
      surface: {
        en: 'Expected to be rocky. Due to possible tidal locking, it may have a permanent day side and night side.',
        hi: 'चट्टानी होने की उम्मीद है। इसका एक स्थायी दिन और रात पक्ष हो सकता है।',
        bn: 'পাথুরে পৃষ্ঠ। একদিক সবসময় নক্ষত্রের দিকে থাকায় একপাশে চিরস্থায়ী দিন ও অন্যপাশে চিরস্থায়ী রাত থাকতে পারে।'
      },
      exploration: {
        en: 'Discovered in 2016 by the European Southern Observatory.',
        hi: '2016 में खोजा गया।',
        bn: '২০১৬ সালে ইউরোপিয়ান সাউদার্ন অবজারভেটরি এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'It is only 4.24 light-years away from Earth.',
          hi: 'यह पृथ्वी से केवल 4.24 प्रकाश-वर्ष दूर है।',
          bn: 'এটি পৃথিবী থেকে মাত্র ৪.২৪ আলোকবর্ষ দূরে অবস্থিত।'
        },
        {
          en: 'Even traveling at the speed of the Voyager 1 spacecraft, it would take about 73,000 years to get there.',
          hi: 'वॉयजर 1 की गति से यात्रा करने पर भी, वहां पहुंचने में लगभग 73,000 वर्ष लगेंगे।',
          bn: 'ভয়েজার ১ মহাকাশযানের গতিতে গেলেও সেখানে পৌঁছাতে প্রায় ৭৩,০০০ বছর সময় লাগবে!'
        }
      ]
    }
  },
  {
    id: 'trapist-1',
    type: 'Star',
    name: {
      en: 'TRAPPIST-1',
      hi: 'ट्रेपिस्ट-1',
      bn: 'ট্র্যাপিস্ট-১'
    },
    description: {
      en: 'An ultra-cool red dwarf star with seven Earth-sized planets.',
      hi: 'सात पृथ्वी के आकार के ग्रहों के साथ एक अति-ठंडा लाल बौना तारा।',
      bn: 'সাতটি পৃথিবী-আকারের গ্রহবিশিষ্ট একটি শীতল রেড ডোয়ার্ফ নক্ষত্র।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 3.5, 
    modelType: 'texture',
    modelPath: '/textures/exoplanets/trappist.jpg',
    color: '#ff4422',
    details: {
      overview: {
        en: 'TRAPPIST-1 is an ultra-cool red dwarf star located 39 light-years away from Earth. It is famous for hosting a planetary system of seven rocky, Earth-sized planets, three of which are in the habitable zone.',
        hi: 'ट्रेपिस्ट-1 39 प्रकाश-वर्ष दूर स्थित एक अति-ठंडा लाल बौना तारा है। यह अपने सात चट्टानी ग्रहों के लिए प्रसिद्ध है।',
        bn: 'ট্র্যাপিস্ট-১ হলো ৩৯ আলোকবর্ষ দূরে অবস্থিত একটি অতি-শীতল রেড ডোয়ার্ফ নক্ষত্র। এটি মূলত এর সাতটি পাথুরে পৃথিবী-আকারের গ্রহের জন্য বিখ্যাত, যার মধ্যে ৩টি বাসযোগ্য অঞ্চলে রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: '0.09 Solar masses',
          hi: '0.09 सौर द्रव्यमान',
          bn: 'সূর্যের ভরের মাত্র ০.০৯ গুণ'
        },
        diameter: {
          en: 'Slightly larger than Jupiter',
          hi: 'बृहस्पति से थोड़ा बड़ा',
          bn: 'বৃহস্পতি গ্রহের চেয়ে সামান্য বড়'
        },
        gravity: {
          en: 'Strong stellar gravity',
          hi: 'मजबूत गुरुत्वाकर्षण',
          bn: 'প্রবল নাক্ষত্রিক মধ্যাকর্ষণ'
        }
      },
      atmosphere: {
        en: 'Stellar atmosphere composed primarily of hydrogen and helium, but extremely cool for a star.',
        hi: 'मुख्य रूप से हाइड्रोजन और हीलियम से बना तारकीय वायुमंडल।',
        bn: 'এর নাক্ষত্রিক বায়ুমণ্ডল মূলত হাইড্রোজেন ও হিলিয়াম দিয়ে গঠিত, তবে একটি নক্ষত্র হিসেবে এটি অত্যন্ত শীতল।'
      },
      orbitAndRotation: {
        en: 'Rotates once every 3.3 Earth days.',
        hi: 'हर 3.3 दिन में एक बार घूमता है।',
        bn: 'প্রতি ৩.৩ দিনে এটি নিজ অক্ষে একবার ঘুরে আসে।'
      },
      moons: {
        en: '7 Planets',
        hi: '7 ग्रह',
        bn: '৭টি গ্রহ'
      },
      surface: {
        en: 'No solid surface. It is a ball of plasma glowing deep red.',
        hi: 'कोई ठोस सतह नहीं। यह गहरे लाल रंग में चमकते प्लाज्मा की एक गेंद है।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই। এটি মূলত প্লাজমার একটি জ্বলন্ত লাল গোলক।'
      },
      exploration: {
        en: 'The planets were discovered between 2015 and 2017. The James Webb Space Telescope is currently studying their atmospheres.',
        hi: 'ग्रहों की खोज 2015 और 2017 के बीच की गई थी।',
        bn: 'এর গ্রহগুলো ২০১৫ থেকে ২০১৭ সালের মধ্যে আবিষ্কৃত হয়। জেমস ওয়েব টেলিস্কোপ বর্তমানে এদের নিয়ে গবেষণা করছে।'
      },
      didYouKnow: [
        {
          en: 'If TRAPPIST-1 were the Sun, it would shine with a dim, salmon-colored light.',
          hi: 'अगर ट्रेपिस्ट-1 सूरज होता, तो यह मंद, सामन रंग की रोशनी से चमकता।',
          bn: 'ট্র্যাপিস্ট-১ যদি আমাদের সূর্য হতো, তবে এর আলো হতো হালকা লালচে ও অনেক ম্লান।'
        },
        {
          en: 'All seven of its planets orbit closer to it than Mercury orbits our Sun.',
          hi: 'इसके सातों ग्रह बुध के सूर्य की परिक्रमा से भी करीब से इसकी परिक्रमा करते हैं।',
          bn: 'এর সাতটি গ্রহই একে এত কাছ থেকে প্রদক্ষিণ করে যে, বুধ গ্রহও আমাদের সূর্যের এত কাছে নেই!'
        }
      ]
    }
  }
];
