/*jslint white:true,indent:false*/
/*global Backbone*/
/**
 * collection/kpis
 */
define(['models/dfeature', 'config'], function(DfeatureModel, Config) {

    "use strict";

    /**
     * Dfeatures
     *
     * @type {Backbone.Collection}
     */
    var Dfeatures = Backbone.Collection.extend({
        initialize: function(options) {
            console.log('options', options)
            this.userName = options.userName;
        },
        model: DfeatureModel,

        url: function() {
            return Config.url() + 'hackathon/datacenter/feature' ;
        }
    });

    return Dfeatures;
});
