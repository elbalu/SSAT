/*global define */

define([
    'marionette',
    'tpl!templates/components/durationSelectControlItem.html'
], function(Marionette, template) {

    "use strict";

    /**
     * @type {DurationSelectControlItemView}
     */
    var DurationSelectControlItemView = Marionette.ItemView.extend({

        el: '<option></option>',

        template: template,

        initialize: function() {
            $(this.el).attr('value', this.model.get('duration'));
        }
    });

    return DurationSelectControlItemView;
});
