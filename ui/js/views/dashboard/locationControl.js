/*global define */

define([
    'marionette',
    'core/vent',
    'tpl!templates/dashboard/locationControl.html',
    'views/components/venueSelectControlList',
    'views/components/durationSelectControlList',
    'collections/venueSelectOptions',
    'collections/durationSelectOptions',
    'underscore'
], function(Marionette, Vent, template, VenueSelectControlListView, DurationSelectControlListView, VenueCollection, DurationCollection, _) {
    'use strict';

    return Marionette.Layout.extend({

        template: template,

        regions: {
            selectVenueRegion: '#venue-select',
            selectDurationRegion: '#duration-select'
        },

        ui: {
            'Selectpicker': '.selectpicker'
        },

        events: {
            'change .selectpicker': 'triggerRender'
        },

        triggerRender: function(e) {
            Vent.trigger('trigger:render', $(e.currentTarget).val());
        },

        onShow: function() {
            var venueCollection = new VenueCollection();
            var durationCollection = new DurationCollection();
            var _this = this;
            venueCollection.fetch({
                success: function(data) {
                    _this.selectVenueRegion.show(new VenueSelectControlListView({
                        collection: data
                    }));
                }
            });

            durationCollection.fetch({
                success: function(data) {
                    _this.selectDurationRegion.show(new DurationSelectControlListView({
                        collection: data
                    }));
                }
            });
        }

    });
});
