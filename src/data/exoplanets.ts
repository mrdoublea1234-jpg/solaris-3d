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
    modelPath: '/textures/exoplanets/kepler-186f.jpg',
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
    modelPath: '/textures/exoplanets/trappist-1.jpg',
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
  },
  {
    id: 'kepler-22b',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-22b',
      hi: 'केप्लर-22बी',
      bn: 'কেপলার-২২বি'
    },
    description: {
      en: 'A super-Earth exoplanet orbiting within the habitable zone of a Sun-like star.',
      hi: 'एक सूर्य जैसे तारे के रहने योग्य क्षेत्र में परिक्रमा करने वाला सुपर-अर्थ एक्सोप्लैनेट।',
      bn: 'সূর্যের মতো একটি নক্ষত্রের বাসযোগ্য অঞ্চলে প্রদক্ষিণরত একটি সুপার-আর্থ এক্সোপ্ল্যানেট।'
    },
    distance: {
      en: '620 Light Years',
      hi: '620 प्रकाश वर्ष',
      bn: '৬২০ আলোকবর্ষ'
    },
    radius: 2.4,
    modelType: 'glb',
    modelPath: '/models/kepler-22b.glb',
    details: {
      overview: {
        en: 'Kepler-22b is an exoplanet 620 light-years away in the constellation of Cygnus. It was the first known transiting planet to orbit within the habitable zone of a Sun-like star.',
        hi: 'केप्लर-22बी सिग्नस तारामंडल में 620 प्रकाश-वर्ष दूर एक एक्सोप्लैनेट है। यह सूर्य जैसे तारे के रहने योग्य क्षेत्र में परिक्रमा करने वाला पहला ज्ञात पारगमन ग्रह था।',
        bn: 'কেপলার-২২বি হলো সিগনাস নক্ষত্রমণ্ডলীতে ৬২০ আলোকবর্ষ দূরে অবস্থিত একটি এক্সোপ্ল্যানেট। এটি ছিল সূর্যের মতো একটি নক্ষত্রের বাসযোগ্য অঞ্চলে প্রদক্ষিণরত প্রথম আবিষ্কৃত গ্রহ।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated up to 36 Earths if rocky)',
          hi: 'अज्ञात (अनुमानित 36 पृथ्वी तक यदि चट्टानी है)',
          bn: 'অজানা (পাথুরে হলে অনুমান করা হয় পৃথিবীর ৩৬ গুণ পর্যন্ত হতে পারে)'
        },
        diameter: {
          en: 'Approx. 30,500 km (2.4 Earths)',
          hi: 'लगभग 30,500 किमी (2.4 पृथ्वी)',
          bn: 'প্রায় ৩০,৫০০ কি.মি. (পৃথিবীর ২.৪ গুণ)'
        },
        gravity: {
          en: 'Estimated to be much stronger than Earths',
          hi: 'पृथ्वी की तुलना में काफी मजबूत होने का अनुमान',
          bn: 'পৃথিবীর চেয়ে অনেক বেশি শক্তিশালী বলে অনুমান করা হয়'
        }
      },
      atmosphere: {
        en: 'Expected to have a thick atmosphere, possibly a water world.',
        hi: 'एक घने वायुमंडल की उम्मीद है, संभवतः एक जल संसार।',
        bn: 'ধারণা করা হয় এর একটি পুরু বায়ুমণ্ডল রয়েছে, এটি একটি বিশাল জলমগ্ন গ্রহ হতে পারে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 290 days.',
        hi: 'हर 290 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ২৯০ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'Unknown',
        hi: 'अज्ञात',
        bn: 'অজানা'
      },
      surface: {
        en: 'May have a global ocean, completely covering the planet.',
        hi: 'एक वैश्विक महासागर हो सकता है, जो पूरी तरह से ग्रह को कवर करता है।',
        bn: 'সম্ভবত এর একটি বিশাল মহাসাগর রয়েছে যা পুরো গ্রহকে আবৃত করে রেখেছে।'
      },
      exploration: {
        en: 'Discovered by the Kepler Space Telescope in 2011.',
        hi: '2011 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১১ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Its star is very similar to our Sun, though slightly smaller and cooler.',
          hi: 'इसका तारा हमारे सूर्य के बहुत समान है, हालांकि थोड़ा छोटा और ठंडा है।',
          bn: 'এর নক্ষত্রটি আমাদের সূর্যের মতোই, তবে কিছুটা ছোট এবং শীতল।'
        },
        {
          en: 'The temperature on Kepler-22b could be around 22°C, similar to a pleasant spring day on Earth.',
          hi: 'केप्लर-22बी पर तापमान 22°C के आसपास हो सकता है, जो पृथ्वी पर एक सुखद वसंत के दिन के समान है।',
          bn: 'কেপলার-২২বি এর গড় তাপমাত্রা ২২° সেলসিয়াসের কাছাকাছি হতে পারে, যা পৃথিবীর বসন্তকালের মতো আরামদায়ক।'
        }
      ]
    }
  },
  {
    id: 'kepler-90',
    type: 'Star',
    name: {
      en: 'Kepler-90',
      hi: 'केप्लर-90',
      bn: 'কেপলার-৯০'
    },
    description: {
      en: 'A G-type main-sequence star with eight known planets, similar to our Solar System.',
      hi: 'आठ ज्ञात ग्रहों वाला एक जी-प्रकार का मुख्य-अनुक्रम तारा, जो हमारे सौर मंडल के समान है।',
      bn: 'আটটি পরিচিত গ্রহবিশিষ্ট একটি জি-টাইপ প্রধান ধারার নক্ষত্র, যা অনেকটা আমাদের সৌরজগতের মতোই।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 1.2,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90.jpg',
    details: {
      overview: {
        en: 'Kepler-90 is a G-type main-sequence star located around 2,840 light-years away in the constellation Draco. It is notable for having a planetary system with eight known planets, matching the number of planets in our own Solar System.',
        hi: 'केप्लर-90 ड्रेको तारामंडल में लगभग 2,840 प्रकाश-वर्ष दूर स्थित एक जी-प्रकार का तारा है। यह अपने आठ ग्रहों वाले प्रणाली के लिए उल्लेखनीय है, जो हमारे सौर मंडल के ग्रहों की संख्या से मेल खाता है।',
        bn: 'কেপলার-৯০ হলো ড্রেকো নক্ষত্রমণ্ডলীতে প্রায় ২,৮৪০ আলোকবর্ষ দূরে অবস্থিত একটি জি-টাইপ নক্ষত্র। এটি মূলত আটটি গ্রহের একটি বিশাল সৌরজগতের জন্য পরিচিত, যা আমাদের সৌরজগতের গ্রহের সংখ্যার একদম সমান।'
      },
      physicalCharacteristics: {
        mass: {
          en: '1.2 Solar masses',
          hi: '1.2 सौर द्रव्यमान',
          bn: 'সূর্যের ভরের ১.২ গুণ'
        },
        diameter: {
          en: '1.2 Solar diameters',
          hi: '1.2 सौर व्यास',
          bn: 'সূর্যের ব্যাসের ১.২ গুণ'
        },
        gravity: {
          en: 'Strong stellar gravity',
          hi: 'मजबूत गुरुत्वाकर्षण',
          bn: 'প্রবল নাক্ষত্রিক মধ্যাকর্ষণ'
        }
      },
      atmosphere: {
        en: 'Similar to our Sun, composed primarily of hydrogen and helium.',
        hi: 'हमारे सूर्य के समान, मुख्य रूप से हाइड्रोजन और हीलियम से बना है।',
        bn: 'আমাদের সূর্যের মতোই, এটি মূলত হাইড্রোজেন ও হিলিয়াম দিয়ে গঠিত।'
      },
      orbitAndRotation: {
        en: 'Rotates once every 17.5 days.',
        hi: 'हर 17.5 दिन में एक बार घूमता है।',
        bn: 'প্রতি ১৭.৫ দিনে এটি নিজ অক্ষে একবার ঘুরে আসে।'
      },
      moons: {
        en: '8 Planets',
        hi: '8 ग्रह',
        bn: '৮টি গ্রহ'
      },
      surface: {
        en: 'No solid surface. It is a massive sphere of extremely hot plasma.',
        hi: 'कोई ठोस सतह नहीं। यह बेहद गर्म प्लाज्मा का एक विशाल गोला है।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই। এটি অত্যন্ত উত্তপ্ত প্লাজমার একটি বিশাল গোলক।'
      },
      exploration: {
        en: 'Its planets were discovered by the Kepler Space Telescope between 2013 and 2017. The 8th planet, Kepler-90i, was found using Google AI.',
        hi: 'इसके ग्रहों की खोज 2013 और 2017 के बीच की गई थी। 8वां ग्रह Google AI का उपयोग करके खोजा गया था।',
        bn: 'এর গ্রহগুলো ২০১৩ থেকে ২০১৭ সালের মধ্যে আবিষ্কৃত হয়। এর অষ্টম গ্রহটি (Kepler-90i) গুগল এআই (Google AI) ব্যবহার করে খুঁজে পাওয়া যায়।'
      },
      didYouKnow: [
        {
          en: 'It is the first known star system to have as many planets as our own Solar System.',
          hi: 'यह पहला ज्ञात तारा प्रणाली है जिसमें हमारे सौर मंडल के बराबर ग्रह हैं।',
          bn: 'আমাদের সৌরজগতের মতো হুবহু আটটি গ্রহ থাকা এটিই প্রথম আবিষ্কৃত সৌরজগৎ।'
        },
        {
          en: 'All 8 planets of Kepler-90 are crowded so close to their star that they would all fit within Earths orbit around the Sun.',
          hi: 'केप्लर-90 के सभी 8 ग्रह अपने तारे के इतने करीब हैं कि वे सभी सूर्य के चारों ओर पृथ्वी की कक्षा के भीतर फिट हो जाएंगे।',
          bn: 'এর আটটি গ্রহই নক্ষত্রের এত কাছাকাছি অবস্থিত যে, এদের সবার কক্ষপথ আমাদের সূর্যের চারদিকে পৃথিবীর কক্ষপথের ভেতরেই এঁটে যাবে!'
        }
      ]
    }
  },
  {
    id: 'kepler-90b',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90b',
      hi: 'केप्लर-90बी',
      bn: 'কেপলার-৯০বি'
    },
    description: {
      en: 'A rocky, super-Earth exoplanet orbiting extremely close to its star in the Kepler-90 system.',
      hi: 'केप्लर-90 प्रणाली में अपने तारे के बेहद करीब परिक्रमा करने वाला एक चट्टानी, सुपर-अर्थ एक्सोप्लैनेट।',
      bn: 'কেপলার-৯০ সৌরজগতের একটি পাথুরে সুপার-আর্থ এক্সোপ্ল্যানেট যা এর নক্ষত্রের অত্যন্ত কাছাকাছি প্রদক্ষিণ করে।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 1.31,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90b.jpg',
    details: {
      overview: {
        en: 'Kepler-90b is the innermost planet of the Kepler-90 system. It is a rocky super-Earth that orbits dangerously close to its host star, completing a year in just 7 Earth days.',
        hi: 'केप्लर-90बी केप्लर-90 प्रणाली का सबसे भीतरी ग्रह है। यह एक चट्टानी सुपर-अर्थ है जो अपने तारे के बहुत करीब परिक्रमा करता है, और केवल 7 पृथ्वी दिनों में एक वर्ष पूरा करता है।',
        bn: 'কেপলার-৯০বি হলো কেপলার-৯০ সৌরজগতের সবচেয়ে ভেতরের দিকের গ্রহ। এটি একটি পাথুরে সুপার-আর্থ যা এর নক্ষত্রের এতটাই কাছে প্রদক্ষিণ করে যে, মাত্র ৭ দিনে এর এক বছর পূর্ণ হয়!'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 2.5 Earths)',
          hi: 'अज्ञात (अनुमानित 2.5 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ২.৫ গুণ)'
        },
        diameter: {
          en: 'Approx. 16,700 km (1.31 Earths)',
          hi: 'लगभग 16,700 किमी (1.31 पृथ्वी)',
          bn: 'প্রায় ১৬,৭০০ কি.মি. (পৃথিবীর ১.৩১ গুণ)'
        },
        gravity: {
          en: 'Likely stronger than Earths',
          hi: 'संभवतः पृथ्वी की तुलना में अधिक मजबूत',
          bn: 'সম্ভবত পৃথিবীর চেয়ে শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'Highly unlikely to retain a significant atmosphere due to extreme radiation from its close star.',
        hi: 'अपने निकटतम तारे से अत्यधिक विकिरण के कारण एक महत्वपूर्ण वायुमंडल को बनाए रखने की संभावना बहुत कम है।',
        bn: 'নক্ষত্রের খুব কাছাকাছি থাকায় এবং তীব্র রেডিয়েশনের কারণে এর কোনো বায়ুমণ্ডল থাকার সম্ভাবনা নেই বললেই চলে।'
      },
      orbitAndRotation: {
        en: 'Orbits every 7.008 days. Extremely likely to be tidally locked.',
        hi: 'हर 7.008 दिन में परिक्रमा करता है। टाइडली लॉक्ड होने की अत्यधिक संभावना है।',
        bn: 'এটি মাত্র ৭.০০৮ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে। এটি টাইডালি লকড হওয়ার সম্ভাবনা প্রবল।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'A scorching hot rocky surface, potentially molten or severely irradiated.',
        hi: 'एक झुलसा देने वाली गर्म चट्टानी सतह, जो संभावित रूप से पिघली हुई है।',
        bn: 'অত্যন্ত উত্তপ্ত পাথুরে পৃষ্ঠ, যা সম্ভবত গলিত বা মারাত্মক রেডিয়েশনে জর্জরিত।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Because it orbits so close to its star, its surface temperature could be hot enough to melt iron.',
          hi: 'चूंकि यह अपने तारे के बहुत करीब परिक्रमा करता है, इसलिए इसकी सतह का तापमान लोहे को पिघलाने के लिए पर्याप्त गर्म हो सकता है।',
          bn: 'নক্ষত্রের এত কাছে থাকায় এর পৃষ্ঠের তাপমাত্রা এতই বেশি হতে পারে যে সেখানে লোহাও গলে যাবে!'
        },
        {
          en: 'It orbits much closer to its star than Mercury does to our Sun.',
          hi: 'यह बुध की तुलना में अपने तारे के बहुत करीब परिक्रमा करता है।',
          bn: 'আমাদের সৌরজগতে বুধ গ্রহ সূর্যের যত কাছে, এই গ্রহটি তার নক্ষত্রের তার চেয়েও অনেক বেশি কাছে আবর্তন করে।'
        }
      ]
    }
  },
  {
    id: 'kepler-90c',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90c',
      hi: 'केप्लर-90सी',
      bn: 'কেপলার-৯০সি'
    },
    description: {
      en: 'The second planet in the Kepler-90 system, a rocky super-Earth slightly larger than Earth.',
      hi: 'केप्लर-90 प्रणाली में दूसरा ग्रह, एक चट्टानी सुपर-अर्थ जो पृथ्वी से थोड़ा बड़ा है।',
      bn: 'কেপলার-৯০ সৌরজগতের দ্বিতীয় গ্রহ, যা পৃথিবীর চেয়ে সামান্য বড় একটি পাথুরে সুপার-আর্থ।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 1.18,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90c.jpg',
    details: {
      overview: {
        en: 'Kepler-90c is the second planet from the star in the Kepler-90 system. Like its inner neighbor, it is a rocky super-Earth that orbits dangerously close to its star, making it extremely hot and uninhabitable.',
        hi: 'केप्लर-90सी केप्लर-90 प्रणाली में तारे से दूसरा ग्रह है। अपने आंतरिक पड़ोसी की तरह, यह एक चट्टानी सुपर-अर्थ है जो अपने तारे के बहुत करीब परिक्रमा करता है, जिससे यह बेहद गर्म और निर्जन हो जाता है।',
        bn: 'কেপলার-৯০সি হলো কেপলার-৯০ সৌরজগতের দ্বিতীয় গ্রহ। এর ভেতরের দিকের প্রতিবেশী গ্রহের মতোই এটি একটি পাথুরে সুপার-আর্থ, যা এর নক্ষত্রের খুব কাছাকাছি প্রদক্ষিণ করে। ফলে এটি অত্যন্ত উত্তপ্ত এবং বসবাসের সম্পূর্ণ অযোগ্য।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 1.5 - 2 Earths)',
          hi: 'अज्ञात (अनुमानित 1.5 - 2 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ১.৫ - ২ গুণ)'
        },
        diameter: {
          en: 'Approx. 15,000 km (1.18 Earths)',
          hi: 'लगभग 15,000 किमी (1.18 पृथ्वी)',
          bn: 'প্রায় ১৫,০০০ কি.মি. (পৃথিবীর ১.১৮ গুণ)'
        },
        gravity: {
          en: 'Similar to or slightly stronger than Earths',
          hi: 'पृथ्वी के समान या थोड़ा अधिक मजबूत',
          bn: 'পৃথিবীর সমান বা সামান্য বেশি'
        }
      },
      atmosphere: {
        en: 'Unlikely to have a thick atmosphere due to extreme stellar wind and heat.',
        hi: 'अत्यधिक तारकीय हवा और गर्मी के कारण घने वायुमंडल होने की संभावना कम है।',
        bn: 'তীব্র নাক্ষত্রিক হাওয়া এবং প্রচণ্ড তাপের কারণে এর কোনো পুরু বায়ুমণ্ডল থাকার সম্ভাবনা নেই।'
      },
      orbitAndRotation: {
        en: 'Orbits every 8.7 days. Likely tidally locked.',
        hi: 'हर 8.7 दिन में परिक्रमा करता है। संभवतः टाइडली लॉक्ड है।',
        bn: 'এটি মাত্র ৮.৭ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে। এটিও সম্ভবত টাইডালি লকড।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Scorching rocky surface, possibly covered in silicate plains or volcanic activity.',
        hi: 'झुलसा देने वाली चट्टानी सतह, संभवतः सिलिकेट मैदानों या ज्वालामुखी गतिविधि से ढकी हुई है।',
        bn: 'অত্যন্ত উত্তপ্ত পাথুরে পৃষ্ঠ, যা সম্ভবত সিলিকনযুক্ত সমভূমি বা আগ্নেয়গিরিতে ভরপুর।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope along with most of the Kepler-90 system.',
        hi: '2013 में अधिकांश केप्लर-90 प्रणाली के साथ केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে কেপলার স্পেস টেলিস্কোপের মাধ্যমেই এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'Its orbit is only a tiny fraction of the distance between Earth and the Sun.',
          hi: 'इसकी कक्षा पृथ्वी और सूर्य के बीच की दूरी का एक छोटा सा अंश मात्र है।',
          bn: 'এর কক্ষপথটি পৃথিবী এবং সূর্যের মধ্যবর্তী দূরত্বের এক ভগ্নাংশ মাত্র!'
        },
        {
          en: 'Kepler-90b and Kepler-90c orbit close enough to each other that they might visibly affect each others orbits over time.',
          hi: 'केप्लर-90बी और केप्लर-90सी एक-दूसरे के इतने करीब परिक्रमा करते हैं कि वे समय के साथ एक-दूसरे की कक्षाओं को स्पष्ट रूप से प्रभावित कर सकते हैं।',
          bn: 'কেপলার-৯০বি এবং কেপলার-৯০সি একে অপরের এত কাছাকাছি আবর্তন করে যে এদের মধ্যাকর্ষণ একে অপরের কক্ষপথকে প্রভাবিত করতে পারে।'
        }
      ]
    }
  },
  {
    id: 'kepler-90i',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90i',
      hi: 'केप्लर-90आई',
      bn: 'কেপলার-৯০আই'
    },
    description: {
      en: 'The eighth planet in the Kepler-90 system, famously discovered using Google AI.',
      hi: 'केप्लर-90 प्रणाली में आठवां ग्रह, जिसे गूगल एआई का उपयोग करके खोजा गया था।',
      bn: 'কেপলার-৯০ সৌরজগতের অষ্টম গ্রহ, যা গুগল এআই (Google AI) ব্যবহার করে আবিষ্কার করা হয়েছিল।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 1.32,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90i.jpg',
    details: {
      overview: {
        en: 'Kepler-90i is a super-Earth exoplanet orbiting the star Kepler-90. Its discovery was a milestone in astronomy because it was found by applying machine learning to data from the Kepler Space Telescope, making Kepler-90 the first known star system to have as many planets as our Solar System.',
        hi: 'केप्लर-90आई एक सुपर-अर्थ एक्सोप्लैनेट है जो केप्लर-90 तारे की परिक्रमा करता है। इसकी खोज खगोल विज्ञान में एक मील का पत्थर थी क्योंकि इसे केप्लर स्पेस टेलीस्कोप के डेटा पर मशीन लर्निंग लागू करके पाया गया था।',
        bn: 'কেপলার-৯০আই হলো কেপলার-৯০ নক্ষত্রকে আবর্তনকারী একটি সুপার-আর্থ এক্সোপ্ল্যানেট। এর আবিষ্কার মহাকাশ বিজ্ঞানে একটি মাইলফলক, কারণ কেপলার টেলিস্কোপের ডেটার ওপর মেশিন লার্নিং (AI) প্রয়োগ করে এটি খুঁজে পাওয়া হয়েছিল।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated ~2.5 Earths)',
          hi: 'अज्ञात (अनुमानित ~2.5 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ২.৫ গুণ)'
        },
        diameter: {
          en: 'Approx. 16,800 km (1.32 Earths)',
          hi: 'लगभग 16,800 किमी (1.32 पृथ्वी)',
          bn: 'প্রায় ১৬,৮০০ কি.মি. (পৃথিবীর ১.৩২ গুণ)'
        },
        gravity: {
          en: 'Likely stronger than Earths',
          hi: 'संभवतः पृथ्वी की तुलना में अधिक मजबूत',
          bn: 'সম্ভবত পৃথিবীর চেয়ে শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'Extremely hot; likely has a very thin or non-existent atmosphere.',
        hi: 'बेहद गर्म; संभवतः बहुत पतला या कोई वायुमंडल नहीं है।',
        bn: 'অত্যন্ত উত্তপ্ত; সম্ভবত খুব পাতলা বায়ুমণ্ডল রয়েছে বা কোনো বায়ুমণ্ডলই নেই।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 14.4 days.',
        hi: 'हर 14.4 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি মাত্র ১৪.৪ দিনে এর নক্ষত্রকে একবার প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Expected to be a rocky, scorching planet with average surface temperatures around 436°C (817°F).',
        hi: '436°C के औसत सतह के तापमान के साथ एक चट्टानी, झुलसा देने वाला ग्रह होने की उम्मीद है।',
        bn: 'ধারণা করা হয় এটি একটি অত্যন্ত উত্তপ্ত পাথুরে গ্রহ, যার পৃষ্ঠের গড় তাপমাত্রা প্রায় ৪৩৬° সেলসিয়াস।'
      },
      exploration: {
        en: 'Discovered in 2017 by researchers at Google and The University of Texas at Austin using a neural network.',
        hi: '2017 में Google और ऑस्टिन में टेक्सास विश्वविद्यालय के शोधकर्ताओं द्वारा एक तंत्रिका नेटवर्क का उपयोग करके खोजा गया।',
        bn: '২০১৭ সালে গুগল এবং টেক্সাস ইউনিভার্সিটির গবেষকরা একটি নিউরাল নেটওয়ার্ক (AI) ব্যবহার করে এটি আবিষ্কার করেন।'
      },
      didYouKnow: [
        {
          en: 'The discovery of Kepler-90i tied the Kepler-90 system with our Solar System for the most known planets around a single star (eight).',
          hi: 'केप्लर-90आई की खोज ने एक ही तारे (आठ) के चारों ओर सबसे अधिक ज्ञात ग्रहों के लिए हमारे सौर मंडल के साथ केप्लर-90 प्रणाली को बांध दिया।',
          bn: 'কেপলার-৯০আই গ্রহটি আবিষ্কার হওয়ার ফলেই নিশ্চিত হওয়া যায় যে, আমাদের সৌরজগতের মতোই সেখানেও আটটি গ্রহ রয়েছে।'
        },
        {
          en: 'The AI that found this planet learned to identify the weak signals of planets missed by previous human and traditional computer searches.',
          hi: 'जिस एआई ने इस ग्रह को पाया, उसने पिछले मानव और पारंपरिक कंप्यूटर खोजों द्वारा छूटे हुए ग्रहों के कमजोर संकेतों की पहचान करना सीखा।',
          bn: 'যে আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) এই গ্রহটি খুঁজে পেয়েছিল, সেটি মানুষের চোখ এবং আগের সনাতন কম্পিউটার প্রোগ্রামগুলোর এড়িয়ে যাওয়া দুর্বল সিগন্যালগুলো শনাক্ত করার প্রশিক্ষণ পেয়েছিল।'
        }
      ]
    }
  },
  {
    id: 'kepler-90d',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90d',
      hi: 'केप्लर-90डी',
      bn: 'কেপলার-৯০ডি'
    },
    description: {
      en: 'A sub-Neptune exoplanet, the third planet from the star in the Kepler-90 system.',
      hi: 'एक उप-नेपच्यून एक्सोप्लैनेट, केप्लर-90 प्रणाली में तारे से तीसरा ग्रह।',
      bn: 'কেপলার-৯০ সৌরজগতের তৃতীয় গ্রহ, যা মূলত একটি সাব-নেপচুন (Sub-Neptune) এক্সোপ্ল্যানেট।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 2.88,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90d.jpg',
    details: {
      overview: {
        en: 'Kepler-90d is the third planet in the Kepler-90 system. Unlike the inner rocky planets, it is a sub-Neptune, meaning it is significantly larger than Earth and likely has a thick atmosphere of hydrogen and helium over a rocky or icy core.',
        hi: 'केप्लर-90डी केप्लर-90 प्रणाली में तीसरा ग्रह है। आंतरिक चट्टानी ग्रहों के विपरीत, यह एक उप-नेपच्यून है, जिसका अर्थ है कि यह पृथ्वी से काफी बड़ा है और संभवतः चट्टानी या बर्फीले कोर के ऊपर हाइड्रोजन और हीलियम का घना वातावरण है।',
        bn: 'কেপলার-৯০ডি হলো কেপলার-৯০ সৌরজগতের তৃতীয় গ্রহ। ভেতরের দিকের পাথুরে গ্রহগুলোর বিপরীতে এটি একটি সাব-নেপচুন (Sub-Neptune) গ্রহ। অর্থাৎ এটি পৃথিবীর চেয়ে বেশ বড় এবং সম্ভবত এর পাথুরে বা বরফাবৃত কেন্দ্রের ওপর হাইড্রোজেন ও হিলিয়ামের একটি পুরু বায়ুমণ্ডল রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 8-10 Earths)',
          hi: 'अज्ञात (अनुमानित 8-10 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ৮-১০ গুণ)'
        },
        diameter: {
          en: 'Approx. 36,700 km (2.88 Earths)',
          hi: 'लगभग 36,700 किमी (2.88 पृथ्वी)',
          bn: 'প্রায় ৩৬,৭০০ কি.মি. (পৃথিবীর ২.৮৮ গুণ)'
        },
        gravity: {
          en: 'Stronger than Earth, but potentially less dense',
          hi: 'पृथ्वी से अधिक मजबूत, लेकिन संभावित रूप से कम घना',
          bn: 'পৃথিবীর চেয়ে শক্তিশালী, তবে সম্ভবত ঘনত্ব কম'
        }
      },
      atmosphere: {
        en: 'Expected to have a very thick, dense atmosphere consisting of hydrogen, helium, and possibly volatile gases.',
        hi: 'हाइड्रोजन, हीलियम और संभवतः वाष्पशील गैसों से युक्त एक बहुत मोटा, घना वायुमंडल होने की उम्मीद है।',
        bn: 'হাইড্রোজেন, হিলিয়াম এবং অন্যান্য গ্যাসের সমন্বয়ে তৈরি একটি অত্যন্ত পুরু ও ঘন বায়ুমণ্ডল রয়েছে বলে ধারণা করা হয়।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 59.7 days.',
        hi: 'हर 59.7 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ৫৯.৭ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'Unknown',
        hi: 'अज्ञात',
        bn: 'অজানা'
      },
      surface: {
        en: 'Unlikely to have a distinct solid surface; transitions smoothly from a dense atmosphere to a liquid or solid core.',
        hi: 'एक अलग ठोस सतह होने की संभावना नहीं है; घने वायुमंडल से तरल या ठोस कोर में आसानी से संक्रमण होता है।',
        bn: 'এর কোনো নির্দিষ্ট কঠিন পৃষ্ঠ থাকার সম্ভাবনা নেই; বরং ঘন বায়ুমণ্ডল ধীরে ধীরে তরল বা কঠিন কেন্দ্রে পরিণত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope using the transit method.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा पारगमन पद्धति का उपयोग करके खोजा गया।',
        bn: '২০১৩ সালে ট্রানজিট মেথড ব্যবহার করে কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Its size places it in a category of planets called "Mini-Neptunes," which are very common in the galaxy but absent in our Solar System.',
          hi: 'इसका आकार इसे "मिनी-नेपच्यून" नामक ग्रहों की एक श्रेणी में रखता है, जो आकाशगंगा में बहुत आम हैं लेकिन हमारे सौर मंडल में अनुपस्थित हैं।',
          bn: 'আকারের কারণে এটিকে "মিনি-নেপচুন" ক্যাটাগরিতে ফেলা হয়। এই ধরনের গ্রহ গ্যালাক্সিতে খুব সাধারণ হলেও আমাদের সৌরজগতে এমন কোনো গ্রহ নেই।'
        },
        {
          en: 'Despite being the third planet, it still orbits closer to its star than Mercury does to the Sun.',
          hi: 'तीसरा ग्रह होने के बावजूद, यह अभी भी सूर्य से बुध की तुलना में अपने तारे के अधिक करीब परिक्रमा करता है।',
          bn: 'তৃতীয় গ্রহ হওয়া সত্ত্বেও, এটি বুধ গ্রহের চেয়েও এর নক্ষত্রের বেশি কাছাকাছি থেকে আবর্তন করে।'
        }
      ]
    }
  },
  {
    id: 'kepler-90e',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90e',
      hi: 'केप्लर-90ई',
      bn: 'কেপলার-৯০ই'
    },
    description: {
      en: 'A sub-Neptune exoplanet orbiting the star Kepler-90, slightly smaller than its neighbor Kepler-90d.',
      hi: 'केप्लर-90 तारे की परिक्रमा करने वाला एक उप-नेपच्यून एक्सोप्लैनेट, जो अपने पड़ोसी केप्लर-90डी से थोड़ा छोटा है।',
      bn: 'কেপলার-৯০ নক্ষত্রকে আবর্তনকারী একটি সাব-নেপচুন গ্রহ, যা এর প্রতিবেশী কেপলার-৯০ডি এর চেয়ে সামান্য ছোট।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 2.66,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90e.jpg',
    details: {
      overview: {
        en: 'Kepler-90e is the fourth planet from the star in the Kepler-90 system. Like Kepler-90d, it is classified as a sub-Neptune or Mini-Neptune. It has a massive atmosphere composed primarily of hydrogen and helium, making it uninhabitable for life as we know it.',
        hi: 'केप्लर-90ई केप्लर-90 प्रणाली में तारे से चौथा ग्रह है। केप्लर-90डी की तरह, इसे उप-नेपच्यून या मिनी-नेपच्यून के रूप में वर्गीकृत किया गया है। इसमें मुख्य रूप से हाइड्रोजन और हीलियम से बना एक विशाल वायुमंडल है।',
        bn: 'কেপলার-৯০ই হলো কেপলার-৯০ সৌরজগতের চতুর্থ গ্রহ। কেপলার-৯০ডি-এর মতোই এটি একটি সাব-নেপচুন বা মিনি-নেপচুন। এর মূলত হাইড্রোজেন এবং হিলিয়ামের একটি বিশাল বায়ুমণ্ডল রয়েছে, যা এটিকে আমাদের পরিচিত জীবনের জন্য সম্পূর্ণ অনুপযোগী করে তুলেছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 6-8 Earths)',
          hi: 'अज्ञात (अनुमानित 6-8 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ৬-৮ গুণ)'
        },
        diameter: {
          en: 'Approx. 33,900 km (2.66 Earths)',
          hi: 'लगभग 33,900 किमी (2.66 पृथ्वी)',
          bn: 'প্রায় ৩৩,৯০০ কি.মি. (পৃথিবীর ২.৬৬ গুণ)'
        },
        gravity: {
          en: 'Stronger than Earth',
          hi: 'पृथ्वी से मजबूत',
          bn: 'পৃথিবীর চেয়ে শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'Likely a thick, crushing envelope of hydrogen and helium gas.',
        hi: 'संभवतः हाइड्रोजन और हीलियम गैस का एक बहुत मोटा आवरण।',
        bn: 'সম্ভবত হাইড্রোজেন এবং হিলিয়াম গ্যাসের একটি অত্যন্ত পুরু স্তর বা আবরণ রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 91.9 days.',
        hi: 'हर 91.9 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ৯১.৯ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'No solid surface; gas gradually transitions to a high-pressure liquid interior.',
        hi: 'कोई ठोस सतह नहीं; गैस धीरे-धीरे उच्च दबाव वाले तरल आंतरिक भाग में बदल जाती है।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই; গ্যাস ধীরে ধীরে উচ্চ চাপের তরল অভ্যন্তরে পরিণত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope along with the rest of the inner Kepler-90 system.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে কেপলার স্পেস টেলিস্কোপের মাধ্যমেই এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'Its orbit is roughly similar in duration to Mercury’s orbit around our Sun (88 days), but Kepler-90e is a gas-rich planet rather than a barren rock.',
          hi: 'इसकी कक्षा हमारे सूर्य (88 दिन) के चारों ओर बुध की कक्षा के समान है, लेकिन केप्लर-90ई एक बंजर चट्टान के बजाय गैस से भरपूर ग्रह है।',
          bn: 'এর আবর্তনের সময়কাল (৯১.৯ দিন) আমাদের সৌরজগতে সূর্যের চারদিকে বুধ গ্রহের আবর্তনের (৮৮ দিন) প্রায় সমান। তবে বুধ গ্রহ পাথুরে হলেও, কেপলার-৯০ই গ্যাসে ভরপুর।'
        },
        {
          en: 'Like all planets in this system, it orbits its star closer than Earth orbits the Sun, highlighting how incredibly compact the Kepler-90 system is.',
          hi: 'इस प्रणाली के सभी ग्रहों की तरह, यह पृथ्वी की तुलना में अपने तारे के करीब परिक्रमा करता है।',
          bn: 'এই সৌরজগতের অন্য সব গ্রহের মতো এটিও পৃথিবীর চেয়ে এর নক্ষত্রের অনেক বেশি কাছে আবর্তন করে, যা প্রমাণ করে কেপলার-৯০ সৌরজগতটি কতটা সংকুচিত বা কমপ্যাক্ট (Compact)।'
        }
      ]
    }
  },
  {
    id: 'kepler-90f',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90f',
      hi: 'केप्लर-90एफ',
      bn: 'কেপলার-৯০এফ'
    },
    description: {
      en: 'A sub-Neptune exoplanet orbiting the star Kepler-90, the fifth planet in its system.',
      hi: 'केप्लर-90 तारे की परिक्रमा करने वाला एक उप-नेपच्यून एक्सोप्लैनेट, जो इसकी प्रणाली में पांचवां ग्रह है।',
      bn: 'কেপলার-৯০ সৌরজগতের পঞ্চম গ্রহ, যা একটি সাব-নেপচুন এক্সোপ্ল্যানেট।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 2.89,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90f.jpg',
    details: {
      overview: {
        en: 'Kepler-90f is the fifth planet in the Kepler-90 system. Similar in size to Kepler-90d, it is a sub-Neptune world composed largely of gas over a denser core. It sits at a distance from its star that is comparable to Venus\'s distance from our Sun.',
        hi: 'केप्लर-90एफ केप्लर-90 प्रणाली में पांचवां ग्रह है। केप्लर-90डी के आकार के समान, यह एक उप-नेपच्यून दुनिया है जो काफी हद तक एक सघन कोर के ऊपर गैस से बनी है।',
        bn: 'কেপলার-৯০এফ হলো কেপলার-৯০ সৌরজগতের পঞ্চম গ্রহ। আকারে কেপলার-৯০ডি-এর মতোই এটি একটি সাব-নেপচুন গ্রহ, যার ঘন কেন্দ্রের ওপর মূলত গ্যাসের বিশাল স্তর রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 8-10 Earths)',
          hi: 'अज्ञात (अनुमानित 8-10 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ৮-১০ গুণ)'
        },
        diameter: {
          en: 'Approx. 36,800 km (2.89 Earths)',
          hi: 'लगभग 36,800 किमी (2.89 पृथ्वी)',
          bn: 'প্রায় ৩৬,৮০০ কি.মি. (পৃথিবীর ২.৮৯ গুণ)'
        },
        gravity: {
          en: 'Stronger than Earth',
          hi: 'पृथ्वी से मजबूत',
          bn: 'পৃথিবীর চেয়ে শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'Expected to have a thick hydrogen-helium atmosphere.',
        hi: 'एक घने हाइड्रोजन-हीलियम वायुमंडल की उम्मीद है।',
        bn: 'হাইড্রোজেন এবং হিলিয়ামের একটি পুরু বায়ুমণ্ডল রয়েছে বলে ধারণা করা হয়।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 124.9 days.',
        hi: 'हर 124.9 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ১২৪.৯ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'No solid surface; likely transitions from gas to a liquid or solid core.',
        hi: 'कोई ठोस सतह नहीं; संभवतः गैस से तरल या ठोस कोर में संक्रमण होता है।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই; সম্ভবত গ্যাস ধীরে ধীরে তরল বা কঠিন কেন্দ্রে পরিণত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope using the transit method.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Its orbit is about the same size as Venus\'s orbit in our Solar System.',
          hi: 'इसकी कक्षा हमारे सौर मंडल में शुक्र की कक्षा के लगभग समान आकार की है।',
          bn: 'আমাদের সৌরজগতে শুক্র গ্রহের কক্ষপথের আকার যতটা, এর কক্ষপথের আকারও প্রায় ততটাই।'
        },
        {
          en: 'Together with Kepler-90d and e, it forms a trio of mini-Neptunes tightly packed in the middle of the Kepler-90 system.',
          hi: 'केप्लर-90डी और ई के साथ, यह केप्लर-90 प्रणाली के मध्य में कसकर पैक किए गए मिनी-नेपच्यून की तिकड़ी बनाता है।',
          bn: 'কেপলার-৯০ডি এবং ই-এর সাথে মিলে এটি কেপলার-৯০ সৌরজগতের মাঝখানে মিনি-নেপচুন গ্রহগুলোর একটি দারুণ ত্রয়ী (Trio) তৈরি করেছে।'
        }
      ]
    }
  },
  {
    id: 'kepler-90g',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90g',
      hi: 'केप्लर-90जी',
      bn: 'কেপলার-৯০জি'
    },
    description: {
      en: 'A gas giant exoplanet in the Kepler-90 system, significantly larger than the inner planets.',
      hi: 'केप्लर-90 प्रणाली में एक गैस विशाल एक्सोप्लैनेट, जो आंतरिक ग्रहों से काफी बड़ा है।',
      bn: 'কেপলার-৯০ সৌরজগতের একটি গ্যাস জায়ান্ট (Gas Giant) এক্সোপ্ল্যানেট, যা ভেতরের দিকের গ্রহগুলোর চেয়ে বেশ বড়।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 8.13,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90g.jpg',
    details: {
      overview: {
        en: 'Kepler-90g is the sixth planet from the star in the Kepler-90 system. It marks a transition in the system from the inner rocky and sub-Neptune planets to the outer gas giants. With a radius roughly eight times that of Earth, it is similar in size to Saturn in our Solar System.',
        hi: 'केप्लर-90जी केप्लर-90 प्रणाली में तारे से छठा ग्रह है। यह प्रणाली में आंतरिक चट्टानी और उप-नेपच्यून ग्रहों से बाहरी गैस दिग्गजों में एक संक्रमण का प्रतीक है। इसका आकार हमारे सौर मंडल में शनि के समान है।',
        bn: 'কেপলার-৯০জি হলো কেপলার-৯০ সৌরজগতের ষষ্ঠ গ্রহ। এই গ্রহটি থেকেই মূলত সৌরজগতের গ্যাস জায়ান্ট বা বিশাল গ্যাসীয় গ্রহগুলোর শুরু হয়েছে। এর আকার আমাদের সৌরজগতের শনি (Saturn) গ্রহের কাছাকাছি।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 15-20 Earths or more)',
          hi: 'अज्ञात (अनुमानित लगभग 15-20 पृथ्वी या अधिक)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ১৫-২০ গুণ বা তার বেশি)'
        },
        diameter: {
          en: 'Approx. 103,500 km (8.13 Earths)',
          hi: 'लगभग 103,500 किमी (8.13 पृथ्वी)',
          bn: 'প্রায় ১,০৩,৫০০ কি.মি. (পৃথিবীর ৮.১৩ গুণ)'
        },
        gravity: {
          en: 'Strong, typical of gas giants',
          hi: 'मजबूत, गैस दिग्गजों के विशिष्ट',
          bn: 'গ্যাস জায়ান্টদের মতোই বেশ শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'A massive atmosphere of hydrogen and helium, likely with turbulent cloud layers.',
        hi: 'हाइड्रोजन और हीलियम का एक विशाल वायुमंडल, जिसमें संभवतः अशांत बादल परतें हैं।',
        bn: 'হাইড্রোজেন এবং হিলিয়ামের এক বিশাল বায়ুমণ্ডল রয়েছে, যেখানে সম্ভবত প্রচণ্ড ঝোড়ো মেঘের স্তর রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 210.6 days.',
        hi: 'हर 210.6 दिन में अपने तारे की परिक्रमा करता है।',
        bn: 'এটি ২১০.৬ দিনে একবার এর নক্ষত্রকে প্রদক্ষিণ করে।'
      },
      moons: {
        en: 'Unknown, but large gas giants typically host multiple moons.',
        hi: 'अज्ञात, लेकिन बड़े गैस दिग्गज आमतौर पर कई चंद्रमाओं की मेजबानी करते हैं।',
        bn: 'অজানা, তবে এই ধরনের বিশাল গ্যাসীয় গ্রহগুলোতে সাধারণত অনেক উপগ্রহ থাকে।'
      },
      surface: {
        en: 'No solid surface; it is a gas giant.',
        hi: 'कोई ठोस सतह नहीं; यह एक गैस दिग्गज है।',
        bn: 'এটি একটি গ্যাস জায়ান্ট, তাই এর কোনো কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Its orbit is close to the inner edge of the habitable zone, but as a gas giant, it would not have a solid surface for life.',
          hi: 'इसकी कक्षा रहने योग्य क्षेत्र के आंतरिक किनारे के करीब है, लेकिन एक गैस दिग्गज के रूप में, इसमें जीवन के लिए एक ठोस सतह नहीं होगी।',
          bn: 'এর কক্ষপথ নক্ষত্রের হ্যাবিটেবল জোনের (Habitable Zone) বেশ কাছাকাছি, তবে গ্যাস জায়ান্ট হওয়ার কারণে এতে জীবনের কোনো সম্ভাবনা নেই।'
        },
        {
          en: 'The Kepler-90 system is incredibly ordered, with small planets close to the star and massive gas giants like Kepler-90g further out, much like our Solar System.',
          hi: 'केप्लर-90 प्रणाली अविश्वसनीय रूप से व्यवस्थित है, जिसमें छोटे ग्रह तारे के करीब हैं और बड़े गैस दिग्गज आगे हैं, जो हमारे सौर मंडल की तरह है।',
          bn: 'কেপলার-৯০ সৌরজগতটি আমাদের সৌরজগতের মতোই অত্যন্ত সুশৃঙ্খল; এর ভেতরের দিকে ছোট পাথুরে গ্রহ এবং বাইরের দিকে বড় গ্যাস জায়ান্ট গ্রহগুলো অবস্থিত।'
        }
      ]
    }
  },
  {
    id: 'kepler-90h',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-90h',
      hi: 'केप्लर-90एच',
      bn: 'কেপলার-৯০এইচ'
    },
    description: {
      en: 'The outermost known planet in the Kepler-90 system, a massive gas giant similar in size to Jupiter.',
      hi: 'केप्लर-90 प्रणाली में सबसे बाहरी ज्ञात ग्रह, बृहस्पति के आकार के समान एक विशाल गैस दिग्गज।',
      bn: 'কেপলার-৯০ সৌরজগতের সবচেয়ে বাইরের গ্রহ, যা আকারে আমাদের সৌরজগতের বৃহস্পতি (Jupiter) গ্রহের মতোই একটি বিশাল গ্যাস জায়ান্ট।'
    },
    distance: {
      en: '2,840 Light Years',
      hi: '2,840 प्रकाश वर्ष',
      bn: '২,৮৪০ আলোকবর্ষ'
    },
    radius: 11.32,
    modelType: 'texture',
    modelPath: '/textures/exoplanets/kepler-90h.jpg',
    details: {
      overview: {
        en: 'Kepler-90h is the seventh and outermost known planet of the Kepler-90 system (before the discovery of 90i between the inner planets). It is a massive gas giant, similar in size and likely composition to Jupiter in our own Solar System. Its discovery helped confirm the system\'s architectural resemblance to ours.',
        hi: 'केप्लर-90एच केप्लर-90 प्रणाली का सातवां और सबसे बाहरी ज्ञात ग्रह है। यह एक विशाल गैस दिग्गज है, जो हमारे अपने सौर मंडल में बृहस्पति के आकार और संभावित संरचना के समान है।',
        bn: 'কেপলার-৯০এইচ হলো কেপলার-৯০ সৌরজগতের সবচেয়ে বাইরের দিকের গ্রহ। এটি একটি সুবিশাল গ্যাস জায়ান্ট, যার আকার এবং গঠন অনেকটা আমাদের সৌরজগতের বৃহস্পতি (Jupiter) গ্রহের মতোই।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Expected to be comparable to Jupiter)',
          hi: 'अज्ञात (बृहस्पति के बराबर होने की उम्मीद)',
          bn: 'অজানা (সম্ভবত বৃহস্পতির ভরের সমান)'
        },
        diameter: {
          en: 'Approx. 144,000 km (11.32 Earths)',
          hi: 'लगभग 144,000 किमी (11.32 पृथ्वी)',
          bn: 'প্রায় ১,৪৪,০০০ কি.মি. (পৃথিবীর ১১.৩২ গুণ)'
        },
        gravity: {
          en: 'Very strong, typical of Jupiter-like gas giants',
          hi: 'बहुत मजबूत, बृहस्पति जैसे गैस दिग्गजों के विशिष्ट',
          bn: 'বৃহস্পতির মতো অত্যন্ত শক্তিশালী'
        }
      },
      atmosphere: {
        en: 'A very deep and massive atmosphere of hydrogen, helium, and complex storms.',
        hi: 'हाइड्रोजन, हीलियम और जटिल तूफानों का एक बहुत गहरा और विशाल वायुमंडल।',
        bn: 'হাইড্রোজেন, হিলিয়াম এবং প্রচণ্ড ঘূর্ণিঝড়ে ভরপুর এক গভীর ও সুবিশাল বায়ুমণ্ডল।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 331.6 days. Its year is similar to Earth\'s year.',
        hi: 'हर 331.6 दिन में अपने तारे की परिक्रमा करता है। इसका वर्ष पृथ्वी के वर्ष के समान है।',
        bn: 'এটি ৩৩১.৬ দিনে এর নক্ষত্রকে একবার প্রদক্ষিণ করে। অর্থাৎ এখানকার এক বছর পৃথিবীর এক বছরের প্রায় সমান।'
      },
      moons: {
        en: 'Unknown, but highly likely to have a large moon system.',
        hi: 'अज्ञात, लेकिन एक बड़े चंद्रमा प्रणाली होने की अत्यधिक संभावना है।',
        bn: 'অজানা, তবে এর চারপাশে একটি বিশাল উপগ্রহ-পরিবার থাকার প্রবল সম্ভাবনা রয়েছে।'
      },
      surface: {
        en: 'No solid surface; consists entirely of gas transitioning to liquid at extreme depths.',
        hi: 'कोई ठोस सतह नहीं; पूरी तरह से गैस से मिलकर बनता है जो अत्यधिक गहराई पर तरल में परिवर्तित हो जाता है।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই; গ্যাস চরম চাপে তরলে পরিণত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2013 by the Kepler Space Telescope.',
        hi: '2013 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৩ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Although it is the outermost known planet in its system, its orbit is only about the same distance from its star as Earth is from the Sun.',
          hi: 'यद्यपि यह अपने सिस्टम में सबसे बाहरी ज्ञात ग्रह है, इसकी कक्षा अपने तारे से लगभग उतनी ही दूरी पर है जितनी पृथ्वी सूर्य से है।',
          bn: 'যদিও এটি এই সৌরজগতের সবচেয়ে বাইরের দিকের গ্রহ, কিন্তু এর কক্ষপথটি নক্ষত্র থেকে ঠিক ততটাই দূরে অবস্থিত, যতটা দূরে সূর্য থেকে পৃথিবী অবস্থিত।'
        },
        {
          en: 'Kepler-90h\'s presence solidifies the idea that other star systems can have an "inner rocky, outer gas giant" arrangement just like our Solar System.',
          hi: 'केप्लर-90एच की उपस्थिति इस विचार को पुष्ट करती है कि अन्य तारा प्रणालियों में हमारे सौर मंडल की तरह "आंतरिक चट्टानी, बाहरी गैस विशाल" व्यवस्था हो सकती है।',
          bn: 'কেপলার-৯০এইচ প্রমাণ করে যে, আমাদের সৌরজগতের মতো মহাবিশ্বের অন্য সৌরজগতগুলোতেও ভেতরের দিকে পাথুরে গ্রহ এবং বাইরের দিকে বিশাল গ্যাসীয় গ্রহ থাকতে পারে।'
        }
      ]
    }
  },
  {
    id: 'kepler-452b',
    type: 'Exoplanet',
    name: {
      en: 'Kepler-452b',
      hi: 'केप्लर-452बी',
      bn: 'কেপলার-৪৫২বি'
    },
    description: {
      en: 'Often called Earth 2.0, an exoplanet orbiting a Sun-like star in the habitable zone.',
      hi: 'अक्सर इसे पृथ्वी 2.0 कहा जाता है, यह रहने योग्य क्षेत्र में सूर्य जैसे तारे की परिक्रमा करने वाला एक एक्सोप्लैनेट है।',
      bn: 'প্রায়শই "পৃথিবী ২.০" (Earth 2.0) নামে পরিচিত, এটি এমন একটি এক্সোপ্ল্যানেট যা সূর্যের মতো একটি নক্ষত্রের বাসযোগ্য অঞ্চলে (Habitable Zone) আবর্তন করছে।'
    },
    distance: {
      en: '1,800 Light Years',
      hi: '1,800 प्रकाश वर्ष',
      bn: '১,৮০০ আলোকবর্ষ'
    },
    radius: 1.63,
    modelType: 'glb',
    modelPath: '/models/kepler-452b.glb',
    details: {
      overview: {
        en: 'Kepler-452b, sometimes dubbed "Earth 2.0" or "Earth\'s Cousin", is a super-Earth exoplanet orbiting within the inner edge of the habitable zone of the sun-like star Kepler-452. It is one of the most Earth-like planets discovered in terms of its size and the type of star it orbits.',
        hi: 'केप्लर-452बी, जिसे कभी-कभी "पृथ्वी 2.0" या "पृथ्वी का चचेरा भाई" कहा जाता है, एक सुपर-अर्थ एक्सोप्लैनेट है जो सूर्य जैसे तारे केप्लर-452 के रहने योग्य क्षेत्र के आंतरिक किनारे के भीतर परिक्रमा करता है। यह अपने आकार और जिस तारे की परिक्रमा करता है उसके प्रकार के संदर्भ में खोजे गए सबसे पृथ्वी जैसे ग्रहों में से एक है।',
        bn: 'কেপলার-৪৫২বি, যা অনেক সময় "পৃথিবী ২.০" বা "পৃথিবীর খালাতো ভাই" নামেও পরিচিত, একটি সুপার-আর্থ এক্সোপ্ল্যানেট। এটি কেপলার-৪৫২ নামক একটি নক্ষত্রের (আমাদের সূর্যের মতোই) বাসযোগ্য অঞ্চলের ঠিক ভেতরের অংশে প্রদক্ষিণ করছে। এর আকার এবং নক্ষত্রের ধরন বিচার করলে এটি এযাবৎ আবিষ্কৃত অন্যতম পৃথিবী-সদৃশ গ্রহ।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Unknown (Estimated around 5 Earths)',
          hi: 'अज्ञात (अनुमानित लगभग 5 पृथ्वी)',
          bn: 'অজানা (আনুমানিক পৃথিবীর ৫ গুণ)'
        },
        diameter: {
          en: 'Approx. 20,800 km (1.63 Earths)',
          hi: 'लगभग 20,800 किमी (1.63 पृथ्वी)',
          bn: 'প্রায় ২০,৮০০ কি.মি. (পৃথিবীর ১.৬৩ গুণ)'
        },
        gravity: {
          en: 'Estimated to be roughly twice that of Earth',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग दोगुना होने का अनुमान',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় দ্বিগুণ বলে ধারণা করা হয়'
        }
      },
      atmosphere: {
        en: 'Could have a thick atmosphere and a runaway greenhouse effect due to its aging star.',
        hi: 'अपने उम्रदराज तारे के कारण इसमें घना वायुमंडल और एक भगोड़ा ग्रीनहाउस प्रभाव हो सकता है।',
        bn: 'নক্ষত্রের বয়স বেশি হওয়ার কারণে সম্ভবত এর একটি পুরু বায়ুমণ্ডল এবং রানাওয়ে গ্রিনহাউস ইফেক্ট (Runaway Greenhouse Effect) রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 385 Earth days, making its year very similar to ours.',
        hi: 'हर 385 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है, जिससे इसका वर्ष हमारे वर्ष के बहुत समान हो जाता है।',
        bn: 'এটি ৩৮৫ দিনে এর নক্ষত্রকে প্রদক্ষিণ করে, ফলে এর এক বছর পৃথিবীর এক বছরের একদম কাছাকাছি।'
      },
      moons: {
        en: 'Unknown',
        hi: 'अज्ञात',
        bn: 'অজানা'
      },
      surface: {
        en: 'Expected to be a rocky planet, possibly with active volcanoes and oceans, though its surface could be boiling away.',
        hi: 'एक चट्टानी ग्रह होने की उम्मीद है, संभवतः सक्रिय ज्वालामुखियों और महासागरों के साथ, हालांकि इसकी सतह उबल सकती है।',
        bn: 'সম্ভবত এটি একটি পাথুরে গ্রহ যেখানে সক্রিয় আগ্নেয়গিরি বা মহাসাগর থাকতে পারে, তবে প্রচণ্ড তাপে পৃষ্ঠের জল হয়তো ফুটছে।'
      },
      exploration: {
        en: 'Discovered in 2015 by the Kepler Space Telescope.',
        hi: '2015 में केप्लर स्पेस टेलीस्कोप द्वारा खोजा गया।',
        bn: '২০১৫ সালে নাসার কেপলার স্পেস টেলিস্কোপ এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'Its host star is 1.5 billion years older than our Sun, giving us a glimpse into Earth’s potential future as the Sun ages.',
          hi: 'इसका मेजबान तारा हमारे सूर्य से 1.5 अरब वर्ष पुराना है, जो हमें सूर्य की उम्र बढ़ने के साथ पृथ्वी के संभावित भविष्य की एक झलक देता है।',
          bn: 'এর নক্ষত্রটি আমাদের সূর্যের চেয়ে ১.৫ বিলিয়ন বছর বেশি পুরনো, যা আমাদের বলে দেয় যে সূর্যের বয়স বাড়লে ভবিষ্যতে পৃথিবীর অবস্থাও ঠিক কেমন হতে পারে।'
        },
        {
          en: 'A person who weighs 100 lbs on Earth would weigh nearly 200 lbs on Kepler-452b due to its stronger gravity.',
          hi: 'पृथ्वी पर 100 पाउंड वजन वाले व्यक्ति का वजन केप्लर-452बी पर इसके मजबूत गुरुत्वाकर्षण के कारण लगभग 200 पाउंड होगा।',
          bn: 'এর শক্তিশালী মধ্যাকর্ষণের কারণে পৃথিবীতে কারও ওজন যদি ৫০ কেজি হয়, তবে এই গ্রহে তার ওজন হবে প্রায় ১০০ কেজি!'
        }
      ]
    }
  }
];
