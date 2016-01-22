/*jslint white:true,indent:false,unused:false*/
/**
 * view/service/services
 */
define(['tpl!templates/services/services.html',
    'core/vent',
    'views/services/service'
], function(template, Vent, ChildView) {
    "use strict";

    /**
     * @type {ProfileListView}
     */
    var Services = Marionette.CompositeView.extend({

        el: '<div class="service-group"></div>',
        itemView: ChildView,
        itemViewContainer: '#serviceList',
        template: template,
        modelEvents: {
            sync: "render"
        }

    });

    return Services;
});
