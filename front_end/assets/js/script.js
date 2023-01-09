/**
 * @file
 *
 * Tidy Local Tasks custom JS.
 */

(function (Drupal) {
  "use strict";
  Drupal.behaviors.tidyLocalTasks = {
    attach: function (context, settings) {
      const tltMenu = document.querySelector('.tlt-menu'),
        arrow = tltMenu.querySelector('.show-hide'),
        themeLocalTasksToggle = tltMenu.querySelector('.tabs__trigger');
      if (tltMenu) {
        arrow.addEventListener('click', (e) => {
          tltMenu.classList.toggle("active");
        });

        // Olivero, at least, provides for local tasks to collapse into an
        // expandable menu at mobile widths. We're taking care of that
        // ourselves, so here we remove the toggle that they provide.
        if (themeLocalTasksToggle) {
          themeLocalTasksToggle.remove();
        }
      }
    },
  };
})(Drupal);
