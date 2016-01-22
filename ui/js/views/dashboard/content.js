/*global define */

define([
    'marionette',
    'tpl!templates/dashboard/content.html',
    'views/dashboard/locationControl',
    'views/dashboard/kpiList',
    'underscore',
    'core/vent'
], function(Marionette, template, LocationControlView, KPIListView, _, Vent) {
    'use strict';

    return Marionette.Layout.extend({

        template: template,

        regions: {
            locationControlRegion: '#location-control',
            kpiRegion: '#kpi-list'
        },

        initialize: function() {
            var _this = this;
            this.listenTo(Vent, 'trigger:render', function(data) {
                _this.render();
            });
        },

        onShow: function() {
            this.locationControlRegion.show(new LocationControlView());
            this.kpiRegion.show(new KPIListView());
        }

    });
});
