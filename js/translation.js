$(document).ready(function () {
    const translations = {
      en: {
        title: "Our Mission",
        menupolicy : "POLICIES & DISCLOSURES",
        menuawareness: "AWARENESS",
        menumap: "MAP",
        menushare: "SHARE YOUR EXPERIENCE",
        menushopping : "SHOPPING  AT DDF",
        ourmission: "Our Mission",
        ourvission: "Our Vision",
        ourjourney: "Our Journey",
        policytitle: "Policies & Disclosures",
        maptitle: "CONCOURSE - D",
        awarenesstitle: "Awareness",
        peopledetermination: "People of Determination",
        fraudawareness: "Fraud Awareness & Prevention",
        consumerprotection: "Consumer Protection & Awareness",
        fullname :"Full Name",
        phone :"Phone",
        email :"Email address",
        region :"Region",
        city :"City",
        subject :"Subject",
        yourmessage :"Your Message",
        quicklnks :"Quick Links",
        footerhome :"Home",
        branches :"Branches",
        contactus :"Contact Us",
        policies :"Policies",
        faq :"FAQ",
        services :"Services",
        foreighcurrencyexchange :"Foreign Currency Exchange",
        wholesalebanknotes :"Wholesale Banknotes",
        whyChooseus :"Why Choose Us"

        

      },
      ar: {
        title: "مرحبا",
        menupolicy : "السياسات والإفصاحات",
        menuawareness:"وعي",
        menumap: "رسم خريطة",
        menushare: "شارك تجربتك",
        menushopping : "التسوق في سوق دبي الحرة",
        ourmission: "مهمتنا",
        ourvission: "رؤيتنا",
        ourjourney: "رحلتنا",
        policytitle: "كـــــونكــورس - دي",
        maptitle: "كـــــونكــورس - دي",
        awarenesstitle: "وعي",
        peopledetermination: "أصحاب الهمم",
        fraudawareness: "التو��ة �الاحت�ال والوقا�ة منه",
        consumerprotection: "حما�ة وتو��ة المستهلك",
        fullname :"الاسم الكامل",
        phone :"هاتف",
        email :"عنوان البريد الإلكتروني",
        region :"منطقة",
        city :"مدينة",
        subject :"موضوع",
        yourmessage :"رسالتك",
        quicklnks :"روابط سريعة",
        footerhome :"بيت",
        branches :"الفروع",
        contactus :"اتصل بنا",
        policies :"السياسات",
        faq :"التعليمات",
        services :"خدمات",
        foreighcurrencyexchange :"صرف العملات الأجنبية",
        wholesalebanknotes :"الأوراق النقدية بالجملة",
        whyChooseus :"لماذا تختارنا؟"
      }
    };
  
    // Function to apply language automatically
    function applyLanguage(lang) {
      // Switch body class
      $("body").removeClass("english arabic").addClass(lang === "ar" ? "arabic" : "english");
  
      // Loop through all elements with data-i18n
      $("[data-i18n]").each(function () {
        const key = $(this).data("i18n");
        $(this).text(translations[lang][key]);
      });
  
      // Save preference
      localStorage.setItem("lang", lang);
    }
  
    // Buttons
    $("#enBtn").click(function () { applyLanguage("en"); });
    $("#arBtn").click(function () { applyLanguage("ar"); });
  
    // Load saved language or default English
    const savedLang = localStorage.getItem("lang") || "en";
    applyLanguage(savedLang);

  });
  