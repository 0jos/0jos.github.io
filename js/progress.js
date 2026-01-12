/**
 * Chinatown Civic Compass - Progress Tracking
 * Tracks which modules the user has completed using localStorage
 * Requires user to click "Mark as Read" button to track progress
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'ccc_progress';
  var MODULES = ['rights', 'resources', 'voting', 'contact'];

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Update progress UI on home page
    updateProgressUI();

    // Update module cards on home page
    updateModuleCards();

    // Initialize "Mark as Read" button if on a module page
    initMarkAsReadButton();
  }

  /**
   * Initialize the "Mark as Read" button functionality
   */
  function initMarkAsReadButton() {
    var markReadBtn = document.getElementById('mark-as-read-btn');

    if (markReadBtn) {
      var currentModule = getCurrentPageModule();

      // Check if already completed
      if (currentModule && isModuleCompleted(currentModule)) {
        showCompletedState(markReadBtn);
      }

      markReadBtn.addEventListener('click', function() {
        if (currentModule) {
          markModuleCompleted(currentModule);
          showCompletedState(markReadBtn);

          // Show success animation
          markReadBtn.classList.add('success-animation');
          setTimeout(function() {
            markReadBtn.classList.remove('success-animation');
          }, 600);
        }
      });
    }
  }

  /**
   * Show completed state on button
   */
  function showCompletedState(btn) {
    btn.innerHTML = getCompletedIcon() + ' <span data-i18n="progress.completed">Completed!</span>';
    btn.classList.add('completed');
    btn.disabled = true;

    // Update text if i18n is available
    if (typeof window.updatePageTranslations === 'function') {
      window.updatePageTranslations();
    }
  }

  /**
   * Get the current page's module name from the filename
   */
  function getCurrentPageModule() {
    var path = window.location.pathname;
    var filename = path.split('/').pop().replace('.html', '');

    // Map filenames to module names
    var pageModuleMap = {
      'rights': 'rights',
      'resources': 'resources',
      'voting': 'voting',
      'contact': 'contact'
    };

    return pageModuleMap[filename] || null;
  }

  /**
   * Get progress data from localStorage
   */
  function getProgress() {
    try {
      var data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : { completed: [] };
    } catch (e) {
      return { completed: [] };
    }
  }

  /**
   * Save progress data to localStorage
   */
  function saveProgress(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save progress to localStorage');
    }
  }

  /**
   * Mark a module as completed
   */
  function markModuleCompleted(moduleName) {
    var progress = getProgress();

    if (progress.completed.indexOf(moduleName) === -1) {
      progress.completed.push(moduleName);
      saveProgress(progress);

      // Dispatch event for other scripts
      window.dispatchEvent(new CustomEvent('moduleCompleted', {
        detail: { module: moduleName, progress: progress }
      }));
    }
  }

  /**
   * Check if a module has been completed
   */
  function isModuleCompleted(moduleName) {
    var progress = getProgress();
    return progress.completed.indexOf(moduleName) !== -1;
  }

  /**
   * Get the number of completed modules
   */
  function getCompletedCount() {
    var progress = getProgress();
    return progress.completed.length;
  }

  /**
   * Get completion percentage
   */
  function getCompletionPercentage() {
    return Math.round((getCompletedCount() / MODULES.length) * 100);
  }

  /**
   * Update progress UI elements on the page
   */
  function updateProgressUI() {
    var completedCount = getCompletedCount();

    // Only show progress section if user has completed at least one module
    var progressWrapper = document.getElementById('progress-wrapper');
    if (progressWrapper) {
      if (completedCount > 0) {
        progressWrapper.style.display = 'block';
      } else {
        progressWrapper.style.display = 'none';
      }
    }

    // Update progress text
    var progressText = document.getElementById('progress-text');
    if (progressText) {
      progressText.textContent = completedCount + ' of ' + MODULES.length + ' modules';
    }

    // Update progress bar
    var progressFill = document.getElementById('progress-fill');
    if (progressFill) {
      progressFill.style.width = getCompletionPercentage() + '%';
    }
  }

  /**
   * Update module cards to show completion status
   */
  function updateModuleCards() {
    MODULES.forEach(function(moduleName) {
      var progressEl = document.getElementById('progress-' + moduleName);

      if (progressEl) {
        if (isModuleCompleted(moduleName)) {
          // Update to completed state
          progressEl.classList.add('completed');
          progressEl.innerHTML = getCompletedIcon() + '<span>' + getCompletedText() + '</span>';
        }
      }
    });
  }

  /**
   * Get the completed checkmark icon
   */
  function getCompletedIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>' +
      '<polyline points="22 4 12 14.01 9 11.01"/>' +
      '</svg>';
  }

  /**
   * Get the completed text (respecting current language)
   */
  function getCompletedText() {
    if (typeof window.getTranslation === 'function') {
      return window.getTranslation('module.status.completed') || 'Completed';
    }
    return 'Completed';
  }

  /**
   * Reset all progress (for testing/debugging)
   */
  function resetProgress() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      updateProgressUI();
      updateModuleCards();

      // Reset any "Mark as Read" buttons on the page
      var markReadBtn = document.getElementById('mark-as-read-btn');
      if (markReadBtn) {
        markReadBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> <span data-i18n="progress.markRead">Mark as Read</span>';
        markReadBtn.classList.remove('completed');
        markReadBtn.disabled = false;
      }
    } catch (e) {
      console.warn('Could not reset progress');
    }
  }

  // Listen for language changes to update text
  window.addEventListener('languageChanged', function() {
    updateModuleCards();
  });

  // Expose functions globally
  window.getProgress = getProgress;
  window.isModuleCompleted = isModuleCompleted;
  window.getCompletedCount = getCompletedCount;
  window.getCompletionPercentage = getCompletionPercentage;
  window.resetProgress = resetProgress;
  window.markModuleCompleted = markModuleCompleted;

})();
