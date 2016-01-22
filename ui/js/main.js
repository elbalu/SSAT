require.config({
    paths: {
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone',
        wreqr: '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        jquery: '../bower_components/jquery/dist/jquery',
        localStorage: '../bower_components/backbone.localStorage/backbone.localStorage',
        tpl: 'lib/tpl',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        bootstrapSelect: '../bower_components/bootstrap-select/js/bootstrap-select'
    },

    shim: {
        underscore: {
            exports: '_'
        },

        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },

        marionette: {
            exports: 'Backbone.Marionette',
            deps: ['backbone']
        },

        bootstrap: {
            deps: ['jquery']
        },

        bootstrapSelect: {
            deps: ['bootstrap']
        },

        wreqr: {
            exports: 'Wreqr',
            deps: ['backbone', 'marionette']
        }

    },
    waitSeconds: 60
});

require([
    'app',
    'modules/Pages',
    'jquery',
    'bootstrap'
], function(app, PagesModule) {
    'use strict';

    app.addInitializer(function() {
        PagesModule.start();
    });

    app.start();
});
