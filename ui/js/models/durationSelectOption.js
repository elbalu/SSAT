/*global define */

define([
    'backbone'
], function(Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            id: 0,
            duration: null,
            durationValue: 0,
            durationString: null
        }
    });
});
