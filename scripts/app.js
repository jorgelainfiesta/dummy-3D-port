/*
 * Proyecto 4 - Gráficas
 * Jorge Lainfiesta 11142
 */

requirejs.config({
    "baseUrl": "scripts/lib",
    "paths": {
      "app": "../app",
    },
    "shim" : {
      "datgui" : {exports: "dat"}
    }
});

requirejs(["app/main"]);