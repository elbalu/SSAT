/*jslint white:true,indent:false*/
/* global Backbone */
/**
 * model/kpi
 */
define(['config'], function(Config) {

    "use strict";

    /**
     * KPI Model
     *
     * @type {Backbone.Model}
     */
    var KPI = Backbone.Model.extend({

        defaults: {

        },
        url: function() {
            return Config.url() + 'hackathon/' + this.userName + '/' + this.serviceName + '/feature/' + this.featureName ;
        }

    });

    return KPI;
});
