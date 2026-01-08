/**
 * Chinatown Civic Compass - Internationalization (i18n)
 * Handles language switching and translations
 */

(function() {
  'use strict';

  // Available languages
  var LANGUAGES = ['en', 'zh-s', 'zh-t'];
  var DEFAULT_LANG = 'en';
  var COOKIE_NAME = 'ccc_language';

  // Translations object
  // Keys match data-i18n attributes in HTML
  var translations = {
    en: {
      // Site
      'site.name': 'Civic Compass',

      // Navigation
      'nav.home': 'Home',
      'nav.rights': 'Your Rights',
      'nav.resources': 'Resources',
      'nav.news': 'News',
      'nav.voting': 'Voting',
      'nav.contact': 'Contact Reps',
      'nav.faq': 'FAQ',

      // News
      'news.title': 'Community News',
      'news.subtitle': 'Stay informed about local developments and community updates.',

      // Language
      'lang.current': 'EN',

      // Hero
      'hero.title': 'Let Your Civic Compass Guide the Way',
      'hero.tagline': 'Free, accessible civic education to help you understand your rights, find community resources, and make your voice heard.',
      'hero.cta.rights': 'Know Your Rights',
      'hero.cta.resources': 'Find Resources',

      // Progress
      'progress.title': 'Your Learning Progress',

      // Modules
      'modules.title': 'Learn & Take Action',
      'modules.subtitle': 'Explore these resources to become an informed, empowered member of your community.',

      'module.rights.title': 'Know Your Rights',
      'module.rights.desc': 'Understand your constitutional rights regardless of immigration status. Learn what you can do if approached by law enforcement.',

      'module.resources.title': 'Local Resources',
      'module.resources.desc': 'Find community organizations, legal aid services, and support networks in your area. Help is available.',

      'module.voting.title': 'Voting & Elections',
      'module.voting.desc': 'Register to vote, find your polling location, and learn how to make your voice heard in local and national elections.',

      'module.contact.title': 'Getting in Touch',
      'module.contact.desc': 'Contact your elected representatives and engage with civic life. Your voice matters in shaping your community.',

      'module.status.start': 'Start learning',
      'module.status.completed': 'Completed',

      // About
      'about.title': 'About This Project',
      'about.p1': 'The Chinatown Civic Compass is a community initiative created to empower residents with knowledge about their rights and civic engagement opportunities.',
      'about.p2': 'Our mission is to provide free, accessible, multilingual civic education that helps people understand their constitutional rights, especially around interactions with law enforcement and immigration authorities.',
      'about.p3': 'All information on this site has been reviewed by legal experts and community partners. We are committed to providing accurate, up-to-date resources for our community.',

      // Partners
      'partners.title': 'Our Partners',
      'partners.subtitle': 'Working together to serve our community.',

      // Footer
      'footer.tagline': 'Empowering our community through civic education.',
      'footer.links': 'Quick Links',
      'footer.modules': 'Learn More',
      'footer.newsletter': 'Stay Updated',
      'footer.newsletter.desc': 'Get the latest resources and community updates.',
      'footer.newsletter.btn': 'Join',
      'footer.partners': 'In partnership with:',
      'footer.rights': 'All rights reserved.',

      // Modal
      'modal.lang.note': 'You can change this anytime using the language selector.',

      // Glossary
      'glossary.title': 'Definition',
      'glossary.translations': 'Translations',

      // FAQ
      'faq.title': 'Frequently Asked Questions',
      'faq.subtitle': 'Find answers to common questions about your rights and resources.',
      'faq.search.placeholder': 'Search questions...',
      'faq.no.results': 'No questions found matching your search.',

      // Page headers
      'page.rights.title': 'Know Your Rights',
      'page.rights.breadcrumb': 'Home',
      'page.resources.title': 'Local Resources',
      'page.voting.title': 'Voting & Elections',
      'page.contact.title': 'Getting in Touch',

      // Credibility
      'credibility.title': 'Source Information',
      'credibility.reviewed': 'Reviewed by:',
      'credibility.sources': 'Sources:',
      'credibility.updated': 'Last updated:',
      'credibility.disclaimer': 'This information is for educational purposes only and does not constitute legal advice. Consult with a qualified attorney for legal guidance.',

      // Actions
      'action.print': 'Print This Guide',
      'action.call': 'Call Now',
      'action.email': 'Send Email',

      // Emergency Banner
      'emergency.title': 'If ICE Comes to Your Door',
      'emergency.tip1': '<strong>You do not have to open the door.</strong> Ask them to slide ID under the door.',
      'emergency.tip2': '<strong>Ask: "Do you have a warrant signed by a judge?"</strong>',
      'emergency.tip3': '<strong>You have the right to remain silent.</strong> Say: "I choose to remain silent."',
      'emergency.tip4': '<strong>Stay calm.</strong> Do not run, argue, or resist.',
      'emergency.hotline.label': 'Emergency Legal Hotline',
      'emergency.cta': 'Learn Your Full Rights',

      // Quick Facts
      'facts.title': 'Know the Facts',
      'facts.subtitle': 'These rights apply to everyone in the United States, regardless of immigration status.',
      'facts.rights.number': 'Everyone',
      'facts.rights.label': 'has constitutional rights, regardless of citizenship',
      'facts.silent.number': 'You Can Stay Silent',
      'facts.silent.label': 'The 5th Amendment protects your right not to answer questions',
      'facts.home.number': 'Your Home Is Protected',
      'facts.home.label': 'ICE cannot enter without a judicial warrant',
      'facts.lawyer.number': 'Ask for a Lawyer',
      'facts.lawyer.label': 'You have the right to legal representation',

      // How It Works
      'howitworks.title': 'How It Works',
      'howitworks.subtitle': 'Three simple steps to becoming an informed, empowered community member.',
      'howitworks.step1.title': 'Learn Your Rights',
      'howitworks.step1.desc': 'Understand the constitutional protections that apply to everyone, regardless of immigration status. Knowledge is your first line of defense.',
      'howitworks.step2.title': 'Find Resources',
      'howitworks.step2.desc': 'Connect with community organizations, legal aid services, and support networks. You don\'t have to face challenges alone.',
      'howitworks.step3.title': 'Take Action',
      'howitworks.step3.desc': 'Engage with your community, contact your representatives, and exercise your right to vote. Your voice shapes our future.',

      // Testimonials
      'testimonials.title': 'Community Voices',
      'testimonials.subtitle': 'Hear from members of our community.',
      'testimonial1.quote': 'Learning about my rights gave me confidence. Now I know what to say if someone comes to my door. This information should be in every household.',
      'testimonial1.name': 'Maria L.',
      'testimonial1.location': 'Chinatown resident',
      'testimonial2.quote': 'I didn\'t know there were so many resources available in our community. The Civic Compass helped me find legal aid when my family needed it most.',
      'testimonial2.name': 'James C.',
      'testimonial2.location': 'Local business owner',
      'testimonial3.quote': 'As a senior, I appreciate how easy this website is to use. The information is clear, and I can read it in my language. I\'ve shared it with all my neighbors.',
      'testimonial3.name': 'Wei Z.',
      'testimonial3.location': 'Community elder',

      // News
      'nav.news': 'News',
      'news.title': 'Community News',
      'news.subtitle': 'Stay informed about local developments and community updates.'
    },

    'zh-s': {
      // Site
      'site.name': '公民指南针',

      // Navigation
      'nav.home': '首页',
      'nav.rights': '您的权利',
      'nav.resources': '资源',
      'nav.news': '新闻',
      'nav.voting': '投票',
      'nav.contact': '联系代表',
      'nav.faq': '常见问题',

      // News
      'news.title': '社区新闻',
      'news.subtitle': '了解本地动态和社区更新。',

      // Language
      'lang.current': '简',

      // Hero
      'hero.title': '让公民指南针指引您的方向',
      'hero.tagline': '免费、无障碍的公民教育，帮助您了解自己的权利、寻找社区资源，并发出自己的声音。',
      'hero.cta.rights': '了解您的权利',
      'hero.cta.resources': '寻找资源',

      // Progress
      'progress.title': '您的学习进度',

      // Modules
      'modules.title': '学习并采取行动',
      'modules.subtitle': '探索这些资源，成为社区中知情、有能力的一员。',

      'module.rights.title': '了解您的权利',
      'module.rights.desc': '无论移民身份如何，都要了解您的宪法权利。了解如果遇到执法人员该怎么办。',

      'module.resources.title': '本地资源',
      'module.resources.desc': '在您所在地区寻找社区组织、法律援助服务和支持网络。帮助就在身边。',

      'module.voting.title': '投票与选举',
      'module.voting.desc': '注册投票，找到您的投票站，了解如何在地方和全国选举中发出您的声音。',

      'module.contact.title': '联系方式',
      'module.contact.desc': '联系您选出的代表，参与公民生活。您的声音对塑造社区至关重要。',

      'module.status.start': '开始学习',
      'module.status.completed': '已完成',

      // About
      'about.title': '关于本项目',
      'about.p1': '华埠公民指南针是一项社区倡议，旨在赋予居民有关其权利和公民参与机会的知识。',
      'about.p2': '我们的使命是提供免费、无障碍、多语言的公民教育，帮助人们了解他们的宪法权利，特别是与执法和移民当局的互动方面。',
      'about.p3': '本网站的所有信息均经过法律专家和社区合作伙伴的审查。我们致力于为社区提供准确、最新的资源。',

      // Partners
      'partners.title': '我们的合作伙伴',
      'partners.subtitle': '携手为社区服务。',

      // Footer
      'footer.tagline': '通过公民教育赋能我们的社区。',
      'footer.links': '快速链接',
      'footer.modules': '了解更多',
      'footer.newsletter': '保持更新',
      'footer.newsletter.desc': '获取最新资源和社区动态。',
      'footer.newsletter.btn': '订阅',
      'footer.partners': '合作伙伴：',
      'footer.rights': '保留所有权利。',

      // Modal
      'modal.lang.note': '您可以随时使用语言选择器更改。',

      // Glossary
      'glossary.title': '定义',
      'glossary.translations': '翻译',

      // FAQ
      'faq.title': '常见问题',
      'faq.subtitle': '查找有关您的权利和资源的常见问题的答案。',
      'faq.search.placeholder': '搜索问题...',
      'faq.no.results': '没有找到与您搜索匹配的问题。',

      // Page headers
      'page.rights.title': '了解您的权利',
      'page.rights.breadcrumb': '首页',
      'page.resources.title': '本地资源',
      'page.voting.title': '投票与选举',
      'page.contact.title': '联系方式',

      // Credibility
      'credibility.title': '来源信息',
      'credibility.reviewed': '审核人：',
      'credibility.sources': '来源：',
      'credibility.updated': '最后更新：',
      'credibility.disclaimer': '此信息仅供教育目的，不构成法律建议。如需法律指导，请咨询合格的律师。',

      // Actions
      'action.print': '打印本指南',
      'action.call': '立即拨打',
      'action.email': '发送邮件',

      // Emergency Banner
      'emergency.title': '如果ICE来敲门',
      'emergency.tip1': '<strong>您不必开门。</strong>请他们把证件从门缝递进来。',
      'emergency.tip2': '<strong>问："您有法官签署的搜查令吗？"</strong>',
      'emergency.tip3': '<strong>您有权保持沉默。</strong>说："我选择保持沉默。"',
      'emergency.tip4': '<strong>保持冷静。</strong>不要跑、不要争辩、不要反抗。',
      'emergency.hotline.label': '紧急法律热线',
      'emergency.cta': '了解您的全部权利',

      // Quick Facts
      'facts.title': '了解事实',
      'facts.subtitle': '这些权利适用于美国境内的每一个人，无论移民身份如何。',
      'facts.rights.number': '每个人',
      'facts.rights.label': '都享有宪法权利，无论公民身份',
      'facts.silent.number': '您可以保持沉默',
      'facts.silent.label': '第五修正案保护您不回答问题的权利',
      'facts.home.number': '您的家受保护',
      'facts.home.label': '没有司法搜查令，ICE不能进入',
      'facts.lawyer.number': '要求律师',
      'facts.lawyer.label': '您有权获得法律代理',

      // How It Works
      'howitworks.title': '如何使用',
      'howitworks.subtitle': '成为知情、有能力的社区成员的三个简单步骤。',
      'howitworks.step1.title': '了解您的权利',
      'howitworks.step1.desc': '了解适用于每个人的宪法保护，无论移民身份如何。知识是您的第一道防线。',
      'howitworks.step2.title': '寻找资源',
      'howitworks.step2.desc': '与社区组织、法律援助服务和支持网络建立联系。您不必独自面对挑战。',
      'howitworks.step3.title': '采取行动',
      'howitworks.step3.desc': '参与社区活动，联系您的代表，行使您的投票权。您的声音塑造我们的未来。',

      // Testimonials
      'testimonials.title': '社区声音',
      'testimonials.subtitle': '听听我们社区成员的心声。',
      'testimonial1.quote': '了解自己的权利让我更有信心。现在我知道如果有人来敲门该说什么了。这些信息应该传达到每家每户。',
      'testimonial1.name': 'Maria L.',
      'testimonial1.location': '唐人街居民',
      'testimonial2.quote': '我不知道我们社区有这么多可用的资源。公民指南针帮助我在家人最需要的时候找到了法律援助。',
      'testimonial2.name': 'James C.',
      'testimonial2.location': '本地商家',
      'testimonial3.quote': '作为一名老年人，我很欣赏这个网站的易用性。信息很清晰，我可以用自己的语言阅读。我已经分享给了所有邻居。',
      'testimonial3.name': 'Wei Z.',
      'testimonial3.location': '社区长者',

      // News
      'nav.news': '新闻',
      'news.title': '社区新闻',
      'news.subtitle': '了解本地动态和社区更新。'
    },

    'zh-t': {
      // Site
      'site.name': '公民指南針',

      // Navigation
      'nav.home': '首頁',
      'nav.rights': '您的權利',
      'nav.resources': '資源',
      'nav.news': '新聞',
      'nav.voting': '投票',
      'nav.contact': '聯繫代表',
      'nav.faq': '常見問題',

      // News
      'news.title': '社區新聞',
      'news.subtitle': '了解本地動態和社區更新。',

      // Language
      'lang.current': '繁',

      // Hero
      'hero.title': '讓公民指南針指引您的方向',
      'hero.tagline': '免費、無障礙的公民教育，幫助您了解自己的權利、尋找社區資源，並發出自己的聲音。',
      'hero.cta.rights': '了解您的權利',
      'hero.cta.resources': '尋找資源',

      // Progress
      'progress.title': '您的學習進度',

      // Modules
      'modules.title': '學習並採取行動',
      'modules.subtitle': '探索這些資源，成為社區中知情、有能力的一員。',

      'module.rights.title': '了解您的權利',
      'module.rights.desc': '無論移民身份如何，都要了解您的憲法權利。了解如果遇到執法人員該怎麼辦。',

      'module.resources.title': '本地資源',
      'module.resources.desc': '在您所在地區尋找社區組織、法律援助服務和支持網絡。幫助就在身邊。',

      'module.voting.title': '投票與選舉',
      'module.voting.desc': '註冊投票，找到您的投票站，了解如何在地方和全國選舉中發出您的聲音。',

      'module.contact.title': '聯繫方式',
      'module.contact.desc': '聯繫您選出的代表，參與公民生活。您的聲音對塑造社區至關重要。',

      'module.status.start': '開始學習',
      'module.status.completed': '已完成',

      // About
      'about.title': '關於本項目',
      'about.p1': '華埠公民指南針是一項社區倡議，旨在賦予居民有關其權利和公民參與機會的知識。',
      'about.p2': '我們的使命是提供免費、無障礙、多語言的公民教育，幫助人們了解他們的憲法權利，特別是與執法和移民當局的互動方面。',
      'about.p3': '本網站的所有信息均經過法律專家和社區合作夥伴的審查。我們致力於為社區提供準確、最新的資源。',

      // Partners
      'partners.title': '我們的合作夥伴',
      'partners.subtitle': '攜手為社區服務。',

      // Footer
      'footer.tagline': '通過公民教育賦能我們的社區。',
      'footer.links': '快速連結',
      'footer.modules': '了解更多',
      'footer.newsletter': '保持更新',
      'footer.newsletter.desc': '獲取最新資源和社區動態。',
      'footer.newsletter.btn': '訂閱',
      'footer.partners': '合作夥伴：',
      'footer.rights': '保留所有權利。',

      // Modal
      'modal.lang.note': '您可以隨時使用語言選擇器更改。',

      // Glossary
      'glossary.title': '定義',
      'glossary.translations': '翻譯',

      // FAQ
      'faq.title': '常見問題',
      'faq.subtitle': '查找有關您的權利和資源的常見問題的答案。',
      'faq.search.placeholder': '搜索問題...',
      'faq.no.results': '沒有找到與您搜索匹配的問題。',

      // Page headers
      'page.rights.title': '了解您的權利',
      'page.rights.breadcrumb': '首頁',
      'page.resources.title': '本地資源',
      'page.voting.title': '投票與選舉',
      'page.contact.title': '聯繫方式',

      // Credibility
      'credibility.title': '來源信息',
      'credibility.reviewed': '審核人：',
      'credibility.sources': '來源：',
      'credibility.updated': '最後更新：',
      'credibility.disclaimer': '此信息僅供教育目的，不構成法律建議。如需法律指導，請諮詢合格的律師。',

      // Actions
      'action.print': '列印本指南',
      'action.call': '立即撥打',
      'action.email': '發送郵件',

      // Emergency Banner
      'emergency.title': '如果ICE來敲門',
      'emergency.tip1': '<strong>您不必開門。</strong>請他們把證件從門縫遞進來。',
      'emergency.tip2': '<strong>問：「您有法官簽署的搜查令嗎？」</strong>',
      'emergency.tip3': '<strong>您有權保持沉默。</strong>說：「我選擇保持沉默。」',
      'emergency.tip4': '<strong>保持冷靜。</strong>不要跑、不要爭辯、不要反抗。',
      'emergency.hotline.label': '緊急法律熱線',
      'emergency.cta': '了解您的全部權利',

      // Quick Facts
      'facts.title': '了解事實',
      'facts.subtitle': '這些權利適用於美國境內的每一個人，無論移民身份如何。',
      'facts.rights.number': '每個人',
      'facts.rights.label': '都享有憲法權利，無論公民身份',
      'facts.silent.number': '您可以保持沉默',
      'facts.silent.label': '第五修正案保護您不回答問題的權利',
      'facts.home.number': '您的家受保護',
      'facts.home.label': '沒有司法搜查令，ICE不能進入',
      'facts.lawyer.number': '要求律師',
      'facts.lawyer.label': '您有權獲得法律代理',

      // How It Works
      'howitworks.title': '如何使用',
      'howitworks.subtitle': '成為知情、有能力的社區成員的三個簡單步驟。',
      'howitworks.step1.title': '了解您的權利',
      'howitworks.step1.desc': '了解適用於每個人的憲法保護，無論移民身份如何。知識是您的第一道防線。',
      'howitworks.step2.title': '尋找資源',
      'howitworks.step2.desc': '與社區組織、法律援助服務和支持網絡建立聯繫。您不必獨自面對挑戰。',
      'howitworks.step3.title': '採取行動',
      'howitworks.step3.desc': '參與社區活動，聯繫您的代表，行使您的投票權。您的聲音塑造我們的未來。',

      // Testimonials
      'testimonials.title': '社區聲音',
      'testimonials.subtitle': '聽聽我們社區成員的心聲。',
      'testimonial1.quote': '了解自己的權利讓我更有信心。現在我知道如果有人來敲門該說什麼了。這些信息應該傳達到每家每戶。',
      'testimonial1.name': 'Maria L.',
      'testimonial1.location': '唐人街居民',
      'testimonial2.quote': '我不知道我們社區有這麼多可用的資源。公民指南針幫助我在家人最需要的時候找到了法律援助。',
      'testimonial2.name': 'James C.',
      'testimonial2.location': '本地商家',
      'testimonial3.quote': '作為一名老年人，我很欣賞這個網站的易用性。信息很清晰，我可以用自己的語言閱讀。我已經分享給了所有鄰居。',
      'testimonial3.name': 'Wei Z.',
      'testimonial3.location': '社區長者',

      // News
      'nav.news': '新聞',
      'news.title': '社區新聞',
      'news.subtitle': '了解本地動態和社區更新。'
    }
  };

  // Current language
  var currentLang = DEFAULT_LANG;

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Check for saved language preference
    var savedLang = getCookie(COOKIE_NAME);

    if (savedLang && LANGUAGES.indexOf(savedLang) !== -1) {
      // Use saved language
      currentLang = savedLang;
      applyTranslations(currentLang);
      updateLanguageUI(currentLang);
    } else {
      // Show language selection modal on first visit
      showLanguageModal();
    }

    // Set up language option handlers in modal
    initLanguageModal();

    // Set up dropdown handlers
    initLanguageDropdowns();
  }

  /**
   * Show the language selection modal
   */
  function showLanguageModal() {
    var modal = document.getElementById('language-modal');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus first option
      var firstOption = modal.querySelector('.language-option');
      if (firstOption) {
        firstOption.focus();
      }
    }
  }

  /**
   * Hide the language selection modal
   */
  function hideLanguageModal() {
    var modal = document.getElementById('language-modal');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  /**
   * Initialize language modal handlers
   */
  function initLanguageModal() {
    var modal = document.getElementById('language-modal');
    if (!modal) return;

    var options = modal.querySelectorAll('.language-option');

    options.forEach(function(option) {
      option.addEventListener('click', function() {
        var lang = this.dataset.lang;

        // Visual feedback
        options.forEach(function(opt) {
          opt.classList.remove('selected');
        });
        this.classList.add('selected');

        // Set language with small delay for visual feedback
        setTimeout(function() {
          setLanguage(lang);
          hideLanguageModal();
        }, 200);
      });
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        // Default to English if closing without selection
        setLanguage(DEFAULT_LANG);
        hideLanguageModal();
      }
    });
  }

  /**
   * Initialize language dropdown handlers
   */
  function initLanguageDropdowns() {
    var dropdowns = document.querySelectorAll('.language-dropdown');

    dropdowns.forEach(function(dropdown) {
      var buttons = dropdown.querySelectorAll('button');

      buttons.forEach(function(btn) {
        btn.addEventListener('click', function() {
          var lang = this.dataset.lang;
          setLanguage(lang);
        });
      });
    });
  }

  /**
   * Set the current language
   */
  function setLanguage(lang) {
    if (LANGUAGES.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    currentLang = lang;

    // Save preference
    setCookie(COOKIE_NAME, lang, 365);

    // Apply translations
    applyTranslations(lang);

    // Update UI
    updateLanguageUI(lang);

    // Dispatch event for other scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  }

  /**
   * Apply translations to all elements with data-i18n attribute
   */
  function applyTranslations(lang) {
    var elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var translation = getTranslation(key, lang);

      if (translation) {
        // Check if it's an input placeholder
        if (el.hasAttribute('placeholder')) {
          el.setAttribute('placeholder', translation);
        } else if (el.hasAttribute('data-i18n-html')) {
          // Use innerHTML for elements that contain HTML
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Update html lang attribute
    document.documentElement.setAttribute('lang', lang === 'zh-s' ? 'zh-Hans' : lang === 'zh-t' ? 'zh-Hant' : 'en');
  }

  /**
   * Get translation for a key
   */
  function getTranslation(key, lang) {
    lang = lang || currentLang;

    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }

    // Fallback to English
    if (translations[DEFAULT_LANG] && translations[DEFAULT_LANG][key]) {
      return translations[DEFAULT_LANG][key];
    }

    return null;
  }

  /**
   * Update language UI elements (dropdowns, etc.)
   */
  function updateLanguageUI(lang) {
    // Update dropdown buttons
    var dropdowns = document.querySelectorAll('.language-dropdown');

    dropdowns.forEach(function(dropdown) {
      var buttons = dropdown.querySelectorAll('button');

      buttons.forEach(function(btn) {
        if (btn.dataset.lang === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    });

    // Update the current language display
    var currentLabels = document.querySelectorAll('[data-i18n="lang.current"]');
    currentLabels.forEach(function(label) {
      label.textContent = getTranslation('lang.current', lang);
    });
  }

  /**
   * Utility: Get cookie
   */
  function getCookie(name) {
    if (typeof window.getCookie === 'function') {
      return window.getCookie(name);
    }
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return null;
  }

  /**
   * Utility: Set cookie
   */
  function setCookie(name, value, days) {
    if (typeof window.setCookie === 'function') {
      return window.setCookie(name, value, days);
    }
    days = days || 365;
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }

  // Expose functions globally
  window.setLanguage = setLanguage;
  window.getTranslation = getTranslation;
  window.getCurrentLanguage = function() { return currentLang; };

})();
