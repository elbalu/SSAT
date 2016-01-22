/*global Backbone, define*/
/**
 * "Global" Event bus, requires backbone for object, marionette to mixin "Wreqr"
 */
define(['backbone', 'wreqr'], function (Backbone, Wreqr) {

    "use strict";
    return new Backbone.Wreqr.EventAggregator();

});