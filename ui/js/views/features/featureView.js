/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/security/content
 */
define(['tpl!templates/features/featureView.html',
    'core/vent',
    'views/features/features',
    'collections/features'


], function(template, Vent, FeatureCollectionView, FeatureCollection) {
    "use strict";

    var ServiceView = Marionette.Layout.extend({

        el: '<div class="feature-content-view"></div>',
        template: template,
        levelId: 'all',
        regions: {
            featureViewRegion: '.feature-view',
            ciscoSupportRegion: '.cisco-support-view'
        },

        initialize: function() {},
        onShow: function() {
            this.loadService({
                levelId: this.levelId
            })
        },
        loadService: function(options) {
            var serviceName = Backbone.history.getFragment().split('/')[1];
            var featureName = Backbone.history.getFragment().split('/')[2];
            var featureCollection = new FeatureCollection({
                    userName: JSON.parse(localStorage.getItem('user')).name,
                    serviceName: serviceName,
                    featureName: featureName
                }),
                _this = this;
            featureCollection.fetch({
                success: function(collection) {
                    _this.featureViewRegion.show(new FeatureCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {}
            });
            var ciscoSupportCollection = new FeatureCollection({
                    userName: JSON.parse(localStorage.getItem('user')).name,
                    serviceName: serviceName,
                    featureName: featureName,
                    ciscoUpdates: 'ciscoupdates'
                }),
                _this = this;
            setInterval(function() {
                ciscoSupportCollection.fetch({
                    success: function(collection) {
                        _this.ciscoSupportRegion.show(new FeatureCollectionView({
                            collection: collection
                        }));
                    },
                    error: function(error) {}
                });
            }, 3000)

        }

    });

    return ServiceView;
});
