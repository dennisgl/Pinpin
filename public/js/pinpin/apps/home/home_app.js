define(
  [
    "pinpin/app"
  ],
  function(PinpinApp) {
    "use strict";
    PinpinApp.module("HomeApp", function(HomeApp, PinpinApp, Backbone, Mn, $, _) {
      HomeApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
          "home": "showHome"
        }
      });

      var API = {
        showHome: function() {
          require(["pinpin/apps/home/home_controller"], function(ShowHomeController) {
            PinpinApp.startSubApp("HomeApp");
            ShowHomeController.showHome();
          });
        }
      };

      PinpinApp.on("show:home", function() {
        PinpinApp.navigate("home");
        API.showHome();
      })

      HomeApp.on("start", function() {
        new HomeApp.Router({
          controller: API
        })
      });
    });

    return PinpinApp.HomeApp;
  }
);