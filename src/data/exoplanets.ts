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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-186f.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90b.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90c.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90i.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90d.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90e.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90f.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90g.jpg',
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
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/kepler-90h.jpg',
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
  },
  {
    id: 'trappist-1b',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1b',
      hi: 'ट्रैपिस्ट-1बी',
      bn: 'ট্রাপিস্ট-১বি'
    },
    description: {
      en: 'The innermost planet of the TRAPPIST-1 system, a hot and rocky world similar in size to Earth.',
      hi: 'ट्रैपिस्ट-1 प्रणाली का सबसे भीतरी ग्रह, एक गर्म और चट्टानी दुनिया जो आकार में पृथ्वी के समान है।',
      bn: 'ট্রাপিস্ট-১ সৌরজগতের সবচেয়ে ভেতরের দিকের গ্রহ। এটি আকারে পৃথিবীর সমান হলেও একটি অত্যন্ত উত্তপ্ত পাথুরে গ্রহ।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 1.116,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1b.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1b is the innermost exoplanet orbiting the ultra-cool dwarf star TRAPPIST-1. It is a rocky, Earth-sized planet that receives about 4 times more solar irradiation than Earth does from the Sun, making it far too hot for liquid water on its surface.',
        hi: 'ट्रैपिस्ट-1बी अल्ट्रा-कूल बौने तारे ट्रैपिस्ट-1 की परिक्रमा करने वाला सबसे भीतरी एक्सोप्लैनेट है। यह एक चट्टानी, पृथ्वी के आकार का ग्रह है जो सूर्य से पृथ्वी की तुलना में लगभग 4 गुना अधिक सौर विकिरण प्राप्त करता है, जिससे यह अपनी सतह पर तरल पानी के लिए बहुत गर्म हो जाता है।',
        bn: 'ট্রাপিস্ট-১বি হলো অতি-শীতল বামন নক্ষত্র ট্রাপিস্ট-১ কে আবর্তনকারী সবচেয়ে ভেতরের দিকের একটি এক্সোপ্ল্যানেট। এটি পৃথিবীর সমান আকারের একটি পাথুরে গ্রহ, যা পৃথিবীর তুলনায় সূর্য (নক্ষত্র) থেকে প্রায় ৪ গুণ বেশি তাপ গ্রহণ করে। ফলে এর পৃষ্ঠে তরল পানি থাকার কোনো সম্ভাবনা নেই।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.37 Earths',
          hi: 'लगभग 1.37 पृथ्वी',
          bn: 'প্রায় ১.৩৭ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 14,200 km (1.116 Earths)',
          hi: 'लगभग 14,200 किमी (1.116 पृथ्वी)',
          bn: 'প্রায় ১৪,২০০ কি.মি. (পৃথিবীর ১.১১৬ গুণ)'
        },
        gravity: {
          en: 'Slightly stronger than Earth',
          hi: 'पृथ्वी से थोड़ा मजबूत',
          bn: 'পৃথিবীর চেয়ে সামান্য বেশি'
        }
      },
      atmosphere: {
        en: 'Observations suggest it lacks a thick, puffy atmosphere of hydrogen, but it could have a dense secondary atmosphere or no atmosphere at all.',
        hi: 'अवलोकनों से पता चलता है कि इसमें हाइड्रोजन के एक मोटे, फूले हुए वायुमंडल का अभाव है, लेकिन इसमें एक घना द्वितीयक वायुमंडल या कोई वायुमंडल नहीं हो सकता है।',
        bn: 'পর্যবেক্ষণ থেকে ধারণা করা হয় যে এতে হাইড্রোজেনের কোনো পুরু বায়ুমণ্ডল নেই। তবে এতে একটি ঘন গৌণ বায়ুমণ্ডল থাকতে পারে, অথবা কোনো বায়ুমণ্ডল নাও থাকতে পারে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star in just 1.5 Earth days. It is likely tidally locked, meaning one side always faces the star.',
        hi: 'केवल 1.5 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। इसके टाइडली लॉक्ड होने की संभावना है, जिसका अर्थ है कि एक पक्ष हमेशा तारे की ओर रहता है।',
        bn: 'এটি মাত্র ১.৫ দিনে এর নক্ষত্রকে একবার প্রদক্ষিণ করে। এটি সম্ভবত টাইডালি লকড (Tidally Locked), অর্থাৎ এর একটি দিক সব সময় নক্ষত্রের দিকে মুখ করে থাকে।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Rocky and extremely hot. The day side could be hot enough to melt rocks if no atmosphere redistributes the heat.',
        hi: 'चट्टानी और बेहद गर्म। यदि कोई वायुमंडल गर्मी को पुनर्वितरित नहीं करता है, तो दिन का पक्ष चट्टानों को पिघलाने के लिए पर्याप्त गर्म हो सकता है।',
        bn: 'পাথুরে এবং অত্যন্ত উত্তপ্ত। বায়ুমণ্ডল না থাকলে এর নক্ষত্রের দিকের অংশের তাপমাত্রা এত বেশি হতে পারে যে পাথরও গলে যেতে পারে।'
      },
      exploration: {
        en: 'Discovered in 2016 using the TRAPPIST telescope in Chile. Further studied extensively by the James Webb Space Telescope (JWST).',
        hi: '2016 में चिली में ट्रैपिस्ट टेलीस्कोप का उपयोग करके खोजा गया। जेम्स वेब स्पेस टेलीस्कोप (JWST) द्वारा बड़े पैमाने पर अध्ययन किया गया।',
        bn: 'চিলিতে অবস্থিত ট্রাপিস্ট (TRAPPIST) টেলিস্কোপের মাধ্যমে ২০১৬ সালে এটি আবিষ্কৃত হয়। পরবর্তীতে জেমস ওয়েব স্পেস টেলিস্কোপ দিয়ে এর বিষয়ে আরও বিস্তারিত গবেষণা করা হয়।'
      },
      didYouKnow: [
        {
          en: 'Recent JWST data suggests TRAPPIST-1b might be a bare rock with no significant atmosphere, absorbing and instantly re-radiating the star\'s heat.',
          hi: 'हाल ही में जेडब्ल्यूएसटी डेटा से पता चलता है कि ट्रैपिस्ट-1बी बिना किसी महत्वपूर्ण वायुमंडल के एक नंगी चट्टान हो सकता है, जो तारे की गर्मी को अवशोषित और तुरंत फिर से विकिरण करता है।',
          bn: 'জেমস ওয়েবের সাম্প্রতিক ডেটা থেকে ধারণা করা হয় যে, ট্রাপিস্ট-১বি কোনো গুরুত্বপূর্ণ বায়ুমণ্ডল ছাড়াই একটি সম্পূর্ণ খালি পাথুরে গ্রহ হতে পারে, যা নক্ষত্রের তাপ শোষণ করে এবং সাথে সাথেই আবার বিকিরণ করে দেয়।'
        },
        {
          en: 'Because the star is so close, TRAPPIST-1b would appear massive in its sky, taking up nearly 6 degrees of the sky—about 12 times larger than the Sun appears from Earth.',
          hi: 'चूंकि तारा बहुत करीब है, इसलिए ट्रैपिस्ट-1बी अपने आसमान में विशाल दिखाई देगा, जो आसमान का लगभग 6 डिग्री हिस्सा लेता है - पृथ्वी से सूर्य जितना दिखाई देता है उससे लगभग 12 गुना बड़ा।',
          bn: 'নক্ষত্রটির খুব কাছাকাছি হওয়ায়, এই গ্রহের আকাশ থেকে এর নক্ষত্রটিকে অনেক বড় দেখাবে। পৃথিবী থেকে সূর্যকে যতটা বড় দেখায়, এই গ্রহ থেকে এর নক্ষত্রটিকে তার চেয়েও প্রায় ১২ গুণ বেশি বড় দেখাবে!'
        }
      ]
    }
  },
  {
    id: 'trappist-1c',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1c',
      hi: 'ट्रैपिस्ट-1सी',
      bn: 'ট্রাপিস্ট-১সি'
    },
    description: {
      en: 'The second planet in the TRAPPIST-1 system, a rocky world slightly larger and more massive than Earth.',
      hi: 'ट्रैपिस्ट-1 प्रणाली का दूसरा ग्रह, पृथ्वी से थोड़ा बड़ा और अधिक विशाल एक चट्टानी दुनिया।',
      bn: 'ট্রাপিস্ট-১ সৌরজগতের দ্বিতীয় গ্রহ, যা পৃথিবীর চেয়ে সামান্য বড় এবং ভারী একটি পাথুরে গ্রহ।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 1.097,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1c.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1c is the second planet orbiting the ultra-cool dwarf star TRAPPIST-1. It is a dense, rocky planet that is slightly larger than Earth. Like Venus in our Solar System, it receives a high amount of stellar radiation, making it unlikely to host liquid water.',
        hi: 'ट्रैपिस्ट-1सी अल्ट्रा-कूल बौने तारे ट्रैपिस्ट-1 की परिक्रमा करने वाला दूसरा ग्रह है। यह एक घना, चट्टानी ग्रह है जो पृथ्वी से थोड़ा बड़ा है। हमारे सौर मंडल में शुक्र की तरह, यह भारी मात्रा में तारकीय विकिरण प्राप्त करता है।',
        bn: 'ট্রাপিস্ট-১সি হলো অতি-শীতল বামন নক্ষত্র ট্রাপিস্ট-১ কে আবর্তনকারী দ্বিতীয় এক্সোপ্ল্যানেট। এটি একটি ঘন ও পাথুরে গ্রহ, যা পৃথিবীর চেয়ে সামান্য বড়। আমাদের সৌরজগতের শুক্র (Venus) গ্রহের মতোই এটি নক্ষত্র থেকে প্রচুর তাপ গ্রহণ করে, তাই এতে তরল পানি থাকার কোনো সম্ভাবনা নেই।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.31 Earths',
          hi: 'लगभग 1.31 पृथ्वी',
          bn: 'প্রায় ১.৩১ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 13,980 km (1.097 Earths)',
          hi: 'लगभग 13,980 किमी (1.097 पृथ्वी)',
          bn: 'প্রায় ১৩,৯৮০ কি.মি. (পৃথিবীর ১.০৯৭ গুণ)'
        },
        gravity: {
          en: 'Slightly stronger than Earth',
          hi: 'पृथ्वी से थोड़ा मजबूत',
          bn: 'পৃথিবীর চেয়ে সামান্য বেশি'
        }
      },
      atmosphere: {
        en: 'JWST observations strongly suggest it lacks a thick carbon dioxide atmosphere like Venus, making it likely a bare rock or possessing a very thin atmosphere.',
        hi: 'जेडब्ल्यूएसटी के अवलोकनों से दृढ़ता से पता चलता है कि इसमें शुक्र की तरह एक मोटा कार्बन डाइऑक्साइड वायुमंडल नहीं है, जिससे इसके एक नंगी चट्टान होने या बहुत पतला वायुमंडल होने की संभावना है।',
        bn: 'জেমস ওয়েবের পর্যবেক্ষণ থেকে ধারণা করা হয় যে, এতে শুক্র গ্রহের মতো কার্বন ডাই-অক্সাইডের কোনো পুরু বায়ুমণ্ডল নেই। এটি মূলত একটি সম্পূর্ণ খালি পাথুরে গ্রহ অথবা এর খুব পাতলা কোনো বায়ুমণ্ডল থাকতে পারে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 2.4 Earth days. It is presumed to be tidally locked.',
        hi: 'हर 2.4 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। इसे टाइडली लॉक्ड माना जाता है।',
        bn: 'এটি মাত্র ২.৪ দিনে এর নক্ষত্রকে প্রদক্ষিণ করে। এটিও সম্ভবত টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Rocky, barren, and scorchingly hot on the day side, likely devoid of any oceans.',
        hi: 'दिन के समय चट्टानी, बंजर और झुलसाने वाला गर्म, संभवतः किसी भी महासागर से रहित।',
        bn: 'এর দিন-অংশটি পাথুরে, ঊষর এবং প্রচণ্ড উত্তপ্ত, যেখানে মহাসাগর থাকার কোনো সম্ভাবনাই নেই।'
      },
      exploration: {
        en: 'Discovered in 2016 by the TRAPPIST telescope and extensively observed by the James Webb Space Telescope.',
        hi: '2016 में ट्रैपिस्ट टेलीस्कोप द्वारा खोजा गया और जेम्स वेब स्पेस टेलीस्कोप द्वारा बड़े पैमाने पर देखा गया।',
        bn: '২০১৬ সালে ট্রাপিস্ট টেলিস্কোপ দিয়ে এটি আবিষ্কৃত হয় এবং পরে জেমস ওয়েব স্পেস টেলিস্কোপ দিয়ে গভীরভাবে পর্যবেক্ষণ করা হয়।'
      },
      didYouKnow: [
        {
          en: 'Although often compared to Venus due to its received starlight, TRAPPIST-1c seems to have lost all its atmosphere, unlike Venus which kept a thick, toxic one.',
          hi: 'हालांकि अक्सर प्राप्त तारों की रोशनी के कारण शुक्र से तुलना की जाती है, ट्रैपिस्ट-1सी ने अपना सारा वायुमंडल खो दिया है, शुक्र के विपरीत जिसने एक मोटा, जहरीला वायुमंडल रखा है।',
          bn: 'নক্ষত্র থেকে পাওয়া তাপের কারণে একে প্রায়ই শুক্র গ্রহের সাথে তুলনা করা হলেও, শুক্র গ্রহ যেখানে একটি বিষাক্ত ও পুরু বায়ুমণ্ডল ধরে রেখেছে, সেখানে ট্রাপিস্ট-১সি সম্ভবত তার সমস্ত বায়ুমণ্ডল হারিয়ে ফেলেছে।'
        },
        {
          en: 'If you stood on its surface, the star would look massive and glow with a deep, dull red color.',
          hi: 'यदि आप इसकी सतह पर खड़े होते, तो तारा विशाल दिखाई देता और गहरे, सुस्त लाल रंग के साथ चमकता।',
          bn: 'আপনি যদি এই গ্রহের পৃষ্ঠে দাঁড়ান, তবে নক্ষত্রটিকে অনেক বিশাল দেখাবে এবং এটি গাঢ়, অনুজ্জ্বল লাল রঙে জ্বলতে দেখা যাবে।'
        }
      ]
    }
  },
  {
    id: 'trappist-1d',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1d',
      hi: 'ट्रैपिस्ट-1डी',
      bn: 'ট্রাপিস্ট-১ডি'
    },
    description: {
      en: 'The third planet in the TRAPPIST-1 system, a small rocky world that sits near the inner edge of the habitable zone.',
      hi: 'ट्रैपिस्ट-1 प्रणाली का तीसरा ग्रह, एक छोटी चट्टानी दुनिया जो रहने योग्य क्षेत्र के आंतरिक किनारे के पास स्थित है।',
      bn: 'ট্রাপিস্ট-১ সৌরজগতের তৃতীয় গ্রহ, যা বাসযোগ্য অঞ্চলের (Habitable Zone) ভেতরের দিকের ঠিক সীমানায় অবস্থিত একটি ছোট পাথুরে গ্রহ।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 0.788,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1d.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1d is the third planet of the TRAPPIST-1 system. It is one of the smallest and lightest planets in the system, with a mass about 30% that of Earth. It orbits near the inner edge of the habitable zone, making it a subject of great interest for habitability studies.',
        hi: 'ट्रैपिस्ट-1डी ट्रैपिस्ट-1 प्रणाली का तीसरा ग्रह है। यह प्रणाली के सबसे छोटे और सबसे हल्के ग्रहों में से एक है, जिसका द्रव्यमान पृथ्वी का लगभग 30% है। यह रहने योग्य क्षेत्र के आंतरिक किनारे के पास परिक्रमा करता है।',
        bn: 'ট্রাপিস্ট-১ডি হলো ট্রাপিস্ট-১ সৌরজগতের তৃতীয় গ্রহ। এটি এই সৌরজগতের অন্যতম ছোট এবং হালকা একটি গ্রহ, যার ভর পৃথিবীর মাত্র ৩০%। এটি নক্ষত্রের বাসযোগ্য অঞ্চলের (Habitable Zone) ভেতরের দিকের ঠিক সীমানার কাছে আবর্তন করে, যা একে বাসযোগ্যতা গবেষণার জন্য একটি দারুণ বিষয় করে তুলেছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.38 Earths',
          hi: 'लगभग 0.38 पृथ्वी',
          bn: 'প্রায় ০.৩৮ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 10,040 km (0.788 Earths)',
          hi: 'लगभग 10,040 किमी (0.788 पृथ्वी)',
          bn: 'প্রায় ১০,০৪০ কি.মি. (পৃথিবীর ০.৭৮৮ গুণ)'
        },
        gravity: {
          en: 'About 60% of Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग 60%',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় ৬০%'
        }
      },
      atmosphere: {
        en: 'Unknown, but studies suggest it could potentially hold onto a significant atmosphere, possibly even supporting liquid water.',
        hi: 'अज्ञात, लेकिन अध्ययनों से पता चलता है कि यह संभावित रूप से एक महत्वपूर्ण वायुमंडल को पकड़ सकता है, संभवतः तरल पानी का भी समर्थन कर सकता है।',
        bn: 'অজানা, তবে গবেষণায় ধারণা করা হয় যে এটি একটি যথেষ্ট পরিমাণ বায়ুমণ্ডল ধরে রাখতে পারে, যা এমনকি তরল পানিকেও সমর্থন করতে পারে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 4.05 Earth days. It is presumed to be tidally locked.',
        hi: 'हर 4.05 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। इसे टाइडली लॉक्ड माना जाता है।',
        bn: 'এটি মাত্র ৪.০৫ দিনে এর নক্ষত্রকে একবার প্রদক্ষিণ করে। এটিও সম্ভবত টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Rocky. Its exact surface conditions depend heavily on its unknown atmosphere, ranging from a barren rock to a world with liquid water.',
        hi: 'चट्टानी। इसकी सटीक सतह की स्थिति काफी हद तक इसके अज्ञात वायुमंडल पर निर्भर करती है, जो एक बंजर चट्टान से लेकर तरल पानी वाली दुनिया तक हो सकती है।',
        bn: 'পাথুরে। এর পৃষ্ঠের সঠিক অবস্থা মূলত এর অজানা বায়ুমণ্ডলের ওপর নির্ভর করে, যা একে একটি শুকনো পাথুরে গ্রহ থেকে শুরু করে তরল পানিযুক্ত একটি গ্রহে পরিণত করতে পারে।'
      },
      exploration: {
        en: 'Discovered in 2016 by the TRAPPIST telescope in Chile.',
        hi: '2016 में चिली में ट्रैपिस्ट टेलीस्कोप द्वारा खोजा गया।',
        bn: 'চিলিতে অবস্থিত ট্রাপিস্ট (TRAPPIST) টেলিস্কোপের মাধ্যমে ২০১৬ সালে এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'It is the lightest planet in the TRAPPIST-1 system, weighing barely more than a third of Earth\'s mass.',
          hi: 'यह ट्रैपिस्ट-1 प्रणाली का सबसे हल्का ग्रह है, जिसका वजन पृथ्वी के द्रव्यमान के एक तिहाई से भी कम है।',
          bn: 'এটি ট্রাপিস্ট-১ সৌরজগতের সবচেয়ে হালকা গ্রহ, যার ভর পৃথিবীর ভরের এক-তৃতীয়াংশের চেয়ে সামান্য বেশি।'
        },
        {
          en: 'Depending on its atmosphere, it might be just cool enough for water to condense into oceans on its surface.',
          hi: 'इसके वायुमंडल के आधार पर, इसकी सतह पर महासागरों में संघनित होने के लिए पानी पर्याप्त ठंडा हो सकता है।',
          bn: 'এর বায়ুমণ্ডলের ওপর ভিত্তি করে, এটি হয়তো তরল পানি থেকে মহাসাগর তৈরি হওয়ার জন্য ঠিক ততটাই ঠান্ডা হতে পারে, যতটা প্রয়োজন।'
        }
      ]
    }
  },
  {
    id: 'trappist-1e',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1e',
      hi: 'ट्रैपिस्ट-1ई',
      bn: 'ট্রাপিস্ট-১ই'
    },
    description: {
      en: 'An Earth-sized exoplanet orbiting within the habitable zone of its star, making it a prime candidate for holding liquid water.',
      hi: 'अपने तारे के रहने योग्य क्षेत्र के भीतर परिक्रमा करने वाला एक पृथ्वी के आकार का एक्सोप्लैनेट, जो इसे तरल पानी रखने के लिए एक प्रमुख उम्मीदवार बनाता है।',
      bn: 'নক্ষত্রের বাসযোগ্য অঞ্চলের (Habitable Zone) ঠিক মাঝখানে অবস্থিত একটি পৃথিবীর আকারের এক্সোপ্ল্যানেট, যা তরল পানি ধারণ করার জন্য অন্যতম প্রধান প্রার্থী।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 0.920,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1e.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1e is the fourth planet of the TRAPPIST-1 system and sits comfortably within its star’s habitable zone. With a mass and radius remarkably close to Earth’s, it is considered one of the most promising potentially habitable exoplanets discovered so far.',
        hi: 'ट्रैपिस्ट-1ई ट्रैपिस्ट-1 प्रणाली का चौथा ग्रह है और अपने तारे के रहने योग्य क्षेत्र के भीतर आराम से बैठता है। पृथ्वी के उल्लेखनीय रूप से करीब द्रव्यमान और त्रिज्या के साथ, इसे अब तक खोजे गए सबसे होनहार संभावित रूप से रहने योग्य एक्सोप्लैनेट में से एक माना जाता है।',
        bn: 'ট্রাপিস্ট-১ই হলো ট্রাপিস্ট-১ সৌরজগতের চতুর্থ গ্রহ, যা নক্ষত্রের বাসযোগ্য অঞ্চলের (Habitable Zone) ঠিক মাঝখানে অবস্থিত। এর ভর এবং আকার পৃথিবীর প্রায় সমান হওয়ায়, এটি এখন পর্যন্ত আবিষ্কৃত সম্ভাব্য বাসযোগ্য এক্সোপ্ল্যানেটগুলোর মধ্যে অন্যতম সেরা।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.69 Earths',
          hi: 'लगभग 0.69 पृथ्वी',
          bn: 'প্রায় ০.৬৯ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 11,730 km (0.920 Earths)',
          hi: 'लगभग 11,730 किमी (0.920 पृथ्वी)',
          bn: 'প্রায় ১১,৭৩০ কি.মি. (পৃথিবীর ০.৯২ গুণ)'
        },
        gravity: {
          en: 'About 82% of Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग 82%',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় ৮২%'
        }
      },
      atmosphere: {
        en: 'Current research suggests it may possess a compact, heavier atmosphere (similar to Earth’s) rather than a puffy hydrogen one, which is favorable for habitability.',
        hi: 'वर्तमान शोध से पता चलता है कि इसमें एक फूले हुए हाइड्रोजन वायुमंडल के बजाय एक सघन, भारी वायुमंडल (पृथ्वी के समान) हो सकता है, जो रहने की क्षमता के लिए अनुकूल है।',
        bn: 'বর্তমান গবেষণায় ধারণা করা হয় যে, এর বায়ুমণ্ডলটি হয়তো পৃথিবীর মতোই একটি ঘন ও ভারী বায়ুমণ্ডল, যা এর বাসযোগ্য হওয়ার সম্ভাবনাকে আরও বাড়িয়ে দেয়।'
      },
      orbitAndRotation: {
        en: 'Orbits its star in 6.1 Earth days. Like its siblings, it is likely tidally locked.',
        hi: '6.1 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। अपने भाई-बहनों की तरह, इसके टाइडली लॉक्ड होने की संभावना है।',
        bn: 'এটি ৬.১ দিনে নক্ষত্রকে প্রদক্ষিণ করে। সৌরজগতের অন্যান্য গ্রহের মতোই এটিও সম্ভবত টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Thought to be rocky. If it has the right atmosphere, it could host oceans of liquid water on its surface.',
        hi: 'चट्टानी माना जाता है। यदि इसके पास सही वायुमंडल है, तो यह अपनी सतह पर तरल पानी के महासागरों की मेजबानी कर सकता है।',
        bn: 'ধারণা করা হয় এটি একটি পাথুরে গ্রহ। যদি এর সঠিক বায়ুমণ্ডল থাকে, তবে এর পৃষ্ঠে তরল পানির মহাসাগর থাকতে পারে।'
      },
      exploration: {
        en: 'Discovered in 2017 using the Spitzer Space Telescope and ground-based observatories.',
        hi: '2017 में स्पिट्जर स्पेस टेलीस्कोप और जमीन-आधारित वेधशालाओं का उपयोग करके खोजा गया।',
        bn: '২০১৭ সালে স্পিৎজার স্পেস টেলিস্কোপ এবং ভূপৃষ্ঠের অবজারভেটরির মাধ্যমে এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'It receives almost the exact same amount of solar energy as Earth receives from the Sun, making its temperatures potentially very Earth-like.',
          hi: 'यह लगभग उतनी ही सौर ऊर्जा प्राप्त करता है जितनी पृथ्वी सूर्य से प्राप्त करती है, जिससे इसका तापमान संभावित रूप से बहुत पृथ्वी जैसा हो जाता है।',
          bn: 'পৃথিবী সূর্য থেকে ঠিক যতটুকু তাপ ও শক্তি পায়, এই গ্রহটিও এর নক্ষত্র থেকে প্রায় ততটুকুই শক্তি পায়। ফলে এর তাপমাত্রা অনেকটা পৃথিবীর মতোই হতে পারে।'
        },
        {
          en: 'Because the TRAPPIST-1 planets are so close to each other, you could look up into the sky of TRAPPIST-1e and see its neighboring planets appearing as large as our Moon, or even larger.',
          hi: 'चूंकि ट्रैपिस्ट-1 ग्रह एक-दूसरे के बहुत करीब हैं, इसलिए आप ट्रैपिस्ट-1ई के आकाश में देख सकते हैं और इसके पड़ोसी ग्रहों को हमारे चंद्रमा के रूप में या उससे भी बड़ा देख सकते हैं।',
          bn: 'ট্রাপিস্ট-১ সৌরজগতের গ্রহগুলো একে অপরের এত কাছাকাছি অবস্থিত যে, আপনি যদি ট্রাপিস্ট-১ই এর আকাশে তাকান, তবে এর পাশের গ্রহগুলোকে চাঁদের মতো বা তার চেয়েও অনেক বড় দেখতে পাবেন।'
        }
      ]
    }
  },
  {
    id: 'trappist-1f',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1f',
      hi: 'ट्रैपिस्ट-1एफ',
      bn: 'ট্রাপিস্ট-১এফ'
    },
    description: {
      en: 'An Earth-sized planet in the outer habitable zone of TRAPPIST-1, potentially an icy world or one with a thick atmosphere.',
      hi: 'ट्रैपिस्ट-1 के बाहरी रहने योग्य क्षेत्र में एक पृथ्वी के आकार का ग्रह, संभावित रूप से एक बर्फीली दुनिया या घने वायुमंडल वाला।',
      bn: 'ট্রাপিস্ট-১ নক্ষত্রের বাসযোগ্য অঞ্চলের বাইরের দিকে অবস্থিত একটি পৃথিবীর আকারের গ্রহ। এটি একটি বরফে ঢাকা বিশ্ব হতে পারে অথবা এর ঘন বায়ুমণ্ডল থাকতে পারে।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 1.045,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1f.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1f is the fifth planet from its star, orbiting near the outer edge of the habitable zone. It is similar in size to Earth but slightly less massive, which suggests it might be rich in water—either as global oceans, ice shells, or thick vapor depending on its atmosphere.',
        hi: 'ट्रैपिस्ट-1एफ अपने तारे से पांचवां ग्रह है, जो रहने योग्य क्षेत्र के बाहरी किनारे के पास परिक्रमा करता है। यह आकार में पृथ्वी के समान है लेकिन थोड़ा कम विशाल है, जो बताता है कि यह पानी से समृद्ध हो सकता है।',
        bn: 'ট্রাপিস্ট-১এফ হলো এর নক্ষত্র থেকে পঞ্চম গ্রহ, যা বাসযোগ্য অঞ্চলের বাইরের দিকের সীমানার কাছে আবর্তন করে। এর আকার পৃথিবীর মতোই, তবে ভর কিছুটা কম। ধারণা করা হয় যে এটিতে প্রচুর পরিমাণে পানি থাকতে পারে, যা এর বায়ুমণ্ডলের ওপর নির্ভর করে বরফ, মহাসাগর বা ঘন বাষ্প হিসেবে থাকতে পারে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.68 Earths',
          hi: 'लगभग 0.68 पृथ्वी',
          bn: 'প্রায় ০.৬৮ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 13,320 km (1.045 Earths)',
          hi: 'लगभग 13,320 किमी (1.045 पृथ्वी)',
          bn: 'প্রায় ১৩,৩২০ কি.মি. (পৃথিবীর ১.০৪৫ গুণ)'
        },
        gravity: {
          en: 'About 62% of Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग 62%',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় ৬২%'
        }
      },
      atmosphere: {
        en: 'It is a prime target for the James Webb Space Telescope to check for a thick, heat-trapping atmosphere that could keep its surface warm enough for liquid water.',
        hi: 'तरल पानी के लिए इसकी सतह को पर्याप्त गर्म रखने वाले एक मोटे, गर्मी-फंसाने वाले वायुमंडल की जांच करने के लिए यह जेम्स वेब स्पेस टेलीस्कोप का एक प्रमुख लक्ष्य है।',
        bn: 'এর পৃষ্ঠকে তরল পানির জন্য যথেষ্ট উষ্ণ রাখতে পারে এমন কোনো ঘন এবং তাপ আটকে রাখার মতো বায়ুমণ্ডল আছে কি না, তা জেমস ওয়েব স্পেস টেলিস্কোপ দিয়ে গবেষণা করার জন্য এটি একটি অন্যতম প্রধান লক্ষ্য।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 9.2 Earth days. Expected to be tidally locked.',
        hi: 'हर 9.2 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। इसके टाइडली लॉक्ड होने की उम्मीद है।',
        bn: 'এটি ৯.২ দিনে নক্ষত্রকে প্রদক্ষিণ করে। এটিও টাইডালি লকড (Tidally Locked) বলে ধারণা করা হয়।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Without a thick greenhouse atmosphere, its surface is likely covered in ice. With enough greenhouse gases, it could have a global ocean.',
        hi: 'एक मोटे ग्रीनहाउस वायुमंडल के बिना, इसकी सतह संभवतः बर्फ से ढकी है। पर्याप्त ग्रीनहाउस गैसों के साथ, इसमें एक वैश्विक महासागर हो सकता है।',
        bn: 'গ্রিনহাউস গ্যাসের কোনো ঘন বায়ুমণ্ডল না থাকলে, এর পৃষ্ঠ সম্ভবত বরফে ঢাকা থাকবে। তবে পর্যাপ্ত গ্রিনহাউস গ্যাস থাকলে এটি একটি সম্পূর্ণ মহাসাগরীয় গ্রহ হতে পারে।'
      },
      exploration: {
        en: 'Discovered in 2017 using the Spitzer Space Telescope and ground-based telescopes.',
        hi: '2017 में स्पिट्जर स्पेस टेलीस्कोप और जमीन-आधारित दूरबीनों का उपयोग करके खोजा गया।',
        bn: '২০১৭ সালে স্পিৎজার স্পেস টেলিস্কোপ এবং ভূপৃষ্ঠের টেলিস্কোপের মাধ্যমে এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'Because of its slightly lower density compared to Earth, some models suggest TRAPPIST-1f could be up to 20% water by mass—far more water than Earth has.',
          hi: 'पृथ्वी की तुलना में इसके थोड़े कम घनत्व के कारण, कुछ मॉडल बताते हैं कि ट्रैपिस्ट-1एफ में द्रव्यमान के हिसाब से 20% तक पानी हो सकता है - पृथ्वी की तुलना में बहुत अधिक पानी।',
          bn: 'পৃথিবীর তুলনায় এর ঘনত্ব কিছুটা কম হওয়ায় কিছু গবেষণায় ধারণা করা হয় যে, ট্রাপিস্ট-১এফ এর মোট ভরের প্রায় ২০% অংশই হতে পারে পানি—যা পৃথিবীর মোট পানির পরিমাণের চেয়ে বহুগুণ বেশি!'
        },
        {
          en: 'Its star, TRAPPIST-1, is so dim that high noon on TRAPPIST-1f would look no brighter than a sunset on Earth.',
          hi: 'इसका तारा, ट्रैपिस्ट-1, इतना मंद है कि ट्रैपिस्ट-1एफ पर दोपहर पृथ्वी पर सूर्यास्त से अधिक उज्ज्वल नहीं दिखेगी।',
          bn: 'এর নক্ষত্র ট্রাপিস্ট-১ এতই অনুজ্জ্বল যে, ট্রাপিস্ট-১এফ গ্রহে ঠিক দুপুরের সময়কার আলোও পৃথিবীতে সূর্যাস্তের সময়ের আলোর চেয়ে বেশি উজ্জ্বল মনে হবে না।'
        }
      ]
    }
  },
  {
    id: 'trappist-1g',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1g',
      hi: 'ट्रैपिस्ट-1जी',
      bn: 'ট্রাপিস্ট-১জি'
    },
    description: {
      en: 'The largest planet in the TRAPPIST-1 system, located just outside the habitable zone, likely a cold and icy world.',
      hi: 'ट्रैपिस्ट-1 प्रणाली का सबसे बड़ा ग्रह, जो रहने योग्य क्षेत्र के ठीक बाहर स्थित है, संभवतः एक ठंडी और बर्फीली दुनिया।',
      bn: 'ট্রাপিস্ট-১ সৌরজগতের সবচেয়ে বড় গ্রহ, যা বাসযোগ্য অঞ্চলের ঠিক বাইরে অবস্থিত। এটি সম্ভবত একটি বরফ আচ্ছাদিত শীতল গ্রহ।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 1.127,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1g.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1g is the sixth planet from the star and the largest in the TRAPPIST-1 system. Orbiting just beyond the traditional habitable zone, it receives significantly less starlight than Earth, making it a very cold world that may be completely frozen.',
        hi: 'ट्रैपिस्ट-1जी तारे से छठा ग्रह है और ट्रैपिस्ट-1 प्रणाली में सबसे बड़ा है। पारंपरिक रहने योग्य क्षेत्र के ठीक परे परिक्रमा करते हुए, यह पृथ्वी की तुलना में काफी कम तारों की रोशनी प्राप्त करता है, जिससे यह एक बहुत ठंडी दुनिया बन जाती है जो पूरी तरह से जमी हुई हो सकती है।',
        bn: 'ট্রাপিস্ট-১জি হলো নক্ষত্র থেকে ষষ্ঠ এবং পুরো ট্রাপিস্ট-১ সৌরজগতের সবচেয়ে বড় গ্রহ। এটি বাসযোগ্য অঞ্চলের ঠিক বাইরে অবস্থান করছে বলে পৃথিবী থেকে অনেক কম আলো ও তাপ গ্রহণ করে, যা একে সম্পূর্ণ বরফে ঢাকা একটি অত্যন্ত শীতল গ্রহে পরিণত করে থাকতে পারে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.32 Earths',
          hi: 'लगभग 1.32 पृथ्वी',
          bn: 'প্রায় ১.৩২ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 14,360 km (1.127 Earths)',
          hi: 'लगभग 14,360 किमी (1.127 पृथ्वी)',
          bn: 'প্রায় ১৪,৩৬০ কি.মি. (পৃথিবীর ১.১২৭ গুণ)'
        },
        gravity: {
          en: 'Slightly stronger than Earth',
          hi: 'पृथ्वी से थोड़ा मजबूत',
          bn: 'পৃথিবীর চেয়ে সামান্য বেশি'
        }
      },
      atmosphere: {
        en: 'It is expected to lack a primordial hydrogen-helium atmosphere, but might have a secondary atmosphere created by volcanic outgassing, though it would be very cold.',
        hi: 'इसमें एक आदिम हाइड्रोजन-हीलियम वायुमंडल की कमी होने की उम्मीद है, लेकिन ज्वालामुखीय आउटगैसिंग द्वारा बनाया गया एक द्वितीयक वायुमंडल हो सकता है, हालांकि यह बहुत ठंडा होगा।',
        bn: 'আদিম হাইড্রোজেন-হিলিয়ামের কোনো বায়ুমণ্ডল এতে না থাকারই সম্ভাবনা বেশি। তবে আগ্নেয়গিরির কারণে সৃষ্ট কোনো গৌণ বায়ুমণ্ডল এতে থাকতে পারে, যদিও সেটি অত্যন্ত শীতল হবে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 12.4 Earth days. Likely tidally locked.',
        hi: 'हर 12.4 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। संभवतः टाइडली लॉक्ड।',
        bn: 'এটি ১২.৪ দিনে নক্ষত্রকে একবার প্রদক্ষিণ করে। সম্ভবত এটিও টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Likely a global ice sheet. If it has a dense enough atmosphere or internal heating from tidal forces, there might be a subsurface ocean.',
        hi: 'संभवतः एक वैश्विक बर्फ की चादर। यदि इसके पास पर्याप्त घना वायुमंडल या ज्वारीय बलों से आंतरिक ताप है, तो एक उपसतह महासागर हो सकता है।',
        bn: 'সম্ভবত এটি পুরোটাই বরফে ঢাকা একটি গ্রহ। যদি এর বায়ুমণ্ডল যথেষ্ট ঘন হয় অথবা টাইডাল ফোর্স থেকে কোনো অভ্যন্তরীণ তাপ তৈরি হয়, তবে বরফের নিচে কোনো মহাসাগর থাকতেও পারে।'
      },
      exploration: {
        en: 'Discovered in 2017 using the Spitzer Space Telescope and ground-based telescopes.',
        hi: '2017 में स्पिट्जर स्पेस टेलीस्कोप और जमीन-आधारित दूरबीनों का उपयोग करके खोजा गया।',
        bn: '২০১৭ সালে স্পিৎজার স্পেস টেলিস্কোপ এবং ভূপৃষ্ঠের টেলিস্কোপের মাধ্যমে এটি আবিষ্কৃত হয়।'
      },
      didYouKnow: [
        {
          en: 'Despite being the largest planet in its system, TRAPPIST-1g is still only about 13% wider than Earth.',
          hi: 'अपनी प्रणाली में सबसे बड़ा ग्रह होने के बावजूद, ट्रैपिस्ट-1जी अभी भी पृथ्वी की तुलना में केवल लगभग 13% चौड़ा है।',
          bn: 'সৌরজগতের সবচেয়ে বড় গ্রহ হওয়া সত্ত্বেও, ট্রাপিস্ট-১জি পৃথিবীর তুলনায় মাত্র ১৩% বেশি চওড়া।'
        },
        {
          en: 'Because it orbits so far from its dim star, the starlight reaching TRAPPIST-1g is hundreds of times weaker than the sunlight we feel on Earth.',
          hi: 'चूंकि यह अपने मंद तारे से बहुत दूर परिक्रमा करता है, ट्रैपिस्ट-1जी तक पहुंचने वाले तारों की रोशनी उस धूप से सैकड़ों गुना कमजोर है जिसे हम पृथ्वी पर महसूस करते हैं।',
          bn: 'অনুজ্জ্বল নক্ষত্র থেকে অনেকটা দূরে আবর্তন করায়, ট্রাপিস্ট-১জি যে পরিমাণ আলো পায়, তা পৃথিবীতে আমাদের পাওয়া সূর্যের আলোর চেয়ে শত শত গুণ বেশি দুর্বল।'
        }
      ]
    }
  },
  {
    id: 'trappist-1h',
    type: 'Exoplanet',
    name: {
      en: 'TRAPPIST-1h',
      hi: 'ट्रैपिस्ट-1एच',
      bn: 'ট্রাপিস্ট-১এইচ'
    },
    description: {
      en: 'The farthest and smallest planet in the TRAPPIST-1 system, an extremely cold world located well outside the habitable zone.',
      hi: 'ट्रैपिस्ट-1 प्रणाली में सबसे दूर और सबसे छोटा ग्रह, जो रहने योग्य क्षेत्र के बाहर स्थित एक अत्यंत ठंडी दुनिया है।',
      bn: 'ট্রাপিস্ট-১ সৌরজগতের সবচেয়ে দূরবর্তী এবং সবচেয়ে ছোট গ্রহ, যা বাসযোগ্য অঞ্চলের অনেক বাইরে অবস্থিত একটি অত্যন্ত শীতল বিশ্ব।'
    },
    distance: {
      en: '39 Light Years',
      hi: '39 प्रकाश वर्ष',
      bn: '৩৯ আলোকবর্ষ'
    },
    radius: 0.755,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/trappist-1h.jpg',
    details: {
      overview: {
        en: 'TRAPPIST-1h is the seventh and outermost known planet of the TRAPPIST-1 system. It is also the smallest, with a mass less than a third of Earth\'s. Orbiting far beyond the habitable zone, it is a frozen world, likely resembling a large icy moon more than a typical planet.',
        hi: 'ट्रैपिस्ट-1एच ट्रैपिस्ट-1 प्रणाली का सातवां और सबसे बाहरी ज्ञात ग्रह है। यह पृथ्वी के एक तिहाई से भी कम द्रव्यमान वाला सबसे छोटा ग्रह भी है।',
        bn: 'ট্রাপিস্ট-১এইচ হলো ট্রাপিস্ট-১ সৌরজগতের সপ্তম এবং সবচেয়ে বাইরের দিকের গ্রহ। এটি এই সিস্টেমের সবচেয়ে ছোট গ্রহও বটে, যার ভর পৃথিবীর তিনভাগের একভাগের চেয়েও কম। বাসযোগ্য অঞ্চলের অনেক দূরে অবস্থিত হওয়ায় এটি পুরোপুরি বরফে ঢাকা, যা দেখতে সাধারণ কোনো গ্রহের চেয়ে বরফ আচ্ছাদিত বিশাল কোনো উপগ্রহের মতোই মনে হয়।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.33 Earths',
          hi: 'लगभग 0.33 पृथ्वी',
          bn: 'প্রায় ০.৩৩ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 9,620 km (0.755 Earths)',
          hi: 'लगभग 9,620 किमी (0.755 पृथ्वी)',
          bn: 'প্রায় ৯,৬২০ কি.মি. (পৃথিবীর ০.৭৫৫ গুণ)'
        },
        gravity: {
          en: 'About 57% of Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग 57%',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় ৫৭%'
        }
      },
      atmosphere: {
        en: 'Expected to have no significant atmosphere, or perhaps a very thin exosphere, due to its low gravity and extreme cold.',
        hi: 'इसके कम गुरुत्वाकर्षण और अत्यधिक ठंड के कारण कोई महत्वपूर्ण वायुमंडल नहीं होने की उम्मीद है, या शायद एक बहुत पतला एक्सोस्फीयर।',
        bn: 'এর অত্যন্ত কম মধ্যাকর্ষণ এবং প্রচণ্ড ঠান্ডার কারণে এতে কোনো উল্লেখযোগ্য বায়ুমণ্ডল থাকার সম্ভাবনা নেই, তবে খুব পাতলা কোনো এক্সোস্ফিয়ার থাকতে পারে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 18.8 Earth days. Like the others, it is likely tidally locked.',
        hi: 'हर 18.8 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। दूसरों की तरह, इसके टाइडली लॉक्ड होने की संभावना है।',
        bn: 'এটি ১৮.৮ দিনে নক্ষত্রকে একবার প্রদক্ষিণ করে। সৌরজগতের অন্যান্য গ্রহের মতোই এটিও সম্ভবত টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Most likely completely frozen, covered in a global shell of ice.',
        hi: 'सबसे अधिक संभावना पूरी तरह से जमी हुई है, जो बर्फ के वैश्विक आवरण से ढकी है।',
        bn: 'খুব সম্ভবত এটি সম্পূর্ণভাবে বরফে ঢাকা, যার পুরো পৃষ্ঠটিই একটি বিশাল বরফের খোলস দিয়ে মোড়ানো।'
      },
      exploration: {
        en: 'Its existence was confirmed in 2017 after further analysis of data from the Spitzer Space Telescope and ground observatories.',
        hi: '2017 में स्पिट्जर स्पेस टेलीस्कोप और ग्राउंड वेधशालाओं से डेटा के आगे के विश्लेषण के बाद इसके अस्तित्व की पुष्टि की गई थी।',
        bn: 'স্পিৎজার স্পেস টেলিস্কোপ এবং ভূপৃষ্ঠের অবজারভেটরির ডেটা আরও গভীরভাবে বিশ্লেষণ করার পর ২০১৭ সালে এর অস্তিত্ব নিশ্চিত করা হয়।'
      },
      didYouKnow: [
        {
          en: 'Even though it is the farthest planet in its system, TRAPPIST-1h is still closer to its star than Mercury is to our Sun.',
          hi: 'भले ही यह अपने सिस्टम का सबसे दूर का ग्रह है, ट्रैपिस्ट-1एच अभी भी बुध की तुलना में अपने तारे के करीब है जो हमारे सूर्य के करीब है।',
          bn: 'সৌরজগতের সবচেয়ে দূরের গ্রহ হওয়া সত্ত্বেও, আমাদের সূর্য থেকে বুধ (Mercury) গ্রহের যে দূরত্ব, তার চেয়েও ট্রাপিস্ট-১এইচ এর নক্ষত্রের দূরত্ব অনেক কম!'
        },
        {
          en: 'Because of its small size and low temperature, TRAPPIST-1h receives similar amounts of energy as the dwarf planet Ceres in our Solar System.',
          hi: 'अपने छोटे आकार और कम तापमान के कारण, ट्रैपिस्ट-1एच को हमारे सौर मंडल में बौने ग्रह सेरेस के समान ऊर्जा प्राप्त होती है।',
          bn: 'এর ছোট আকার এবং প্রচণ্ড কম তাপমাত্রার কারণে, আমাদের সৌরজগতের বামন গ্রহ সেরেস (Ceres) যে পরিমাণ শক্তি পায়, ট্রাপিস্ট-১এইচ ঠিক ততটুকুই শক্তি গ্রহণ করে।'
        }
      ]
    }
  },
  {
    id: 'proxima-centauri-d',
    type: 'Exoplanet',
    name: {
      en: 'Proxima Centauri d',
      hi: 'प्रॉक्सिमा सेंटॉरी डी',
      bn: 'প্রক্সিমা সেন্টোরি ডি'
    },
    description: {
      en: 'A sub-Earth exoplanet orbiting extremely close to Proxima Centauri, making it one of the lightest known exoplanets.',
      hi: 'प्रॉक्सिमा सेंटॉरी के बेहद करीब परिक्रमा करने वाला एक उप-पृथ्वी एक्सोप्लैनेट, जो इसे सबसे हल्के ज्ञात एक्सोप्लैनेट में से एक बनाता है।',
      bn: 'এটি প্রক্সিমা সেন্টোরি নক্ষত্রের খুব কাছাকাছি আবর্তনকারী একটি সাব-আর্থ (পৃথিবীর চেয়ে ছোট) এক্সোপ্ল্যানেট, যা এখন পর্যন্ত আবিষ্কৃত সবচেয়ে হালকা এক্সোপ্ল্যানেটগুলোর মধ্যে একটি।'
    },
    distance: {
      en: '4.24 Light Years',
      hi: '4.24 प्रकाश वर्ष',
      bn: '৪.২৪ আলোকবর্ষ'
    },
    radius: 0.81,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/proxima-centauri-d.jpg',
    details: {
      overview: {
        en: 'Proxima Centauri d is the innermost and smallest known planet in the Proxima Centauri system. Orbiting its star at an incredibly close distance, it zips around in just a few days. Its discovery highlighted the ability of modern instruments to detect incredibly light planets.',
        hi: 'प्रॉक्सिमा सेंटॉरी डी प्रॉक्सिमा सेंटॉरी प्रणाली में सबसे भीतरी और सबसे छोटा ज्ञात ग्रह है। अपने तारे की अविश्वसनीय रूप से करीब से परिक्रमा करते हुए, यह कुछ ही दिनों में चक्कर लगाता है।',
        bn: 'প্রক্সিমা সেন্টোরি ডি হলো প্রক্সিমা সেন্টোরি সৌরজগতের সবচেয়ে ভেতরের এবং সবচেয়ে ছোট গ্রহ। এটি নক্ষত্রের এতটাই কাছে থেকে প্রদক্ষিণ করে যে, মাত্র কয়েক দিনের মধ্যেই এর এক বছর পূর্ণ হয়ে যায়। এর আবিষ্কার প্রমাণ করে যে, আধুনিক যন্ত্রপাতি দিয়ে এখন অত্যন্ত হালকা ভরের গ্রহও শনাক্ত করা সম্ভব।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.26 Earths (Minimum)',
          hi: 'लगभग 0.26 पृथ्वी (न्यूनतम)',
          bn: 'প্রায় ০.২৬ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~10,300 km (0.81 Earths)',
          hi: 'अनुमानित ~10,300 किमी (0.81 पृथ्वी)',
          bn: 'আনুমানিক ১০,৩০০ কি.মি. (পৃথিবীর ০.৮১ গুণ)'
        },
        gravity: {
          en: 'Roughly 40% of Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण का लगभग 40%',
          bn: 'পৃথিবীর মধ্যাকর্ষণের প্রায় ৪০%'
        }
      },
      atmosphere: {
        en: 'Because it orbits so close to its active red dwarf star, any primordial atmosphere was likely stripped away long ago by stellar flares and winds.',
        hi: 'चूंकि यह अपने सक्रिय लाल बौने तारे के बहुत करीब परिक्रमा करता है, कोई भी आदिम वायुमंडल बहुत पहले तारकीय ज्वाला और हवाओं से छिन्न-भिन्न हो गया था।',
        bn: 'যেহেতু এটি একটি অত্যন্ত সক্রিয় লাল বামন নক্ষত্রের এত কাছাকাছি আবর্তন করে, তাই ধারণা করা হয় যে নক্ষত্রের তীব্র সৌরঝড় এবং বিকিরণের কারণে এর আদিম বায়ুমণ্ডল অনেক আগেই বিলুপ্ত হয়ে গেছে।'
      },
      orbitAndRotation: {
        en: 'Orbits its star in just 5.1 Earth days. It is certainly tidally locked, meaning one side always faces the star.',
        hi: 'सिर्फ 5.1 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। यह निश्चित रूप से टाइडली लॉक्ड है, जिसका अर्थ है कि एक तरफ हमेशा तारे का सामना करता है।',
        bn: 'এটি মাত্র ৫.১ দিনেই এর নক্ষত্রকে প্রদক্ষিণ করে। এটি নিশ্চিতভাবেই টাইডালি লকড (Tidally Locked), যার মানে এর এক পাশ সবসময় নক্ষত্রের দিকে মুখ করে থাকে।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'Likely a barren, scorched rocky surface on the day side, and a freezing wasteland on the night side.',
        hi: 'दिन की ओर संभवतः बंजर, झुलसी हुई चट्टानी सतह, और रात की ओर एक ठंडी बंजर भूमि।',
        bn: 'এর দিন-অংশটি সম্ভবত শুষ্ক ও দগ্ধ একটি পাথুরে পৃষ্ঠ এবং রাতের অংশটি একটি হাড় কাঁপানো বরফের মরুভূমি।'
      },
      exploration: {
        en: 'Discovered in 2022 using the ESPRESSO instrument on the Very Large Telescope (VLT) in Chile by measuring tiny wobbles in the star\'s motion.',
        hi: '2022 में चिली में वेरी लार्ज टेलीस्कोप (VLT) पर ESPRESSO उपकरण का उपयोग करके तारे की गति में छोटे डगमगाहट को मापकर खोजा गया।',
        bn: '২০২২ সালে চিলির ভেরি লার্জ টেলিস্কোপে (VLT) থাকা ESPRESSO যন্ত্রের সাহায্যে নক্ষত্রের গতির সামান্য পরিবর্তন মেপে এটি আবিষ্কার করা হয়।'
      },
      didYouKnow: [
        {
          en: 'The radial velocity signal (the "wobble") caused by Proxima d on its star is only about 40 centimeters per second—a walking pace!',
          hi: 'प्रॉक्सिमा डी द्वारा अपने तारे पर उत्पन्न रेडियल वेग संकेत ("डगमगाहट") केवल लगभग 40 सेंटीमीटर प्रति सेकंड है - एक चलने की गति!',
          bn: 'নক্ষত্রের ওপর প্রক্সিমা ডি এর মহাকর্ষের কারণে যে সামান্য "দোলনের" সৃষ্টি হয়, তার গতি প্রতি সেকেন্ডে মাত্র ৪০ সেন্টিমিটার—যা একজন মানুষের হাঁটার গতির সমান!'
        },
        {
          en: 'It is one of the lightest exoplanets ever detected using the radial velocity method.',
          hi: 'यह रेडियल वेग विधि का उपयोग करके अब तक खोजे गए सबसे हल्के एक्सोप्लैनेट में से एक है।',
          bn: 'রেডিয়াল ভেলোসিটি বা ডপলার পদ্ধতির মাধ্যমে শনাক্ত করা সবচেয়ে হালকা এক্সোপ্ল্যানেটগুলোর মধ্যে এটি একটি।'
        }
      ]
    }
  },
  {
    id: '55-cancri',
    type: 'Star',
    name: {
      en: '55 Cancri',
      hi: '55 कैनक्री',
      bn: '৫৫ ক্যানক্রি'
    },
    description: {
      en: 'A Sun-like star hosting a system of five known planets, including a famous "super-Earth" that might be rich in carbon.',
      hi: 'एक सूर्य जैसा तारा जो पाँच ज्ञात ग्रहों की एक प्रणाली की मेजबानी करता है, जिसमें एक प्रसिद्ध "सुपर-अर्थ" भी शामिल है जो कार्बन से भरपूर हो सकता है।',
      bn: 'একটি সূর্যের মতো নক্ষত্র, যার চারপাশে ৫টি গ্রহ আবর্তন করছে। এর মধ্যে একটি বিখ্যাত "সুপার-আর্থ" রয়েছে, যা সম্ভবত প্রচুর কার্বনে ভরপুর।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 20.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri.jpg',
    details: {
      overview: {
        en: '55 Cancri, also officially named Copernicus, is a yellow dwarf star very much like our own Sun. It is the central star of a planetary system that currently has five known exoplanets, making it one of the more populated systems discovered so far.',
        hi: '55 कैनक्री, जिसे आधिकारिक तौर पर कोपरनिकस नाम दिया गया है, एक पीला बौना तारा है जो बिल्कुल हमारे सूर्य जैसा है। यह एक ग्रह प्रणाली का केंद्रीय तारा है जिसमें वर्तमान में पांच ज्ञात एक्सोप्लैनेट हैं।',
        bn: '৫৫ ক্যানক্রি (অফিসিয়াল নাম কোপারনিকাস) হলো আমাদের সূর্যের মতোই একটি হলুদ বামন নক্ষত্র। এটি এমন একটি গ্রহজগতের কেন্দ্র, যেখানে এখন পর্যন্ত পাঁচটি এক্সোপ্ল্যানেট আবিষ্কৃত হয়েছে, যা একে সবচেয়ে জনবহুল সৌরজগতগুলোর মধ্যে একটি করে তুলেছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.95 Solar Masses',
          hi: 'लगभग 0.95 सौर द्रव्यमान',
          bn: 'প্রায় ০.৯৫ গুণ (সূর্যের তুলনায়)'
        },
        diameter: {
          en: 'Approx. 1.3 million km (0.94 Solar Radii)',
          hi: 'लगभग 1.3 मिलियन किमी (0.94 सौर रेडी)',
          bn: 'প্রায় ১৩ লক্ষ কি.মি. (সূর্যের ০.৯৪ গুণ)'
        },
        gravity: {
          en: 'Similar to our Sun',
          hi: 'हमारे सूर्य के समान',
          bn: 'আমাদের সূর্যের মতোই'
        }
      },
      atmosphere: {
        en: 'Being a star, it has no planetary atmosphere, but rather a glowing photosphere, chromosphere, and a hot corona.',
        hi: 'एक तारा होने के नाते, इसका कोई ग्रहीय वायुमंडल नहीं है, बल्कि एक चमकता हुआ फोटोस्फीयर, क्रोमोस्फीयर और एक गर्म कोरोना है।',
        bn: 'নক্ষত্র হওয়ায় এর কোনো গ্রহের মতো বায়ুমণ্ডল নেই, বরং এর রয়েছে একটি জ্বলন্ত ফটোস্ফিয়ার, ক্রোমোস্ফিয়ার এবং একটি উত্তপ্ত করোনা।'
      },
      orbitAndRotation: {
        en: 'It rotates on its axis once every 42 days, slightly slower than our Sun.',
        hi: 'यह हर 42 दिनों में एक बार अपनी धुरी पर घूमता है, जो हमारे सूर्य से थोड़ा धीमा है।',
        bn: 'এটি প্রতি ৪২ দিনে একবার নিজের অক্ষে ঘোরে, যা আমাদের সূর্যের ঘূর্ণনের চেয়ে কিছুটা ধীর।'
      },
      moons: {
        en: '5 known planets (no moons of its own)',
        hi: '5 ज्ञात ग्रह',
        bn: '৫টি গ্রহ (এর কোনো উপগ্রহ নেই)'
      },
      surface: {
        en: 'A searing surface of plasma at roughly 5,196 °C (5,469 K).',
        hi: 'लगभग 5,196 °C (5,469 K) पर प्लाज्मा की एक जलती हुई सतह।',
        bn: 'এর পৃষ্ঠটি প্লাজমা দিয়ে তৈরি, যার তাপমাত্রা প্রায় ৫,১৯৬ °C (৫,৪৬৯ কেলভিন)।'
      },
      exploration: {
        en: 'Its first planet was discovered in 1996, making it one of the earliest known multi-planet systems.',
        hi: 'इसका पहला ग्रह 1996 में खोजा गया था, जिससे यह शुरुआती ज्ञात बहु-ग्रह प्रणालियों में से एक बन गया।',
        bn: '১৯৯৬ সালে এর প্রথম গ্রহ আবিষ্কৃত হয়, যা একে মানবজাতির জানা সবচেয়ে পুরোনো বহুমুখী গ্রহজগতের একটিতে পরিণত করে।'
      },
      didYouKnow: [
        {
          en: '55 Cancri forms a binary system with a distant red dwarf companion star, but its planets orbit only the primary Sun-like star.',
          hi: '55 कैनक्री एक दूर के लाल बौने साथी तारे के साथ एक द्विआधारी प्रणाली बनाता है, लेकिन इसके ग्रह केवल प्राथमिक सूर्य-जैसे तारे की परिक्रमा करते हैं।',
          bn: '৫৫ ক্যানক্রি আসলে একটি বাইনারি নক্ষত্রমণ্ডলীর অংশ। এর একটি দূরবর্তী লাল বামন সঙ্গী নক্ষত্রও রয়েছে, তবে এর সবকটি গ্রহ কেবল প্রধান নক্ষত্রটিকেই প্রদক্ষিণ করে।'
        },
        {
          en: 'In 2015, the IAU officially named this star Copernicus in honor of the astronomer Nicolaus Copernicus.',
          hi: '2015 में, IAU ने आधिकारिक तौर पर इस तारे का नाम खगोलशास्त्री निकोलस कोपरनिकस के सम्मान में कोपरनिकस रखा।',
          bn: 'বিখ্যাত জ্যোতির্বিজ্ঞানী নিকোলাস কোপারনিকাসের সম্মানার্থে, ২০১৫ সালে ইন্টারন্যাশনাল অ্যাস্ট্রোনমিক্যাল ইউনিয়ন (IAU) আনুষ্ঠানিকভাবে এই নক্ষত্রের নাম রাখে "কোপারনিকাস"।'
        }
      ]
    }
  },
  {
    id: '55-cancri-e',
    type: 'Exoplanet',
    name: {
      en: '55 Cancri e',
      hi: '55 कैनक्री ई',
      bn: '৫৫ ক্যানক্রি ই'
    },
    description: {
      en: 'A super-Earth known as the "Diamond Planet," orbiting its star so closely that its surface is an ocean of magma.',
      hi: 'एक सुपर-अर्थ जिसे "डायमंड प्लैनेट" के रूप में जाना जाता है, जो अपने तारे की इतनी बारीकी से परिक्रमा करता है कि इसकी सतह मैग्मा का एक महासागर है।',
      bn: '"হীরকের গ্রহ" নামে পরিচিত একটি সুপার-আর্থ, যা এর নক্ষত্রের এত কাছাকাছি আবর্তন করে যে এর পুরো পৃষ্ঠটিই ম্যাগমার এক বিশাল মহাসাগর।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 1.875,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri-e.jpg',
    details: {
      overview: {
        en: '55 Cancri e, officially named Janssen, is a blistering "super-Earth" that orbits its star in less than a day. Its incredibly high temperatures and dense composition led to early theories that its interior could be largely composed of diamond. Today, we know it is a hellish world, likely covered in oceans of lava.',
        hi: '55 कैनक्री ई, जिसे आधिकारिक तौर पर जानसेन नाम दिया गया है, एक धधकती हुई "सुपर-अर्थ" है जो एक दिन से भी कम समय में अपने तारे की परिक्रमा करती है।',
        bn: '৫৫ ক্যানক্রি ই, যার অফিসিয়াল নাম জ্যানসেন (Janssen), হলো একটি প্রচণ্ড উত্তপ্ত "সুপার-আর্থ"। এটি এক দিনেরও কম সময়ে এর নক্ষত্রকে প্রদক্ষিণ করে। এর প্রচণ্ড তাপমাত্রা এবং ঘনত্বের কারণে বিজ্ঞানীরা একসময় ধারণা করতেন যে, গ্রহটির ভেতরের বেশিরভাগ অংশই সম্ভবত হীরা দিয়ে তৈরি। বর্তমানে এটি একটি নরকতুল্য গ্রহ হিসেবে পরিচিত, যার পৃষ্ঠ হয়তো পুরোটাই ফুটন্ত লাভার মহাসাগরে আবৃত।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 7.99 Earths',
          hi: 'लगभग 7.99 पृथ्वी',
          bn: 'প্রায় ৭.৯৯ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Approx. 23,890 km (1.875 Earths)',
          hi: 'लगभग 23,890 किमी (1.875 पृथ्वी)',
          bn: 'প্রায় ২৩,৮৯০ কি.মি. (পৃথিবীর ১.৮৭৫ গুণ)'
        },
        gravity: {
          en: 'More than twice Earth\'s gravity',
          hi: 'पृथ्वी के गुरुत्वाकर्षण से दोगुने से अधिक',
          bn: 'পৃথিবীর মধ্যাকর্ষণের দ্বিগুণেরও বেশি'
        }
      },
      atmosphere: {
        en: 'Recent James Webb observations suggest it might have a thin atmosphere composed of carbon monoxide or carbon dioxide, bubbling up from its magma ocean.',
        hi: 'हाल ही में जेम्स वेब के अवलोकनों से पता चलता है कि इसमें कार्बन मोनोऑक्साइड या कार्बन डाइऑक्साइड से बना एक पतला वायुमंडल हो सकता है, जो इसके मैग्मा महासागर से उबलता है।',
        bn: 'জেমস ওয়েবের সাম্প্রতিক পর্যবেক্ষণে ধারণা করা হয় যে, এর ম্যাগমা মহাসাগর থেকে নির্গত কার্বন মনোক্সাইড বা কার্বন ডাই-অক্সাইডের তৈরি একটি পাতলা বায়ুমণ্ডল হয়তো এতে থাকতে পারে।'
      },
      orbitAndRotation: {
        en: 'Takes only 18 hours to orbit its star. It is completely tidally locked.',
        hi: 'अपने तारे की परिक्रमा करने में केवल 18 घंटे लगते हैं। यह पूरी तरह से टाइडली लॉक्ड है।',
        bn: 'এর এক বছর পূর্ণ হতে মাত্র ১৮ ঘণ্টা সময় লাগে! এটি সম্পূর্ণভাবে টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None known',
        hi: 'कोई ज्ञात नहीं',
        bn: 'অজানা'
      },
      surface: {
        en: 'A global ocean of boiling lava, with temperatures exceeding 2,400 °C (4,300 °F) on the dayside.',
        hi: 'उबलते लावा का एक वैश्विक महासागर, दिन के समय तापमान 2,400 °C (4,300 °F) से अधिक हो जाता है।',
        bn: 'এর দিন-অংশটি ফুটন্ত লাভার একটি বিশাল মহাসাগর, যার তাপমাত্রা ২,৪০০ °C (৪,৩০০ °F) এরও বেশি!'
      },
      exploration: {
        en: 'Discovered in 2004 via the radial velocity method, and later confirmed via transits in 2011, making it one of the most studied exoplanets.',
        hi: '2004 में रेडियल वेग विधि के माध्यम से खोजा गया, और बाद में 2011 में पारगमन के माध्यम से पुष्टि की गई, जिससे यह सबसे अधिक अध्ययन किए गए एक्सोप्लैनेट में से एक बन गया।',
        bn: '২০০৪ সালে ডপলার পদ্ধতির মাধ্যমে এটি আবিষ্কৃত হয় এবং ২০১১ সালে ট্রানজিট পদ্ধতিতে তা নিশ্চিত করা হয়। এটি এখন পর্যন্ত সবচেয়ে বেশি গবেষণা করা এক্সোপ্ল্যানেটগুলোর মধ্যে একটি।'
      },
      didYouKnow: [
        {
          en: 'The theory that 55 Cancri e is a "diamond planet" arose because early data suggested the host star was extremely rich in carbon, though later data revised this.',
          hi: 'यह सिद्धांत कि 55 कैनक्री ई एक "हीरे का ग्रह" है, इसलिए उत्पन्न हुआ क्योंकि शुरुआती डेटा ने सुझाव दिया था कि मेजबान तारा कार्बन से अत्यधिक समृद्ध था, हालांकि बाद के डेटा ने इसे संशोधित किया।',
          bn: '৫৫ ক্যানক্রি ই কে "হীরকের গ্রহ" বলা হতো, কারণ প্রাথমিক ডেটা থেকে বিজ্ঞানীরা ধারণা করেছিলেন যে এর নক্ষত্রটিতে প্রচুর কার্বন রয়েছে, যদিও পরবর্তীতে এই ধারণা কিছুটা পরিবর্তন করা হয়।'
        },
        {
          en: 'It is so close to its star that it literally orbits through the outermost, hottest parts of the star\'s atmosphere (the corona).',
          hi: 'यह अपने तारे के इतना करीब है कि यह सचमुच तारे के वायुमंडल (कोरोना) के सबसे बाहरी, सबसे गर्म हिस्सों के माध्यम से परिक्रमा करता है।',
          bn: 'এটি এর নক্ষত্রের এতই কাছাকাছি রয়েছে যে, আবর্তনের সময় এটি আক্ষরিক অর্থেই নক্ষত্রের বায়ুমণ্ডলের (করোনা) সবচেয়ে বাইরের উত্তপ্ত অংশের ভেতর দিয়ে যাতায়াত করে।'
        }
      ]
    }
  },
  {
    id: '55-cancri-b',
    type: 'Exoplanet',
    name: {
      en: '55 Cancri b',
      hi: '55 कैनक्री बी',
      bn: '৫৫ ক্যানক্রি বি'
    },
    description: {
      en: 'A "hot Jupiter" gas giant orbiting its star closely, discovered as the first planet in this famous system.',
      hi: 'एक "गर्म बृहस्पति" गैस विशालकाय जो अपने तारे की निकटता से परिक्रमा करता है, जिसे इस प्रसिद्ध प्रणाली में पहले ग्रह के रूप में खोजा गया था।',
      bn: 'একটি "হট জুপিটার" (উত্তপ্ত বৃহস্পতি) গ্যাস জায়ান্ট, যা এর নক্ষত্রের খুব কাছাকাছি অবস্থান করছে। এটিই এই বিখ্যাত সৌরজগতের আবিষ্কৃত প্রথম গ্রহ।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 13.9,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri-b.jpg',
    details: {
      overview: {
        en: '55 Cancri b, officially named Galileo, is a hot gas giant. It was the first planet discovered in the 55 Cancri system back in 1996. Because it orbits so close to its star, its atmosphere is intensely heated, swelling the planet\'s size and creating violent global weather patterns.',
        hi: '55 कैनक्री बी, जिसे आधिकारिक तौर पर गैलीलियो नाम दिया गया है, एक गर्म गैस विशालकाय है। यह 1996 में 55 कैनक्री प्रणाली में खोजा गया पहला ग्रह था।',
        bn: '৫৫ ক্যানক্রি বি, যার অফিসিয়াল নাম গ্যালিলিও (Galileo), হলো একটি অত্যন্ত উত্তপ্ত গ্যাস জায়ান্ট বা গ্যাসের দানব। ১৯৯৬ সালে এটিই প্রথম ৫৫ ক্যানক্রি সৌরজগতে আবিষ্কৃত হয়েছিল। নক্ষত্রের এত কাছাকাছি থাকার কারণে এর বায়ুমণ্ডল প্রচণ্ড উত্তপ্ত হয়ে ওঠে, যা গ্রহটির আকারকে ফুলিয়ে দেয় এবং গ্রহজুড়ে ভয়াবহ আবহাওয়ার সৃষ্টি করে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 263 Earths (0.83 Jupiters)',
          hi: 'लगभग 263 पृथ्वी (0.83 बृहस्पति)',
          bn: 'প্রায় ২৬৩ গুণ (পৃথিবীর তুলনায়), অথবা ০.৮৩ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~165,000 km (13.9 Earths)',
          hi: 'अनुमानित ~165,000 किमी (13.9 पृथ्वी)',
          bn: 'আনুমানিক ১,৬৫,০০০ কি.মি. (পৃথিবীর ১৩.৯ গুণ)'
        },
        gravity: {
          en: 'Stronger than Earth, but low for its size due to atmospheric expansion',
          hi: 'पृथ्वी की तुलना में अधिक मजबूत, लेकिन वायुमंडलीय विस्तार के कारण इसके आकार के लिए कम',
          bn: 'পৃথিবীর চেয়ে শক্তিশালী, তবে প্রসারিত বায়ুমণ্ডলের কারণে এর বিশাল আকারের তুলনায় কিছুটা কম।'
        }
      },
      atmosphere: {
        en: 'A deep, thick atmosphere composed mostly of hydrogen and helium, likely featuring massive storms and high-speed winds driven by stellar heating.',
        hi: 'ज्यादातर हाइड्रोजन और हीलियम से बना एक गहरा, घना वायुमंडल, जिसमें तारकीय ताप द्वारा संचालित बड़े पैमाने पर तूफान और तेज गति वाली हवाएं होने की संभावना है।',
        bn: 'হাইড্রোজেন এবং হিলিয়াম দিয়ে তৈরি এর একটি গভীর ও ঘন বায়ুমণ্ডল রয়েছে, যেখানে নক্ষত্রের প্রচণ্ড তাপের কারণে সম্ভবত বিশাল ঘূর্ণিঝড় এবং অতি-উচ্চ গতির বাতাসের সৃষ্টি হয়।'
      },
      orbitAndRotation: {
        en: 'Orbits its star every 14.6 Earth days. It is likely tidally locked.',
        hi: 'हर 14.6 पृथ्वी दिनों में अपने तारे की परिक्रमा करता है। इसके टाइडली लॉक्ड होने की संभावना है।',
        bn: 'মাত্র ১৪.৬ দিনেই এটি এর নক্ষত্রকে একবার প্রদক্ষিণ করে। সম্ভবত এটিও টাইডালি লকড (Tidally Locked)।'
      },
      moons: {
        en: 'None discovered (difficult to maintain stable moons so close to a star)',
        hi: 'कोई खोज नहीं की गई (एक तारे के इतने करीब स्थिर चंद्रमाओं को बनाए रखना मुश्किल है)',
        bn: 'কোনো উপগ্রহ নেই (নক্ষত্রের এত কাছাকাছি কোনো উপগ্রহের টিকে থাকা খুবই কঠিন)।'
      },
      surface: {
        en: 'As a gas giant, it has no solid surface. Spacecraft would simply sink into denser and hotter layers of gas until crushed by extreme pressure.',
        hi: 'एक गैस विशालकाय के रूप में, इसकी कोई ठोस सतह नहीं है। अंतरिक्ष यान बस अत्यधिक दबाव से कुचल जाने तक गैस की सघन और गर्म परतों में डूब जाएगा।',
        bn: 'একটি গ্যাস জায়ান্ট হওয়ায় এর কোনো কঠিন পৃষ্ঠ নেই। কোনো মহাকাশযান এর ভেতরে প্রবেশ করলে তা ক্রমশ আরও ঘন ও উত্তপ্ত গ্যাসে তলিয়ে যাবে এবং একপর্যায়ে প্রচণ্ড চাপে চূর্ণ-বিচূর্ণ হয়ে যাবে।'
      },
      exploration: {
        en: 'Discovered in 1996 by astronomers using the radial velocity method, paving the way for the discovery of the rest of the 55 Cancri system.',
        hi: '1996 में खगोलविदों द्वारा रेडियल वेग विधि का उपयोग करके खोजा गया, जिसने बाकी 55 कैनक्री प्रणाली की खोज का मार्ग प्रशस्त किया।',
        bn: '১৯৯৬ সালে ডপলার পদ্ধতির মাধ্যমে জ্যোতির্বিজ্ঞানীরা এটি আবিষ্কার করেন, যা পরবর্তীতে ৫৫ ক্যানক্রি সৌরজগতের বাকি গ্রহগুলো আবিষ্কারের পথ প্রশস্ত করেছিল।'
      },
      didYouKnow: [
        {
          en: 'The planet is officially named Galileo, honoring the famous Italian astronomer Galileo Galilei.',
          hi: 'प्रसिद्ध इतालवी खगोलशास्त्री गैलीलियो गैलीली के सम्मान में ग्रह का आधिकारिक नाम गैलीलियो रखा गया है।',
          bn: 'বিখ্যাত ইতালীয় জ্যোতির্বিজ্ঞানী গ্যালিলিও গ্যালিলি-র প্রতি সম্মান জানিয়ে এই গ্রহের অফিসিয়াল নাম রাখা হয়েছে "গ্যালিলিও"।'
        },
        {
          en: 'Because it is a "hot Jupiter," it is constantly bombarded with intense radiation, which may be slowly blowing its atmosphere away into space.',
          hi: 'चूंकि यह एक "गर्म बृहस्पति" है, इस पर लगातार तीव्र विकिरण की बमबारी होती है, जो धीरे-धीरे इसके वायुमंडल को अंतरिक्ष में उड़ा सकती है।',
          bn: 'একটি "হট জুপিটার" হওয়ার কারণে এটি সারাক্ষণ নক্ষত্রের তীব্র বিকিরণের শিকার হয়, যা সম্ভবত ধীরে ধীরে এর বায়ুমণ্ডলকে মহাকাশে উড়িয়ে নিয়ে যাচ্ছে।'
        }
      ]
    }
  },
  {
    id: '55-cancri-c',
    type: 'Exoplanet',
    name: {
      en: '55 Cancri c',
      hi: '55 कैनक्री सी',
      bn: '৫৫ ক্যানক্রি সি'
    },
    description: {
      en: 'A Saturn-mass gas giant in a moderately close orbit, formally named Brahe.',
      hi: 'एक मध्यम करीबी कक्षा में शनि-द्रव्यमान गैस विशालकाय, जिसे औपचारिक रूप से ब्राहे नाम दिया गया है।',
      bn: 'মাঝারি দূরত্বের কক্ষপথে থাকা শনি গ্রহের ভরের সমান একটি গ্যাস জায়ান্ট, যার আনুষ্ঠানিক নাম ব্রাহে (Brahe)।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 10.6,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri-c.jpg',
    details: {
      overview: {
        en: '55 Cancri c, officially named Brahe, is a gas giant with a mass comparable to Saturn. It is the third planet from its star and has an orbit that takes about 44 days to complete.',
        hi: '55 कैनक्री सी, जिसे आधिकारिक तौर पर ब्राहे नाम दिया गया है, शनि के बराबर द्रव्यमान वाला एक गैस विशालकाय है। यह अपने तारे से तीसरा ग्रह है और इसकी एक कक्षा है जिसे पूरा करने में लगभग 44 दिन लगते हैं।',
        bn: '৫৫ ক্যানক্রি সি, যার আনুষ্ঠানিক নাম ব্রাহে (Brahe), শনি গ্রহের ভরের কাছাকাছি একটি গ্যাস জায়ান্ট। এটি এর নক্ষত্র থেকে দূরত্বের দিক দিয়ে তৃতীয় এবং মাত্র ৪৪ দিনে নক্ষত্রটিকে একবার প্রদক্ষিণ করে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 54 Earths (0.17 Jupiters)',
          hi: 'लगभग 54 पृथ्वी (0.17 बृहस्पति)',
          bn: 'প্রায় ৫৪ গুণ (পৃথিবীর তুলনায়), অথবা ০.১৭ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~135,000 km (10.6 Earths)',
          hi: 'अनुमानित ~135,000 किमी (10.6 पृथ्वी)',
          bn: 'আনুমানিক ১,৩৫,০০০ কি.মি. (পৃথিবীর ১০.৬ গুণ)'
        },
        gravity: {
          en: 'Likely similar to Saturn\'s',
          hi: 'संभवतः शनि के समान',
          bn: 'সম্ভবত শনি গ্রহের কাছাকাছি'
        }
      },
      atmosphere: {
        en: 'A thick, gaseous envelope primarily composed of hydrogen and helium.',
        hi: 'मुख्य रूप से हाइड्रोजन और हीलियम से बना एक मोटा, गैसीय लिफाफा।',
        bn: 'মূলত হাইড্রোজেন ও হিলিয়াম দিয়ে তৈরি একটি অত্যন্ত পুরু ও গ্যাসীয় বায়ুমণ্ডল।'
      },
      orbitAndRotation: {
        en: 'Completes an orbit in 44.3 Earth days. It has a slightly eccentric (oval-shaped) orbit.',
        hi: '44.3 पृथ्वी दिनों में एक कक्षा पूरी करता है। इसकी कक्षा थोड़ी सनकी (अंडाकार) है।',
        bn: '৪৪.৩ দিনে এর এক বছর পূর্ণ হয়। এর কক্ষপথটি সামান্য ডিম্বাকার (Eccentric)।'
      },
      moons: {
        en: 'Unknown, but theoretically possible',
        hi: 'अज्ञात, लेकिन सैद्धांतिक रूप से संभव',
        bn: 'অজানা, তবে তাত্ত্বিকভাবে উপগ্রহ থাকার সম্ভাবনা রয়েছে।'
      },
      surface: {
        en: 'Lacks a solid surface, being a gas giant.',
        hi: 'एक गैस विशालकाय होने के कारण, इसमें ठोस सतह का अभाव है।',
        bn: 'গ্যাস জায়ান্ট হওয়ায় এর কোনো কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Discovered in 2002 by the California and Carnegie Planet Search team through radial velocity measurements.',
        hi: '2002 में कैलिफ़ोर्निया और कार्नेगी प्लैनेट सर्च टीम द्वारा रेडियल वेग माप के माध्यम से खोजा गया।',
        bn: '২০০২ সালে ক্যালিফোর্নিয়া এবং কার্নেগি প্ল্যানেট সার্চ দলের বিজ্ঞানীরা ডপলার পদ্ধতির মাধ্যমে এটি আবিষ্কার করেন।'
      },
      didYouKnow: [
        {
          en: 'The planet is named after the famous Danish astronomer Tycho Brahe.',
          hi: 'ग्रह का नाम प्रसिद्ध डेनिश खगोलशास्त्री टाइको ब्राहे के नाम पर रखा गया है।',
          bn: 'বিখ্যাত ডেনিশ জ্যোতির্বিজ্ঞানী টাইকো ব্রাহে (Tycho Brahe) এর সম্মানে এই গ্রহের নাম রাখা হয়েছে "ব্রাহে"।'
        },
        {
          en: 'While still close to its star, it doesn\'t experience the extreme "roasting" like the inner planets b and e.',
          hi: 'हालांकि अभी भी अपने तारे के करीब है, यह आंतरिक ग्रहों बी और ई की तरह अत्यधिक "रोस्टिंग" का अनुभव नहीं करता है।',
          bn: 'নক্ষত্রের কাছাকাছি থাকা সত্ত্বেও, ভেতরের গ্রহ b এবং e এর মতো এটি এতটাও পুড়তে থাকে না।'
        }
      ]
    }
  },
  {
    id: '55-cancri-f',
    type: 'Exoplanet',
    name: {
      en: '55 Cancri f',
      hi: '55 कैनक्री एफ',
      bn: '৫৫ ক্যানক্রি এফ'
    },
    description: {
      en: 'A massive gas giant that spends part of its orbit within the habitable zone of its star.',
      hi: 'एक विशाल गैस विशालकाय जो अपनी कक्षा का कुछ हिस्सा अपने तारे के रहने योग्य क्षेत्र में बिताता है।',
      bn: 'একটি সুবিশাল গ্যাস জায়ান্ট বা গ্যাসের দানব, যার কক্ষপথের একটি অংশ এর নক্ষত্রের বাসযোগ্য অঞ্চলের (Habitable Zone) ভেতর দিয়ে গেছে।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 9.2,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri-f.jpg',
    details: {
      overview: {
        en: '55 Cancri f, officially named Harriot, is a gas giant exoplanet. Uniquely for the 55 Cancri system, its orbit places it right within the "habitable zone," where liquid water could theoretically exist on a solid surface.',
        hi: '55 कैनक्री एफ, जिसे आधिकारिक तौर पर हैरियट नाम दिया गया है, एक गैस विशालकाय एक्सोप्लैनेट है। 55 कैनक्री प्रणाली के लिए विशिष्ट रूप से, इसकी कक्षा इसे "रहने योग्य क्षेत्र" के ठीक भीतर रखती है।',
        bn: '৫৫ ক্যানক্রি এফ, যার আনুষ্ঠানিক নাম হ্যারিয়ট (Harriot), হলো একটি গ্যাস জায়ান্ট এক্সোপ্ল্যানেট। ৫৫ ক্যানক্রি সৌরজগতের অন্যান্য গ্রহের তুলনায় এর একটি অনন্য বৈশিষ্ট্য হলো, এটি নক্ষত্রের "বাসযোগ্য অঞ্চলে" অবস্থান করছে, যেখানে তাত্ত্বিকভাবে কঠিন পৃষ্ঠে তরল পানি থাকার সম্ভাবনা থাকে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 45 Earths (0.14 Jupiters)',
          hi: 'लगभग 45 पृथ्वी (0.14 बृहस्पति)',
          bn: 'প্রায় ৪৫ গুণ (পৃথিবীর তুলনায়), অথবা ০.১৪ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~117,000 km (9.2 Earths)',
          hi: 'अनुमानित ~117,000 किमी (9.2 पृथ्वी)',
          bn: 'আনুমানিক ১,১৭,০০০ কি.মি. (পৃথিবীর ৯.২ গুণ)'
        },
        gravity: {
          en: 'Likely close to Earth\'s gravity at the cloud tops',
          hi: 'बादलों के शीर्ष पर पृथ्वी के गुरुत्वाकर्षण के करीब होने की संभावना है',
          bn: 'গ্রহের মেঘের উপরিভাগে এর মহাকর্ষ সম্ভবত পৃথিবীর কাছাকাছি'
        }
      },
      atmosphere: {
        en: 'Primarily hydrogen and helium. If it has any rocky moons with thick atmospheres, they could potentially host life.',
        hi: 'मुख्य रूप से हाइड्रोजन और हीलियम। यदि इसमें घने वायुमंडल वाले कोई चट्टानी चंद्रमा हैं, तो वे संभावित रूप से जीवन की मेजबानी कर सकते हैं।',
        bn: 'প্রাথমিকভাবে হাইড্রোজেন এবং হিলিয়াম দিয়ে গঠিত। যদি এর চারপাশে পৃথিবীর মতো কোনো পাথুরে উপগ্রহ থাকে, তবে সেখানে প্রাণের অস্তিত্ব থাকার একটি তাত্ত্বিক সম্ভাবনা রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Takes about 260 days to complete one orbit around its star.',
        hi: 'अपने तारे के चारों ओर एक कक्षा पूरी करने में लगभग 260 दिन लगते हैं।',
        bn: 'এর নক্ষত্রকে একবার প্রদক্ষিণ করতে এর প্রায় ২৬০ দিন সময় লাগে।'
      },
      moons: {
        en: 'None discovered yet, but habitable exomoons are a topic of much speculation.',
        hi: 'अभी तक कोई खोजा नहीं गया है, लेकिन रहने योग्य एक्सोमून बहुत अटकलों का विषय है।',
        bn: 'এখন পর্যন্ত কোনো উপগ্রহ আবিষ্কৃত হয়নি, তবে এর বাসযোগ্য উপগ্রহ (Exomoon) নিয়ে বিজ্ঞানীদের মধ্যে প্রচুর কৌতূহল রয়েছে।'
      },
      surface: {
        en: 'As a gas giant, it does not have a solid surface.',
        hi: 'एक गैस विशालकाय के रूप में, इसमें ठोस सतह नहीं होती है।',
        bn: 'গ্যাস জায়ান্ট হওয়ায় এর কোনো কঠিন পৃষ্ঠ নেই।'
      },
      exploration: {
        en: 'Discovered in 2005 using the radial velocity method, confirming that this system is packed with multiple planets.',
        hi: '2005 में रेडियल वेग विधि का उपयोग करके खोजा गया, यह पुष्टि करता है कि यह प्रणाली कई ग्रहों से भरी हुई है।',
        bn: '২০০৫ সালে রেডিয়াল ভেলোসিটি পদ্ধতির মাধ্যমে এটি আবিষ্কৃত হয়, যা প্রমাণ করে যে এই সৌরজগতটিতে সত্যিই অনেকগুলো গ্রহ রয়েছে।'
      },
      didYouKnow: [
        {
          en: 'It is officially named Harriot after the English astronomer Thomas Harriot.',
          hi: 'इसका आधिकारिक नाम अंग्रेजी खगोलशास्त्री थॉमस हैरियट के नाम पर हैरियट रखा गया है।',
          bn: 'বিখ্যাত ইংরেজ জ্যোতির্বিজ্ঞানী টমাস হ্যারিয়ট (Thomas Harriot)-এর সম্মানে এর আনুষ্ঠানিক নাম রাখা হয়েছে "হ্যারিয়ট"।'
        },
        {
          en: 'Because it is in the habitable zone, astronomers often study it to model how large gas giants might migrate and influence the habitability of a system.',
          hi: 'चूंकि यह रहने योग्य क्षेत्र में है, इसलिए खगोलविद अक्सर यह मॉडल करने के लिए इसका अध्ययन करते हैं कि कैसे बड़े गैस दिग्गज पलायन कर सकते हैं और किसी प्रणाली की रहने योग्यता को प्रभावित कर सकते हैं।',
          bn: 'যেহেতু এটি বাসযোগ্য অঞ্চলে অবস্থিত, তাই গ্যাস জায়ান্ট গ্রহগুলো কীভাবে এক জায়গা থেকে অন্য জায়গায় সরে যায় এবং তা সৌরজগতের বাসযোগ্যতাকে কীভাবে প্রভাবিত করে, তা বুঝতে বিজ্ঞানীরা প্রায়ই এই গ্রহটিকে মডেল হিসেবে ব্যবহার করেন।'
        }
      ]
    }
  },
  {
    id: '55-cancri-d',
    type: 'Exoplanet',
    name: {
      en: '55 Cancri d',
      hi: '55 कैनक्री डी',
      bn: '৫৫ ক্যানক্রি ডি'
    },
    description: {
      en: 'The outermost known planet in the 55 Cancri system, a colossal gas giant with an orbit similar to Jupiter\'s.',
      hi: '55 कैनक्री प्रणाली में सबसे बाहरी ज्ञात ग्रह, बृहस्पति के समान कक्षा वाला एक विशाल गैस विशालकाय।',
      bn: '৫৫ ক্যানক্রি সৌরজগতের সবচেয়ে বাইরের দিকের একটি সুবিশাল গ্যাস জায়ান্ট, যার কক্ষপথ অনেকটা আমাদের সৌরজগতের বৃহস্পতি গ্রহের মতোই।'
    },
    distance: {
      en: '41 Light Years',
      hi: '41 प्रकाश वर्ष',
      bn: '৪১ আলোকবর্ষ'
    },
    radius: 12.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/55-cancri-d.jpg',
    details: {
      overview: {
        en: '55 Cancri d, officially named Lipperhey, is a massive gas giant and the outermost known planet of its system. Orbiting its star at a distance comparable to Jupiter in our own Solar System, it is a cold and immense world.',
        hi: '55 कैनक्री डी, जिसे आधिकारिक तौर पर लिपरहे नाम दिया गया है, एक विशाल गैस विशालकाय और अपनी प्रणाली का सबसे बाहरी ज्ञात ग्रह है। हमारे अपने सौर मंडल में बृहस्पति के बराबर दूरी पर अपने तारे की परिक्रमा करते हुए, यह एक ठंडी और विशाल दुनिया है।',
        bn: '৫৫ ক্যানক্রি ডি, যার আনুষ্ঠানিক নাম লিপারহে (Lipperhey), হলো একটি বিশাল গ্যাস জায়ান্ট বা গ্যাসের দানব এবং এটি এর সৌরজগতের সবচেয়ে বাইরের দিকের গ্রহ। আমাদের সৌরজগতের বৃহস্পতি গ্রহ সূর্য থেকে ঠিক যতটা দূরে রয়েছে, এটিও এর নক্ষত্র থেকে প্রায় ততটাই দূরে থেকে প্রদক্ষিণ করছে। এটি মূলত একটি বিশাল এবং শীতল গ্রহ।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 3.12 Jupiters (nearly 1000 Earths)',
          hi: 'लगभग 3.12 बृहस्पति (लगभग 1000 पृथ्वी)',
          bn: 'প্রায় ৩.১২ গুণ (বৃহস্পতির তুলনায়), অথবা প্রায় ১০০০ গুণ (পৃথিবীর তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~140,000 km (12 Earths)',
          hi: 'अनुमानित ~140,000 किमी (12 पृथ्वी)',
          bn: 'আনুমানিক ১,৪০,০০০ কি.মি. (পৃথিবীর ১২ গুণ)'
        },
        gravity: {
          en: 'Incredibly strong, much greater than Jupiter\'s',
          hi: 'अविश्वसनीय रूप से मजबूत, बृहस्पति से बहुत अधिक',
          bn: 'অত্যন্ত শক্তিশালী, যা আমাদের বৃহস্পতি গ্রহের চেয়েও অনেক বেশি'
        }
      },
      atmosphere: {
        en: 'A vast, dense atmosphere of hydrogen and helium, possibly featuring ammonia clouds similar to Jupiter and Saturn.',
        hi: 'हाइड्रोजन और हीलियम का एक विशाल, घना वायुमंडल, जिसमें संभवतः बृहस्पति और शनि के समान अमोनिया बादल शामिल हैं।',
        bn: 'হাইড্রোজেন ও হিলিয়াম দিয়ে তৈরি একটি সুবিশাল ও অত্যন্ত ঘন বায়ুমণ্ডল রয়েছে। ধারণা করা হয়, এতে বৃহস্পতি এবং শনি গ্রহের মতোই অ্যামোনিয়ার তৈরি বিশাল মেঘমালা থাকতে পারে।'
      },
      orbitAndRotation: {
        en: 'Takes nearly 14.3 years to complete one orbit, traveling on a nearly circular path.',
        hi: 'एक कक्षा पूरी करने में लगभग 14.3 वर्ष लगते हैं, जो लगभग गोलाकार पथ पर यात्रा करता है।',
        bn: 'এর এক বছর পূর্ণ হতে প্রায় ১৪.৩ বছর সময় লাগে। এর কক্ষপথটি প্রায় সম্পূর্ণ গোলাকার।'
      },
      moons: {
        en: 'Given its distance and immense mass, it is highly likely to host a large system of moons.',
        hi: 'इसकी दूरी और अपार द्रव्यमान को देखते हुए, इसमें चंद्रमाओं की एक बड़ी प्रणाली की मेजबानी करने की अत्यधिक संभावना है।',
        bn: 'নক্ষত্র থেকে এর বিশাল দূরত্ব এবং এর বিশাল ভরের কারণে, ধারণা করা হয় যে এটিকে ঘিরে অনেকগুলো উপগ্রহের একটি বড় জগত থাকতে পারে।'
      },
      surface: {
        en: 'It has no solid surface; its outer gases simply get hotter and denser until they transition into a strange fluid metal state near the core.',
        hi: 'इसकी कोई ठोस सतह नहीं है; इसकी बाहरी गैसें बस गर्म और सघन हो जाती हैं जब तक कि वे कोर के पास एक अजीब द्रव धातु अवस्था में नहीं आ जातीं।',
        bn: 'এর কোনো কঠিন পৃষ্ঠ নেই; গ্রহের যতই গভীরে যাওয়া যায়, এর গ্যাসীয় স্তর ততই উত্তপ্ত ও ঘন হতে থাকে, যা একেবারে কেন্দ্রে গিয়ে তরল ধাতুর মতো অদ্ভুত অবস্থায় পরিণত হয়।'
      },
      exploration: {
        en: 'Discovered in 2002 via the radial velocity method, its long orbital period required years of continuous observation to confirm.',
        hi: '2002 में रेडियल वेग विधि के माध्यम से खोजा गया, इसकी लंबी कक्षीय अवधि की पुष्टि के लिए वर्षों के निरंतर अवलोकन की आवश्यकता थी।',
        bn: '২০০২ সালে রেডিয়াল ভেলোসিটি পদ্ধতির মাধ্যমে এটি আবিষ্কৃত হয়। এর বিশাল কক্ষপথের কারণে, এর আবিষ্কার নিশ্চিত করতে বিজ্ঞানীদের বছরের পর বছর ধরে টানা পর্যবেক্ষণ করতে হয়েছিল।'
      },
      didYouKnow: [
        {
          en: 'The planet is named after Hans Lipperhey, a German-Dutch spectacle maker commonly associated with the invention of the telescope.',
          hi: 'ग्रह का नाम हंस लिपरहे के नाम पर रखा गया है, जो एक जर्मन-डच तमाशा निर्माता है जो आमतौर पर दूरबीन के आविष्कार से जुड़ा है।',
          bn: 'হ্যান্স লিপারহে (Hans Lipperhey) নামক একজন জার্মান-ডাচ চশমা নির্মাতার নামানুসারে এই গ্রহের নাম রাখা হয়েছে, যাকে সাধারণত টেলিস্কোপ আবিষ্কারের সাথে যুক্ত করা হয়।'
        },
        {
          en: 'Because it is so far from its host star, 55 Cancri d marks the frozen outer boundary of this densely packed planetary system.',
          hi: 'चूंकि यह अपने मेजबान तारे से बहुत दूर है, इसलिए 55 कैनक्री डी इस सघन ग्रह प्रणाली की जमी हुई बाहरी सीमा को चिह्नित करता है।',
          bn: 'নক্ষত্র থেকে এত দূরে অবস্থিত হওয়ায়, ৫৫ ক্যানক্রি ডি মূলত এই ঘনবসতিপূর্ণ গ্রহজগতের সবচেয়ে বাইরের একটি হিমশীতল সীমানা তৈরি করেছে।'
        }
      ]
    }
  },
  {
    id: 'hr-8799',
    type: 'Star',
    name: {
      en: 'HR 8799',
      hi: 'एचआर 8799',
      bn: 'এইচআর ৮৭৯৯'
    },
    description: {
      en: 'A young, massive star famously known for being the first system where multiple planets were directly imaged.',
      hi: 'एक युवा, विशाल तारा जिसे उस पहली प्रणाली के रूप में जाना जाता है जहां कई ग्रहों की सीधे तस्वीर ली गई थी।',
      bn: 'একটি তরুণ ও বিশাল নক্ষত্র, যা ইতিহাসে প্রথমবারের মতো এর চারপাশের গ্রহগুলোর সরাসরি ছবি তোলার জন্য বিখ্যাত।'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    radius: 30.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/hr-8799.jpg',
    details: {
      overview: {
        en: 'HR 8799 is a young main-sequence star, much hotter and larger than our Sun, located in the constellation of Pegasus. It became world-famous in 2008 when astronomers announced they had directly imaged three (later four) massive planets orbiting it. It also possesses a massive debris disk, similar to our Solar System\'s Kuiper Belt, but much more active.',
        hi: 'एचआर 8799 एक युवा मुख्य-अनुक्रम तारा है, जो हमारे सूर्य से बहुत अधिक गर्म और बड़ा है, जो पेगासस तारामंडल में स्थित है। यह 2008 में विश्व प्रसिद्ध हो गया जब खगोलविदों ने घोषणा की कि उन्होंने इसकी परिक्रमा करने वाले तीन (बाद में चार) विशाल ग्रहों की सीधे तस्वीर ली है।',
        bn: 'এইচআর ৮৭৯৯ (HR 8799) পেগাসাস তারামণ্ডলে অবস্থিত একটি তরুণ নক্ষত্র, যা আমাদের সূর্যের চেয়ে অনেক বেশি উত্তপ্ত এবং বড়। ২০০৮ সালে জ্যোতির্বিজ্ঞানীরা প্রথমবারের মতো এই নক্ষত্রটিকে কেন্দ্র করে আবর্তনরত তিনটি (পরবর্তীতে চারটি) বিশাল গ্রহের সরাসরি ছবি তুলেছিলেন, যা এটিকে বিশ্বব্যাপী বিখ্যাত করে তোলে। আমাদের সৌরজগতের কুইপার বেল্টের মতোই এর চারদিকেও বিশাল ধ্বংসাবশেষ বা গ্রহাণুর বলয় রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.47 Solar Masses',
          hi: 'लगभग 1.47 सौर द्रव्यमान',
          bn: 'প্রায় ১.৪৭ গুণ (সূর্যের তুলনায়)'
        },
        diameter: {
          en: 'Approx. 1.86 million km (1.34 Solar Radii)',
          hi: 'लगभग 1.86 मिलियन किमी (1.34 सौर रेडी)',
          bn: 'প্রায় ১৮.৬ লক্ষ কি.মি. (সূর্যের ১.৩৪ গুণ)'
        },
        gravity: {
          en: 'Similar to our Sun',
          hi: 'हमारे सूर्य के समान',
          bn: 'আমাদের সূর্যের মতোই'
        }
      },
      atmosphere: {
        en: 'Like most stars, it has no planetary atmosphere but rather a brilliant photosphere and a hot corona.',
        hi: 'अधिकांश तारों की तरह, इसका कोई ग्रहीय वायुमंडल नहीं है बल्कि एक शानदार फोटोस्फीयर और एक गर्म कोरोना है।',
        bn: 'অন্যান্য নক্ষত্রের মতোই এর কোনো গ্রহের মতো বায়ুমণ্ডল নেই, বরং এর রয়েছে একটি উজ্জ্বল ফটোস্ফিয়ার এবং উত্তপ্ত করোনা।'
      },
      orbitAndRotation: {
        en: 'Rotates rapidly, taking roughly half a day to complete one spin on its axis.',
        hi: 'तेजी से घूमता है, अपनी धुरी पर एक चक्कर पूरा करने में लगभग आधा दिन लगता है।',
        bn: 'এটি খুব দ্রুত ঘোরে; নিজের অক্ষে একবার ঘুরতে এর মাত্র অর্ধেক দিন সময় লাগে।'
      },
      moons: {
        en: 'Hosts a system of at least 4 directly-imaged gas giant planets.',
        hi: 'कम से कम 4 सीधे-चित्रित गैस विशाल ग्रहों की एक प्रणाली की मेजबानी करता है।',
        bn: 'এর কোনো উপগ্রহ নেই, তবে এটি অন্তত ৪টি বিশাল গ্যাস জায়ান্ট গ্রহের কেন্দ্রস্থল।'
      },
      surface: {
        en: 'A blazing surface of plasma with an effective temperature around 7,200 °C (7,470 K), much hotter than the Sun.',
        hi: 'लगभग 7,200 °C (7,470 K) के प्रभावी तापमान वाले प्लाज्मा की धधकती सतह, जो सूर्य से बहुत अधिक गर्म है।',
        bn: 'প্লাজমার তৈরি একটি জ্বলন্ত পৃষ্ঠ, যার তাপমাত্রা প্রায় ৭,২০০ °C (৭,৪৭০ কেলভিন), যা সূর্যের চেয়ে অনেক বেশি উত্তপ্ত।'
      },
      exploration: {
        en: 'Made history in 2008 when the Keck and Gemini observatories released the first-ever direct images of an exoplanetary system around a normal star.',
        hi: '2008 में इतिहास रच दिया जब केक और जेमिनी वेधशालाओं ने एक सामान्य तारे के चारों ओर एक्सोप्लैनेटरी सिस्टम की पहली प्रत्यक्ष छवियां जारी कीं।',
        bn: '২০০৮ সালে কিক এবং জেমিনি মানমন্দির থেকে যখন এই নক্ষত্রের চারপাশের গ্রহগুলোর সরাসরি ছবি প্রকাশ করা হয়, তখন এটি ইতিহাস রচনা করেছিল।'
      },
      didYouKnow: [
        {
          en: 'The star is quite young—only about 30 million years old, compared to our Sun\'s 4.6 billion years.',
          hi: 'तारा काफी युवा है-केवल लगभग 30 मिलियन वर्ष पुराना, हमारे सूर्य के 4.6 अरब वर्ष की तुलना में।',
          bn: 'নক্ষত্রটি বেশ তরুণ—এর বয়স মাত্র ৩ কোটি বছর, যেখানে আমাদের সূর্যের বয়স প্রায় ৪৬০ কোটি বছর!'
        },
        {
          en: 'Because the star and its planets are so young, the planets are still glowing brightly from the heat of their formation, which is why we can see them directly.',
          hi: 'चूंकि तारा और उसके ग्रह इतने युवा हैं, इसलिए ग्रह अभी भी अपने निर्माण की गर्मी से चमक रहे हैं, यही कारण है कि हम उन्हें सीधे देख सकते हैं।',
          bn: 'যেহেতু নক্ষত্র এবং এর গ্রহগুলো খুব তরুণ, তাই গ্রহগুলো এখনো তাদের সৃষ্টির সময়কার তীব্র তাপে উজ্জ্বল হয়ে জ্বলছে, আর ঠিক এই কারণেই আমরা গ্রহগুলোর সরাসরি ছবি তুলতে সক্ষম হয়েছি।'
        }
      ]
    }
  },
  {
    id: 'hr-8799-e',
    type: 'Exoplanet',
    name: {
      en: 'HR 8799 e',
      hi: 'एचआर 8799 ई',
      bn: 'এইচআর ৮৭৯৯ ই'
    },
    description: {
      en: 'The innermost planet discovered in the famous HR 8799 multi-planet system, directly imaged glowing in infrared.',
      hi: 'प्रसिद्ध एचआर 8799 बहु-ग्रह प्रणाली में खोजा गया सबसे आंतरिक ग्रह, जिसे सीधे अवरक्त में चमकते हुए चित्रित किया गया है।',
      bn: 'বিখ্যাত এইচআর ৮৭৯৯ বহু-গ্রহ সৌরজগতের সবচেয়ে ভেতরের গ্রহ, যা ইনফ্রারেড আলোয় সরাসরি ছবি তুলে আবিষ্কার করা হয়েছিল।'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    radius: 13.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/hr-8799-e.jpg',
    details: {
      overview: {
        en: 'HR 8799 e is a super-Jupiter exoplanet orbiting the star HR 8799. Discovered in 2010, it was the fourth planet confirmed in the system. Because it is extremely young and massive, it still radiates strong internal heat, appearing brightly in infrared observations.',
        hi: 'एचआर 8799 ई तारे एचआर 8799 की परिक्रमा करने वाला एक सुपर-बृहस्पति एक्सोप्लैनेट है। 2010 में खोजा गया, यह प्रणाली में पुष्टि किया गया चौथा ग्रह था। क्योंकि यह बेहद युवा और विशाल है, यह अभी भी मजबूत आंतरिक गर्मी विकीर्ण करता है।',
        bn: 'এইচআর ৮৭৯৯ ই হলো এইচআর ৮৭৯৯ নক্ষত্রকে প্রদক্ষিণকারী একটি "সুপার-জুপিটার" (বৃহস্পতির চেয়েও বড়) এক্সোপ্ল্যানেট। ২০১০ সালে আবিষ্কৃত এটি এই সৌরজগতের চতুর্থ নিশ্চিত গ্রহ। এটি অত্যন্ত তরুণ এবং বিশাল আকারের হওয়ায় এখনও এর অভ্যন্তর থেকে তীব্র তাপ নির্গত হচ্ছে, যার ফলে ইনফ্রারেড পর্যবেক্ষণে এটি অত্যন্ত উজ্জ্বল দেখায়।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 5 to 10 Jupiter Masses',
          hi: 'लगभग 5 से 10 बृहस्पति द्रव्यमान',
          bn: 'প্রায় ৫ থেকে ১০ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~150,000 km (1.17 Jupiters)',
          hi: 'अनुमानित ~150,000 किमी (1.17 बृहस्पति)',
          bn: 'আনুমানিক ১,৫০,০০০ কি.মি. (বৃহস্পতির ১.১৭ গুণ)'
        },
        gravity: {
          en: 'Extremely high, multiple times that of Jupiter',
          hi: 'अत्यधिक उच्च, बृहस्पति से कई गुना',
          bn: 'অত্যন্ত প্রবল, বৃহস্পতির চেয়েও কয়েক গুণ বেশি'
        }
      },
      atmosphere: {
        en: 'A stormy, turbulent atmosphere with clouds of iron and silicate dust churned by extreme convection.',
        hi: 'लोहे और सिलिकेट धूल के बादलों के साथ एक तूफानी, अशांत वातावरण जो अत्यधिक संवहन द्वारा मंथन किया जाता है।',
        bn: 'তীব্র তাপীয় আলোড়নে তৈরি একটি অত্যন্ত অশান্ত বায়ুমণ্ডল, যাতে লোহা এবং সিলিকেট ধূলিকণার মেঘ উড়ছে।'
      },
      orbitAndRotation: {
        en: 'Orbits its host star at roughly 14.5 AU with an orbital period of about 45 to 50 Earth years.',
        hi: 'लगभग 45 से 50 पृथ्वी वर्षों की कक्षीय अवधि के साथ लगभग 14.5 एयू पर अपने मेजबान तारे की परिक्रमा करता है।',
        bn: 'নক্ষত্র থেকে প্রায় ১৪.৫ এইউ দূরত্বে অবস্থান করে এবং একবার প্রদক্ষিণ করতে এর প্রায় ৪৫ থেকে ৫০ বছর সময় লাগে।'
      },
      moons: {
        en: 'Likely possesses an extensive system of moons, though none can be detected at this distance.',
        hi: 'संभवतः चंद्रमाओं की एक व्यापक प्रणाली है, हालांकि इस दूरी पर किसी का भी पता नहीं लगाया जा सकता है।',
        bn: 'বিশাল আকারের কারণে এর চারপাশে অসংখ্য উপগ্রহ থাকার প্রবল সম্ভাবনা রয়েছে, তবে এত দূর থেকে সেগুলো দেখা সম্ভব নয়।'
      },
      surface: {
        en: 'Lacks a solid surface; it is a gas giant with crushing pressures and scalding interior temperatures.',
        hi: 'एक ठोस सतह का अभाव है; यह कुचलने वाले दबाव और अत्यधिक आंतरिक तापमान वाला एक गैस विशालकाय है।',
        bn: 'গ্যাস জায়ান্ট হওয়ায় এর কোনো কঠিন পৃষ্ঠ নেই; এর ভেতরটা প্রচণ্ড চাপ এবং উত্তপ্ত গ্যাসে পরিপূর্ণ।'
      },
      exploration: {
        en: 'Discovered in 2010 through direct imaging using the Keck telescope, marking a milestone in observing multiple planets orbiting another star.',
        hi: 'केक दूरबीन का उपयोग करके प्रत्यक्ष इमेजिंग के माध्यम से 2010 में खोजा गया।',
        bn: '২০১০ সালে ডব্লিউ. এম. কিক টেলিস্কোপের মাধ্যমে সরাসরি ছবি তুলে এটি আবিষ্কার করা হয়েছিল।'
      },
      didYouKnow: [
        {
          en: 'The atmosphere contains patchy clouds of vaporized silicate minerals, meaning it essentially has clouds made of sand and rock!',
          hi: 'वायुमंडल में वाष्पीकृत सिलिकेट खनिजों के धब्बेदार बादल होते हैं, जिसका अर्थ है कि इसमें अनिवार्य रूप से रेत और चट्टान से बने बादल हैं!',
          bn: 'এর বায়ুমণ্ডলে বাষ্পীভূত সিলিকেট খনিজ রয়েছে, অর্থাৎ সহজ কথায় এই গ্রহে পাথর এবং বালুর তৈরি মেঘ উড়ছে!'
        },
        {
          en: 'Even though it is the innermost planet of HR 8799, its distance from the star is still comparable to Saturn’s distance from our Sun.',
          hi: 'भले ही यह एचआर 8799 का सबसे आंतरिक ग्रह है, फिर भी तारे से इसकी दूरी हमारे सूर्य से शनि की दूरी के बराबर है।',
          bn: 'এইচআর ৮৭৯৯ সৌরজগতের সবচেয়ে ভেতরের গ্রহ হওয়া সত্ত্বেও, নক্ষত্র থেকে এর দূরত্ব আমাদের সূর্য থেকে শনি গ্রহের দূরত্বের কাছাকাছি।'
        }
      ]
    }
  },
  {
    id: 'hr-8799-d',
    type: 'Exoplanet',
    name: {
      en: 'HR 8799 d',
      hi: 'एचआर 8799 डी',
      bn: 'এইচআর ৮৭৯৯ ডি'
    },
    description: {
      en: 'A massive gas giant planet orbiting inside the debris ring of HR 8799, directly imaged in 2008.',
      hi: 'एचआर 8799 के मलबे के छल्ले के अंदर परिक्रमा करने वाला एक विशाल गैस विशाल ग्रह, जिसे 2008 में सीधे चित्रित किया गया था।',
      bn: 'এইচআর ৮৭৯৯ নক্ষত্রের গ্রহাণু বলয়ের ভেতরে অবস্থিত একটি সুবিশাল গ্যাস জায়ান্ট, যা ২০০৮ সালে সরাসরি ছবি তুলে আবিষ্কৃত হয়েছিল।'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    radius: 13.5,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/hr-8799-d.jpg',
    details: {
      overview: {
        en: 'HR 8799 d is a super-Jupiter exoplanet located approximately 27 AU from its host star. Discovered in 2008 alongside planets b and c, it was one of the very first exoplanets ever to have its orbital motion observed directly over time.',
        hi: 'एचआर 8799 डी अपने मेजबान तारे से लगभग 27 एयू दूर स्थित एक सुपर-बृहस्पति एक्सोप्लैनेट है। 2008 में ग्रहों बी और सी के साथ खोजा गया, यह समय के साथ अपनी कक्षीय गति को सीधे देखे जाने वाले पहले एक्सोप्लैनेट्स में से एक था।',
        bn: 'এইচআর ৮৭৯৯ ডি হলো এর মূল নক্ষত্র থেকে প্রায় ২৭ এইউ দূরত্বে অবস্থিত একটি সুপার-জুপিটার এক্সোপ্ল্যানেট। ২০০৮ সালে গ্রহ b এবং c এর সাথে একসাথে আবিষ্কৃত হওয়া এই গ্রহটি বিজ্ঞানের ইতিহাসে এমন প্রথম কিছু গ্রহের অন্যতম যার নিজের কক্ষপথে চলার দৃশ্য সরাসরি ক্যামেরায় রেকর্ড করা সম্ভব হয়েছিল।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 7 to 10 Jupiter Masses',
          hi: 'लगभग 7 से 10 बृहस्पति द्रव्यमान',
          bn: 'প্রায় ৭ থেকে ১০ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~155,000 km (1.2 Jupiters)',
          hi: 'अनुमानित ~155,000 किमी (1.2 बृहस्पति)',
          bn: 'আনুমানিক ১,৫৫,০০০ কি.মি. (বৃহস্পতির ১.২ গুণ)'
        },
        gravity: {
          en: 'Crushingly strong, many times Earth and Jupiter',
          hi: 'अत्यंत शक्तिशाली, पृथ्वी और बृहस्पति से कई गुना',
          bn: 'অত্যন্ত শক্তিশালী, পৃথিবী ও বৃহস্পতির চেয়ে বহু গুণ বেশি'
        }
      },
      atmosphere: {
        en: 'A stormy atmosphere dominated by water vapor, carbon monoxide, and methane with thick clouds of silicate dust.',
        hi: 'जलवाष्प, कार्बन मोनोऑक्साइड और मीथेन के साथ सिलिकेट धूल के घने बादलों वाला एक तूफानी वातावरण।',
        bn: 'জলীয় বাষ্প, কার্বন মনোক্সাইড ও মিথেন সমৃদ্ধ একটি উত্তাল বায়ুমণ্ডল, যাতে সিলিকেট ধূলিকণার ঘন মেঘ রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Takes about 100 Earth years to orbit HR 8799 once, locked in a orbital resonance with its sibling planets.',
        hi: 'अपने भाई-बहनों के ग्रहों के साथ एक कक्षीय प्रतिध्वनि में बंद, एचआर 8799 की एक बार परिक्रमा करने में लगभग 100 पृथ्वी वर्ष लगते हैं।',
        bn: 'নক্ষত্রটিকে একবার প্রদক্ষিণ করতে এর প্রায় ১০০ বছর সময় লাগে। এটি এর সহোদর গ্রহগুলোর সাথে সুনির্দিষ্ট কক্ষীয় রেজোন্যান্সে রয়েছে।'
      },
      moons: {
        en: 'Could harbor large icy moons, though undetected with current technology.',
        hi: 'बड़े बर्फीले चंद्रमा हो सकते हैं, हालांकि वर्तमान तकनीक से इसका पता नहीं चला है।',
        bn: 'বিশাল ভরের কারণে এর চারপাশে বরফে ঢাকা বড় উপগ্রহ থাকার সম্ভাবনা রয়েছে।'
      },
      surface: {
        en: 'No solid surface; it is a gas giant with immense internal heat and crushing pressures.',
        hi: 'कोई ठोस सतह नहीं; यह अत्यधिक आंतरिक गर्मी और कुचलने वाले दबावों वाला एक गैस विशालकाय है।',
        bn: 'কোনো কঠিন পৃষ্ঠ নেই; এটি উত্তপ্ত গ্যাসীয় পদার্থ ও তীব্র চাপে গঠিত এক গ্যাসের দানব।'
      },
      exploration: {
        en: 'Announced in November 2008 by a team of Canadian and American astronomers using Keck and Gemini telescopes.',
        hi: 'केक और जेमिनी दूरबीनों का उपयोग करके कनाडाई और अमेरिकी खगोलविदों की एक टीम द्वारा नवंबर 2008 में घोषित किया गया।',
        bn: '২০০৮ সালের নভেম্বরে কিক এবং জেমিনি টেলিস্কোপ ব্যবহার করে কানাডিয়ান ও আমেরিকান গবেষক দল এটি আবিষ্কারের ঘোষণা দেয়।'
      },
      didYouKnow: [
        {
          en: 'The planets of HR 8799 are in a 1:2:4:8 resonance, meaning for every 1 orbit planet b makes, planet d makes 4 orbits!',
          hi: 'एचआर 8799 के ग्रह 1:2:4:8 के अनुपात में हैं, जिसका अर्थ है कि ग्रह बी द्वारा लगाए जाने वाले प्रत्येक 1 चक्कर के लिए, ग्रह डी 4 चक्कर लगाता है!',
          bn: 'এইচআর ৮৭৯৯ সিস্টেমের গ্রহগুলো ১:২:৪:৮ রেজোন্যান্সে ঘোরে, অর্থাৎ গ্রহ b যখন ১ বার ঘোরে, গ্রহ d ঠিক ৪ বার প্রদক্ষিণ করে ফেলে!'
        },
        {
          en: 'Its glowing heat emission allows astronomers to study the chemical fingerprints of its atmosphere across 133 light years.',
          hi: 'इसका चमकता हुआ ऊष्मा उत्सर्जन खगोलविदों को 133 प्रकाश वर्ष दूर इसके वायुमंडल के रासायनिक फिंगरप्रिंट का अध्ययन करने की अनुमति देता है।',
          bn: 'এর নিজস্ব উজ্জ্বল তাপ বিকিরণের কারণে জ্যোতির্বিজ্ঞানীরা ১৩৩ আলোকবর্ষ দূর থেকেও এর বায়ুমণ্ডলের রাসায়নিক উপাদান নিখুঁতভাবে পরীক্ষা করতে পেরেছেন।'
        }
      ]
    }
  },
  {
    id: 'hr-8799-c',
    type: 'Exoplanet',
    name: {
      en: 'HR 8799 c',
      hi: 'एचआर 8799 सी',
      bn: 'এইচআর ৮৭৯৯ সি'
    },
    description: {
      en: 'A colossal super-Jupiter gas giant orbiting at 38 AU, directly imaged glowing with nascent thermal radiation.',
      hi: '38 एयू पर परिक्रमा करने वाला एक विशाल सुपर-बृहस्पति गैस विशालकाय, जो नवजात थर्मल विकिरण के साथ सीधे चमकता हुआ चित्रित किया गया है।',
      bn: 'নক্ষত্র থেকে ৩৮ এইউ দূরত্বে অবস্থিত একটি দানবাকৃতির সুপার-জুপিটার এক্সোপ্ল্যানেট, যার সৃষ্টিলগ্নের তাপীয় আলোয় সরাসরি ছবি তোলা হয়েছিল।'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    radius: 13.6,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/hr-8799-c.jpg',
    details: {
      overview: {
        en: 'HR 8799 c is a massive young gas giant orbiting HR 8799 at a distance similar to Pluto\'s orbit in our Solar System. Discovered in 2008, it has a high concentration of water vapor and carbon monoxide in its scorching atmosphere.',
        hi: 'एचआर 8799 सी एक विशाल युवा गैस विशालकाय है जो हमारे सौर मंडल में प्लूटो की कक्षा के समान दूरी पर एचआर 8799 की परिक्रमा करता है। 2008 में खोजा गया, इसके चिलचिलाती वातावरण में जल वाष्प और कार्बन मोनोऑक्साइड की उच्च सांद्रता है।',
        bn: 'এইচআর ৮৭৯৯ সি হলো আমাদের সৌরজগতের প্লুটোর সমান দূরত্বে (৩৮ এইউ) অবস্থিত একটি তরুণ এবং সুবিশাল গ্যাস জায়ান্ট। ২০০৮ সালে আবিষ্কৃত হওয়া এই গ্রহটির উত্তপ্ত বায়ুমণ্ডলে প্রচুর পরিমাণে জলীয় বাষ্প ও কার্বন মনোক্সাইডের উপস্থিতি শনাক্ত করা গেছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 7 to 10 Jupiter Masses',
          hi: 'लगभग 7 से 10 बृहस्पति द्रव्यमान',
          bn: 'প্রায় ৭ থেকে ১০ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~160,000 km (1.25 Jupiters)',
          hi: 'अनुमानित ~160,000 किमी (1.25 बृहस्पति)',
          bn: 'আনুমানিক ১,৬০,০০০ কি.মি. (বৃহস্পতির ১.২৫ গুণ)'
        },
        gravity: {
          en: 'Immense gravitational pull, far surpassing Jupiter',
          hi: 'अत्यधिक गुरुत्वाकर्षण खिंचाव, बृहस्पति से कहीं अधिक',
          bn: 'সুবিশাল মহাকর্ষীয় টান, যা বৃহস্পতির চেয়েও অনেক বেশি'
        }
      },
      atmosphere: {
        en: 'Thick, patchy clouds of silicates and iron droplets suspended in high-velocity atmospheric winds.',
        hi: 'उच्च वेग वाली वायुमंडलीय हवाओं में लटके सिलिकेट्स और लोहे की बूंदों के घने, धब्बेदार बादल।',
        bn: 'তীব্র বেগের বায়ুপ্রবাহের মাঝে সিলিকেট এবং গলিত লোহার কণার ঘন মেঘের চাদর।'
      },
      orbitAndRotation: {
        en: 'Orbits its host star every 190 Earth years on a circular, stable orbital trajectory.',
        hi: 'एक गोलाकार, स्थिर कक्षीय प्रक्षेपवक्र पर हर 190 पृथ्वी वर्षों में अपने मेजबान तारे की परिक्रमा करता है।',
        bn: 'স্থির ও প্রায় বৃত্তাকার কক্ষপথে এর মূল নক্ষত্রকে একবার প্রদক্ষিণ করতে প্রায় ১৯০ বছর সময় লাগে।'
      },
      moons: {
        en: 'Expected to possess a large family of natural satellites, though impossible to observe directly.',
        hi: 'प्राकृतिक उपग्रहों का एक बड़ा परिवार होने की उम्मीद है, हालांकि सीधे निरीक्षण करना असंभव है।',
        bn: 'বিশাল আকারের কারণে এর চারপাশে অসংখ্য উপগ্রহ থাকার সম্ভাবনা থাকলেও বর্তমান প্রযুক্তিতে তা দেখা অসম্ভব।'
      },
      surface: {
        en: 'No solid crust; transitions continuously from stormy gas layers to a super-pressurized metallic core.',
        hi: 'कोई ठोस पपड़ी नहीं; तूफानी गैस परतों से एक अत्यधिक दबाव वाले धात्विक कोर में लगातार संक्रमण।',
        bn: 'কোনো কঠিন ভূপৃষ্ঠ নেই; এর উত্তাল গ্যাসীয় স্তরগুলো ভেতরের দিকে ক্রমশ ধাতব ও ঘন কোরে রূপ নিয়েছে।'
      },
      exploration: {
        en: 'First imaged in 2008 by Christian Marois and his research team using the Keck Observatory.',
        hi: 'केक वेधशाला का उपयोग करके क्रिश्चियन मारोइस और उनकी शोध टीम द्वारा 2008 में पहली बार चित्रित किया गया।',
        bn: '২০০৮ সালে জ্যোতির্বিজ্ঞানী ক্রিশ্চিয়ান মারোইস ও তার গবেষণা দল কিক মানমন্দির ব্যবহার করে এর ছবি ধারণ করেন।'
      },
      didYouKnow: [
        {
          en: 'Astronomers used high-resolution spectroscopy to detect both water and carbon monoxide directly in planet c’s atmosphere!',
          hi: 'खगोलविदों ने ग्रह सी के वायुमंडल में सीधे पानी और कार्बन मोनोऑक्साइड दोनों का पता लगाने के लिए उच्च-रिज़ॉल्यूशन स्पेक्ट्रोस्कोपी का उपयोग किया!',
          bn: 'উচ্চ ক্ষমতাসম্পন্ন স্পেকট্রোস্কোপির মাধ্যমে বিজ্ঞানীরা এই গ্রহের বায়ুমণ্ডলে সরাসরি পানি ও কার্বন মনোক্সাইড শনাক্ত করেছিলেন!'
        },
        {
          en: 'Because it is so far from its star, light from HR 8799 takes over 5 hours just to reach this planet.',
          hi: 'क्योंकि यह अपने तारे से बहुत दूर है, एचआर 8799 से प्रकाश को इस ग्रह तक पहुंचने में 5 घंटे से अधिक समय लगता है।',
          bn: 'নক্ষত্র থেকে এত দূরে থাকায়, এইচআর ৮৭৯৯ নক্ষত্রের আলো এই গ্রহে পৌঁছাতেই ৫ ঘণ্টার বেশি সময় লেগে যায়।'
        }
      ]
    }
  },
  {
    id: 'hr-8799-b',
    type: 'Exoplanet',
    name: {
      en: 'HR 8799 b',
      hi: 'एचआर 8799 बी',
      bn: 'এইচআর ৮৭৯৯ বি'
    },
    description: {
      en: 'The outermost known planet of HR 8799, orbiting just inside the massive cold dust belt of the system.',
      hi: 'एचआर 8799 का सबसे बाहरी ज्ञात ग्रह, जो प्रणाली के विशाल ठंडे धूल बेल्ट के ठीक अंदर परिक्रमा करता है।',
      bn: 'এইচআর ৮৭৯৯ সিস্টেমের সবচেয়ে বাইরের পরিচিত গ্রহ, যা এর সুবিশাল ও হিমশীতল গ্রহাণু বলয়ের সীমানায় প্রদক্ষিণ করে।'
    },
    distance: {
      en: '133 Light Years',
      hi: '133 प्रकाश वर्ष',
      bn: '১৩৩ আলোকবর্ষ'
    },
    radius: 13.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/hr-8799-b.jpg',
    details: {
      overview: {
        en: 'HR 8799 b is the outermost of the four known giant planets in the HR 8799 system, orbiting at an immense distance of approximately 68 AU. Discovered in 2008, it has an extraordinary orbital period of nearly 460 Earth years.',
        hi: 'एचआर 8799 बी एचआर 8799 प्रणाली में चार ज्ञात विशाल ग्रहों में से सबसे बाहरी है, जो लगभग 68 एयू की अत्यधिक दूरी पर परिक्रमा करता है। 2008 में खोजा गया, इसकी लगभग 460 पृथ्वी वर्षों की एक असाधारण कक्षीय अवधि है।',
        bn: 'এইচআর ৮৭৯৯ বি হলো এইচআর ৮৭৯৯ সৌরজগতের চারটি পরিচিত দানব গ্রহের মধ্যে সবচেয়ে দূরবর্তী গ্রহ, যা প্রায় ৬৮ এইউ দূরত্বে অবস্থিত। ২০০৮ সালে আবিষ্কৃত এই গ্রহটির নক্ষত্রকে একবার প্রদক্ষিণ করতে প্রায় ৪৬০ বছর সময় লাগে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 5 to 7 Jupiter Masses',
          hi: 'लगभग 5 से 7 बृहस्पति द्रव्यमान',
          bn: 'প্রায় ৫ থেকে ৭ গুণ (বৃহস্পতির তুলনায়)'
        },
        diameter: {
          en: 'Estimated ~145,000 km (1.15 Jupiters)',
          hi: 'अनुमानित ~145,000 किमी (1.15 बृहस्पति)',
          bn: 'আনুমানিক ১,৪৫,০০০ কি.মি. (বৃহস্পতির ১.১৫ গুণ)'
        },
        gravity: {
          en: 'Multiple times Earth and Jupiter\'s surface pull',
          hi: 'पृथ्वी और बृहस्पति के सतह के खिंचाव से कई गुना',
          bn: 'পৃথিবী ও বৃহস্পতির চেয়ে বহু গুণ বেশি'
        }
      },
      atmosphere: {
        en: 'An exotic, cloudy atmosphere rich in water vapor and methane, showing evidence of non-equilibrium carbon chemistry.',
        hi: 'जल वाष्प और मीथेन से समृद्ध एक विदेशी, बादलों से भरा वातावरण, गैर-संतुलन कार्बन रसायन विज्ञान के प्रमाण दिखाता है।',
        bn: 'জলীয় বাষ্প ও মিথেন সমৃদ্ধ এক অনন্য মেঘলা বায়ুমণ্ডল, যাতে কার্বনের জটিল রাসায়নিক রূপান্তর লক্ষ করা গেছে।'
      },
      orbitAndRotation: {
        en: 'Orbits at 68 AU, requiring about 460 Earth years to complete one single revolution.',
        hi: '68 एयू पर परिक्रमा करता है, एक चक्कर पूरा करने के लिए लगभग 460 पृथ्वी वर्षों की आवश्यकता होती है।',
        bn: 'নক্ষত্র থেকে ৬৮ এইউ দূরে অবস্থান করে এর একবার প্রদক্ষিণ সম্পন্ন করতে প্রায় ৪৬০ বছর সময় লাগে।'
      },
      moons: {
        en: 'Surrounded by the vast space of the outer debris disc, it likely captures or hosts multiple moons.',
        hi: 'बाहरी मलबे की डिस्क के विशाल स्थान से घिरा, यह संभवतः कई चंद्रमाओं को पकड़ता है या उनकी मेजबानी करता है।',
        bn: 'বাইরের বিশাল ধূলিবলয়ের কাছাকাছি থাকায় এর চারপাশে বেশ কিছু উপগ্রহ থাকার জোরালো সম্ভাবনা রয়েছে।'
      },
      surface: {
        en: 'Lacks a solid crust; deep convective gases gradually compress into a dense core.',
        hi: 'एक ठोस परत का अभाव है; गहरी संवहन गैसें धीरे-धीरे एक सघन कोर में संकुचित हो जाती हैं।',
        bn: 'কোনো কঠিন ভূত্বক নেই; গভীর উত্তপ্ত গ্যাস ক্রমশ ঘনীভূত হয়ে ভেতরের কোরে পরিণত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2008 by direct imaging using the Keck and Gemini North telescopes.',
        hi: 'केक और जेमिनी नॉर्थ दूरबीनों का उपयोग करके प्रत्यक्ष इमेजिंग द्वारा 2008 में खोजा गया।',
        bn: '২০০৮ সালে কিক এবং জেমিনি নর্থ টেলিস্কোপের মাধ্যমে সরাসরি ছবি তুলে এটি আবিষ্কার করা হয়েছিল।'
      },
      didYouKnow: [
        {
          en: 'Because it takes ~460 years to orbit its star once, this planet has not completed even a single full year since the invention of the telescope on Earth!',
          hi: 'क्योंकि अपने तारे की एक बार परिक्रमा करने में ~460 वर्ष लगते हैं, इसलिए पृथ्वी पर दूरबीन के आविष्कार के बाद से इस ग्रह ने एक भी पूरा वर्ष पूरा नहीं किया है!',
          bn: 'নক্ষত্রকে একবার ঘুরতে প্রায় ৪৬০ বছর সময় নেওয়ায়, পৃথিবীতে দূরবীন আবিষ্কারের পর থেকে এখন পর্যন্ত এই গ্রহে ১ বছরও পূর্ণ হয়নি!'
        },
        {
          en: 'It is so far from its host star that the star would look like a brilliantly bright spotlight rather than a blazing sun in its sky.',
          hi: 'यह अपने मेजबान तारे से इतनी दूर है कि तारा अपने आकाश में एक धधकते सूरज के बजाय एक शानदार चमकदार स्पॉटलाइट की तरह दिखाई देगा।',
          bn: 'নক্ষত্র থেকে এত দূরে থাকায়, এই গ্রহের আকাশ থেকে মূল নক্ষত্রটিকে সাধারণ সূর্যের বদলে দূরবর্তী এক প্রখর স্পটলাইটের মতো জ্বলতে দেখা যাবে।'
        }
      ]
    }
  },
  {
    id: 'toi-700',
    type: 'Star',
    name: {
      en: 'TOI-700',
      hi: 'टीओआई-700',
      bn: 'টিওআই-৭০০'
    },
    description: {
      en: 'A cool, quiet M-dwarf star discovered by NASA\'s TESS mission to host multiple habitable-zone Earth-sized worlds.',
      hi: 'नासा के टीईएसएस मिशन द्वारा खोजा गया एक शांत लाल बौना तारा, जिसमें कई रहने योग्य पृथ्वी के आकार के ग्रह हैं।',
      bn: 'নাসার টেস (TESS) মিশনের আবিষ্কৃত একটি শান্ত লাল বামন নক্ষত্র, যার চারপাশে বাসযোগ্য অঞ্চলে পৃথিবীর মতো গ্রহ রয়েছে।'
    },
    distance: {
      en: '101.4 Light Years',
      hi: '101.4 प्रकाश वर्ष',
      bn: '১০১.৪ আলোকবর্ষ'
    },
    radius: 15.0,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/toi-700.jpg',
    details: {
      overview: {
        en: 'TOI-700 is a small, quiet red dwarf (M-class) star located about 101.4 light-years away in the southern constellation Dorado. Unlike many young, active red dwarfs that blast lethal stellar flares, TOI-700 is unusually calm and stable, providing a benign environment for its orbiting planets, two of which reside in its habitable zone.',
        hi: 'टीओआई-700 एक छोटा, शांत लाल बौना तारा है जो लगभग 101.4 प्रकाश वर्ष दूर स्थित है। कई अन्य लाल बौनों के विपरीत जो विनाशकारी तारकीय ज्वालाएं छोड़ते हैं, टीओआई-700 असाधारण रूप से शांत और स्थिर है।',
        bn: 'টিওআই-৭০০ হলো ডোরাডো তারামণ্ডলে প্রায় ১০১.৪ আলোকবর্ষ দূরে অবস্থিত একটি শান্ত লাল বামন (M-type) নক্ষত্র। সাধারণত বেশিরভাগ লাল বামন নক্ষত্র মারাত্মক তেজস্ক্রিয় সৌরঝলক বা ফ্লেয়ার ছুড়লেও, টিওআই-৭০০ ব্যতিক্রমীভাবে শান্ত ও স্থির। ফলে এর চারপাশে প্রদক্ষিণরত গ্রহগুলো প্রাণের বিকাশের জন্য অনেক বেশি নিরাপদ ও অনুকূল পরিবেশ পায়।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.40 Solar Masses (40% of our Sun)',
          hi: 'लगभग 0.40 सौर द्रव्यमान (हमारे सूर्य का 40%)',
          bn: 'সূর্যের প্রায় ৪০% (০.৪০ সৌর ভর)'
        },
        diameter: {
          en: 'Approx. 584,000 km (0.42 Solar Radii)',
          hi: 'लगभग 584,000 किमी (0.42 सौर त्रिज्या)',
          bn: 'প্রায় ৫,৮৪,০০০ কি.মি. (সূর্যের ৪২%)'
        },
        gravity: {
          en: 'Higher surface gravity than the Sun due to compact stellar density',
          hi: 'सघन तारकीय घनत्व के कारण सूर्य से अधिक सतह गुरुत्वाकर्षण',
          bn: 'উচ্চ ঘনত্বের কারণে সূর্যের চেয়েও শক্তিশালী পৃষ্ঠীয় মহাকর্ষ'
        }
      },
      atmosphere: {
        en: 'A brilliant, relatively calm red photosphere with an effective temperature around 3,480 K (3,200 °C).',
        hi: 'लगभग 3,480 K (3,200 °C) के प्रभावी तापमान वाला एक शानदार, अपेक्षाकृत शांत लाल फोटोस्फीयर।',
        bn: 'প্রায় ৩,৪৮০ কেলভিন (৩,২০০ °C) তাপমাত্রার একটি উজ্জ্বল অথচ শান্ত লালচে ফটোস্ফিয়ার।'
      },
      orbitAndRotation: {
        en: 'Rotates slowly on its axis, completing a single rotation roughly every 54 Earth days.',
        hi: 'अपनी धुरी पर धीरे-धीरे घूमता है, लगभग हर 54 पृथ्वी दिनों में एक चक्कर पूरा करता है।',
        bn: 'নিজের অক্ষে বেশ ধীরে ঘোরে; একবার সম্পূর্ণ পাক খেতে প্রায় ৫৪ দিন সময় লাগে।'
      },
      moons: {
        en: 'Hosts at least four confirmed planets: TOI-700 b, c, d, and e.',
        hi: 'कम से कम चार पुष्टि किए गए ग्रहों की मेजबानी करता है: टीओआई-700 बी, सी, डी और ई।',
        bn: 'অন্তত ৪টি নিশ্চিত গ্রহ এর চারপাশে রয়েছে: টিওআই-৭০০ b, c, d এবং e।'
      },
      surface: {
        en: 'A glowing convective plasma surface glowing with deep orange-red hues, showing very low magnetic flare activity.',
        hi: 'गहरे नारंगी-लाल रंगों से चमकती एक संवहनी प्लाज्मा सतह, जो बहुत कम चुंबकीय ज्वाला गतिविधि दिखाती है।',
        bn: 'কমলা-লাল আভায় জ্বলতে থাকা একটি শান্ত প্লাজমা পৃষ্ঠ, যাতে ক্ষতিকর সৌরঝড় বা ফ্লেয়ারের প্রভাব নেই বললেই চলে।'
      },
      exploration: {
        en: 'Discovered in 2020 by NASA\'s Transiting Exoplanet Survey Satellite (TESS), hailed as one of the greatest finds in the search for habitable worlds.',
        hi: '2020 में नासा के ट्रांजिटिंग एक्सोप्लैनेट सर्वे सैटेलाइट (TESS) द्वारा खोजा गया।',
        bn: '২০২০ সালে নাসার টেস (TESS) স্পেস টেলিস্কোপ এটি আবিষ্কার করে, যা বাসযোগ্য পৃথিবীর সন্ধানে জ্যোতির্বিজ্ঞানের এক ঐতিহাসিক সাফল্য।'
      },
      didYouKnow: [
        {
          en: 'TOI stands for "TESS Object of Interest", signifying planets and stars cataloged by the TESS spacecraft.',
          hi: 'टीओआई का अर्थ "TESS ऑब्जेक्ट ऑफ इंटरेस्ट" है, जो TESS अंतरिक्ष यान द्वारा सूचीबद्ध ग्रहों और तारों को दर्शाता है।',
          bn: 'TOI-এর পূর্ণরূপ হলো "TESS Object of Interest", অর্থাৎ নাসার টেস মিশনের বিশেষ নজরে থাকা মহাজাগতিক বস্তু।'
        },
        {
          en: 'Because red dwarfs burn their fuel extremely slowly, TOI-700 will continue shining for hundreds of billions of years—long after our Sun has died!',
          hi: 'क्योंकि लाल बौने अपने ईंधन को बहुत धीरे जलाते हैं, टीओआई-700 सैकड़ों अरबों वर्षों तक चमकता रहेगा-हमारे सूर्य के मरने के बहुत बाद!',
          bn: 'লাল বামন নক্ষত্রগুলো খুব ধীরে ধীরে তাদের পারমাণবিক জ্বালানি খরচ করে। ফলে আমাদের সূর্য বিলীন হয়ে যাওয়ার পরও টিওআই-৭০০ আরো শত শত কোটি বছর জ্বলবে!'
        }
      ]
    }
  },
  {
    id: 'toi-700-b',
    type: 'Exoplanet',
    name: {
      en: 'TOI-700 b',
      hi: 'टीओआई-700 बी',
      bn: 'টিওআই-৭০০ বি'
    },
    description: {
      en: 'An Earth-sized rocky world orbiting closest to the red dwarf TOI-700 every 10 days.',
      hi: 'एक पृथ्वी के आकार का चट्टानी ग्रह जो हर 10 दिनों में लाल बौने टीओआई-700 की सबसे निकटतम परिक्रमा करता है।',
      bn: 'পৃথিবীর আকারের একটি পাথুরে গ্রহ, যা লাল বামন নক্ষত্র টিওআই-৭০০ এর সবচেয়ে নিকটবর্তী কক্ষপথে মাত্র ১০ দিনে একবার প্রদক্ষিণ করে।'
    },
    distance: {
      en: '101.4 Light Years',
      hi: '101.4 प्रकाश वर्ष',
      bn: '১০১.৪ আলোকবর্ষ'
    },
    radius: 1.01,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/toi-700-b.jpg',
    details: {
      overview: {
        en: 'TOI-700 b is an Earth-sized terrestrial exoplanet orbiting closest to the star TOI-700. It is a rocky world roughly the same size as Earth, completing an orbit in approximately 9.98 days. Because it orbits so close to its parent star, it is tidally locked and subjected to intense solar radiation, making it significantly warmer than Earth with temperatures around 167 °C (440 K).',
        hi: 'टीओआई-700 बी एक पृथ्वी के आकार का स्थलीय एक्सोप्लैनेट है जो तारे टीओआई-700 की सबसे करीबी परिक्रमा करता है। यह लगभग पृथ्वी के आकार की एक चट्टानी दुनिया है, जो लगभग 9.98 दिनों में एक चक्कर पूरा करती है। अपने तारे के इतने करीब होने के कारण, यह अत्यधिक गर्म है।',
        bn: 'টিওআই-৭০০ বি হলো পৃথিবীর আকারের একটি পাথুরে এক্সোপ্ল্যানেট, যা টিওআই-৭০০ নক্ষত্রের সবচেয়ে ভেতরের কক্ষপথে অবস্থিত। এটি মাত্র ৯.৯৮ দিনে একবার নক্ষত্রকে প্রদক্ষিণ করে। মূল নক্ষত্রের খুব কাছাকাছি থাকায় এটি জোয়ারবদ্ধ (tidally locked) এবং এর উপরিভাগ বেশ উত্তপ্ত (প্রায় ১৬৭ ডিগ্রি সেলসিয়াস বা ৪৪০ কেলভিন)।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.07 Earth masses (1.07 M⊕)',
          hi: 'लगभग 1.07 पृथ्वी द्रव्यमान',
          bn: 'পৃথিবীর চেয়ে সামান্য ভারী (১.০৭ গুণ)'
        },
        diameter: {
          en: 'Approx. 12,900 km (1.01 Earth diameters)',
          hi: 'लगभग 12,900 किमी (1.01 पृथ्वी व्यास)',
          bn: 'প্রায় ১২,৯০০ কি.মি. (পৃথিবীর ১.০১ গুণ)'
        },
        gravity: {
          en: 'Approx. 10.3 m/s² (1.05x Earth gravity)',
          hi: 'लगभग 10.3 m/s² (1.05x पृथ्वी गुरुत्वाकर्षण)',
          bn: 'প্রায় ১০.৩ মি./সে.² (পৃথিবীর চেয়ে ৫% বেশি)'
        }
      },
      atmosphere: {
        en: 'Likely thin or stripped away due to intense stellar wind and radiation from close proximity to the star.',
        hi: 'तारे की निकटता से तीव्र तारकीय हवा और विकिरण के कारण संभवतः पतला या नष्ट हो चुका वायुमंडल।',
        bn: 'নক্ষত্রের চরম সান্নিধ্য ও বিকিরণের কারণে এর বায়ুমণ্ডল হয়তো অত্যন্ত পাতলা অথবা বহু আগেই বিলীন হয়ে গেছে।'
      },
      orbitAndRotation: {
        en: 'Orbits every 9.98 days at a distance of ~9.5 million km (0.0637 AU). Synchronously locked with permanent day and night hemispheres.',
        hi: 'हर 9.98 दिनों में लगभग 95 लाख किमी की दूरी पर परिक्रमा करता है। हमेशा एक ही हिस्सा तारे के सामने रहता है।',
        bn: 'মাত্র ৯.৯৮ দিনে প্রায় ৯৫ লক্ষ কি.মি. দূর দিয়ে নক্ষত্রকে ঘুরে আসে। জোয়ারবদ্ধ থাকায় এর একপাশে চিরন্তন দিন ও অন্যপাশে চিরন্তন রাত থাকে।'
      },
      moons: {
        en: 'None detected (unlikely due to strong stellar tidal forces)',
        hi: 'कोई ज्ञात चंद्रमा नहीं',
        bn: 'কোনো উপগ্রহ নেই (নক্ষত্রের তীব্র মহাকর্ষের কারণে উপগ্রহ থাকা প্রায় অসম্ভব)'
      },
      surface: {
        en: 'A cratered, sun-scorched rocky crust dominated by basaltic plains, heat cracks, and ancient volcanic terrain on its permanent dayside.',
        hi: 'एक गड्ढों वाली, धूप से झुलसी चट्टानी सतह जिसमें बेसाल्टिक मैदान और प्राचीन ज्वालामुखीय भूभाग हैं।',
        bn: 'গর্ত ও লাভাচ্ছন্ন পাথুরে ভূত্বক, যার স্থায়ী দিনের অংশটি প্রচণ্ড তাপে শুষ্ক ও ফাটলযুক্ত।'
      },
      exploration: {
        en: 'Discovered in January 2020 by NASA\'s TESS space observatory using precision transit photometry.',
        hi: 'जनवरी 2020 में नासा के टीईएसएस स्पेस ऑब्जर्वेटरी द्वारा पारगमन फोटोमेट्री का उपयोग करके खोजा गया।',
        bn: '২০২০ সালের জানুয়ারিতে নাসার টেস (TESS) মহাকাশ টেলিস্কোপ নিখুঁত ট্রানজিট ফটোমেট্রি পদ্ধতিতে এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'TOI-700 b is almost a physical twin in size and mass to Earth, but orbits much closer to its sun than Mercury does to ours.',
          hi: 'टीओआई-700 बी आकार और द्रव्यमान में लगभग पृथ्वी का जुड़वां है, लेकिन हमारे बुध की तुलना में अपने सूर्य के बहुत करीब परिक्रमा करता है।',
          bn: 'আকার ও ভরে এটি হুবহু পৃথিবীর যমজের মতো হলেও, এটি আমাদের সৌরজগতের বুধ গ্রহের চেয়েও অনেক বেশি কাছ থেকে তার নক্ষত্রকে প্রদক্ষিণ করে।'
        },
        {
          en: 'Because its host star is an M-dwarf, TOI-700 b receives about 5 times the solar energy that Earth receives from the Sun.',
          hi: 'क्योंकि इसका मेजबान तारा एक लाल बौना है, टीओआई-700 बी को सूर्य से पृथ्वी की तुलना में लगभग 5 गुना अधिक सौर ऊर्जा प्राप्त होती है।',
          bn: 'পৃথিবী সূর্যের কাছ থেকে যে পরিমাণ বিকিরণ পায়, টিওআই-৭০০ বি তার নক্ষত্র থেকে প্রায় ৫ গুণ বেশি সৌরশক্তি গ্রহণ করে।'
        }
      ]
    }
  },
  {
    id: 'toi-700-c',
    type: 'Exoplanet',
    name: {
      en: 'TOI-700 c',
      hi: 'टीओआई-700 सी',
      bn: 'টিওআই-৭০০ সি'
    },
    description: {
      en: 'A warm sub-Neptune exoplanet 2.6 times the size of Earth, enveloped in a thick gaseous atmosphere.',
      hi: 'एक गर्म उप-नेपच्यून एक्सोप्लैनेट जो पृथ्वी के आकार का 2.6 गुना है और घने गैसीय वातावरण से घिरा हुआ है।',
      bn: 'পৃথিবীর আকারের চেয়ে প্রায় ২.৬ গুণ বড় একটি সাব-নেপচুন গ্রহ, যা ঘন গ্যাসীয় বায়ুমণ্ডলে আবৃত।'
    },
    distance: {
      en: '101.4 Light Years',
      hi: '101.4 प्रकाश वर्ष',
      bn: '১০১.৪ আলোকবর্ষ'
    },
    radius: 2.60,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/toi-700-c.jpg',
    details: {
      overview: {
        en: 'TOI-700 c is the second planet from the red dwarf star TOI-700. Unlike its rocky Earth-sized siblings (planets b, d, and e), planet c is a sub-Neptune roughly 2.6 times the radius of Earth and about 7.5 times its mass. It orbits every 16 days and is enveloped in a deep, volatile atmosphere of hydrogen, helium, and steam.',
        hi: 'टीओआई-700 सी लाल बौने तारे टीओआई-700 से दूसरा ग्रह है। अपने चट्टानी पृथ्वी के आकार के सहोदरों (ग्रह बी, डी और ई) के विपरीत, ग्रह सी एक उप-नेपच्यून है जो पृथ्वी की त्रिज्या से लगभग 2.6 गुना बड़ा है।',
        bn: 'টিওআই-৭০০ সি হলো টিওআই-৭০০ নক্ষত্রের দ্বিতীয় গ্রহ। এর অন্য সঙ্গী গ্রহগুলো (b, d, এবং e) পাথুরে ও পৃথিবীর আকারের হলেও, প্ল্যানেট c ব্যতিক্রমীভাবে একটি সাব-নেপচুন (Mini-Neptune)। এটি পৃথিবীর চেয়ে প্রায় ২.৬ গুণ বড় এবং প্রায় ১৬ দিনে নক্ষত্রকে প্রদক্ষিণ করে। এর চারপাশে হাইড্রোজেন ও বাষ্পীয় গ্যাসের একটি ঘন স্তর রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 7.5 Earth masses (7.48 M⊕)',
          hi: 'लगभग 7.5 पृथ्वी द्रव्यमान',
          bn: 'প্রায় ৭.৫ গুণ পৃথিবীর ভর (৭.৪৮ M⊕)'
        },
        diameter: {
          en: 'Approx. 33,100 km (2.60 Earth diameters)',
          hi: 'लगभग 33,100 किमी (2.60 पृथ्वी व्यास)',
          bn: 'প্রায় ৩৩,১০০ কি.মি. (পৃথিবীর ২.৬ গুণ)'
        },
        gravity: {
          en: 'Approx. 10.8 m/s² (1.1x Earth gravity)',
          hi: 'लगभग 10.8 m/s² (1.1x पृथ्वी गुरुत्वाकर्षण)',
          bn: 'প্রায় ১০.৮ মি./সে.² (পৃথিবীর চেয়ে প্রায় ১০% বেশি)'
        }
      },
      atmosphere: {
        en: 'A dense, deep envelope rich in hydrogen, helium, water vapor, and methane with thick hazy clouds.',
        hi: 'हाइड्रोजन, हीलियम, जलवाष्प और मीथेन से समृद्ध एक घना, गहरा आवरण जिसमें घने बादल हैं।',
        bn: 'হাইড্রোজেন, হিলিয়াম, জলীয় বাষ্প এবং মিথেন সমৃদ্ধ একটি সুবিশাল ও ঘন গ্যাসীয় বায়ুমণ্ডল।'
      },
      orbitAndRotation: {
        en: 'Orbits the star every 16.05 days at a distance of ~13.8 million km (0.0925 AU).',
        hi: 'हर 16.05 दिनों में लगभग 1.38 करोड़ किमी (0.0925 AU) की दूरी पर परिक्रमा करता है।',
        bn: 'নক্ষত্র থেকে প্রায় ১ কোটি ৩৮ লক্ষ কি.মি. (০.০৯২৫ AU) দূরত্ব বজায় রেখে প্রতি ১৬.০৫ দিনে একবার প্রদক্ষিণ সম্পন্ন করে।'
      },
      moons: {
        en: 'Unknown (could retain small icy moons or ring particles)',
        hi: 'अज्ञात (संभवतः छोटे बर्फीले चंद्रमा हो सकते हैं)',
        bn: 'অজানা (ক্ষুদ্র বরফাবৃত উপগ্রহ বা বলয় থাকার সম্ভাবনা রয়েছে)'
      },
      surface: {
        en: 'Lacks a solid rocky surface; hot compressed atmospheric layers transition smoothly into a supercritical mantle.',
        hi: 'एक ठोस चट्टानी सतह का अभाव है; गर्म संपीड़ित वायुमंडलीय परतें तरल में विलीन हो जाती हैं।',
        bn: 'কোনো নির্দিষ্ট কঠিন পৃষ্ঠ নেই; উচ্চ চাপ ও তাপমাত্রায় গ্যাসীয় স্তর ধীরে ধীরে সুপারক্রিটিকাল তরল স্তরে রূপান্তরিত হয়েছে।'
      },
      exploration: {
        en: 'Discovered in 2020 by NASA\'s TESS mission alongside planets b and d.',
        hi: 'नासा के टीईएसएस मिशन द्वारा 2020 में ग्रह बी और डी के साथ खोजा गया।',
        bn: '২০২০ সালে নাসার টেস (TESS) মিশন গ্রহ b এবং d এর সাথেই এটিকে আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'TOI-700 c is a "system oddball": inside a system of compact terrestrial planets, it is the only large gaseous sub-Neptune!',
          hi: 'टीओआई-700 सी एक अनोखा ग्रह है: चट्टानी स्थलीय ग्रहों की इस प्रणाली में, यह एकमात्र बड़ा गैसीय उप-नेपच्यून है!',
          bn: 'টিওআই-৭০০ সৌরজগতে এটি একটি ব্যতিক্রমী গ্রহ: বাকি সবগুলো গ্রহ পাথুরে ও পৃথিবীর আকারের হলেও, একমাত্র এটিই সুবিশাল গ্যাসীয় সাব-নেপচুন!'
        },
        {
          en: 'Its discovery helps astronomers understand the "radius valley"—the mystery of why planets between 1.5 and 2.0 Earth radii are rare in our galaxy.',
          hi: 'इसकी खोज खगोलविदों को "रेडियस वैली" को समझने में मदद करती है।',
          bn: 'এর আবিষ্কার জ্যোতির্বিজ্ঞানীদের গ্যালাক্সির "রেডিয়াস ভ্যালি" (Radius Valley) রহস্য উন্মোচনে সাহায্য করেছে।'
        }
      ]
    }
  },
  {
    id: 'toi-700-e',
    type: 'Exoplanet',
    name: {
      en: 'TOI-700 e',
      hi: 'টিओआई-700 ई',
      bn: 'টিওআই-৭০০ ই'
    },
    description: {
      en: 'An Earth-sized rocky world residing in the optimistic habitable zone, orbiting its star every 28 days.',
      hi: 'आशावादी रहने योग्य क्षेत्र में स्थित पृथ्वी के आकार की एक चट्टानी दुनिया, जो हर 28 दिनों में अपने तारे की परिक्रमा करती है।',
      bn: 'সম্ভাব্য বাসযোগ্য অঞ্চলে অবস্থিত পৃথিবীর আকারের একটি পাথুরে গ্রহ, যা প্রতি ২৮ দিনে নক্ষত্রকে প্রদক্ষিণ করে।'
    },
    distance: {
      en: '101.4 Light Years',
      hi: '101.4 प्रकाश वर्ष',
      bn: '১০১.৪ আলোকবর্ষ'
    },
    radius: 0.95,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/toi-700-e.jpg',
    details: {
      overview: {
        en: 'TOI-700 e is a rocky, Earth-sized exoplanet discovered in the optimistic habitable zone of the red dwarf TOI-700. Roughly 95% the size of Earth, it takes 27.8 days to complete an orbit between planets c and d. It receives about 85% of the energy Earth gets from the Sun, meaning surface liquid water could theoretically exist under the right atmospheric blanket.',
        hi: 'टीओआई-700 ई एक चट्टानी, पृथ्वी के आकार का एक्सोप्लैनेट है जो लाल बौने तारे टीओआई-700 के रहने योग्य क्षेत्र में खोजा गया है। यह लगभग पृथ्वी के आकार का 95% है और ग्रह सी और डी के बीच 27.8 दिनों में एक चक्कर पूरा करता है। इसे सूर्य से पृथ्वी को मिलने वाली ऊर्जा का लगभग 85% प्राप्त होता है।',
        bn: 'টিওআই-৭০০ ই হলো টিওআই-৭০০ নক্ষত্রের বাসযোগ্য অঞ্চলে (Habitable Zone) আবিষ্কৃত পৃথিবীর আকারের একটি পাথুরে গ্রহ। এটি আকারে পৃথিবীর প্রায় ৯৫% (০.৯৫ গুণ) এবং প্ল্যানেট c ও d এর মাঝামাঝি কক্ষপথে প্রায় ২৭.৮ দিনে নক্ষত্রকে প্রদক্ষিণ করে। এটি পৃথিবী সূর্যের কাছ থেকে প্রাপ্ত শক্তির প্রায় ৮৫% সৌরশক্তি গ্রহণ করে, যার ফলে অনুকূল বায়ুমণ্ডলে এর পৃষ্ঠে তরল পানি থাকার প্রবল সম্ভাবনা রয়েছে।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 0.82 - 0.85 Earth masses (estimated)',
          hi: 'लगभग 0.82 - 0.85 पृथ्वी द्रव्यमान (अनुमानित)',
          bn: 'আনুমানিক পৃথিবীর ভরের ০.৮২ - ০.৮৫ গুণ'
        },
        diameter: {
          en: 'Approx. 12,140 km (0.95 Earth diameters)',
          hi: 'लगभग 12,140 किमी (0.95 पृथ्वी व्यास)',
          bn: 'প্রায় ১২,১৪০ কি.মি. (পৃথিবীর ৯৫%)'
        },
        gravity: {
          en: 'Approx. 8.9 m/s² (0.91x Earth gravity)',
          hi: 'लगभग 8.9 m/s² (0.91x पृथ्वी गुरुत्वाकर्षण)',
          bn: 'প্রায় ৮.৯ মি./সে.² (পৃথিবীর চেয়ে কিছুটা কম)'
        }
      },
      atmosphere: {
        en: 'Potentially retains a moderate secondary atmosphere protected from violent stellar flares due to the host star\'s quiet nature.',
        hi: 'शांत तारे के कारण हिंसक ज्वालाओं से सुरक्षित एक मध्यम माध्यमिक वायुमंडल बनाए रखने की क्षमता।',
        bn: 'শান্ত প্রকৃতির নক্ষত্রের কারণে তীব্র সৌরঝড়ের হাত থেকে বেঁচে থাকা একটি মধ্যম ঘনত্বের বায়ুমণ্ডল বজায় থাকার জোরালো সম্ভাবনা রয়েছে।'
      },
      orbitAndRotation: {
        en: 'Orbits every 27.8 Earth days at a distance of ~20 million km (0.134 AU). Likely tidally locked with potential temperate twilight zones.',
        hi: 'हर 27.8 पृथ्वी दिनों में लगभग 2 करोड़ किमी की दूरी पर परिक्रमा करता है।',
        bn: 'নক্ষত্র থেকে প্রায় ২ কোটি কি.মি. (০.১৩৪ AU) দূরত্বে থেকে প্রতি ২৭.৮ দিনে এক পাক সম্পন্ন করে। সম্ভবত জোয়ারবদ্ধ হওয়ায় এর দিন-রাতের মিলনস্থলে নাতিশীতোষ্ণ বলয় থাকতে পারে।'
      },
      moons: {
        en: 'None detected',
        hi: 'कोई ज्ञात चंद्रमा नहीं',
        bn: 'কোনো উপগ্রহ শনাক্ত হয়নি'
      },
      surface: {
        en: 'A solid terrestrial surface consisting of rocky mountain ridges, basalt basins, and potential liquid water lakes or ice caps depending on atmospheric pressure.',
        hi: 'पहाड़ी चट्टानी चोटियों, बेसाल्ट घाटियों और संभावित झीलों या बर्फ की परतों वाली एक ठोस सतह।',
        bn: 'পাথুরে পাহাড়ের সারি, বেসাল্ট অববাহিকা এবং বায়ুমণ্ডলীয় চাপের ওপর নির্ভর করে তরল পানির জলাশয় বা বরফের চাদরযুক্ত কঠিন ভূত্বক।'
      },
      exploration: {
        en: 'Discovered in January 2023 by a team led by Emily Gilbert using additional observation years from NASA\'s TESS satellite.',
        hi: 'नासा के टीईएसएस उपग्रह से अतिरिक्त अवलोकन डेटा का उपयोग करके जनवरी 2023 में खोजा गया।',
        bn: 'নাসার টেস (TESS) স্যাটেলাইটের ধারাবাহিক পর্যবেক্ষণের মাধ্যমে ২০২৩ সালের জানুয়ারিতে এমিলি গিলবার্টের নেতৃত্বাধীন দল এটি আবিষ্কার করে।'
      },
      didYouKnow: [
        {
          en: 'The discovery of TOI-700 e made the TOI-700 system one of only a few known stellar systems hosting multiple small, habitable-zone planets (along with TRAPPIST-1).',
          hi: 'टीओआई-700 ई की खोज ने टीओआई-700 प्रणाली को रहने योग्य क्षेत्र में कई छोटे ग्रहों की मेजबानी करने वाले कुछ ज्ञात तारा प्रणालियों में से एक बना दिया।',
          bn: 'টিওআই-৭০০ ই আবিষ্কারের মাধ্যমে টিওআই-৭০০ সৌরজগৎ ট্রাপিস্ট-১ এর মতোই এমন এক বিরল সিস্টেমে পরিণত হয়েছে, যার বাসযোগ্য অঞ্চলেই একাধিক পৃথিবী-আকারের গ্রহ রয়েছে।'
        },
        {
          en: 'It orbits nicely in the sweet spot between its gaseous sibling (planet c) and its outer habitable sister (planet d).',
          hi: 'यह अपने गैसीय सहोदर (ग्रह सी) और अपने बाहरी रहने योग्य साथी (ग्रह डी) के बीच एक आदर्श दूरी पर परिक्रमा करता है।',
          bn: 'এটি গ্যাসীয় গ্রহ c এবং বাইরের বাসযোগ্য গ্রহ d এর মাঝামাঝি চমৎকার নাতিশীতোষ্ণ দূরত্বের কক্ষপথে অবস্থান করছে।'
        }
      ]
    }
  },
  {
    id: 'toi-700-d',
    type: 'Exoplanet',
    name: {
      en: 'TOI-700 d',
      hi: 'टीओआई-700 डी',
      bn: 'টিওআই-৭০০ ডি'
    },
    description: {
      en: 'A confirmed Earth-sized world orbiting comfortably within its star\'s habitable zone, capable of hosting liquid water oceans.',
      hi: 'अपने तारे के रहने योग्य क्षेत्र में आराम से परिक्रमा करने वाला एक पृथ्वी के आकार का ग्रह, जो तरल पानी के महासागरों की मेजबानी करने में सक्षम है।',
      bn: 'নক্ষত্রের মূল বাসযোগ্য অঞ্চলে ঘূর্ণায়মান পৃথিবীর আকারের একটি নিশ্চিত গ্রহ, যেখানে তরল পানির সমুদ্র থাকার জোরালো সম্ভাবনা রয়েছে।'
    },
    distance: {
      en: '101.4 Light Years',
      hi: '101.4 प्रकाश वर्ष',
      bn: '১০১.৪ আলোকবর্ষ'
    },
    radius: 1.14,
    modelType: 'texture',
    modelPath: 'https://res.cloudinary.com/eek2fkwv/image/upload/f_auto,q_auto/toi-700-d.jpg',
    details: {
      overview: {
        en: 'TOI-700 d is an Earth-sized exoplanet orbiting within the conservative habitable zone of the red dwarf TOI-700. It is roughly 1.14 times the size of Earth and orbits its star every 37.4 days. Because its host star is remarkably quiet and lacks violent stellar flares, TOI-700 d is considered one of the prime candidates in the entire galaxy for temperate climate and surface liquid water oceans.',
        hi: 'टीओआई-700 डी एक पृथ्वी के आकार का एक्सोप्लैनेट है जो लाल बौने तारे टीओआई-700 के रूढ़िवादी रहने योग्य क्षेत्र में परिक्रमा करता है। यह पृथ्वी के आकार का लगभग 1.14 गुना है और हर 37.4 दिनों में अपने तारे की परिक्रमा करता है। क्योंकि इसका मेजबान तारा उल्लेखनीय रूप से शांत है, टीओआई-700 डी को पूरे ब्रह्मांड में तरल पानी के लिए प्रमुख उम्मीदवारों में से एक माना जाता है।',
        bn: 'টিওআই-৭০০ ডি হলো টিওআই-৭০০ নক্ষত্রের মূল বাসযোগ্য অঞ্চলে (Conservative Habitable Zone) অবস্থিত পৃথিবীর আকারের একটি পাথুরে এক্সোপ্ল্যানেট। এটি পৃথিবীর চেয়ে প্রায় ১৪% বড় (১.১৪ গুণ) এবং প্রতি ৩৭.৪ দিনে নক্ষত্রকে একবার প্রদক্ষিণ করে। মূল নক্ষত্রটি শান্ত ও ধ্বংসাত্মক সৌরঝড়মুক্ত হওয়ায়, গ্যালাক্সিতে তরল পানির সমুদ্র ও প্রাণের বিকাশের উপযোগী সেরা প্রার্থী গ্রহগুলোর মধ্যে এটি অন্যতম।'
      },
      physicalCharacteristics: {
        mass: {
          en: 'Approx. 1.25 - 1.72 Earth masses',
          hi: 'लगभग 1.25 - 1.72 पृथ्वी द्रव्यमान',
          bn: 'আনুমানিক পৃথিবীর ভরের ১.২৫ - ১.৭২ গুণ'
        },
        diameter: {
          en: 'Approx. 14,500 km (1.14 Earth diameters)',
          hi: 'लगभग 14,500 किमी (1.14 पृथ्वी व्यास)',
          bn: 'প্রায় ১৪,৫০০ কি.মি. (পৃথিবীর ১.১৪ গুণ)'
        },
        gravity: {
          en: 'Approx. 11.2 m/s² (1.14x Earth gravity)',
          hi: 'लगभग 11.2 m/s² (1.14x पृथ्वी गुरुत्वाकर्षण)',
          bn: 'প্রায় ১১.২ মি./সে.² (পৃথিবীর চেয়ে ১৪% বেশি)'
        }
      },
      atmosphere: {
        en: 'NASA computer climate models predict a dense, Earth-like nitrogen-oxygen or carbon dioxide rich atmosphere capable of preventing oceans from freezing or evaporating.',
        hi: 'नासा के जलवायु मॉडल एक घने वायुमंडल की भविष्यवाणी करते हैं जो महासागरों को जमने या वाष्पित होने से रोकने में सक्षम है।',
        bn: 'নাসার কম্পিউটার ক্লাইমেট মডেল অনুযায়ী, এতে নাইট্রোজেন, কার্বন ডাই-অক্সাইড বা অক্সিজেন সমৃদ্ধ একটি ঘন বায়ুমণ্ডল থাকতে পারে যা পানিকে জমাট বাঁধা বা বাষ্পীভূত হওয়া থেকে রক্ষা করে।'
      },
      orbitAndRotation: {
        en: 'Orbits every 37.42 Earth days at ~24.4 million km (0.163 AU). Tidally locked, likely resulting in an "eyeball world" with a central ocean facing the star.',
        hi: 'हर 37.42 पृथ्वी दिनों में लगभग 2.44 करोड़ किमी की दूरी पर परिक्रमा करता है। हमेशा एक ही हिस्सा तारे के सामने रहता है।',
        bn: 'নক্ষত্র থেকে প্রায় ২ কোটি ৪৪ লক্ষ কি.মি. (০.১৬৩ AU) দূরত্ব বজায় রেখে প্রতি ৩৭.৪২ দিনে এক পাক পূর্ণ করে। জোয়ারবদ্ধ হওয়ায় এর তারামুখী অংশে উন্মুক্ত নীল সমুদ্র থাকতে পারে।'
      },
      moons: {
        en: 'None detected',
        hi: 'कोई ज्ञात चंद्रमा नहीं',
        bn: 'কোনো উপগ্রহ শনাক্ত হয়নি'
      },
      surface: {
        en: 'May be an ocean-covered aquatic world or a terrestrial planet with continents, rolling hills, and expansive blue seas surrounded by coastal clouds.',
        hi: 'एक महासागर से ढकी जलीय दुनिया या महाद्वीपों, हरी पहाड़ियों और नीले समुद्रों वाला एक स्थलीय ग्रह हो सकता है।',
        bn: 'সমগ্র পৃষ্ঠ বিশাল জলরাশি ও সমুদ্রে ঢাকা হতে পারে অথবা মহাদেশ, উপকূলীয় সমভূমি ও নীল মহাসাগরে ঘেরা বৈচিত্র্যময় এক ভূত্বক।'
      },
      exploration: {
        en: 'Discovered in January 2020 by NASA\'s TESS spacecraft and confirmed via observations with the Spitzer Space Telescope.',
        hi: 'जनवरी 2020 में नासा के TESS अंतरिक्ष यान द्वारा खोजा गया और स्पिट्जर स्पेस टेलीस्कोप द्वारा पुष्टि की गई।',
        bn: '২০২০ সালের জানুয়ারিতে নাসার টেস (TESS) মিশন এটি আবিষ্কার করে এবং স্পিটজার স্পেস টেলিস্কোপ দ্বারা এর সত্যতা নিশ্চিত করা হয়।'
      },
      didYouKnow: [
        {
          en: 'TOI-700 d is historic: it was the very first Earth-sized planet in a habitable zone discovered by NASA\'s TESS planet-hunter telescope!',
          hi: 'टीओआई-700 डी ऐतिहासिक है: यह नासा के TESS टेलिस्कोप द्वारा रहने योग्य क्षेत्र में खोजा गया पहला पृथ्वी के आकार का ग्रह था!',
          bn: 'টিওআই-৭০০ ডি ঐতিহাসিক: এটি নাসার গ্রহ-শিকারী টেলিস্কোপ টেস (TESS) দ্বারা বাসযোগ্য অঞ্চলে আবিষ্কৃত ইতিহাসের সর্বপ্রথম পৃথিবী-আকারের গ্রহ!'
        },
        {
          en: 'It receives 86% of the stellar energy that Earth receives from the Sun, making its natural lighting and temperature remarkably Earth-like.',
          hi: 'इसे सूर्य से पृथ्वी को मिलने वाली तारकीय ऊर्जा का 86% प्राप्त होता है, जिससे इसका प्रकाश और तापमान काफी हद तक पृथ्वी जैसा हो जाता है।',
          bn: 'এটি পৃথিবী সূর্যের কাছ থেকে যে শক্তি পায় তার প্রায় ৮৬% শক্তি পায়, যার ফলে এর আলো ও আবহাওয়া অনেকটাই পৃথিবীর সাথে তুলনীয়।'
        }
      ]
    }
  }
];
