define(
  [
    "pinpin/app"
  ],
  function(PinpinApp) {
    "use strict";
    PinpinApp.module("HeaderApp", function(HeaderApp, PinpinApp, Backbone, Mn, $, _) {
      var API = {
        showHeader: function() {
          require(["pinpin/apps/header/header_controller"], function(HeaderController) {
            HeaderController.showHeader();
          });
        }
      };

      HeaderApp.on("start", function() {
        console.log("HeaderApp start");
        API.showHeader();
      })
    });

    return PinpinApp.HeaderApp;
  }
);