/*global define */

define([
    'marionette',
    'templates',
    'underscore',

    'views/dashboard/content'
], function(Marionette, templates, _, DashboardContentView) {
    'use strict';

    return Marionette.Layout.extend({
        template: templates.page,

        ui: {
            header: 'h2',
            dashboardContent: '#dashboard-content'
        },

        regions: {
            dashboardContentRegion: '#dashboard-content'
        },

        pageName: null,

        onBeforeRender: function() {
            this.pageName = this.model.get('name');
            this.model.set('content', _.result(templates.pages, this.model.get('name')));

        },

        onShow: function() {
            switch (this.pageName) {
                case "dashboard":
                    this.dashboardContentRegion.show(new DashboardContentView());
                    break;
                default:
                    break;
            }
        }

    });
});
