/*jslint white:true,indent:false*/
/* global Backbone */
/**
 * model/alert-box
 */
define(['config'], function(Config) {

    "use strict";

    /**
     * Setting Profile Data
     *
     * @type {Backbone.Model}
     */
    var ProfileModel = Backbone.Model.extend({

        defaults: {
            'message': null,
            'type': null,
            'options': {}
        }

    });

    return ProfileModel;
});
