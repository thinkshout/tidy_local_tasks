/**
 * @file
 *
 * Tidy Local Tasks custom JS.
 */

(function ($, Drupal) {
  "use strict";
  Drupal.behaviors.editTabMenu = {
    attach: function (context, settings) {
      $(document).ready(function () {
        const $tltMenu = $('.tlt-menu'),
          $arrow = $tltMenu.find('.show-hide'),
          $themeLocalTasksToggle = $tltMenu.find('.tabs__trigger');
        if ($tltMenu.length) {
          $arrow.once().click(function () {
            $tltMenu.toggleClass("active");
          });

          // Olivero, at least, provides for local tasks to collapse into an
          // expandable menu at mobile widths. We're taking care of that
          // ourselves, so here we remove the toggle that they provide.
          if ($themeLocalTasksToggle.length) {
            $themeLocalTasksToggle.remove();
          }
        }
      });
    },
  };
})(jQuery, Drupal);
