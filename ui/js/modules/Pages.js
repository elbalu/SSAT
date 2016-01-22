/*global define*/
define([
    'app',
    'marionette',
    'routers/index',
    'controllers/index'
], function(app, Marionette, Router, Controller) {

    "use strict";
    
    var PagesModule = app.module("Pages", function(Pages) {
        this.startWithParent = false;

        this.addInitializer(function() {
            console.log('Module:Pages => initialized');

            this.router = new Router({
                controller: Controller
            });
        });


    });

    return PagesModule;
});
