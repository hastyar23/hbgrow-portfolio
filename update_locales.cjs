const fs = require('fs');
const path = require('path');

const kuUpdates = {
  "pain_solution": {
    "badge": "ئاڵنگارییەکان",
    "title_p1": "ئایا بزنسەکەت ڕووبەڕووی",
    "title_highlight": "ئەم ئاڵنگارییانە",
    "title_p2": "بووەتەوە؟",
    "pains": [
      {
        "title": "کڕیاری ڕاستەقینەت نییە؟",
        "desc": "نازانیت چۆن لە سۆشیاڵ میدیا کڕیاری ڕاستەقینە بدۆزیتەوە و بیانکەیتە کڕیاری هەمیشەیی."
      },
      {
        "title": "کاتت نییە بۆ بەڕێوەبردن؟",
        "desc": "وەک خاوەن کارێک کاتت نییە بۆ بەڕێوەبردنی پەیج و ڕیکلامەکانت بە شێوەیەکی پیشەگەرانە."
      },
      {
        "title": "پارە لە ڕیکلامدا دەسوتێنیت؟",
        "desc": "ڕیکلامەکانت پارەیەکی زۆر دەسوتێنن بە بێ ئەوەی فرۆشتنێکی ئەوتۆ بهێنن. هەست دەکەیت ڕکابەرەکانت لە پێشترن."
      }
    ],
    "shift_p1": "لەگەڵ",
    "shift_highlight": "HBgrow",
    "shift_p2": "ئەم کێشانەت نامێنێت.",
    "solutions": [
      {
        "title": "کاتێکی زۆرت بۆ دەگەڕێتەوە",
        "desc": "ئێمە هەموو کارەکان دەکەین. کاری تۆ تەنها پەسەندکردنی کارەکان و پێشوازیکردنە لە کڕیارەکانت."
      },
      {
        "title": "خەرجییەکی زۆرت بۆ دەگەڕێتەوە",
        "desc": "چیتر پارە لە ڕیکلامی هەڕەمەکیدا بەفیڕۆ نادەیت. سپۆنسەرەکانت بە پلان و ستراتیژییەکی دروست بەڕێوەدەبرێن."
      },
      {
        "title": "براندەکەت پڕۆفیشناڵ دەردەکەوێت",
        "desc": "تیمێکی تایبەت بە خۆت بۆ تەرخان دەکرێت بۆ ئەوەی براندەکەت وەک موگناتیس کڕیاری نوێ بۆ خۆی ڕابکێشێت."
      }
    ],
    "cta_btn": "کاتێک دیاریبکە بۆ گفتوگۆکردن",
    "cta_desc": "پەیوەندییەکە بێ بەرامبەرە و هیچ پابەندبوونێکی تێدا نییە."
  }
};

const arUpdates = {
  "pain_solution": {
    "badge": "التحديات",
    "title_p1": "هل يواجه عملك",
    "title_highlight": "هذه التحديات؟",
    "title_p2": "",
    "pains": [
      {
        "title": "لا يوجد عملاء حقيقيون؟",
        "desc": "لا تعرف كيف تجد عملاء حقيقيين على وسائل التواصل الاجتماعي وتحولهم إلى عملاء دائمين."
      },
      {
        "title": "ليس لديك وقت للإدارة؟",
        "desc": "كصاحب عمل، ليس لديك الوقت لإدارة صفحاتك وإعلاناتك بشكل احترافي."
      },
      {
        "title": "تحرق أموالك في الإعلانات؟",
        "desc": "تضيع إعلاناتك الكثير من المال دون تحقيق مبيعات كبيرة. تشعر أن منافسيك يسبقونك."
      }
    ],
    "shift_p1": "مع",
    "shift_highlight": "HBgrow",
    "shift_p2": "ستختفي هذه المشاكل.",
    "solutions": [
      {
        "title": "ستستعيد الكثير من الوقت",
        "desc": "نحن نقوم بكل العمل. مهمتك الوحيدة هي الموافقة على أعمالنا والترحيب بعملائك."
      },
      {
        "title": "ستوفر الكثير من النفقات",
        "desc": "لن تضيع أموالك على إعلانات عشوائية بعد الآن. تُدار حملاتك بخطط واستراتيجيات صحيحة."
      },
      {
        "title": "ستبدو علامتك التجارية احترافية",
        "desc": "سيتم تخصيص فريق خاص لك لتصبح علامتك التجارية مثل المغناطيس الذي يجذب عملاء جدد."
      }
    ],
    "cta_btn": "حدد موعداً للنقاش",
    "cta_desc": "المكالمة مجانية ولا توجد التزامات."
  }
};

const enUpdates = {
  "pain_solution": {
    "badge": "Challenges",
    "title_p1": "Is your business facing",
    "title_highlight": "these challenges?",
    "title_p2": "",
    "pains": [
      {
        "title": "No real customers?",
        "desc": "You don't know how to find real customers on social media and turn them into loyal ones."
      },
      {
        "title": "No time to manage?",
        "desc": "As a business owner, you have no time to professionally manage your pages and ads."
      },
      {
        "title": "Burning money on ads?",
        "desc": "Your ads waste a lot of money without generating significant sales. You feel competitors are ahead."
      }
    ],
    "shift_p1": "With",
    "shift_highlight": "HBgrow",
    "shift_p2": "these problems will disappear.",
    "solutions": [
      {
        "title": "Get your time back",
        "desc": "We do all the work. Your only job is to approve our content and welcome your customers."
      },
      {
        "title": "Save on expenses",
        "desc": "No more wasting money on random ads. Your campaigns are managed with proper strategy."
      },
      {
        "title": "A professional brand",
        "desc": "A dedicated team will be assigned to you, turning your brand into a magnet for new customers."
      }
    ],
    "cta_btn": "Schedule a Call",
    "cta_desc": "The call is free and there are no obligations."
  }
};

function update(file, updates) {
  const p = path.join(__dirname, 'src/locales', file);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  Object.assign(data, updates);
  fs.writeFileSync(p, JSON.stringify(data, null, 2), 'utf8');
}

update('ku.json', kuUpdates);
update('ar.json', arUpdates);
update('en.json', enUpdates);
console.log("Updated JSON files with pain_solution");
