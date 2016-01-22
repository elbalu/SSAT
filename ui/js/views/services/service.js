/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/partner-apps/con
tent
 */
define(['tpl!templates/services/service.html',
    'core/vent'
], function(template, Vent) {
    "use strict";

    return Backbone.Marionette.ItemView.extend({
        // childView: ChildView,

        template: template,
        el: '<div class="col-lg-3 col-sm-6">',
        ui: {
            list: '.ServiceItem'
        },
        initialize: function() {
            this.model.set({userName: JSON.parse(localStorage.getItem('user')).name})
        }

    });

});
