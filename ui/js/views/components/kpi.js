/*global define */

define([
    'marionette',
    'tpl!templates/components/kpi.html'
], function(Marionette, template) {

    "use strict";

    /**
     * @type {KpiItemView}
     */
    var KpiItemView = Marionette.ItemView.extend({

        el: '<div></div>',

        template: template
    });

    return KpiItemView;
});
