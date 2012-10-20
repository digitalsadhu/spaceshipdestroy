// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["app"],

  paths: {
    // JavaScript folders.
    libs: "../scripts/libs",
    plugins: "../scripts/plugins",

    // Libraries.
    jquery: "../components/jquery/jquery",
    box2d: "../components/box2d/js/box2d/",
    prototype: "../components/prototype/prototype"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    box2d: {
      deps: ["prototype"],
      exports: "box2d"
    }
  }

});


