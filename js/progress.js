/**
 * Chinatown Civic Compass - Progress Tracking
 * Tracks which modules the user has viewed using localStorage
 */

(function() {
  'use strict';

  var STORAGE_KEY = 'ccc_progress';
  var MODULES = ['rights', 'resources', 'voting', 'contact'];

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    // Track current page visit
    trackPageVisit();

    // Update progress UI
    updateProgressUI();

    // Update module cards on home page
    updateModuleCards();
  }

  /**
   * Track the current page visit
   */
  function trackPageVisit() {
    var currentPage = getCurrentPageModule();

    if (currentPage && MODULES.indexOf(currentPage) !== -1) {
      markModuleVisited(currentPage);
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
      return data ? JSON.parse(data) : { visited: [] };
    } catch (e) {
      return { visited: [] };
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
   * Mark a module as visited
   */
  function markModuleVisited(moduleName) {
    var progress = getProgress();

    if (progress.visited.indexOf(moduleName) === -1) {
      progress.visited.push(moduleName);
      saveProgress(progress);

      // Dispatch event for other scripts
      window.dispatchEvent(new CustomEvent('moduleVisited', {
        detail: { module: moduleName, progress: progress }
      }));
    }
  }

  /**
   * Check if a module has been visited
   */
  function isModuleVisited(moduleName) {
    var progress = getProgress();
    return progress.visited.indexOf(moduleName) !== -1;
  }

  /**
   * Get the number of visited modules
   */
  function getVisitedCount() {
    var progress = getProgress();
    return progress.visited.length;
  }

  /**
   * Get completion percentage
   */
  function getCompletionPercentage() {
    return Math.round((getVisitedCount() / MODULES.length) * 100);
  }

  /**
   * Update progress UI elements on the page
   */
  function updateProgressUI() {
    var visitedCount = getVisitedCount();

    // Only show progress section if user has visited at least one module
    var progressWrapper = document.getElementById('progress-wrapper');
    if (progressWrapper) {
      if (visitedCount > 0) {
        progressWrapper.style.display = 'block';
      } else {
        progressWrapper.style.display = 'none';
      }
    }

    // Update progress text
    var progressText = document.getElementById('progress-text');
    if (progressText) {
      progressText.textContent = visitedCount + ' of ' + MODULES.length + ' modules';
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
        if (isModuleVisited(moduleName)) {
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
  window.isModuleVisited = isModuleVisited;
  window.getVisitedCount = getVisitedCount;
  window.getCompletionPercentage = getCompletionPercentage;
  window.resetProgress = resetProgress;

})();
