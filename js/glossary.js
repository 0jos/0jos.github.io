/**
 * Chinatown Civic Compass - Glossary
 * Handles glossary terms and side panel definitions
 */

(function() {
  'use strict';

  // Glossary definitions
  // Each term has: English definition, Simplified Chinese term + definition, Traditional Chinese term + definition
  var glossary = {
    'fifth-amendment': {
      en: {
        term: 'Fifth Amendment',
        definition: 'Part of the U.S. Constitution that protects you from being forced to testify against yourself. It guarantees your right to remain silent when questioned by police or other authorities.'
      },
      'zh-s': {
        term: '第五修正案',
        definition: '美国宪法的一部分，保护您不被强迫作证指控自己。它保障您在被警察或其他当局询问时保持沉默的权利。'
      },
      'zh-t': {
        term: '第五修正案',
        definition: '美國憲法的一部分，保護您不被強迫作證指控自己。它保障您在被警察或其他當局詢問時保持沉默的權利。'
      }
    },

    'fourth-amendment': {
      en: {
        term: 'Fourth Amendment',
        definition: 'Part of the U.S. Constitution that protects you from unreasonable searches and seizures by the government. It requires law enforcement to have a warrant in most cases.'
      },
      'zh-s': {
        term: '第四修正案',
        definition: '美国宪法的一部分，保护您免受政府的不合理搜查和扣押。在大多数情况下，它要求执法部门持有搜查令。'
      },
      'zh-t': {
        term: '第四修正案',
        definition: '美國憲法的一部分，保護您免受政府的不合理搜查和扣押。在大多數情況下，它要求執法部門持有搜查令。'
      }
    },

    'ice': {
      en: {
        term: 'ICE (Immigration and Customs Enforcement)',
        definition: 'A U.S. federal agency responsible for immigration enforcement, customs, and border control. ICE agents may conduct raids, detain individuals, and process deportation proceedings.'
      },
      'zh-s': {
        term: 'ICE（移民和海关执法局）',
        definition: '美国联邦机构，负责移民执法、海关和边境管制。ICE特工可能进行突击检查、拘留个人并处理驱逐程序。'
      },
      'zh-t': {
        term: 'ICE（移民和海關執法局）',
        definition: '美國聯邦機構，負責移民執法、海關和邊境管制。ICE特工可能進行突擊檢查、拘留個人並處理驅逐程序。'
      }
    },

    'warrant': {
      en: {
        term: 'Warrant',
        definition: 'A legal document signed by a judge that authorizes law enforcement to take a specific action, such as arresting someone or searching a property. An ICE administrative warrant is different from a judicial warrant and does not authorize entry into a home.'
      },
      'zh-s': {
        term: '逮捕令/搜查令',
        definition: '由法官签署的法律文件，授权执法部门采取特定行动，如逮捕某人或搜查房产。ICE行政令与司法令不同，不授权进入住宅。'
      },
      'zh-t': {
        term: '逮捕令/搜查令',
        definition: '由法官簽署的法律文件，授權執法部門採取特定行動，如逮捕某人或搜查房產。ICE行政令與司法令不同，不授權進入住宅。'
      }
    },

    'deportation': {
      en: {
        term: 'Deportation',
        definition: 'The formal removal of a person from a country when they have violated immigration laws. Also called "removal." The process involves legal proceedings where you have the right to present your case.'
      },
      'zh-s': {
        term: '驱逐出境',
        definition: '当一个人违反移民法时，正式将其从一个国家驱逐出去。也称为"移除"。该过程涉及法律程序，您有权陈述自己的案件。'
      },
      'zh-t': {
        term: '驅逐出境',
        definition: '當一個人違反移民法時，正式將其從一個國家驅逐出去。也稱為"移除"。該過程涉及法律程序，您有權陳述自己的案件。'
      }
    },

    'constitutional-rights': {
      en: {
        term: 'Constitutional Rights',
        definition: 'Rights guaranteed by the U.S. Constitution to all people within U.S. borders, regardless of citizenship or immigration status. These include the right to remain silent, the right to an attorney, and protection from unreasonable searches.'
      },
      'zh-s': {
        term: '宪法权利',
        definition: '美国宪法保障美国境内所有人的权利，无论公民身份或移民状况如何。这些权利包括保持沉默的权利、获得律师的权利以及免受不合理搜查的保护。'
      },
      'zh-t': {
        term: '憲法權利',
        definition: '美國憲法保障美國境內所有人的權利，無論公民身份或移民狀況如何。這些權利包括保持沉默的權利、獲得律師的權利以及免受不合理搜查的保護。'
      }
    },

    'legal-aid': {
      en: {
        term: 'Legal Aid',
        definition: 'Free or low-cost legal services provided to people who cannot afford an attorney. Many organizations offer legal aid specifically for immigration cases.'
      },
      'zh-s': {
        term: '法律援助',
        definition: '为无力聘请律师的人提供的免费或低成本法律服务。许多组织专门为移民案件提供法律援助。'
      },
      'zh-t': {
        term: '法律援助',
        definition: '為無力聘請律師的人提供的免費或低成本法律服務。許多組織專門為移民案件提供法律援助。'
      }
    },

    'due-process': {
      en: {
        term: 'Due Process',
        definition: 'The constitutional guarantee that the government must respect all legal rights owed to a person. It ensures fair treatment through the normal judicial system, including notice and a hearing before any action is taken.'
      },
      'zh-s': {
        term: '正当程序',
        definition: '宪法保障政府必须尊重一个人应有的所有法律权利。它确保通过正常司法系统进行公平对待，包括在采取任何行动之前给予通知和听证。'
      },
      'zh-t': {
        term: '正當程序',
        definition: '憲法保障政府必須尊重一個人應有的所有法律權利。它確保通過正常司法系統進行公平對待，包括在採取任何行動之前給予通知和聽證。'
      }
    },

    'detainer': {
      en: {
        term: 'Immigration Detainer',
        definition: 'A request from ICE to a local jail or prison to hold someone for an additional 48 hours after they would otherwise be released, so ICE can take them into custody. Detainers are not mandatory.'
      },
      'zh-s': {
        term: '移民拘留令',
        definition: 'ICE向当地监狱或看守所发出的请求，要求在某人本应释放后再拘留48小时，以便ICE将其拘押。拘留令不是强制性的。'
      },
      'zh-t': {
        term: '移民拘留令',
        definition: 'ICE向當地監獄或看守所發出的請求，要求在某人本應釋放後再拘留48小時，以便ICE將其拘押。拘留令不是強制性的。'
      }
    },

    'sanctuary-city': {
      en: {
        term: 'Sanctuary City',
        definition: 'A city that limits its cooperation with federal immigration enforcement. Policies vary, but generally local police do not ask about immigration status or hold people solely for ICE.'
      },
      'zh-s': {
        term: '庇护城市',
        definition: '限制与联邦移民执法合作的城市。政策各不相同，但通常当地警察不会询问移民身份，也不会仅为ICE拘留人员。'
      },
      'zh-t': {
        term: '庇護城市',
        definition: '限制與聯邦移民執法合作的城市。政策各不相同，但通常當地警察不會詢問移民身份，也不會僅為ICE拘留人員。'
      }
    }
  };

  // DOM elements
  var panel = null;
  var overlay = null;
  var termEl = null;
  var definitionEl = null;
  var zhsEl = null;
  var zhtEl = null;

  // Initialize
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Cache DOM elements
    panel = document.getElementById('glossary-panel');
    overlay = document.getElementById('glossary-overlay');
    termEl = document.getElementById('glossary-term');
    definitionEl = document.getElementById('glossary-definition');
    zhsEl = document.getElementById('glossary-zh-s');
    zhtEl = document.getElementById('glossary-zh-t');

    if (!panel) return;

    // Set up glossary term click handlers
    initGlossaryTerms();

    // Set up close handlers
    initCloseHandlers();
  }

  /**
   * Initialize click handlers for glossary terms
   */
  function initGlossaryTerms() {
    var terms = document.querySelectorAll('.glossary-term');

    terms.forEach(function(term) {
      term.setAttribute('tabindex', '0');
      term.setAttribute('role', 'button');

      // Click handler
      term.addEventListener('click', function() {
        var termKey = this.dataset.term;
        openGlossary(termKey);
      });

      // Keyboard handler
      term.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          var termKey = this.dataset.term;
          openGlossary(termKey);
        }
      });
    });
  }

  /**
   * Initialize close handlers
   */
  function initCloseHandlers() {
    // Close button
    var closeBtn = panel.querySelector('.glossary-panel-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeGlossary);
    }

    // Overlay click
    if (overlay) {
      overlay.addEventListener('click', closeGlossary);
    }

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && panel.classList.contains('open')) {
        closeGlossary();
      }
    });
  }

  /**
   * Open the glossary panel with a specific term
   */
  function openGlossary(termKey) {
    if (!glossary[termKey]) {
      console.warn('Glossary term not found:', termKey);
      return;
    }

    var termData = glossary[termKey];
    var currentLang = typeof window.getCurrentLanguage === 'function'
      ? window.getCurrentLanguage()
      : 'en';

    // Get the correct language data, fallback to English
    var langData = termData[currentLang] || termData['en'];

    // Populate the panel
    if (termEl) termEl.textContent = langData.term;
    if (definitionEl) definitionEl.textContent = langData.definition;

    // Populate translations
    if (zhsEl && termData['zh-s']) {
      zhsEl.textContent = termData['zh-s'].term + ' - ' + termData['zh-s'].definition;
    }
    if (zhtEl && termData['zh-t']) {
      zhtEl.textContent = termData['zh-t'].term + ' - ' + termData['zh-t'].definition;
    }

    // Show panel and overlay
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');

    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus the close button
    var closeBtn = panel.querySelector('.glossary-panel-close');
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  /**
   * Close the glossary panel
   */
  function closeGlossary() {
    if (panel) {
      panel.classList.remove('open');
      panel.setAttribute('aria-hidden', 'true');
    }

    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    // Restore body scroll
    document.body.style.overflow = '';
  }

  // Expose functions globally
  window.openGlossary = openGlossary;
  window.closeGlossary = closeGlossary;

})();
