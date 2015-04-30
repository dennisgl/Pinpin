define(
  [
    "pinpin/app",
    "tpl!pinpin/apps/home/templates/home_layout.tpl"
  ],
  function(PinpinApp, HomeLayoutTpl) {
    "use strict";
    PinpinApp.module("HomeApp.Home.HomeView", function(HomeView, PinpinApp, Backbone, Mn, $, _) {
      HomeView.Layout = Mn.LayoutView.extend({
        template: HomeLayoutTpl
      });
    });

    return PinpinApp.HomeApp.Home.HomeView;
  }
);