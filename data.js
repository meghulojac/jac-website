/* ============ data.js ============ */
/* All content lives here. Migrate to WordPress/CMS later. */

// ---------- Executive Committee ----------
window.COMMITTEE_DATA = [
  // Replace with real data. "order" controls display order (lower = first).
  {
    name_bn: "নাম এখানে",
    name_en: "Name Here",
    designation_bn: "সভাপতি",
    designation_en: "President",
    photo: "images/committee/president.jpg",
    bio_bn: "সংক্ষিপ্ত পরিচিতি এখানে।",
    order: 1
  },
  {
    name_bn: "নাম এখানে",
    name_en: "Name Here",
    designation_bn: "সাধারণ সম্পাদক",
    designation_en: "General Secretary",
    photo: "images/committee/gs.jpg",
    bio_bn: "",
    order: 2
  }
  // add more...
];

// ---------- Events ----------
window.EVENTS_DATA = [
  {
    date: "2025-12-15",       // ISO for sorting later
    day: "১৫",
    month: "ডিসেম্বর",
    title: "বার্ষিক সাংস্কৃতিক সন্ধ্যা",
    desc: "গান, নাচ ও নাটকের এক সন্ধ্যা।",
    venue: "রাঙ্গামাটি",
    status: "upcoming",       // "upcoming" | "past"
    photo: ""
  }
];

// ---------- Archive ----------
window.ARCHIVE_DATA = [
  {
    type: "সংকলন",
    title: "সুহৃদ চাকমা স্মারক গ্রন্থ",
    meta: "প্রকাশ: ২৪ ফেব্রুয়ারি ২০০৫ · প্রকাশক: জাক",
    link: "library.html",
    photo: "images/books/suhrid.jpg"
  }
];

// ---------- Gallery ----------
window.GALLERY_DATA = [
  { src: "images/gallery/stage/natok-2019.jpg", alt: "মঞ্চনাটক ২০১৯", category: "stage" },
  { src: "images/gallery/music/rehearsal-2023.jpg", alt: "সংগীত মহড়া", category: "music" }
];

// ---------- Testimonials ----------
window.TESTIMONIALS_DATA = [
  {
    quote: "জাক আমার শৈশবের সাংস্কৃতিক আশ্রয়।",
    name: "নাম",
    role: "সদস্য, ১৯৯০-এর দশক"
  }
];

// ---------- Library Books ----------
window.LIBRARY_DATA = [
  {
    title: "সুহৃদ চাকমা স্মারক গ্রন্থ",
    tag: "সংকলন · স্মারক গ্রন্থ",
    year: "২০০৫",
    editors: "শিশির চাকমা (আহবায়ক), মৃত্তিকা চাকমা, শান্তিময় চাকমা, রনেল চাকমা, করুণাশীষ চাকমা",
    blurb: "কবি, প্রাবন্ধিক, গবেষক, সমালোচক ও গল্পকার সুহৃদ চাকমাকে নিয়ে জাকের প্রকাশনা।",
    cover: "images/books/suhrid.jpg",
    toc: [
      "স্মৃতিচারণ",
      "সুহৃদ চাকমার রচনাবলী",
      "অগ্রন্থিত কবিতা",
      "গল্প",
      "সম্পাদকীয় সাহিত্য",
      "বিবিধ",
      "উত্তরমালা"
    ],
    available: false
  }
];
