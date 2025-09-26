$(document).ready(function () {
    const translations = {
      en: {
        title: "Our Mission",
        description: "This is an English description.",
        footer: "Thank you for visiting!"
      },
      ar: {
        title: "مرحبا",
        description: "هذا وصف باللغة العربية.",
        footer: "شكرا لزيارتك!"
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
  