/*global define */

define(function(require) {
    'use strict';

    return {
        pages: {
            home: require('tpl!templates/pages/home.html'),
            about: require('tpl!templates/pages/about.html'),
            contact: require('tpl!templates/pages/contact.html'),
            dashboard: require('tpl!templates/dashboard/dashboard.html')
        },
        page: require('tpl!templates/page.html'),
        menuItem: require('tpl!templates/menuItem.html'),
        footer: require('tpl!templates/footer.html'),
        landing: require('tpl!templates/landing.html'),
        signup: require('tpl!templates/signup.html'),
        register: require('tpl!templates/register.html'),
        features: require('tpl!templates/features/features.html'),
        services: require('tpl!templates/services/services.html')
    };
});
