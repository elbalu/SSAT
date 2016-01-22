/*jslint white:true,indent:false,unused:false*/
/**
 * view/utils/alert-box
 */
define([
    'core/vent',
    'tpl!templates/utils/alert-box.html',
    'config'
], function(Vent, template, Config) {

    "use strict";

    /**
     * @type {AlertBoxView}
     */
    var AlertBoxView = Marionette.Layout.extend({

        el: '<div></div>',
        template: template,
        ui: {
        },
        events: {
        },
        onShow: function() {

        }
    });

    return AlertBoxView;
});
