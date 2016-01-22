/*global define */

define([
    'app',
    'views/HomeView',
    'views/PageView',
    'views/landing',
    'views/signup',
    'views/register',
    'views/features/featureView',
    'views/services/serviceView',
    'views/dfeatures/dfeaturesView'
], function(app, HomeView, PageView, LandingView, SignupView, RegisterView, FeaturesView, ServicesView, DataCenterFeatureView) {
    'use strict';

    return {
        showPage: function(pageName) {
            if (pageName === null) {
                pageName = 'home';
            }

            var pageModel = app.pages.findWhere({
                name: pageName
            });

            app.vent.trigger('menu:activate', pageModel);
            if (pageName === 'home') {
                app.main.show(new HomeView({
                    model: pageModel
                }));
            } else {
                app.main.show(new PageView({
                    model: pageModel
                }));
            }

            if (pageName === 'about') {
                require(['modules/Example'], function(Example) {
                    Example.start();
                });
            }
        },
        hello: function() {

        },
        landingPage: function() {
            app.main.show(new LandingView());
        },
        signupPage: function() {
            app.main.show(new SignupView());
        },
        profilePage: function() {
            app.main.show(new RegisterView());
        },
        featuresPage: function() {
            app.main.show(new FeaturesView());
        },
        servicesPage: function() {
            app.main.show(new ServicesView());

        },
        dataCenterFeaturesPage: function() {
            app.main.show(new DataCenterFeatureView());

        }
    };
});
