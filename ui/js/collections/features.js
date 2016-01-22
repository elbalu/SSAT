/*jslint white:true,indent:false*/
/*global Backbone*/
/**
 * collection/kpis
 */
define(['models/feature', 'config'], function(FeatureModel, Config) {

    "use strict";

    /**
     * Services
     *
     * @type {Backbone.Collection}
     */
    var Services = Backbone.Collection.extend({
        initialize: function(options) {
            this.userName = options.userName;
            this.serviceName = options.serviceName;
            this.featureName = options.featureName;
            this.ciscoUpdates = options.ciscoUpdates;
        },
        model: FeatureModel,

        url: function() {
            if (typeof this.ciscoUpdates !== 'undefined') {
                return Config.url() + 'hackathon/datacenter/' + this.userName + '/' + this.serviceName + '/feature/' + this.featureName + '/' + this.ciscoUpdates;

            } else {
                return Config.url() + 'hackathon/' + this.userName + '/' + this.serviceName + '/feature/' + this.featureName;

            }
        }
    });
    //serviceName
    return Services;
});
