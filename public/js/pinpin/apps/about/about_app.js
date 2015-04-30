define(
  [
    "pinpin/app"
  ],
  function(PinpinApp) {
    "use strict";
    PinpinApp.module("AboutApp", function(AboutApp, PinpinApp, Backbone, Mn, $, _) {
      AboutApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          "about": "showAbout"
        }
      });

      var API = {
        showAbout: function() {
          require(["pinpin/apps/about/about_controller"], function(ShowAboutController) {
            PinpinApp.startSubApp("AboutApp");
            ShowAboutController.showAbout();
          });
        }
      };

      PinpinApp.on("show:about", function() {
        PinpinApp.navigate("about");
        API.showAbout();
      });

      AboutApp.on("start", function() {
        new AboutApp.Router({
          controller: API
        });
      });
    });

    return PinpinApp.AboutApp;
  }
);