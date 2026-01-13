/**
 * Chinatown Civic Compass - FAQ
 * Handles FAQ search and accordion functionality
 */

(function() {
  'use strict';

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initAccordion();
    initSearch();
  }

  /**
   * Initialize accordion functionality
   */
  function initAccordion() {
    var questions = document.querySelectorAll('.faq-question');

    questions.forEach(function(question) {
      question.addEventListener('click', function() {
        toggleQuestion(this);
      });

      // Keyboard support
      question.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleQuestion(this);
        }
      });
    });
  }

  /**
   * Toggle a question open/closed
   */
  function toggleQuestion(questionBtn) {
    var item = questionBtn.closest('.faq-item');
    var answer = item.querySelector('.faq-answer');
    var isOpen = item.classList.contains('open');

    // Close all other questions (optional - remove if you want multiple open)
    // closeAllQuestions();

    if (isOpen) {
      item.classList.remove('open');
      questionBtn.setAttribute('aria-expanded', 'false');
      answer.setAttribute('aria-hidden', 'true');
    } else {
      item.classList.add('open');
      questionBtn.setAttribute('aria-expanded', 'true');
      answer.setAttribute('aria-hidden', 'false');
    }
  }

  /**
   * Close all questions
   */
  function closeAllQuestions() {
    var items = document.querySelectorAll('.faq-item');

    items.forEach(function(item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');

      item.classList.remove('open');
      question.setAttribute('aria-expanded', 'false');
      answer.setAttribute('aria-hidden', 'true');
    });
  }

  /**
   * Initialize search functionality
   */
  function initSearch() {
    var searchInput = document.querySelector('.faq-search-input');

    if (!searchInput) return;

    // Debounce search for better performance
    var debouncedSearch = debounce(function(query) {
      filterQuestions(query);
    }, 200);

    searchInput.addEventListener('input', function() {
      debouncedSearch(this.value);
    });

    // Clear search on escape
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        this.value = '';
        filterQuestions('');
      }
    });
  }

  /**
   * Filter questions based on search query
   */
  function filterQuestions(query) {
    var items = document.querySelectorAll('.faq-item');
    var noResults = document.querySelector('.faq-no-results');
    var visibleCount = 0;

    query = query.toLowerCase().trim();

    items.forEach(function(item) {
      var questionText = item.querySelector('.faq-question').textContent.toLowerCase();
      var answerText = item.querySelector('.faq-answer-content').textContent.toLowerCase();

      var matches = !query ||
        questionText.indexOf(query) !== -1 ||
        answerText.indexOf(query) !== -1;

      if (matches) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    // Show/hide no results message
    if (noResults) {
      if (visibleCount === 0 && query) {
        noResults.style.display = 'block';
      } else {
        noResults.style.display = 'none';
      }
    }
  }

  /**
   * Debounce helper
   */
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  }

})();
