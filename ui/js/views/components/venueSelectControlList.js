/*global define */

define([
    'marionette',
    'bootstrapSelect',
    'views/components/venueSelectControlItem',
    'tpl!templates/components/venueSelectControlList.html',
    'core/vent'
], function(Marionette, BootstrapSelect, VenueSelectControlItemView, template, Vent) {

    "use strict";

    /**
     * @type {VenueSelectControlListView}
     */
    var VenueSelectControlListView = Marionette.CompositeView.extend({

        el: '<select class="venue-select selectpicker"></select>',

        template: template,

        itemView: VenueSelectControlItemView,

        ui: {
            'venueSelect': '.venue-select'
        },

        onShow: function() {
            $('.selectpicker').selectpicker();
        }

    });

    return VenueSelectControlListView;
});
