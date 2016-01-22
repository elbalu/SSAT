/*jslint white:true, unused:false*/
/*global _, define*/
/**
 * Feature Flag configuration
 */
define(['config'], function(CommonConfig) {

    "use strict";

    var FeatureFlag = _.extend(CommonConfig, {

        dashboard: false
    });

    return FeatureFlag;
});
