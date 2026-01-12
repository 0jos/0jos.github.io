/**
 * Chinatown Civic Compass - Main JavaScript
 * Handles navbar, mobile menu, and shared utilities
 */

(function() {
  'use strict';

  // DOM Ready
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initMobileMenu();
    initLanguageDropdown();
    initSmoothScroll();
    setActiveNavLink();
  }

  /**
   * Mobile Menu
   */
  function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  /**
   * Language Dropdown (navbar)
   */
  function initLanguageDropdown() {
    const langBtn = document.querySelector('.language-btn');
    const langDropdown = document.querySelector('.language-dropdown');

    if (!langBtn || !langDropdown) return;

    langBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = langDropdown.classList.contains('open');

      if (isOpen) {
        closeLangDropdown();
      } else {
        openLangDropdown();
      }
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
        closeLangDropdown();
      }
    });

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLangDropdown();
      }
    });

    // Handle language selection
    const langOptions = langDropdown.querySelectorAll('button');
    langOptions.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        selectLanguage(lang);
        closeLangDropdown();
      });
    });
  }

  function openLangDropdown() {
    const langDropdown = document.querySelector('.language-dropdown');
    const langBtn = document.querySelector('.language-btn');

    langDropdown.classList.add('open');
    langBtn.setAttribute('aria-expanded', 'true');
  }

  function closeLangDropdown() {
    const langDropdown = document.querySelector('.language-dropdown');
    const langBtn = document.querySelector('.language-btn');

    if (langDropdown) {
      langDropdown.classList.remove('open');
    }
    if (langBtn) {
      langBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function selectLanguage(lang) {
    // This will be handled by i18n.js
    if (typeof window.setLanguage === 'function') {
      window.setLanguage(lang);
    }
  }

  /**
   * Smooth scroll for anchor links
   */
  function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');

        if (targetId === '#') return;

        const target = document.querySelector(targetId);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          history.pushState(null, null, targetId);
        }
      });
    });
  }

  /**
   * Set active nav link based on current page
   */
  function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const filename = currentPath.split('/').pop() || 'index.html';

    const navLinks = document.querySelectorAll('.navbar-nav a, .mobile-menu-nav a');

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');

      if (href === filename ||
          (filename === '' && href === 'index.html') ||
          (filename === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Utility: Get cookie
   */
  window.getCookie = function(name) {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return null;
  };

  /**
   * Utility: Set cookie
   */
  window.setCookie = function(name, value, days) {
    days = days || 365;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  };

  /**
   * Utility: Debounce function
   */
  window.debounce = function(func, wait) {
    var timeout;
    return function() {
      var context = this;
      var args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        func.apply(context, args);
      }, wait);
    };
  };

})();
