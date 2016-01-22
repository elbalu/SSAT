/*global define */

define([
    'marionette',
    'bootstrapSelect',
    'views/components/durationSelectControlItem',
    'tpl!templates/components/durationSelectControlList.html'
], function(Marionette, BootstrapSelect, DurationSelectControlItemView, template) {

    "use strict";

    /**
     * @type {DurationSelectControlListView}
     */
    var DurationSelectControlListView = Marionette.CompositeView.extend({

        el: '<select class="selectpicker"></select>',

        template: template,

        itemView: DurationSelectControlItemView,

        onShow: function() {
            $('.selectpicker').selectpicker();
        }

    });

    return DurationSelectControlListView;
});
