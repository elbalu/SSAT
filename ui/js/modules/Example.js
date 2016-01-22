/*global define*/
define([
    'app',
    'marionette'
], function(app, Marionette){

    "use strict";

    var ExampleModule = app.module("Example", function(Example) {
        this.startWithParent = false;

        this.addInitializer(function(){

        });
    });

    return ExampleModule;
});