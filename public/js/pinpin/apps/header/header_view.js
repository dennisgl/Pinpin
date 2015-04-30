define(
  [
    "pinpin/app",
    "tpl!pinpin/apps/header/templates/header_view.tpl"
  ],
  function(PinpinApp, HeaderLayoutTpl) {
    "use strict";
    PinpinApp.module("HeaderApp.Header.HeaderView", function(HeaderView, PinpinApp, Backbone, Mn, $, _) {
      HeaderView.Layout = Mn.LayoutView.extend({
        template: HeaderLayoutTpl
      });
    });

    return PinpinApp.HeaderApp.Header.HeaderView;
  }
);