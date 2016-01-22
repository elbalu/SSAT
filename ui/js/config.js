/*jslint white:true, unused:false*/
/*global _*/
/**
 * Configuration
 */
define(['common/config'], function(CommonConfig) {

    "use strict";

    var Config = _.extend(CommonConfig, {

        localMode: false,
        localUrl: 'http://localhost:9091',
        url: function() {
            var url;
            if (this.localMode) {
                url = this.localUrl;
            } else {
                url = '';
            }
            return url;
        }
    });

    return Config;
});
