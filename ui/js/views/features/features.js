/*jslint white:true,indent:false,unused:false*/
/**
 * view/feature/features
 */
define(['tpl!templates/features/features.html',
    'core/vent',
    'views/features/feature'
], function(template, Vent, ChildView) {
    "use strict";

    /**
     * @type {ProfileListView}
     */
    var Services = Marionette.CompositeView.extend({

        el: '<div class="feature-group"></div>',
        itemView: ChildView,
        itemViewContainer: '#featureList',
        template: template,
        modelEvents: {
            sync: "render"
        }

    });

    return Services;
});
