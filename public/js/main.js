/**
 * Created by dennislin on 4/29/15.
 */
requirejs.config({

  config: {
    moment: {
      noGlobal: true
    }
  },

  paths: {
    backbone: "vendor/backbone",
    jquery: "vendor/jquery",
    marionette: "vendor/backbone.marionette",
    tpl: "vendor/tpl",
    text: "vendor/text",
    underscore: "vendor/underscore",
    "underscore.string": "vendor/underscore.string",
    moment: "vendor/moment-with-locales",
  },

  shim: {
    underscore: {
      exports: "_"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    }
  }
});

require(
  [
    "pinpin/app"
  ],
  function(PinpinApp) {
    PinpinApp.start();
  }
);