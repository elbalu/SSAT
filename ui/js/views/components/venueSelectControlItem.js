/*global define */

define([
    'marionette',
    'tpl!templates/components/venueSelectControlItem.html'
], function(Marionette, template) {

    "use strict";

    /**
     * @type {VenueSelectControlItemView}
     */
    var VenueSelectControlItemView = Marionette.ItemView.extend({

        el: '<option></option>',

        template: template,

        initialize: function() {
            $(this.el).attr('value', this.model.get('venue'));
        }
    });

    return VenueSelectControlItemView;
});
