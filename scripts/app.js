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
      "tour" : ['jquery']
    }
});

requirejs(["app/main"]);