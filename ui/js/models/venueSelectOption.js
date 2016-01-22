/*global define */

define([
    'backbone'
], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: null,
            venue: null,
            venueId: null,
            details: {
                latitude: 0,
                longitude: 0,
                name: null
            }
        }
    });
});
