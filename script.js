const translations = {
    en: {
        "name": "Mosadaq Forkan Hassan",
        "job-title": "Student & Software Developer",
        "contact": "Contact",
        "email": "Email:",
        "phone": "Phone:",
        "address": "Address:",
        "skills": "Skills",
        "summary": "Summary",
        "summary-text": "A third-year computer science student, passionate about developing innovative software solutions. I have good experience in developing desktop applications using languages like Java, Python, VB.NET, and C#. I seek to apply my academic knowledge and technical skills in a real-world environment to enhance my expertise.",
        "projects": "Key Projects",
        "project1-title": "Restaurant Cashier Program",
        "project1-desc": "An integrated desktop application developed using VB.NET, which efficiently manages sales, orders, and inventory.",
        "project2-title": "Game Store Website",
        "project2-desc": "A front-end for an e-commerce store developed using HTML, CSS, and JavaScript, allowing users to browse and purchase games.",
        "education": "Education",
        "edu1-degree": "Student at the College of Computer Science and Mathematics",
        "edu1-uni": "University of Kufa, Computer Science Department",
        "edu1-date": "Third Year",
        "lang-toggle": "العربية"
    },
    ar: {
        "name": "مصدق فرقان حسن",
        "job-title": "طالب ومطور برمجيات",
        "contact": "التواصل",
        "email": "البريد الإلكتروني:",
        "phone": "الهاتف:",
        "address": "العنوان:",
        "skills": "المهارات",
        "summary": "ملخص",
        "summary-text": "طالب في المرحلة الثالثة في قسم علوم الحاسوب، شغوف بتطوير حلول برمجية مبتكرة. أمتلك خبرة جيدة في تطوير تطبيقات سطح المكتب باستخدام لغات مثل Java, Python, VB.NET, و C#. أسعى لتطبيق معرفتي الأكاديمية ومهاراتي التقنية في بيئة عمل حقيقية تساهم في صقل خبراتي.",
        "projects": "أهم المشاريع",
        "project1-title": "برنامج كاشير لمطعم",
        "project1-desc": "تطبيق سطح مكتب متكامل تم تطويره باستخدام VB.NET، يقوم بإدارة عمليات البيع، الطلبات، والمخزون بكفاءة.",
        "project2-title": "موقع متجر ألعاب",
        "project2-desc": "واجهة أمامية لمتجر إلكتروني تم تطويرها باستخدام HTML, CSS, و JavaScript، تتيح للمستخدمين تصفح وشراء الألعاب.",
        "education": "التعليم",
        "edu1-degree": "طالب في كلية علوم الحاسوب والرياضيات",
        "edu1-uni": "جامعة الكوفة، قسم الحاسوب",
        "edu1-date": "المرحلة الثالثة",
        "lang-toggle": "English"
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const htmlEl = document.documentElement;
    themeToggle.addEventListener('click', () => {
        if (htmlEl.getAttribute('data-theme') === 'dark') {
            htmlEl.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        } else {
            htmlEl.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        }
    });
    langToggle.addEventListener('click', () => {
        const currentLang = htmlEl.lang === 'ar' ? 'en' : 'ar';
        applyLanguageChange(currentLang);
    });
    function applyLanguageChange(lang) {
        htmlEl.lang = lang;
        htmlEl.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        document.getElementById('name').textContent = translations[lang]['name'];
        document.getElementById('job-title').textContent = translations[lang]['job-title'];
        langToggle.textContent = translations[lang]['lang-toggle'];
    }
    const initialLang = htmlEl.lang || 'en';
    applyLanguageChange(initialLang);
});