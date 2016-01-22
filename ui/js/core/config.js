/*jslint white:true, unused:false*/
/*global define */
/**
 * Configuration
 */
define([], function() {

    "use strict";

    var Config = {

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
    };

    return Config;
});
