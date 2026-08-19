import { LocalizedString } from './planets';

export interface MissionObjective {
  id: string;
  instruction: LocalizedString;
  targetPlanetId: string; // The planet the user must click to pass
  successMessage: LocalizedString;
  hint: LocalizedString;
}

export interface MissionQuiz {
  question: LocalizedString;
  options: LocalizedString[]; // 4 options
  correctIndex: number;
  explanation: LocalizedString;
}

export interface Mission {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  objectives: MissionObjective[];
  finalQuiz: MissionQuiz;
}

export const missions: Mission[] = [
  {
    id: 'journey-to-mars',
    title: { en: 'Journey to Mars', hi: 'मंगल की यात्रा', bn: 'মঙ্গলে যাত্রা' },
    description: { 
      en: 'Locate the Red Planet and prove your knowledge.', 
      hi: 'लाल ग्रह का पता लगाएँ और अपना ज्ञान साबित करें।', 
      bn: 'লাল গ্রহ সনাক্ত করুন এবং আপনার জ্ঞান প্রমাণ করুন।' 
    },
    objectives: [
      {
        id: 'find-mars',
        instruction: { en: 'Find Mars in the Solar System.', hi: 'सौर मंडल में मंगल ग्रह खोजें।', bn: 'সৌরজগতে মঙ্গল গ্রহ খুঁজুন।' },
        targetPlanetId: 'mars',
        successMessage: { en: 'Excellent! You found Mars.', hi: 'बहुत बढ़िया! आपने मंगल ग्रह ढूंढ लिया।', bn: 'চমৎকার! আপনি মঙ্গল গ্রহ খুঁজে পেয়েছেন।' },
        hint: { en: 'Look for the small red planet, the 4th from the Sun.', hi: 'सूर्य से चौथे छोटे लाल ग्रह की तलाश करें।', bn: 'সূর্য থেকে চতুর্থ ছোট লাল গ্রহটি খুঁজুন।' }
      }
    ],
    finalQuiz: {
      question: { en: 'Why is Mars known as the Red Planet?', hi: 'मंगल को लाल ग्रह क्यों कहा जाता है?', bn: 'মঙ্গলকে কেন লাল গ্রহ বলা হয়?' },
      options: [
        { en: 'It is very hot', hi: 'यह बहुत गर्म है', bn: 'এটি খুব গরম' },
        { en: 'Iron oxide on its surface', hi: 'इसकी सतह पर आयरन ऑक्साइड है', bn: 'এর পৃষ্ঠে আয়রন অক্সাইড' },
        { en: 'Red clouds', hi: 'लाल बादल', bn: 'লাল মেঘ' },
        { en: 'Reflection from the Sun', hi: 'सूर्य से परावर्तन', bn: 'সূর্য থেকে প্রতিফলন' }
      ],
      correctIndex: 1,
      explanation: { en: 'Mars is covered in iron oxide, which is essentially rust!', hi: 'मंगल आयरन ऑक्साइड से ढका है, जो असल में जंग है!', bn: 'মঙ্গল আয়রন অক্সাইড দিয়ে আবৃত, যা মূলত মরিচা!' }
    }
  },
  {
    id: 'meet-jupiter',
    title: { en: 'Meet Jupiter', hi: 'बृहस्पति से मिलें', bn: 'বৃহস্পতির সাথে দেখা করুন' },
    description: { 
      en: 'Identify the largest planet in our solar system.', 
      hi: 'हमारे सौर मंडल के सबसे बड़े ग्रह की पहचान करें।', 
      bn: 'আমাদের সৌরজগতের বৃহত্তম গ্রহটি সনাক্ত করুন।' 
    },
    objectives: [
      {
        id: 'find-jupiter',
        instruction: { en: 'Locate the gas giant Jupiter.', hi: 'गैस दानव बृहस्पति का पता लगाएँ।', bn: 'গ্যাসীয় দৈত্য বৃহস্পতি সনাক্ত করুন।' },
        targetPlanetId: 'jupiter',
        successMessage: { en: 'Correct! Jupiter is massive.', hi: 'सही! बृहस्पति विशाल है।', bn: 'সঠিক! বৃহস্পতি বিশাল।' },
        hint: { en: 'It is the largest planet and the 5th from the Sun.', hi: 'यह सबसे बड़ा ग्रह है और सूर्य से 5वें स्थान पर है।', bn: 'এটি বৃহত্তম গ্রহ এবং সূর্য থেকে পঞ্চম স্থানে রয়েছে।' }
      }
    ],
    finalQuiz: {
      question: { en: 'What is Jupiter primarily made of?', hi: 'बृहस्पति मुख्य रूप से किससे बना है?', bn: 'বৃহস্পতি প্রধানত কী দিয়ে তৈরি?' },
      options: [
        { en: 'Rock and Iron', hi: 'चट्टान और लोहा', bn: 'পাথর এবং লোহা' },
        { en: 'Water and Ice', hi: 'पानी और बर्फ', bn: 'জল এবং বরফ' },
        { en: 'Hydrogen and Helium', hi: 'हाइड्रोजन और हीलियम', bn: 'হাইড্রোজেন এবং হিলিয়াম' },
        { en: 'Carbon Dioxide', hi: 'कार्बन डाइऑक्साइड', bn: 'কার্বন ডাই অক্সাইড' }
      ],
      correctIndex: 2,
      explanation: { en: 'Jupiter is a gas giant made almost entirely of Hydrogen and Helium.', hi: 'बृहस्पति एक गैस दानव है जो लगभग पूरी तरह से हाइड्रोजन और हीलियम से बना है।', bn: 'বৃহস্পতি একটি গ্যাসীয় দৈত্য যা প্রায় সম্পূর্ণভাবে হাইড্রোজেন এবং হিলিয়াম দিয়ে তৈরি।' }
    }
  }
];
