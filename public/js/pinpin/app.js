define(
  [
    "marionette"
  ],
  function(Mn) {
    "use strict";

    var PinpinApp = new Mn.Application();
    // TODO: remove it, testing purpose
    window.PinpinApp = PinpinApp;

    PinpinApp.addRegions({
      headerRegion: "#header-region",
      mainRegion:   "#main-region"
    });

    PinpinApp.navigate = function(route, options) {
      options || (options = {});
      Backbone.history.navigate(route, options);
    };

    PinpinApp.getCurrentRoute = function() {
      return Backbone.history.fragment;
    };

    PinpinApp.startSubApp = function(appName, args) {
      var nextSubApp = appName ? PinpinApp.module(appName) : null;
      if (PinpinApp.currentApp === nextSubApp) { return; }
      !PinpinApp.currentApp || PinpinApp.currentApp.stop();
      PinpinApp.currentApp = nextSubApp;
      !nextSubApp || nextSubApp.start(args);
    };

    PinpinApp.on("start", function(){
      if (Backbone.history) {
        // Before starting the Backbone.history,
        // we need to "require" sub-apps, so that
        // they are listening for route changes by the time we execute Backbone’s history.start.
        // If we don't do this, users won’t be able to route directly to the sub-application
        // by entering the URL fragment into the address bar,
        // because no routing controller will be listening for the navigation event when it is triggered.
        require(
          [
            "pinpin/apps/header/header_app",
            "pinpin/apps/home/home_app",
            "pinpin/apps/about/about_app"
          ],
          function () {
            Backbone.history.start();
            console.log("Backbone.history started, currentRoute:", PinpinApp.getCurrentRoute());

            if (PinpinApp.getCurrentRoute() === "") {

              PinpinApp.trigger("show:home");
            }
          }
        ); // end of require block
      } // end of if (Backbone.history)
    });

    return PinpinApp;
  }
);