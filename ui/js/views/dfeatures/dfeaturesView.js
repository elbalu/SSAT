/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/security/content
 */
define(['tpl!templates/dfeatures/dfeaturesView.html',
    'core/vent',
    'views/dfeatures/dfeatures',
    'collections/dfeatures'


], function(template, Vent, DfeatureCollectionView, DfeatureCollection) {
    "use strict";

    var DfeatureView = Marionette.Layout.extend({

        el: '<div class="dfeature-content-view"></div>',
        template: template,
        levelId: 'all',
        regions: {
            dfeatureViewRegion: '.dfeature-view'
        },

        initialize: function() {
            //this.listenTo(Vent, "update:dfeature", this.loadDfeature);
        },
        onShow: function() {
            this.loadDfeature({
                levelId: this.levelId
            })
        },
        loadDfeature: function(options) {
            var dfeatureCollection = new DfeatureCollection({
                    userName: JSON.parse(localStorage.getItem('user')).name
                }),
                _this = this;
            dfeatureCollection.fetch({
                success: function(collection) {
                    _this.dfeatureViewRegion.show(new DfeatureCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            })
        }

    });

    return DfeatureView;
});
