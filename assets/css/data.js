/* ============================================================
   আমাদের রুদ্রপাড়া — কেন্দ্রীয় ডাটা ফাইল
   
   ⚠️ এখানে সব তথ্য সম্পাদনা করুন।
   
   ছবি যোগ করতে:
   ১. assets/images/ সংশ্লিষ্ট ফোল্ডারে ছবি আপলোড করুন
   ২. image: 'village/filename.jpg' এভাবে লিখুন
   ============================================================ */

function svgImg(label, c1 = '#0a2540', c2 = '#10b981') {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <circle cx="680" cy="100" r="120" fill="white" opacity="0.06"/>
    <circle cx="120" cy="500" r="140" fill="white" opacity="0.05"/>
    <text x="400" y="310" font-family="Hind Siliguri, Noto Sans Bengali, sans-serif"
      font-size="44" font-weight="600" fill="white" text-anchor="middle" opacity="0.95">${label}</text>
  </svg>`;
  return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
}

const SITE = {
  name: 'আমাদের রুদ্রপাড়া',
  tagline: 'আমাদের গ্রাম, আমাদের পরিচয়',
  developer: 'রমজান জাইন',
  copyright: '© ২০২৬ আমাদের রুদ্রপাড়া | সর্বস্বত্ব সংরক্ষিত।'
};

const villageInfo = {
  history: 'রুদ্রপাড়া গ্রামের ইতিহাস শতাব্দী প্রাচীন। এখানে বিভিন্ন সময়ে বিভিন্ন পরিবার এসে বসতি স্থাপন করেছে। গ্রামের নামকরণ নিয়ে একাধিক জনশ্রুতি প্রচলিত আছে। (এই তথ্যগুলো স্যাম্পল — প্রকৃত তথ্য দিয়ে আপডেট করুন।)',
  introduction: 'রুদ্রপাড়া একটি শান্তিপূর্ণ ও সম্প্রদায়বান্ধব গ্রাম। এখানে প্রায় ৫০০ পরিবারের বসবাস। কৃষি, ব্যবসা ও চাকরিতে জীবিকা নির্বাহ করেন গ্রামবাসী। (স্যাম্পল তথ্য)',
  location: 'গ্রামটি জেলার সদর উপজেলার উত্তর-পূর্ব অংশে অবস্থিত। নিকটতম বাজার ও থানা থেকে সড়কপথে সহজেই পৌঁছানো যায়। (স্যাম্পল তথ্য)',
  heritage: 'গ্রামের ঐতিহ্যের মধ্যে রয়েছে বার্ষিক ঈদ জামাত, বর্ষবরণ অনুষ্ঠান ও কৃষি উৎসব। পুরোনো মসজিদ ও বটগাছ গ্রামের পরিচয়ের অংশ। (স্যাম্পল)',
  culture: 'গ্রামের মানুষ বাঙালি সংস্কৃতির অনুসারী। পহেলা বৈশাখ, ঈদ, পূজা সহ সকল ধর্মীয় ও সাংস্কৃতিক উৎসব একসাথে পালিত হয়। (স্যাম্পল)',
  specialty: 'রুদ্রপাড়া গ্রাম শিক্ষা ও ক্রীড়ায় অগ্রগামী। এখানে একটি ফুটবল ক্লাব ও একাধিক শিক্ষাপ্রতিষ্ঠান রয়েছে। (স্যাম্পল)'
};

const importantPlaces = [
  { category: 'মসজিদ', name: 'রুদ্রপাড়া কেন্দ্রীয় জামে মসজিদ', image: svgImg('মসজিদ', '#0a2540', '#10b981'), address: 'গ্রামের কেন্দ্রস্থল, রুদ্রপাড়া', description: 'গ্রামের প্রধান মসজিদ — স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'মসজিদ', name: 'পূর্ব পাড়া জামে মসজিদ', image: svgImg('পূর্বপাড়া মসজিদ', '#15305a', '#059669'), address: 'পূর্ব পাড়া, রুদ্রপাড়া', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'মাদ্রাসা', name: 'রুদ্রপাড়া হাফিজিয়া মাদ্রাসা', image: svgImg('মাদ্রাসা', '#0a2540', '#047857'), address: 'পশ্চিম পাড়া, রুদ্রপাড়া', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'শিক্ষাপ্রতিষ্ঠান', name: 'রুদ্রপাড়া সরকারি প্রাথমিক বিদ্যালয়', image: svgImg('প্রাথমিক বিদ্যালয়', '#15305a', '#10b981'), address: 'গ্রামের কেন্দ্রস্থল', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'শিক্ষাপ্রতিষ্ঠান', name: 'রুদ্রপাড়া উচ্চ বিদ্যালয়', image: svgImg('উচ্চ বিদ্যালয়', '#0a2540', '#059669'), address: 'পূর্ব পাড়া, রুদ্রপাড়া', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'বাজার', name: 'রুদ্রপাড়া বাজার', image: svgImg('বাজার', '#15305a', '#047857'), address: 'বাজার সড়ক, রুদ্রপাড়া', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'হাসপাতাল', name: 'রুদ্রপাড়া কমিউনিটি হাসপাতাল', image: svgImg('হাসপাতাল', '#0a2540', '#10b981'), address: 'মূল সড়ক, রুদ্রপাড়া', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' },
  { category: 'ক্লিনিক', name: 'আল-শেফা ডায়াগনস্টিক সেন্টার', image: svgImg('ক্লিনিক', '#15305a', '#059669'), address: 'বাজার সংলগ্ন', description: 'স্যাম্পল তথ্য।', contact: '০১৭XXXXXXXX' }
];

const people = [
  { name: 'মোঃ নমুনা ব্যক্তি', image: svgImg('নমুনা', '#15305a', '#10b981'), title: 'গ্রামের বিশিষ্ট ব্যক্তি', category: 'বিশিষ্ট ব্যক্তি', profession: 'অবসরপ্রাপ্ত শিক্ষক', address: 'রুদ্রপাড়া', contact: '০১৭XXXXXXXX', bio: 'স্যাম্পল তথ্য — প্রকৃত তথ্য ব্যবহারকারীর অনুমতি নিয়ে যুক্ত করুন।' },
  { name: 'মোঃ নমুনা শিক্ষক', image: svgImg('শিক্ষক', '#0a2540', '#059669'), title: 'প্রধান শিক্ষক', category: 'শিক্ষক', profession: 'শিক্ষক', address: 'রুদ্রপাড়া', contact: '', bio: 'স্যাম্পল তথ্য।' },
  { name: 'নমুনা সমাজসেবক', image: svgImg('সমাজসেবক', '#15305a', '#047857'), title: 'সমাজসেবক', category: 'সমাজসেবক', profession: 'ব্যবসা', address: 'রুদ্রপাড়া', contact: '০১৭XXXXXXXX', bio: 'স্যাম্পল তথ্য।' },
  { name: 'নমুনা উদ্যোক্তা', image: svgImg('উদ্যোক্তা', '#0a2540', '#10b981'), title: 'উদ্যোক্তা', category: 'উদ্যোক্তা', profession: 'ব্যবসায়ী', address: 'রুদ্রপাড়া', contact: '', bio: 'স্যাম্পল তথ্য।' }
];

const expatriates = [
  { name: 'নমুনা প্রবাসী', image: svgImg('প্রবাসী', '#15305a', '#10b981'), country: 'সৌদি আরব', profession: 'প্রকৌশলী', villageAddress: 'রুদ্রপাড়া', bio: 'স্যাম্পল তথ্য।' },
  { name: 'নমুনা প্রবাসী ২', image: svgImg('প্রবাসী', '#0a2540', '#059669'), country: 'সংযুক্ত আরব আমিরাত', profession: 'ড্রাইভার', villageAddress: 'রুদ্রপাড়া', bio: 'স্যাম্পল তথ্য।' },
  { name: 'নমুনা প্রবাসী ৩', image: svgImg('প্রবাসী', '#15305a', '#047857'), country: 'মালয়েশিয়া', profession: 'শ্রমিক', villageAddress: 'রুদ্রপাড়া', bio: 'স্যাম্পল তথ্য।' }
];

const bloodDonors = [
  { name: 'নমুনা রক্তদাতা ১', group: 'A+', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' },
  { name: 'নমুনা রক্তদাতা ২', group: 'B+', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' },
  { name: 'নমুনা রক্তদাতা ৩', group: 'O+', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' },
  { name: 'নমুনা রক্তদাতা ৪', group: 'AB+', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' },
  { name: 'নমুনা রক্তদাতা ৫', group: 'A+', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' },
  { name: 'নমুনা রক্তদাতা ৬', group: 'O-', address: 'রুদ্রপাড়া', phone: '০১৭XXXXXXXX' }
];

const notices = [
  { title: 'গ্রামের বার্ষিক সাধারণ সভা', body: 'আগামী শুক্রবার বিকাল ৪টায় গ্রামের ঈদগাহ মাঠে বার্ষিক সাধারণ সভা অনুষ্ঠিত হবে। সকলের উপস্থিতি কামনা করা হচ্ছে। (স্যাম্পল)', date: '১৫ জুন ২০২৬', category: 'সামাজিক অনুষ্ঠান', urgent: false },
  { title: 'জরুরি ঘোষণা', body: 'ভারী বর্ষণের কারণে গ্রামের নিচু এলাকায় সতর্ক থাকার অনুরোধ। (স্যাম্পল)', date: '১০ জুন ২০২৬', category: 'জরুরি ঘোষণা', urgent: true },
  { title: 'বিনামূল্যে চিকিৎসা ক্যাম্প', body: 'আগামী রবিবার সকাল ৯টা থেকে দুপুর ২টা পর্যন্ত কমিউনিটি হাসপাতালে বিনামূল্যে চিকিৎসা ক্যাম্প। (স্যাম্পল)', date: '০৮ জুন ২০২৬', category: 'গুরুত্বপূর্ণ ঘোষণা', urgent: false },
  { title: 'ফুটবল ক্লাবের ট্রায়াল', body: 'রুদ্রপাড়া টপটেন ফুটবল ক্লাবের নতুন খেলোয়াড় বাছাই আগামী শনিবার। (স্যাম্পল)', date: '০৫ জুন ২০২৬', category: 'ফুটবল ক্লাবের নোটিশ', urgent: false }
];

const galleryImages = [
  { title: 'গ্রামের দৃশ্য', category: 'গ্রামের দৃশ্য', image: svgImg('গ্রামের দৃশ্য', '#0a2540', '#10b981') },
  { title: 'গ্রামের রাস্তা', category: 'গ্রামের রাস্তা', image: svgImg('গ্রামের রাস্তা', '#15305a', '#059669') },
  { title: 'কেন্দ্রীয় মসজিদ', category: 'মসজিদ', image: svgImg('মসজিদ', '#0a2540', '#047857') },
  { title: 'উচ্চ বিদ্যালয়', category: 'শিক্ষাপ্রতিষ্ঠান', image: svgImg('বিদ্যালয়', '#15305a', '#10b981') },
  { title: 'সামাজিক অনুষ্ঠান', category: 'সামাজিক অনুষ্ঠান', image: svgImg('অনুষ্ঠান', '#0a2540', '#059669') },
  { title: 'ক্রীড়া প্রতিযোগিতা', category: 'খেলাধুলা', image: svgImg('খেলাধুলা', '#15305a', '#047857') },
  { title: 'পুরোনো স্মৃতি', category: 'পুরোনো স্মৃতি', image: svgImg('স্মৃতি', '#0a2540', '#10b981') },
  { title: 'গ্রামের সৌন্দর্য', category: 'গ্রামের দৃশ্য', image: svgImg('সৌন্দর্য', '#15305a', '#059669') }
];

const footballClub = {
  name: 'RUDROPARA TOP10 FC',
  nameBn: 'রুদ্রপাড়া টপটেন ফুটবল ক্লাব',
  logo: svgImg('TOP10 FC', '#000000', '#064e3b'),
  banner: svgImg('TOP10 FC', '#000000', '#10b981'),
  intro: 'রুদ্রপাড়া টপটেন ফুটবল ক্লাব গ্রামের তরুণদের ক্রীড়া প্রতিভা বিকাশে নিবেদিত একটি ক্লাব। (স্যাম্পল তথ্য)',
  coach: { name: 'নমুনা কোচ', image: svgImg('কোচ', '#000000', '#10b981'), role: 'প্রধান কোচ' },
  manager: { name: 'নমুনা ম্যানেজার', image: svgImg('ম্যানেজার', '#000000', '#059669'), role: 'ক্লাব ম্যানেজার' }
};

const players = [
  { name: 'নমুনা খেলোয়াড় ১', number: 1, position: 'গোলরক্ষক', image: svgImg('খেলোয়াড়', '#000000', '#10b981') },
  { name: 'নমুনা খেলোয়াড় ২', number: 4, position: 'ডিফেন্ডার', image: svgImg('খেলোয়াড়', '#000000', '#059669') },
  { name: 'নমুনা খেলোয়াড় ৩', number: 8, position: 'মিডফিল্ডার', image: svgImg('খেলোয়াড়', '#000000', '#047857') },
  { name: 'নমুনা খেলোয়াড় ৪', number: 10, position: 'ফরোয়ার্ড', image: svgImg('খেলোয়াড়', '#000000', '#10b981') },
  { name: 'নমুনা খেলোয়াড় ৫', number: 7, position: 'উইঙ্গার', image: svgImg('খেলোয়াড়', '#000000', '#059669') },
  { name: 'নমুনা খেলোয়াড় ৬', number: 3, position: 'ডিফেন্ডার', image: svgImg('খেলোয়াড়', '#000000', '#047857') }
];

const matches = [
  { home: 'রুদ্রপাড়া টপটেন', away: 'প্রতিপক্ষ দল', homeScore: '৩', awayScore: '১', date: '১০ জুন ২০২৬', status: 'সম্পন্ন', venue: 'রুদ্রপাড়া মাঠ' },
  { home: 'রুদ্রপাড়া টপটেন', away: 'প্রতিপক্ষ দল ২', homeScore: '', awayScore: '', date: '২০ জুন ২০২৬', status: 'আসন্ন', venue: 'রুদ্রপাড়া মাঠ' }
];

const trophies = [
  { icon: '🏆', title: 'জেলা ফুটবল লিগ চ্যাম্পিয়ন', year: '২০২৪' },
  { icon: '🥇', title: 'গ্রাম ফুটবল টুর্নামেন্ট চ্যাম্পিয়ন', year: '২০২৩' },
  { icon: '🥈', title: 'উপজেলা কাপ রানার-আপ', year: '২০২২' }
];

const footballPhotos = [
  { title: 'ম্যাচের মুহূর্ত', image: svgImg('ফুটবল ম্যাচ', '#000000', '#10b981') },
  { title: 'ট্রফি উদযাপন', image: svgImg('ট্রফি', '#000000', '#059669') },
  { title: 'দলবদ্ধ ছবি', image: svgImg('দল', '#000000', '#047857') },
  { title: 'প্রশিক্ষণ', image: svgImg('প্রশিক্ষণ', '#000000', '#10b981') }
];

const educationData = {
  jobs: [{ title: 'নমুনা চাকরির বিজ্ঞপ্তি', organization: 'স্যাম্পল প্রতিষ্ঠান', body: 'স্যাম্পল চাকরির তথ্য। প্রকৃত বিজ্ঞপ্তি যুক্ত করুন।', deadline: '৩০ জুন ২০২৬' }],
  news: [{ title: 'শিক্ষাবিষয়ক সংবাদ', body: 'স্যাম্পল শিক্ষা সংবাদ।', date: '০১ জুন ২০২৬' }],
  exams: [{ title: 'পরীক্ষার নোটিশ', organization: 'স্যাম্পল বোর্ড', body: 'স্যাম্পল পরীক্ষার নোটিশ।', date: '১৫ জুন ২০২৬' }],
  scholarships: [{ title: 'বৃত্তির তথ্য', provider: 'স্যাম্পল ফাউন্ডেশন', body: 'স্যাম্পল বৃত্তি তথ্য।', deadline: '২০ জুলাই ২০২৬' }],
  institutionNews: [{ title: 'শিক্ষাপ্রতিষ্ঠানের সংবাদ', body: 'স্যাম্পল সংবাদ।', date: '০৫ জুন ২০২৬' }]
};

const emergencyServices = [
  { name: 'জাতীয় জরুরি সেবা', number: '৯৯৯', icon: '🚨', type: 'emergency' },
  { name: 'অ্যাম্বুলেন্স সার্ভিস', number: '০১৭XXXXXXXX', icon: '🚑', type: 'ambulance' },
  { name: 'পুলিশ হেল্পলাইন', number: '০১৩২০XXXXXX', icon: '👮', type: 'police' },
  { name: 'ফায়ার সার্ভিস', number: '১৬১৬৩', icon: '🚒', type: 'fire' },
  { name: 'রুদ্রপাড়া কমিউনিটি হাসপাতাল', number: '০১৭XXXXXXXX', icon: '🏥', type: 'hospital' },
  { name: 'ব্লাড ব্যাংক', number: '০১৭XXXXXXXX', icon: '🩸', type: 'blood' }
];

const mapConfig = {
  center: [23.8103, 90.4125],
  zoom: 13,
  markers: [
    { name: 'রুদ্রপাড়া কেন্দ্রীয় জামে মসজিদ', coords: [23.8103, 90.4125] },
    { name: 'রুদ্রপাড়া উচ্চ বিদ্যালয়', coords: [23.8150, 90.4180] },
    { name: 'রুদ্রপাড়া বাজার', coords: [23.8080, 90.4080] }
  ]
};
