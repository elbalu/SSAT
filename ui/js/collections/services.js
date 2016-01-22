/*jslint white:true,indent:false*/
/*global Backbone*/
/**
 * collection/kpis
 */
define(['models/service', 'config'], function(ServiceModel, Config) {

    "use strict";

    /**
     * Services
     *
     * @type {Backbone.Collection}
     */
    var Services = Backbone.Collection.extend({
        initialize: function(options) {
            console.log('options', options)
            this.userName = options.userName;
        },
        model: ServiceModel,

        url: function() {
            return Config.url() + 'hackathon/'+ this.userName+ '/service' ;
        }
    });

    return Services;
});
