define(
  [
    "pinpin/app",
    "tpl!pinpin/apps/about/templates/about_layout.tpl"
  ],
  function(PinpinApp, AboutLayoutTpl) {
    "use strict";
    PinpinApp.module("AboutApp.About.AboutView", function(AboutView, PinpinApp, Backbone, Mn, $, _) {
      AboutView.Layout = Mn.LayoutView.extend({
        template: AboutLayoutTpl
      });
    });

    return PinpinApp.AboutApp.About.AboutView;
  }
);