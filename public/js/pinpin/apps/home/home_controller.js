define(
  [
    "pinpin/app",
    "pinpin/apps/home/home_view"
  ],
  function(PinpinApp, HomeView) {
    "use strict";
    PinpinApp.module("HomeApp.Home", function(Home, PinpinApp, Backbone, Mn, $, _) {
      Home.controller = {
        showHome: function() {
          var layoutView = new HomeView.Layout();
          PinpinApp.mainRegion.show(layoutView);
        }
      }
    });

    return PinpinApp.HomeApp.Home.controller;
  }
);