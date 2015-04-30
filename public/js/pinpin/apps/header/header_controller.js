define(
  [
    "pinpin/app",
    "pinpin/apps/header/header_view"
  ],
  function(PinpinApp, HeaderView) {
    "use strict";
    PinpinApp.module("HeaderApp.Header", function(Header, PinpinApp, Backbone, Mn, $, _) {
      Header.controller = {
        showHeader: function() {
          var headerView = new HeaderView.Layout();
          PinpinApp.headerRegion.show(headerView);
        }
      }
    });

    return PinpinApp.HeaderApp.Header.controller;
  }
);