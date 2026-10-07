import { LocalizedString } from './planets';

export interface LessonStep {
  title: LocalizedString;
  content: LocalizedString;
  statHighlight?: { label: LocalizedString; value: LocalizedString };
  targetPlanetId?: string; // which planet to focus the 3D camera on
}

export interface Lesson {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  steps: LessonStep[];
}

export const lessons: Lesson[] = [
  {
    id: 'solar-system-intro',
    title: { en: 'The Solar System', hi: 'सौर मंडल', bn: 'সৌরজগত' },
    description: {
      en: 'An introduction to our cosmic neighborhood, the Sun, and the planets.',
      hi: 'हमारे ब्रह्मांडीय पड़ोस, सूर्य और ग्रहों का एक परिचय।',
      bn: 'আমাদের মহাজাগতিক প্রতিবেশী, সূর্য এবং গ্রহগুলির একটি ভূমিকা।'
    },
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    steps: [
      {
        title: { en: 'Our Star', hi: 'हमारा तारा', bn: 'আমাদের তারা' },
        content: {
          en: 'Everything in our solar system orbits the Sun. It contains 99.8% of the mass in the entire system.',
          hi: 'हमारे सौर मंडल की हर चीज सूर्य की परिक्रमा करती है। इसमें पूरे सिस्टम का 99.8% द्रव्यमान है।',
          bn: 'আমাদের সৌরজগতের সবকিছু সূর্যকে প্রদক্ষিণ করে। এতে পুরো সিস্টেমের ভরের ৯৯.৮% রয়েছে।'
        },
        targetPlanetId: 'sun',
        statHighlight: {
          label: { en: 'Mass', hi: 'द्रव्यमान', bn: 'ভর' },
          value: { en: '99.8%', hi: '99.8%', bn: '৯৯.৮%' }
        }
      },
      {
        title: { en: 'The Inner Planets', hi: 'आंतरिक ग्रह', bn: 'অভ্যন্তরীণ গ্রহ' },
        content: {
          en: 'Mercury, Venus, Earth, and Mars are the terrestrial planets. They are small, rocky, and close to the Sun.',
          hi: 'बुध, शुक्र, पृथ्वी और मंगल स्थलीय ग्रह हैं। वे छोटे, चट्टानी और सूर्य के करीब हैं।',
          bn: 'বুধ, শুক্র, পৃথিবী এবং মঙ্গল হল স্থলজ গ্রহ। তারা ছোট, পাথুরে এবং সূর্যের কাছাকাছি।'
        },
        targetPlanetId: 'earth'
      },
      {
        title: { en: 'The Gas Giants', hi: 'गैस दानव', bn: 'গ্যাসীয় দৈত্য' },
        content: {
          en: 'Jupiter and Saturn are massive planets made mostly of hydrogen and helium.',
          hi: 'बृहस्पति और शनि मुख्य रूप से हाइड्रोजन और हीलियम से बने विशाल ग्रह हैं।',
          bn: 'বৃহস্পতি এবং শনি প্রধানত হাইড্রোজেন এবং হিলিয়াম দিয়ে তৈরি বিশাল গ্রহ।'
        },
        targetPlanetId: 'jupiter'
      }
    ]
  },
  {
    id: 'mars-exploration',
    title: { en: 'Mars: The Red Planet', hi: 'मंगल: लाल ग्रह', bn: 'মঙ্গল: লাল গ্রহ' },
    description: {
      en: 'Discover why Mars has captivated human imagination and exploration.',
      hi: 'जानें कि मंगल ग्रह ने मानव कल्पना और अन्वेषण को क्यों आकर्षित किया है।',
      bn: 'আবিষ্কার করুন কেন মঙ্গল গ্রহ মানুষের কল্পনা এবং অন্বেষণকে মুগ্ধ করেছে।'
    },
    difficulty: 'Beginner',
    estimatedMinutes: 3,
    steps: [
      {
        title: { en: 'A Rusty World', hi: 'एक जंग लगी दुनिया', bn: 'একটি মরিচা ধরা বিশ্ব' },
        content: {
          en: 'Mars gets its red color from iron oxide (rust) on its surface.',
          hi: 'मंगल को अपना लाल रंग उसकी सतह पर मौजूद आयरन ऑक्साइड (जंग) से मिलता है।',
          bn: 'মঙ্গল তার পৃষ্ঠে আয়রন অক্সাইড (মরিচা) থেকে এর লাল রঙ পায়।'
        },
        targetPlanetId: 'mars'
      },
      {
        title: { en: 'Thin Atmosphere', hi: 'पतला वायुमंडल', bn: 'পাতলা বায়ুমণ্ডল' },
        content: {
          en: 'The Martian atmosphere is 100 times thinner than Earth\'s and mostly carbon dioxide.',
          hi: 'मंगल ग्रह का वायुमंडल पृथ्वी की तुलना में 100 गुना पतला है और इसमें ज्यादातर कार्बन डाइऑक्साइड है।',
          bn: 'মঙ্গলের বায়ুমণ্ডল পৃথিবীর চেয়ে ১০০ গুণ পাতলা এবং বেশিরভাগই কার্বন ডাই অক্সাইড।'
        }
      }
    ]
  }
];
