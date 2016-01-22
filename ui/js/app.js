/*global define */

define([
    'backbone',
    'marionette',
    'collections/Nav',
    'views/MenuView',
    'views/Footer'
], function(Backbone, Marionette, Nav, MenuView, Footer) {
    'use strict';

    var app = new Marionette.Application();

    app.pages = new Nav([{
        title: 'Dashboard',
        name: 'dashboard',
        active: true,
        icon: 'icon icon-layout'
    }, {
        title: 'About',
        name: 'about',
        icon: 'icon icon-headset',
        drill: [{
            title: 'About1',
            name: 'about',
            icon: 'icon icon-headset'
        }, {
            title: 'About2',
            name: 'about',
            icon: 'icon icon-headset'
        }]
    }, {
        title: 'Contact',
        name: 'contact',
        icon: 'icon icon-contact'
    }]);
    var menu = new MenuView({
        collection: app.pages
    });

    app.addRegions({
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function() {
        app.footer.show(new Footer());
    });

    app.on("initialize:after", function(options) {
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    app.vent.on('menu:activate', function(activePageModel) {
        menu.collection.findWhere({
                active: true
            })
            .set('active', false);
        activePageModel.set('active', true);
        menu.render();
    });

    return app;
});
