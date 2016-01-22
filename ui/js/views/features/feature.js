/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/partner-apps/con
tent
 */
define(['tpl!templates/features/feature.html',
    'core/vent'
], function(template, Vent) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
        // childView: ChildView,

        template: template,
        el: '<div class="col-lg-3 col-sm-6">',
        ui: {
            list: '.FeatureItem'
        }
    });

});
