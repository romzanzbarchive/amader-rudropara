# আমাদের রুদ্রপাড়া (Our Rudrapara)

গ্রামের তথ্য, ঘোষণা ও সমাজসেবার জন্য একটি স্ট্যাটিক ওয়েবসাইট। HTML5, CSS3 ও Vanilla JavaScript দিয়ে তৈরি। কোনো backend, database বা paid service লাগে না।

## ফোল্ডার কাঠামো
```
our-rudrapara/
├── index.html
├── vercel.json
├── README.md
└── assets/
    ├── css/style.css     ← রঙ, ফন্ট, ডিজাইন
    ├── js/data.js        ← সব তথ্য, ঘোষণা, নম্বর (এখানে বদলান)
    ├── js/main.js        ← রেন্ডার, থিম, খোঁজ, শেয়ার
    └── images/           ← ছবি রাখার জায়গা
```

## কোথায় কী বদলাবেন
- **লেখা ও তথ্য:** `assets/js/data.js` খুলে `[...]` placeholder-গুলো প্রকৃত তথ্য দিয়ে বদলান।
- **জরুরি নম্বর:** `CONTACTS` অংশে `00000000000` বদলান।
- **ঘোষণা:** `NOTICES` অংশে নতুন অবজেক্ট যোগ করুন; `urgent: true` দিলে লাল ব্যাজ আসবে।
- **রঙ:** `style.css` এর `:root` অংশে `--green`, `--navy`, `--gold` বদলান।

## ⚠️ গুরুত্বপূর্ণ সীমাবদ্ধতা
এটি backend-বিহীন সাইট। দর্শকের জমা দেওয়া তথ্য (যদি থাকে) শুধু তাঁর নিজের ব্রাউজারের LocalStorage-এ থাকে; তা সবার জন্য প্রকাশিত হয় না। রক্তদাতা বা যোগাযোগের তথ্য প্রকাশের আগে সংশ্লিষ্ট ব্যক্তির অনুমতি নিন।

## GitHub-এ আপলোড
1. github.com-এ নতুন repository তৈরি করুন (যেমন `our-rudrapara`)।
2. ZIP থেকে ফাইলগুলো বের করে repository-তে "Upload files" দিয়ে আপলোড করুন, অথবা `git init`, `git add .`, `git commit -m "init"`, `git push` করুন।

## Vercel-এ বিনামূল্যে deploy
1. vercel.com-এ GitHub account দিয়ে সাইন ইন করুন।
2. "Add New → Project" → আপনার repository নির্বাচন করুন।
3. কোনো build setting লাগবে না (Framework: Other)। "Deploy" চাপুন।
4. প্রতিটি GitHub push-এর পর Vercel নিজে নতুন সংস্করণ deploy করবে।

## ব্যবহৃত প্রযুক্তি
HTML5 · CSS3 · Vanilla JavaScript · LocalStorage · Google Fonts (Hind Siliguri, Noto Sans Bengali)

---
© 2026 আমাদের রুদ্রপাড়া | Designed & Developed by Romzan Zain
