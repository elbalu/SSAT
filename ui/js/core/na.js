/*jslint white:true*/
/*global define*/
/**
 * cmx.js - Exports NA
 */
define([], function() {

    'use strict';

    /**
     * NA "Singleton" Object
     * Useful for shared data
     */
    var NA = {

        /**
         * instance of model/user
         */
        User: null,
        
        getCache: function() {
            return this.AnalyticsCache;
        }
    };

    return NA;
});
