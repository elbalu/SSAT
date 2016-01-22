/*global define */

define([
    'config',
    'backbone'
], function(Config, Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
            name: null,
            password: null
        },

        url: function() {
            return Config.url() + 'hackathon/signup';
        },
        /**
         * @param options
         */
        initialize: function(options) {


        },

        updateUrl: function(options) {
        }
    });
});
