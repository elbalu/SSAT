/*jslint white:true,indent:false,unused:false*/
/**
 * view/dfeature/dfeatures
 */
define(['tpl!templates/dfeatures/dfeatures.html',
    'core/vent',
    'views/dfeatures/dfeature'
], function(template, Vent, ChildView) {
    "use strict";

    /**
     * @type {ProfileListView}
     */
    var Dfeatures = Marionette.CompositeView.extend({

        el: '<div class="dfeature-group"></div>',
        itemView: ChildView,
        itemViewContainer: '#dfeatureList',
        template: template,
        modelEvents: {
            sync: "render"
        }

    });

    return Dfeatures;
});
