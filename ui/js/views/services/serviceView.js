/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/security/content
 */
define(['tpl!templates/services/serviceView.html',
    'core/vent',
    'views/services/services',
    'collections/services'


], function(template, Vent, ServiceCollectionView, ServiceCollection) {
    "use strict";

    var ServiceView = Marionette.Layout.extend({

        el: '<div class="service-content-view"></div>',
        template: template,
        levelId: 'all',
        regions: {
            serviceViewRegion: '.service-view'
        },

        initialize: function() {
            //this.listenTo(Vent, "update:service", this.loadService);
        },
        onShow: function() {
            this.loadService({
                levelId: this.levelId
            })
        },
        loadService: function(options) {
            var serviceCollection = new ServiceCollection({
                    userName: JSON.parse(localStorage.getItem('user')).name
                }),
                _this = this;
            serviceCollection.fetch({
                success: function(collection) {
                    _this.serviceViewRegion.show(new ServiceCollectionView({
                        collection: collection
                    }));
                },
                error: function(error) {
                }
            })
        }

    });

    return ServiceView;
});
