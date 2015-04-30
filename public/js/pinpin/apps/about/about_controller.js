define(
  [
    "pinpin/app",
    "pinpin/apps/about/about_view"
  ],
  function(PinpinApp, AboutView) {
    "use strict";
    PinpinApp.module("AboutApp.About", function(About, PinpinApp, Backbone, Mn, $, _) {
      About.controller = {
        showAbout: function() {
          var layoutView = new AboutView.Layout();
          PinpinApp.mainRegion.show(layoutView);
        }
      }
    });

    return PinpinApp.AboutApp.About.controller;
  }
);