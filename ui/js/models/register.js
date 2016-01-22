/*global define */

define(['config',
    'backbone'
], function(Config, Backbone) {
    'use strict';

    return Backbone.Model.extend({
        defaults: {
                name: '',
                location: '',
                phone: '',
                userCount: '',
                featureEnable: false
        },
        initialize: function(options) {
            this.userName = options.userName;
        },

        url: function() {
            return Config.url() + 'hackathon/datacenter/' + this.userName + '/profile';
        },
        /**
         * @param options
         */
        initialize: function(options) {


        },

        updateUrl: function(options) {}
    });
});
