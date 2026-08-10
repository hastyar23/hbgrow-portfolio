const fs = require('fs');
const path = require('path');

const kuUpdates = {
  "footer": {
    "brand_desc": "ئەیجێنسی گلۆباڵی سۆشیاڵ میدیا و مارکێتینگی گەشە. براندەکەت شایەنی کڕیارە.",
    "links_title": "بەستەرەکان",
    "contact_title": "پەیوەندی",
    "btn_schedule": "کاتێک دیاریبکە بۆ گفتوگۆکردن",
    "copyright": "HBgrow Agency. هەموو مافەکان پارێزراون.",
    "made_by": "دروستکراوە بە ئارەزووی زۆر لەلایەن تیمی HBgrow",
    "nav_about": "دەربارەمان",
    "nav_portfolio": "کارەکانمان",
    "nav_process": "پرۆسەکەمان",
    "nav_testimonials": "بەڵگەنامەکان",
    "nav_contact": "پەیوەندی"
  }
};

const arUpdates = {
  "footer": {
    "brand_desc": "وكالة عالمية لوسائل التواصل الاجتماعي وتسويق النمو. علامتك التجارية تستحق عملاء.",
    "links_title": "الروابط",
    "contact_title": "اتصل بنا",
    "btn_schedule": "حدد موعداً للنقاش",
    "copyright": "HBgrow Agency. جميع الحقوق محفوظة.",
    "made_by": "صُنع بحب من قبل فريق HBgrow",
    "nav_about": "من نحن",
    "nav_portfolio": "أعمالنا",
    "nav_process": "عمليتنا",
    "nav_testimonials": "شهادات عملائنا",
    "nav_contact": "اتصل بنا"
  }
};

const enUpdates = {
  "footer": {
    "brand_desc": "Global Social Media & Growth Marketing Agency. Your brand deserves customers.",
    "links_title": "Links",
    "contact_title": "Contact",
    "btn_schedule": "Schedule a Call",
    "copyright": "HBgrow Agency. All rights reserved.",
    "made_by": "Made with love by the HBgrow team",
    "nav_about": "About Us",
    "nav_portfolio": "Our Work",
    "nav_process": "Our Process",
    "nav_testimonials": "Testimonials",
    "nav_contact": "Contact"
  }
};

function update(file, updates) {
  const p = path.join(__dirname, 'src/locales', file);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  Object.assign(data, { footer: updates.footer });
  fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
}

update('ku.json', kuUpdates);
update('ar.json', arUpdates);
update('en.json', enUpdates);
console.log("Updated JSON files with footer");
