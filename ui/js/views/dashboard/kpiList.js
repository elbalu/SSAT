/*global define */

define([
    'marionette',
    'core/vent',
    'tpl!templates/dashboard/kpiList.html',
    'views/components/kpi',
    'underscore'
], function(Marionette, Vent, template, KpiView, _) {
    'use strict';

    return Marionette.Layout.extend({

        template: template,

        regions: {
            kpiRegion: '#kpi'
        },

        kpiList: null,

        initialize: function() {},

        onShow: function() {
            var _this = this;
            
        }

    });
});
