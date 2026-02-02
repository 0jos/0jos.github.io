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
      'nav.newsletter': 'Newsletter',

      // News
      'news.title': 'Community News',
      'news.subtitle': 'Stay informed about local developments and community updates.',

      // Language
      'lang.current': 'EN',

      // Hero
      'hero.title': 'Your Rights. Your Resources. Your Voice.',
      'hero.tagline': 'Know your rights. Find local help. Make your voice heard—in English, 简体中文, and 繁體中文.',
      'hero.cta.rights': 'Know Your Rights',
      'hero.cta.resources': 'Find Resources',

      // Progress
      'progress.title': 'Your Learning Progress',
      'progress.sectionTitle': 'Finished reading?',
      'progress.sectionDesc': 'Mark this module as complete to track your progress.',
      'progress.markRead': 'Mark as Read',
      'progress.completed': 'Completed!',

      // Card Upload
      'card.title': 'Your Rights Card',
      'card.desc': 'Upload a custom printable card to include when you print this page.',
      'card.upload': 'Click to upload your card image',
      'card.print': 'Print with Card',
      'card.remove': 'Remove',

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
      'footer.newsletter.btn': 'Subscribe on Substack',
      'footer.feedback': 'Share Feedback',
      'footer.feedback.desc': 'Help us improve this resource for our community.',
      'footer.feedback.btn': 'Give Feedback',
      'footer.partners': 'Resources Consulted:',
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
      'faq.still.title': 'Still have questions?',
      'faq.still.desc': 'Explore our learning modules for more detailed information.',
      'faq.still.resources': 'Find Resources',

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
      'news.subtitle': 'Stay informed about local developments and community updates.',

      // News Page Content
      'news.social.title': 'Follow for Updates',
      'news.social.desc': 'Stay informed by following these community organizations on social media.',
      'news.social.follow': 'Follow on X',
      'news.articles.title': 'News Articles',
      'news.articles.desc': 'Recent news and reports affecting our community.',
      'news.articles.loading': 'Loading news...',
      'news.articles.sources': 'Trusted News Sources:',
      'news.alert.title': 'Report ICE Activity',
      'news.alert.desc': 'If you see ICE activity in your neighborhood, you can report it to help keep the community informed. Reports are anonymous.',
      'news.alert.hotline': 'ICE Reporting Hotline',
      'news.alert.learn': 'Learn More',
      'news.emergency.title': 'Quick Emergency Resources',
      'news.emergency.rights': 'Know Your Rights',
      'news.emergency.help': 'Find Help',
      'news.emergency.hotline': 'Emergency Hotline',

      // Resources Page Supplementary
      'resources.supp.title': 'Community Resources & Contacts',
      'resources.supp.desc': 'Emergency hotlines, community organizations, and legal aid services.',
      'resources.hotlines.title': 'Emergency Hotlines',
      'resources.orgs.title': 'Community Organizations',
      'resources.wallet.title': 'Emergency Wallet Card',
      'resources.wallet.desc': 'Print a wallet-sized card with emergency contacts.',
      'resources.wallet.btn': 'Print Card',
      'resources.expand.title': 'View All Resources & Organizations',
      'resources.next.title': 'Continue Learning',
      'resources.next.label': 'Next Module',
      'resources.next.voting': 'Voting & Elections',

      // Voting Page Supplementary
      'voting.supp.title': 'Voter Resources & Quick Links',
      'voting.supp.desc': 'Register, find your polling place, and learn your voting rights.',
      'voting.register.title': 'Register to Vote',
      'voting.register.desc': 'U.S. citizens 18+ can register online, by mail, or in person.',
      'voting.register.btn': 'Register at Vote.org',
      'voting.polling.title': 'Find Your Polling Place',
      'voting.polling.desc': 'Know where to vote before Election Day.',
      'voting.polling.btn': 'Find Polling Place',
      'voting.problems.title': 'Voting Problems?',
      'voting.problems.number': '1-866-OUR-VOTE',
      'voting.expand.title': 'Read Full Voting Guide',
      'voting.next.title': 'Continue Learning',
      'voting.next.label': 'Next Module',
      'voting.next.contact': 'Getting in Touch',

      // Contact Page Supplementary
      'contact.supp.title': 'Contact Your Representatives',
      'contact.supp.desc': 'Find your elected officials and make your voice heard.',
      'contact.find.title': 'Find Your Reps',
      'contact.find.desc': 'Look up your federal, state, and local officials.',
      'contact.find.btn': 'Find Representatives',
      'contact.script.title': 'Phone Script',
      'contact.script.tip': 'Be brief, specific, and polite.',
      'contact.capitol.title': 'Capitol Switchboard',
      'contact.expand.title': 'Read Full Contact Guide',
      'contact.complete.title': "You've completed all modules!",
      'contact.complete.review': 'Review',
      'contact.complete.rights': 'Know Your Rights',

      // Presentation labels
      'presentation.slides': 'Presentation Slides',
      'presentation.video': 'Video Presentation',
      'presentation.video.soon': 'Video coming soon',
      'presentation.slides.soon': 'Slides coming soon',

      // Rights Page Supplementary
      'rights.supp.title': 'Additional Resources & Information',
      'rights.supp.desc': 'Detailed reference materials, emergency contacts, and printable resources.',
      'rights.quickref.title': 'Quick Reference',
      'rights.quickref.silent': 'I am exercising my right to remain silent.',
      'rights.quickref.search': 'I do not consent to a search.',
      'rights.quickref.warrant': 'Do you have a warrant signed by a judge?',
      'rights.quickref.lawyer': 'I want to speak to a lawyer.',
      'rights.contacts.title': 'Emergency Contacts',
      'rights.expand.title': 'Read Full Text Guide',
      'rights.continue.title': 'Continue Learning',
      'rights.next.label': 'Next Module',
      'rights.next.resources': 'Local Resources',

      // Rights Full Guide Content
      'rights.guide.title': 'Your Constitutional Rights',
      'rights.guide.intro': 'Regardless of your immigration status, you have rights protected by the U.S. Constitution. Understanding these rights can help protect you and your family.',
      'rights.guide.silent.title': 'The Right to Remain Silent',
      'rights.guide.silent.desc': 'The Fifth Amendment protects your right to remain silent. You do not have to answer questions about where you were born, your immigration status, or how you entered the United States.',
      'rights.guide.silent.li1': 'You can say: "I am exercising my right to remain silent."',
      'rights.guide.silent.li2': 'This applies to interactions with police, ICE, and other law enforcement.',
      'rights.guide.silent.li3': 'Remaining silent cannot be used against you in court.',
      'rights.guide.search.title': 'The Right to Refuse Consent to Search',
      'rights.guide.search.desc': 'The Fourth Amendment protects you from unreasonable searches. Without a warrant, you can refuse to let officers search your home, car, or belongings.',
      'rights.guide.search.li1': 'You can say: "I do not consent to a search."',
      'rights.guide.search.li2': 'If they have a warrant, ask to see it and read it carefully.',
      'rights.guide.search.li3': 'A warrant must specify the address and be signed by a judge.',
      'rights.guide.ice.title': 'If ICE Comes to Your Home',
      'rights.guide.ice.desc': 'You do not have to open the door. Ask the officer to identify themselves and show their badge through a window or under the door.',
      'rights.guide.ice.li1': 'Ask: "Do you have a warrant signed by a judge?"',
      'rights.guide.ice.li2': 'An ICE administrative warrant (Form I-200 or I-205) does not give them the right to enter.',
      'rights.guide.ice.li3': 'Only a judicial warrant allows entry without consent.',
      'rights.guide.ice.li4': 'Stay calm. Do not run or resist physically.',
      'rights.guide.stopped.title': 'If You Are Stopped in Public',
      'rights.guide.stopped.desc': 'You have the right to ask: "Am I free to leave?" If the answer is yes, you may calmly walk away.',
      'rights.guide.stopped.li1': 'You do not have to answer questions about your immigration status.',
      'rights.guide.stopped.li2': 'You do not have to show identification in most states (check your state\'s laws).',
      'rights.guide.stopped.li3': 'If you are detained, say: "I want to speak to a lawyer."',
      'rights.guide.arrested.title': 'If You Are Arrested',
      'rights.guide.arrested.desc': 'You have the right to a lawyer. If you cannot afford one, the court must provide one for criminal cases.',
      'rights.guide.arrested.li1': 'Give your name if asked, but you can decline to answer other questions.',
      'rights.guide.arrested.li2': 'Do not sign any documents without a lawyer present.',
      'rights.guide.arrested.li3': 'You have the right to make a phone call.',
      'rights.guide.arrested.li4': 'Remember: Anything you say can be used against you.',
      'rights.guide.remember.title': 'Remember',
      'rights.guide.remember.li1': 'Stay calm. Do not run, argue, or resist.',
      'rights.guide.remember.li2': 'You have rights. Use them respectfully.',
      'rights.guide.remember.li3': 'Get help. Contact a lawyer or legal aid organization.',
      'rights.guide.remember.li4': 'Document everything. Write down badge numbers, names, and what happened.',

      // Historical Context
      'rights.guide.history.title': 'Historical Context: Why These Rights Matter',
      'rights.guide.history.intro': 'Understanding the history of immigration enforcement in America helps us understand why knowing your rights is so important today.',
      'rights.guide.history.exclusion.title': 'The Chinese Exclusion Act (1882)',
      'rights.guide.history.exclusion.desc': 'The Chinese Exclusion Act was the first significant law restricting immigration to the United States based on nationality. For over 60 years, Chinese immigrants were barred from entering the country and denied citizenship. This law led to raids, deportations, and family separations in Chinese American communities. It was not repealed until 1943.',
      'rights.guide.history.eo9066.title': 'Executive Order 9066 (1942)',
      'rights.guide.history.eo9066.desc': 'During World War II, Executive Order 9066 authorized the forced relocation and incarceration of approximately 120,000 Japanese Americans—the majority of whom were U.S. citizens. Families lost their homes, businesses, and possessions. This order showed how quickly constitutional rights can be violated when communities don\'t know or can\'t exercise their rights.',
      'rights.guide.history.today.title': 'Why This Matters Today',
      'rights.guide.history.today.desc': 'The Asian American community has faced deportation concerns throughout American history. Today, knowing your constitutional rights is your best protection. The rights outlined in this guide—the right to remain silent, the right to refuse consent to search, and the right to legal representation—exist because of lessons learned from these historical injustices.',
      'rights.guide.history.today.li1': '<strong>Constitutional protections apply to everyone</strong> within U.S. borders, regardless of citizenship or immigration status.',
      'rights.guide.history.today.li2': '<strong>Community preparedness</strong> and knowing your rights can prevent family separations and protect your loved ones.',
      'rights.guide.history.today.li3': '<strong>Documentation and witness accounts</strong> help hold enforcement accountable and protect civil liberties.',

      // Resources Full Guide Content
      'resources.guide.hotlines.title': 'Emergency Legal Hotlines',
      'resources.guide.hotlines.desc': 'If you or someone you know needs immediate legal assistance:',
      'resources.guide.hotlines.raices': 'RAICES: 1 (800) 354-0365 - Free legal services for immigrant families',
      'resources.guide.hotlines.nijc': 'National Immigrant Justice Center: (212) 629-6335',
      'resources.guide.hotlines.aclu': 'ACLU Immigrants\' Rights: (212) 549-1200',
      'resources.guide.orgs.title': 'Community Organizations',
      'resources.guide.orgs.ola': 'OLA of Eastern Long Island: (631) 209-5188 - Advocacy and services for immigrant community',
      'resources.guide.orgs.moca': 'Museum of Chinese in America: (212) 619-9785 - Cultural preservation and community support',
      'resources.guide.additional.title': 'Additional Resources',
      'resources.guide.additional.workshops': 'Know Your Rights workshops - Many community organizations offer free workshops',
      'resources.guide.additional.language': 'Language assistance - Most legal aid organizations can provide interpreters',
      'resources.guide.additional.family': 'Family preparedness - Create an emergency plan with your family',

      // Voting Full Guide Content
      'voting.guide.whocan.title': 'Who Can Register to Vote?',
      'voting.guide.whocan.li1': 'U.S. citizens',
      'voting.guide.whocan.li2': 'Residents of the state where you\'re registering',
      'voting.guide.whocan.li3': 'At least 18 years old by Election Day',
      'voting.guide.howto.title': 'How to Register',
      'voting.guide.howto.online': 'Online: Visit your state\'s election website',
      'voting.guide.howto.mail': 'By Mail: Download and mail a voter registration form',
      'voting.guide.howto.inperson': 'In Person: Visit your local election office or DMV',
      'voting.guide.ways.title': 'Ways to Vote',
      'voting.guide.ways.inperson': 'In-Person: Vote at your polling place on Election Day',
      'voting.guide.ways.early': 'Early Voting: Many states offer early voting before Election Day',
      'voting.guide.ways.mail': 'Mail-In/Absentee: Request a ballot to vote by mail',
      'voting.guide.yourrights.title': 'Your Rights at the Polls',
      'voting.guide.yourrights.li1': 'You can vote if you\'re in line before polls close',
      'voting.guide.yourrights.li2': 'You can request assistance if you need help',
      'voting.guide.yourrights.li3': 'You can request a provisional ballot if there are issues',
      'voting.guide.yourrights.li4': 'You can report problems to election officials',

      // Contact Full Guide Content
      'contact.guide.tips.title': 'Tips for Effective Contact',
      'contact.guide.phone.title': 'Phone Calls',
      'contact.guide.phone.li1': 'Be brief and specific. State your name, where you live, and the issue.',
      'contact.guide.phone.li2': 'Ask for a position. "Does the Representative support [issue]?"',
      'contact.guide.phone.li3': 'Share your story. Personal stories are powerful.',
      'contact.guide.phone.li4': 'Be polite. Staff members report to the official.',
      'contact.guide.script.title': 'Sample Phone Script',
      'contact.guide.script.text': '"Hello, my name is [Name] and I\'m a constituent from [City/ZIP]. I\'m calling to urge [Senator/Representative Name] to [support/oppose] [specific bill]. This is important because [reason]. Thank you."',
      'contact.guide.writing.title': 'Writing Letters or Emails',
      'contact.guide.writing.li1': 'Include your address. This confirms you\'re a constituent.',
      'contact.guide.writing.li2': 'Focus on one issue. Don\'t cover multiple topics.',
      'contact.guide.writing.li3': 'Be specific. Reference bill numbers if applicable.',
      'contact.guide.writing.li4': 'Request a response. Ask for their position.',

      // QR Codes
      'qr.scan': 'Scan for mobile',
      'qr.rights': 'Scan for full rights info',
      'qr.resources': 'Scan for all resources',

      // FAQ Questions
      'faq.q1': 'Do I have constitutional rights if I\'m not a U.S. citizen?',
      'faq.q2': 'Do I have to open my door if ICE comes to my home?',
      'faq.q3': 'What should I do if I\'m stopped by police?',
      'faq.q4': 'Can I refuse a search of my car or belongings?',
      'faq.q5': 'How do I find free legal help?',
      'faq.q6': 'Do I need to show ID to police?',
      'faq.q7': 'Can I vote if I\'m not a citizen?',
      'faq.q8': 'What is a "sanctuary city"?',
      'faq.q9': 'What should I do to prepare my family?',
      'faq.q10': 'Where can I get this information in Chinese?'
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
      'nav.newsletter': '订阅',

      // News
      'news.title': '社区新闻',
      'news.subtitle': '了解本地动态和社区更新。',

      // Language
      'lang.current': '简',

      // Hero
      'hero.title': '您的权利。您的资源。您的声音。',
      'hero.tagline': '了解您的权利。寻找本地帮助。发出您的声音——提供英文、简体中文和繁體中文版本。',
      'hero.cta.rights': '了解您的权利',
      'hero.cta.resources': '寻找资源',

      // Progress
      'progress.title': '您的学习进度',
      'progress.sectionTitle': '阅读完成了吗？',
      'progress.sectionDesc': '标记此模块为完成以跟踪您的进度。',
      'progress.markRead': '标记为已读',
      'progress.completed': '已完成！',

      // Card Upload
      'card.title': '您的权利卡',
      'card.desc': '上传自定义可打印卡片，在打印此页面时包含。',
      'card.upload': '点击上传您的卡片图片',
      'card.print': '打印带卡片',
      'card.remove': '移除',

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
      'footer.newsletter.btn': '订阅 Substack',
      'footer.feedback': '分享反馈',
      'footer.feedback.desc': '帮助我们改进这个社区资源。',
      'footer.feedback.btn': '提供反馈',
      'footer.partners': '参考资源：',
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
      'faq.still.title': '还有问题吗？',
      'faq.still.desc': '探索我们的学习模块以获取更多详细信息。',
      'faq.still.resources': '查找资源',

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
      'news.subtitle': '了解本地动态和社区更新。',

      // News Page Content
      'news.social.title': '关注获取更新',
      'news.social.desc': '关注这些社区组织的社交媒体，获取最新信息。',
      'news.social.follow': '在X上关注',
      'news.articles.title': '新闻文章',
      'news.articles.desc': '影响我们社区的最新新闻和报道。',
      'news.articles.loading': '加载新闻中...',
      'news.articles.sources': '可信新闻来源：',
      'news.alert.title': '举报ICE活动',
      'news.alert.desc': '如果您在社区看到ICE活动，可以匿名举报以帮助社区了解情况。',
      'news.alert.hotline': 'ICE举报热线',
      'news.alert.learn': '了解更多',
      'news.emergency.title': '紧急资源快速链接',
      'news.emergency.rights': '了解您的权利',
      'news.emergency.help': '寻找帮助',
      'news.emergency.hotline': '紧急热线',

      // Resources Page Supplementary
      'resources.supp.title': '社区资源与联系方式',
      'resources.supp.desc': '紧急热线、社区组织和法律援助服务。',
      'resources.hotlines.title': '紧急热线',
      'resources.orgs.title': '社区组织',
      'resources.wallet.title': '紧急钱包卡',
      'resources.wallet.desc': '打印一张带有紧急联系方式的钱包卡。',
      'resources.wallet.btn': '打印卡片',
      'resources.expand.title': '查看所有资源和组织',
      'resources.next.title': '继续学习',
      'resources.next.label': '下一模块',
      'resources.next.voting': '投票与选举',

      // Voting Page Supplementary
      'voting.supp.title': '选民资源与快速链接',
      'voting.supp.desc': '注册、查找投票站、了解您的投票权。',
      'voting.register.title': '注册投票',
      'voting.register.desc': '年满18岁的美国公民可以在线、邮寄或亲自注册。',
      'voting.register.btn': '在Vote.org注册',
      'voting.polling.title': '查找投票站',
      'voting.polling.desc': '选举日前了解投票地点。',
      'voting.polling.btn': '查找投票站',
      'voting.problems.title': '投票遇到问题？',
      'voting.problems.number': '1-866-OUR-VOTE',
      'voting.expand.title': '阅读完整投票指南',
      'voting.next.title': '继续学习',
      'voting.next.label': '下一模块',
      'voting.next.contact': '联系方式',

      // Contact Page Supplementary
      'contact.supp.title': '联系您的代表',
      'contact.supp.desc': '查找您的民选官员，让您的声音被听到。',
      'contact.find.title': '查找代表',
      'contact.find.desc': '查找您的联邦、州和地方官员。',
      'contact.find.btn': '查找代表',
      'contact.script.title': '电话脚本',
      'contact.script.tip': '简洁、具体、礼貌。',
      'contact.capitol.title': '国会总机',
      'contact.expand.title': '阅读完整联系指南',
      'contact.complete.title': '您已完成所有模块！',
      'contact.complete.review': '复习',
      'contact.complete.rights': '了解您的权利',

      // Presentation labels
      'presentation.slides': '演示幻灯片',
      'presentation.video': '视频演示',
      'presentation.video.soon': '视频即将推出',
      'presentation.slides.soon': '幻灯片即将推出',

      // Rights Page Supplementary
      'rights.supp.title': '其他资源与信息',
      'rights.supp.desc': '详细参考资料、紧急联系方式和可打印资源。',
      'rights.quickref.title': '快速参考',
      'rights.quickref.silent': '我行使保持沉默的权利。',
      'rights.quickref.search': '我不同意搜查。',
      'rights.quickref.warrant': '您有法官签署的搜查令吗？',
      'rights.quickref.lawyer': '我想和律师谈谈。',
      'rights.contacts.title': '紧急联系方式',
      'rights.expand.title': '阅读完整指南',
      'rights.continue.title': '继续学习',
      'rights.next.label': '下一模块',
      'rights.next.resources': '本地资源',

      // Rights Full Guide Content
      'rights.guide.title': '您的宪法权利',
      'rights.guide.intro': '无论您的移民身份如何，您都享有美国宪法保护的权利。了解这些权利可以帮助保护您和您的家人。',
      'rights.guide.silent.title': '保持沉默的权利',
      'rights.guide.silent.desc': '第五修正案保护您保持沉默的权利。您不必回答有关出生地、移民身份或如何进入美国的问题。',
      'rights.guide.silent.li1': '您可以说："我行使保持沉默的权利。"',
      'rights.guide.silent.li2': '这适用于与警察、ICE和其他执法人员的互动。',
      'rights.guide.silent.li3': '保持沉默不能在法庭上被用来对付您。',
      'rights.guide.search.title': '拒绝搜查的权利',
      'rights.guide.search.desc': '第四修正案保护您免受不合理搜查。在没有搜查令的情况下，您可以拒绝让警察搜查您的住所、汽车或物品。',
      'rights.guide.search.li1': '您可以说："我不同意搜查。"',
      'rights.guide.search.li2': '如果他们有搜查令，要求查看并仔细阅读。',
      'rights.guide.search.li3': '搜查令必须注明地址并由法官签署。',
      'rights.guide.ice.title': '如果ICE来到您家',
      'rights.guide.ice.desc': '您不必开门。请警察通过窗户或门缝出示身份和徽章。',
      'rights.guide.ice.li1': '问："您有法官签署的搜查令吗？"',
      'rights.guide.ice.li2': 'ICE行政令（I-200或I-205表格）不赋予他们进入的权利。',
      'rights.guide.ice.li3': '只有司法搜查令才能在未经同意的情况下进入。',
      'rights.guide.ice.li4': '保持冷静。不要跑或反抗。',
      'rights.guide.stopped.title': '如果您在公共场所被拦下',
      'rights.guide.stopped.desc': '您有权问："我可以离开吗？"如果回答是肯定的，您可以平静地走开。',
      'rights.guide.stopped.li1': '您不必回答有关移民身份的问题。',
      'rights.guide.stopped.li2': '在大多数州，您不必出示身份证明（请查阅您所在州的法律）。',
      'rights.guide.stopped.li3': '如果您被拘留，请说："我想和律师谈谈。"',
      'rights.guide.arrested.title': '如果您被逮捕',
      'rights.guide.arrested.desc': '您有权获得律师。如果您负担不起，法院必须在刑事案件中为您提供律师。',
      'rights.guide.arrested.li1': '如果被问到，请告知您的姓名，但您可以拒绝回答其他问题。',
      'rights.guide.arrested.li2': '没有律师在场，不要签署任何文件。',
      'rights.guide.arrested.li3': '您有权打电话。',
      'rights.guide.arrested.li4': '记住：您说的任何话都可能被用来对付您。',
      'rights.guide.remember.title': '请记住',
      'rights.guide.remember.li1': '保持冷静。不要跑、争辩或反抗。',
      'rights.guide.remember.li2': '您有权利。请尊重地使用它们。',
      'rights.guide.remember.li3': '寻求帮助。联系律师或法律援助组织。',
      'rights.guide.remember.li4': '记录一切。写下警徽号码、姓名和发生的事情。',

      // Historical Context
      'rights.guide.history.title': '历史背景：为什么这些权利很重要',
      'rights.guide.history.intro': '了解美国移民执法的历史有助于我们理解为什么了解您的权利如此重要。',
      'rights.guide.history.exclusion.title': '排华法案（1882年）',
      'rights.guide.history.exclusion.desc': '排华法案是美国第一部基于国籍限制移民的重要法律。在60多年的时间里，华人移民被禁止进入美国并被剥夺公民权。这项法律导致了对华人社区的搜查、驱逐和家庭分离。该法案直到1943年才被废除。',
      'rights.guide.history.eo9066.title': '第9066号行政命令（1942年）',
      'rights.guide.history.eo9066.desc': '第二次世界大战期间，第9066号行政命令授权强制迁移和监禁约12万日裔美国人——其中大多数是美国公民。家庭失去了他们的房屋、企业和财产。这一命令表明，当社区不了解或无法行使其权利时，宪法权利可能会被多么迅速地侵犯。',
      'rights.guide.history.today.title': '为什么这对今天很重要',
      'rights.guide.history.today.desc': '亚裔美国人社区在整个美国历史上一直面临驱逐出境的担忧。今天，了解您的宪法权利是您最好的保护。本指南中概述的权利——保持沉默的权利、拒绝搜查的权利和获得法律代理的权利——都是从这些历史不公正中吸取的教训。',
      'rights.guide.history.today.li1': '<strong>宪法保护适用于每个人</strong>，无论公民身份或移民身份如何。',
      'rights.guide.history.today.li2': '<strong>社区准备</strong>和了解您的权利可以防止家庭分离并保护您的亲人。',
      'rights.guide.history.today.li3': '<strong>记录和证人陈述</strong>有助于追究执法责任并保护公民自由。',

      // Resources Full Guide Content
      'resources.guide.hotlines.title': '紧急法律热线',
      'resources.guide.hotlines.desc': '如果您或您认识的人需要即时法律援助：',
      'resources.guide.hotlines.raices': 'RAICES：1 (800) 354-0365 - 为移民家庭提供免费法律服务',
      'resources.guide.hotlines.nijc': '全国移民正义中心：(212) 629-6335',
      'resources.guide.hotlines.aclu': 'ACLU移民权利：(212) 549-1200',
      'resources.guide.orgs.title': '社区组织',
      'resources.guide.orgs.ola': '东长岛OLA：(631) 209-5188 - 移民社区倡导和服务',
      'resources.guide.orgs.moca': '美国华人博物馆：(212) 619-9785 - 文化保护和社区支持',
      'resources.guide.additional.title': '其他资源',
      'resources.guide.additional.workshops': '了解您的权利讲习班 - 许多社区组织提供免费讲习班',
      'resources.guide.additional.language': '语言协助 - 大多数法律援助组织可以提供口译员',
      'resources.guide.additional.family': '家庭准备 - 与家人制定应急计划',

      // Voting Full Guide Content
      'voting.guide.whocan.title': '谁可以登记投票？',
      'voting.guide.whocan.li1': '美国公民',
      'voting.guide.whocan.li2': '在登记州的居民',
      'voting.guide.whocan.li3': '选举日当天年满18岁',
      'voting.guide.howto.title': '如何登记',
      'voting.guide.howto.online': '在线：访问您所在州的选举网站',
      'voting.guide.howto.mail': '邮寄：下载并邮寄选民登记表',
      'voting.guide.howto.inperson': '亲自：访问当地选举办公室或车管所',
      'voting.guide.ways.title': '投票方式',
      'voting.guide.ways.inperson': '亲自投票：选举日当天在投票站投票',
      'voting.guide.ways.early': '提前投票：许多州在选举日前提供提前投票',
      'voting.guide.ways.mail': '邮寄/缺席投票：申请邮寄选票',
      'voting.guide.yourrights.title': '您在投票站的权利',
      'voting.guide.yourrights.li1': '如果在投票站关闭前排队，您可以投票',
      'voting.guide.yourrights.li2': '如果需要帮助，您可以要求协助',
      'voting.guide.yourrights.li3': '如果有问题，您可以要求临时选票',
      'voting.guide.yourrights.li4': '您可以向选举官员报告问题',

      // Contact Full Guide Content
      'contact.guide.tips.title': '有效联系的技巧',
      'contact.guide.phone.title': '电话联系',
      'contact.guide.phone.li1': '简明扼要。说明您的姓名、居住地和问题。',
      'contact.guide.phone.li2': '询问立场。"代表是否支持[议题]？"',
      'contact.guide.phone.li3': '分享您的故事。个人故事很有说服力。',
      'contact.guide.phone.li4': '保持礼貌。工作人员会向官员汇报。',
      'contact.guide.script.title': '电话示例脚本',
      'contact.guide.script.text': '"您好，我叫[姓名]，是来自[城市/邮编]的选民。我打电话呼吁[参议员/众议员姓名][支持/反对][具体法案]。这很重要，因为[原因]。谢谢。"',
      'contact.guide.writing.title': '写信或发邮件',
      'contact.guide.writing.li1': '包括您的地址。这可以确认您是选民。',
      'contact.guide.writing.li2': '专注于一个问题。不要涉及多个话题。',
      'contact.guide.writing.li3': '具体说明。如适用，引用法案编号。',
      'contact.guide.writing.li4': '要求回复。询问他们的立场。',

      // QR Codes
      'qr.scan': '扫码访问手机版',
      'qr.rights': '扫码了解完整权利',
      'qr.resources': '扫码查看所有资源',

      // FAQ Questions
      'faq.q1': '如果我不是美国公民，我有宪法权利吗？',
      'faq.q2': '如果ICE来我家，我必须开门吗？',
      'faq.q3': '如果我被警察拦下，应该怎么办？',
      'faq.q4': '我可以拒绝搜查我的车辆或物品吗？',
      'faq.q5': '如何找到免费的法律帮助？',
      'faq.q6': '我需要向警察出示身份证件吗？',
      'faq.q7': '如果我不是公民，我可以投票吗？',
      'faq.q8': '什么是"庇护城市"？',
      'faq.q9': '我应该做什么来为家人做准备？',
      'faq.q10': '在哪里可以获得中文版的这些信息？'
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
      'nav.newsletter': '訂閱',

      // News
      'news.title': '社區新聞',
      'news.subtitle': '了解本地動態和社區更新。',

      // Language
      'lang.current': '繁',

      // Hero
      'hero.title': '您的權利。您的資源。您的聲音。',
      'hero.tagline': '了解您的權利。尋找本地幫助。發出您的聲音——提供英文、简体中文和繁體中文版本。',
      'hero.cta.rights': '了解您的權利',
      'hero.cta.resources': '尋找資源',

      // Progress
      'progress.title': '您的學習進度',
      'progress.sectionTitle': '閱讀完成了嗎？',
      'progress.sectionDesc': '標記此模組為完成以追蹤您的進度。',
      'progress.markRead': '標記為已讀',
      'progress.completed': '已完成！',

      // Card Upload
      'card.title': '您的權利卡',
      'card.desc': '上傳自訂可列印卡片，在列印此頁面時包含。',
      'card.upload': '點擊上傳您的卡片圖片',
      'card.print': '列印帶卡片',
      'card.remove': '移除',

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
      'footer.newsletter.btn': '訂閱 Substack',
      'footer.feedback': '分享反饋',
      'footer.feedback.desc': '幫助我們改進這個社區資源。',
      'footer.feedback.btn': '提供反饋',
      'footer.partners': '參考資源：',
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
      'faq.still.title': '還有問題嗎？',
      'faq.still.desc': '探索我們的學習模組以獲取更多詳細資訊。',
      'faq.still.resources': '查找資源',

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
      'news.subtitle': '了解本地動態和社區更新。',

      // News Page Content
      'news.social.title': '關注獲取更新',
      'news.social.desc': '關注這些社區組織的社交媒體，獲取最新信息。',
      'news.social.follow': '在X上關注',
      'news.articles.title': '新聞文章',
      'news.articles.desc': '影響我們社區的最新新聞和報導。',
      'news.articles.loading': '載入新聞中...',
      'news.articles.sources': '可信新聞來源：',
      'news.alert.title': '舉報ICE活動',
      'news.alert.desc': '如果您在社區看到ICE活動，可以匿名舉報以幫助社區了解情況。',
      'news.alert.hotline': 'ICE舉報熱線',
      'news.alert.learn': '了解更多',
      'news.emergency.title': '緊急資源快速連結',
      'news.emergency.rights': '了解您的權利',
      'news.emergency.help': '尋找幫助',
      'news.emergency.hotline': '緊急熱線',

      // Resources Page Supplementary
      'resources.supp.title': '社區資源與聯繫方式',
      'resources.supp.desc': '緊急熱線、社區組織和法律援助服務。',
      'resources.hotlines.title': '緊急熱線',
      'resources.orgs.title': '社區組織',
      'resources.wallet.title': '緊急錢包卡',
      'resources.wallet.desc': '列印一張帶有緊急聯繫方式的錢包卡。',
      'resources.wallet.btn': '列印卡片',
      'resources.expand.title': '查看所有資源和組織',
      'resources.next.title': '繼續學習',
      'resources.next.label': '下一模組',
      'resources.next.voting': '投票與選舉',

      // Voting Page Supplementary
      'voting.supp.title': '選民資源與快速連結',
      'voting.supp.desc': '註冊、查找投票站、了解您的投票權。',
      'voting.register.title': '註冊投票',
      'voting.register.desc': '年滿18歲的美國公民可以線上、郵寄或親自註冊。',
      'voting.register.btn': '在Vote.org註冊',
      'voting.polling.title': '查找投票站',
      'voting.polling.desc': '選舉日前了解投票地點。',
      'voting.polling.btn': '查找投票站',
      'voting.problems.title': '投票遇到問題？',
      'voting.problems.number': '1-866-OUR-VOTE',
      'voting.expand.title': '閱讀完整投票指南',
      'voting.next.title': '繼續學習',
      'voting.next.label': '下一模組',
      'voting.next.contact': '聯繫方式',

      // Contact Page Supplementary
      'contact.supp.title': '聯繫您的代表',
      'contact.supp.desc': '查找您的民選官員，讓您的聲音被聽到。',
      'contact.find.title': '查找代表',
      'contact.find.desc': '查找您的聯邦、州和地方官員。',
      'contact.find.btn': '查找代表',
      'contact.script.title': '電話腳本',
      'contact.script.tip': '簡潔、具體、禮貌。',
      'contact.capitol.title': '國會總機',
      'contact.expand.title': '閱讀完整聯繫指南',
      'contact.complete.title': '您已完成所有模組！',
      'contact.complete.review': '複習',
      'contact.complete.rights': '了解您的權利',

      // Presentation labels
      'presentation.slides': '演示幻燈片',
      'presentation.video': '視頻演示',
      'presentation.video.soon': '視頻即將推出',
      'presentation.slides.soon': '幻燈片即將推出',

      // Rights Page Supplementary
      'rights.supp.title': '其他資源與資訊',
      'rights.supp.desc': '詳細參考資料、緊急聯繫方式和可列印資源。',
      'rights.quickref.title': '快速參考',
      'rights.quickref.silent': '我行使保持沉默的權利。',
      'rights.quickref.search': '我不同意搜查。',
      'rights.quickref.warrant': '您有法官簽署的搜查令嗎？',
      'rights.quickref.lawyer': '我想和律師談談。',
      'rights.contacts.title': '緊急聯繫方式',
      'rights.expand.title': '閱讀完整指南',
      'rights.continue.title': '繼續學習',
      'rights.next.label': '下一模組',
      'rights.next.resources': '本地資源',

      // Rights Full Guide Content
      'rights.guide.title': '您的憲法權利',
      'rights.guide.intro': '無論您的移民身份如何，您都享有美國憲法保護的權利。了解這些權利可以幫助保護您和您的家人。',
      'rights.guide.silent.title': '保持沉默的權利',
      'rights.guide.silent.desc': '第五修正案保護您保持沉默的權利。您不必回答有關出生地、移民身份或如何進入美國的問題。',
      'rights.guide.silent.li1': '您可以說：「我行使保持沉默的權利。」',
      'rights.guide.silent.li2': '這適用於與警察、ICE和其他執法人員的互動。',
      'rights.guide.silent.li3': '保持沉默不能在法庭上被用來對付您。',
      'rights.guide.search.title': '拒絕搜查的權利',
      'rights.guide.search.desc': '第四修正案保護您免受不合理搜查。在沒有搜查令的情況下，您可以拒絕讓警察搜查您的住所、汽車或物品。',
      'rights.guide.search.li1': '您可以說：「我不同意搜查。」',
      'rights.guide.search.li2': '如果他們有搜查令，要求查看並仔細閱讀。',
      'rights.guide.search.li3': '搜查令必須註明地址並由法官簽署。',
      'rights.guide.ice.title': '如果ICE來到您家',
      'rights.guide.ice.desc': '您不必開門。請警察通過窗戶或門縫出示身份和徽章。',
      'rights.guide.ice.li1': '問：「您有法官簽署的搜查令嗎？」',
      'rights.guide.ice.li2': 'ICE行政令（I-200或I-205表格）不賦予他們進入的權利。',
      'rights.guide.ice.li3': '只有司法搜查令才能在未經同意的情況下進入。',
      'rights.guide.ice.li4': '保持冷靜。不要跑或反抗。',
      'rights.guide.stopped.title': '如果您在公共場所被攔下',
      'rights.guide.stopped.desc': '您有權問：「我可以離開嗎？」如果回答是肯定的，您可以平靜地走開。',
      'rights.guide.stopped.li1': '您不必回答有關移民身份的問題。',
      'rights.guide.stopped.li2': '在大多數州，您不必出示身份證明（請查閱您所在州的法律）。',
      'rights.guide.stopped.li3': '如果您被拘留，請說：「我想和律師談談。」',
      'rights.guide.arrested.title': '如果您被逮捕',
      'rights.guide.arrested.desc': '您有權獲得律師。如果您負擔不起，法院必須在刑事案件中為您提供律師。',
      'rights.guide.arrested.li1': '如果被問到，請告知您的姓名，但您可以拒絕回答其他問題。',
      'rights.guide.arrested.li2': '沒有律師在場，不要簽署任何文件。',
      'rights.guide.arrested.li3': '您有權打電話。',
      'rights.guide.arrested.li4': '記住：您說的任何話都可能被用來對付您。',
      'rights.guide.remember.title': '請記住',
      'rights.guide.remember.li1': '保持冷靜。不要跑、爭辯或反抗。',
      'rights.guide.remember.li2': '您有權利。請尊重地使用它們。',
      'rights.guide.remember.li3': '尋求幫助。聯繫律師或法律援助組織。',
      'rights.guide.remember.li4': '記錄一切。寫下警徽號碼、姓名和發生的事情。',

      // Historical Context
      'rights.guide.history.title': '歷史背景：為什麼這些權利很重要',
      'rights.guide.history.intro': '了解美國移民執法的歷史有助於我們理解為什麼了解您的權利如此重要。',
      'rights.guide.history.exclusion.title': '排華法案（1882年）',
      'rights.guide.history.exclusion.desc': '排華法案是美國第一部基於國籍限制移民的重要法律。在60多年的時間裡，華人移民被禁止進入美國並被剝奪公民權。這項法律導致了對華人社區的搜查、驅逐和家庭分離。該法案直到1943年才被廢除。',
      'rights.guide.history.eo9066.title': '第9066號行政命令（1942年）',
      'rights.guide.history.eo9066.desc': '第二次世界大戰期間，第9066號行政命令授權強制遷移和監禁約12萬日裔美國人——其中大多數是美國公民。家庭失去了他們的房屋、企業和財產。這一命令表明，當社區不了解或無法行使其權利時，憲法權利可能會被多麼迅速地侵犯。',
      'rights.guide.history.today.title': '為什麼這對今天很重要',
      'rights.guide.history.today.desc': '亞裔美國人社區在整個美國歷史上一直面臨驅逐出境的擔憂。今天，了解您的憲法權利是您最好的保護。本指南中概述的權利——保持沉默的權利、拒絕搜查的權利和獲得法律代理的權利——都是從這些歷史不公正中吸取的教訓。',
      'rights.guide.history.today.li1': '<strong>憲法保護適用於每個人</strong>，無論公民身份或移民身份如何。',
      'rights.guide.history.today.li2': '<strong>社區準備</strong>和了解您的權利可以防止家庭分離並保護您的親人。',
      'rights.guide.history.today.li3': '<strong>記錄和證人陳述</strong>有助於追究執法責任並保護公民自由。',

      // Resources Full Guide Content
      'resources.guide.hotlines.title': '緊急法律熱線',
      'resources.guide.hotlines.desc': '如果您或您認識的人需要即時法律援助：',
      'resources.guide.hotlines.raices': 'RAICES：1 (800) 354-0365 - 為移民家庭提供免費法律服務',
      'resources.guide.hotlines.nijc': '全國移民正義中心：(212) 629-6335',
      'resources.guide.hotlines.aclu': 'ACLU移民權利：(212) 549-1200',
      'resources.guide.orgs.title': '社區組織',
      'resources.guide.orgs.ola': '東長島OLA：(631) 209-5188 - 移民社區倡導和服務',
      'resources.guide.orgs.moca': '美國華人博物館：(212) 619-9785 - 文化保護和社區支持',
      'resources.guide.additional.title': '其他資源',
      'resources.guide.additional.workshops': '了解您的權利講習班 - 許多社區組織提供免費講習班',
      'resources.guide.additional.language': '語言協助 - 大多數法律援助組織可以提供口譯員',
      'resources.guide.additional.family': '家庭準備 - 與家人制定應急計劃',

      // Voting Full Guide Content
      'voting.guide.whocan.title': '誰可以登記投票？',
      'voting.guide.whocan.li1': '美國公民',
      'voting.guide.whocan.li2': '在登記州的居民',
      'voting.guide.whocan.li3': '選舉日當天年滿18歲',
      'voting.guide.howto.title': '如何登記',
      'voting.guide.howto.online': '線上：訪問您所在州的選舉網站',
      'voting.guide.howto.mail': '郵寄：下載並郵寄選民登記表',
      'voting.guide.howto.inperson': '親自：訪問當地選舉辦公室或車管所',
      'voting.guide.ways.title': '投票方式',
      'voting.guide.ways.inperson': '親自投票：選舉日當天在投票站投票',
      'voting.guide.ways.early': '提前投票：許多州在選舉日前提供提前投票',
      'voting.guide.ways.mail': '郵寄/缺席投票：申請郵寄選票',
      'voting.guide.yourrights.title': '您在投票站的權利',
      'voting.guide.yourrights.li1': '如果在投票站關閉前排隊，您可以投票',
      'voting.guide.yourrights.li2': '如果需要幫助，您可以要求協助',
      'voting.guide.yourrights.li3': '如果有問題，您可以要求臨時選票',
      'voting.guide.yourrights.li4': '您可以向選舉官員報告問題',

      // Contact Full Guide Content
      'contact.guide.tips.title': '有效聯繫的技巧',
      'contact.guide.phone.title': '電話聯繫',
      'contact.guide.phone.li1': '簡明扼要。說明您的姓名、居住地和問題。',
      'contact.guide.phone.li2': '詢問立場。「代表是否支持[議題]？」',
      'contact.guide.phone.li3': '分享您的故事。個人故事很有說服力。',
      'contact.guide.phone.li4': '保持禮貌。工作人員會向官員匯報。',
      'contact.guide.script.title': '電話示例腳本',
      'contact.guide.script.text': '「您好，我叫[姓名]，是來自[城市/郵編]的選民。我打電話呼籲[參議員/眾議員姓名][支持/反對][具體法案]。這很重要，因為[原因]。謝謝。」',
      'contact.guide.writing.title': '寫信或發郵件',
      'contact.guide.writing.li1': '包括您的地址。這可以確認您是選民。',
      'contact.guide.writing.li2': '專注於一個問題。不要涉及多個話題。',
      'contact.guide.writing.li3': '具體說明。如適用，引用法案編號。',
      'contact.guide.writing.li4': '要求回覆。詢問他們的立場。',

      // QR Codes
      'qr.scan': '掃碼訪問手機版',
      'qr.rights': '掃碼了解完整權利',
      'qr.resources': '掃碼查看所有資源',

      // FAQ Questions
      'faq.q1': '如果我不是美國公民，我有憲法權利嗎？',
      'faq.q2': '如果ICE來我家，我必須開門嗎？',
      'faq.q3': '如果我被警察攔下，應該怎麼辦？',
      'faq.q4': '我可以拒絕搜查我的車輛或物品嗎？',
      'faq.q5': '如何找到免費的法律幫助？',
      'faq.q6': '我需要向警察出示身份證件嗎？',
      'faq.q7': '如果我不是公民，我可以投票嗎？',
      'faq.q8': '什麼是「庇護城市」？',
      'faq.q9': '我應該做什麼來為家人做準備？',
      'faq.q10': '在哪裡可以獲得中文版的這些資訊？'
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
