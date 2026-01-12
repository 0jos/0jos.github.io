/**
 * Chinatown Civic Compass - Custom Card Upload
 * Handles custom printable card image upload and print functionality
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'ccc_custom_card';

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    var fileInput = document.getElementById('card-file-input');
    var removeBtn = document.getElementById('remove-card-btn');

    if (fileInput) {
      // Load existing card from localStorage
      loadSavedCard();

      // Handle file selection
      fileInput.addEventListener('change', handleFileSelect);
    }

    if (removeBtn) {
      removeBtn.addEventListener('click', removeCard);
    }

    // Show print card container when printing if card exists
    window.addEventListener('beforeprint', showPrintCard);
    window.addEventListener('afterprint', hidePrintCard);
  }

  /**
   * Handle file selection
   */
  function handleFileSelect(e) {
    var file = e.target.files[0];

    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image too large. Please select an image under 5MB.');
      return;
    }

    var reader = new FileReader();

    reader.onload = function(event) {
      var imageData = event.target.result;

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, imageData);
      } catch (e) {
        console.warn('Could not save card to localStorage - image may be too large');
      }

      // Update preview
      showCardPreview(imageData);
    };

    reader.readAsDataURL(file);
  }

  /**
   * Show card preview
   */
  function showCardPreview(imageData) {
    var previewContainer = document.getElementById('custom-card-preview');
    var previewImg = document.getElementById('card-preview-img');
    var printImg = document.getElementById('print-card-img');

    if (previewContainer && previewImg) {
      previewImg.src = imageData;
      previewContainer.classList.add('has-image');
    }

    if (printImg) {
      printImg.src = imageData;
    }
  }

  /**
   * Load saved card from localStorage
   */
  function loadSavedCard() {
    try {
      var savedCard = localStorage.getItem(STORAGE_KEY);

      if (savedCard) {
        showCardPreview(savedCard);
      }
    } catch (e) {
      console.warn('Could not load saved card');
    }
  }

  /**
   * Remove card
   */
  function removeCard() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not remove card from localStorage');
    }

    var previewContainer = document.getElementById('custom-card-preview');
    var previewImg = document.getElementById('card-preview-img');
    var printImg = document.getElementById('print-card-img');
    var fileInput = document.getElementById('card-file-input');

    if (previewContainer) {
      previewContainer.classList.remove('has-image');
    }

    if (previewImg) {
      previewImg.src = '';
    }

    if (printImg) {
      printImg.src = '';
    }

    if (fileInput) {
      fileInput.value = '';
    }
  }

  /**
   * Show print card container before printing
   */
  function showPrintCard() {
    var printContainer = document.getElementById('print-card-container');
    var printImg = document.getElementById('print-card-img');

    if (printContainer && printImg && printImg.src) {
      printContainer.style.display = 'block';
    }
  }

  /**
   * Hide print card container after printing
   */
  function hidePrintCard() {
    var printContainer = document.getElementById('print-card-container');

    if (printContainer) {
      printContainer.style.display = 'none';
    }
  }

  /**
   * Check if a custom card is saved
   */
  function hasCustomCard() {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return false;
    }
  }

  // Expose functions globally
  window.hasCustomCard = hasCustomCard;
  window.removeCard = removeCard;

})();
