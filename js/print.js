/**
 * Chinatown Civic Compass - Print Functionality
 * Handles print-related features and wallet card generation
 */

(function() {
  'use strict';

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Add print event listeners
    window.addEventListener('beforeprint', onBeforePrint);
    window.addEventListener('afterprint', onAfterPrint);
  }

  /**
   * Called before printing
   */
  function onBeforePrint() {
    // Expand all FAQ items for printing
    expandAllFAQ();

    // Close any open modals/panels
    closeAllPanels();

    // Add print timestamp
    addPrintTimestamp();
  }

  /**
   * Called after printing
   */
  function onAfterPrint() {
    // Restore FAQ state
    collapseAllFAQ();

    // Remove print timestamp
    removePrintTimestamp();
  }

  /**
   * Expand all FAQ items for printing
   */
  function expandAllFAQ() {
    var items = document.querySelectorAll('.faq-item');

    items.forEach(function(item) {
      item.classList.add('open');
      item.dataset.wasOpen = item.classList.contains('open') ? 'true' : 'false';

      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');

      if (question) question.setAttribute('aria-expanded', 'true');
      if (answer) answer.setAttribute('aria-hidden', 'false');
    });
  }

  /**
   * Collapse all FAQ items after printing
   */
  function collapseAllFAQ() {
    var items = document.querySelectorAll('.faq-item');

    items.forEach(function(item) {
      // Only collapse if it wasn't open before
      if (item.dataset.wasOpen !== 'true') {
        item.classList.remove('open');

        var question = item.querySelector('.faq-question');
        var answer = item.querySelector('.faq-answer');

        if (question) question.setAttribute('aria-expanded', 'false');
        if (answer) answer.setAttribute('aria-hidden', 'true');
      }

      delete item.dataset.wasOpen;
    });
  }

  /**
   * Close all panels and modals
   */
  function closeAllPanels() {
    // Close glossary panel
    if (typeof window.closeGlossary === 'function') {
      window.closeGlossary();
    }

    // Close mobile menu
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuToggle = document.querySelector('.menu-toggle');

    if (mobileMenu) mobileMenu.classList.remove('open');
    if (menuToggle) {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }

    // Close language modal
    var langModal = document.getElementById('language-modal');
    if (langModal) {
      langModal.classList.remove('open');
      langModal.setAttribute('aria-hidden', 'true');
    }
  }

  /**
   * Add print timestamp to page
   */
  function addPrintTimestamp() {
    var timestamp = document.createElement('div');
    timestamp.id = 'print-timestamp';
    timestamp.style.cssText = 'display: none; text-align: right; font-size: 10px; color: #666; margin-bottom: 10px;';
    timestamp.textContent = 'Printed: ' + new Date().toLocaleDateString();

    // Show only in print
    var style = document.createElement('style');
    style.id = 'print-timestamp-style';
    style.textContent = '@media print { #print-timestamp { display: block !important; } }';

    document.head.appendChild(style);

    var main = document.querySelector('main');
    if (main) {
      main.insertBefore(timestamp, main.firstChild);
    }
  }

  /**
   * Remove print timestamp after printing
   */
  function removePrintTimestamp() {
    var timestamp = document.getElementById('print-timestamp');
    var style = document.getElementById('print-timestamp-style');

    if (timestamp) timestamp.remove();
    if (style) style.remove();
  }

  /**
   * Generate and download a wallet card PDF
   * Note: This is a simplified version - for actual PDF generation,
   * you would need a library like jsPDF
   */
  function generateWalletCard() {
    // For now, just trigger print which uses the @media print styles
    // In a full implementation, this would generate a PDF

    // Focus on the wallet card section
    var walletCard = document.getElementById('wallet-card');

    if (walletCard) {
      // Add a class to indicate we're printing just the wallet card
      document.body.classList.add('printing-wallet-card');

      window.print();

      // Remove the class after printing
      setTimeout(function() {
        document.body.classList.remove('printing-wallet-card');
      }, 1000);
    } else {
      window.print();
    }
  }

  // Expose functions globally
  window.generateWalletCard = generateWalletCard;

})();
