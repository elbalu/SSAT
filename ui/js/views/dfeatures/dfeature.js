/*jslint white:true,indent:false*/
/*global Marionette*/
/**
 * view/partner-apps/con
tent
 */
define(['tpl!templates/dfeatures/dfeature.html',
    'core/vent',
    'models/dfeature',
    'views/utils/alert-box',
    'models/alert-box'
], function(template, Vent, DModel, AlertBoxView, AlertBoxModel) {
    "use strict";
    return Backbone.Marionette.ItemView.extend({
        // childView: ChildView,

        template: template,
        el: '<div class="col-lg-3 col-sm-6">',
        ui: {
            list: '.DfeatureItem'
        },
        regions: {
            'AlertBoxRegion': '.alert-box'
        },

        events: {
            'click .cisco-update': 'submitUpdate'
        },
        initialize: function() {
            this.model.set({
                userName: JSON.parse(localStorage.getItem('user')).name
            })
        },
        submitUpdate: function(e) {
            e.preventDefault();
            var form = $('.cisco-update-form');
            var _this = this;
            var data = $(form).serializeArray();
            var dModel = new DModel({
                name: _this.model.get('name'),
                customers: _this.model.get('customers'),
                message: data[0].value
            });
        
            dModel.save(null, {
                type: 'POST',
                success: function(data, response) {
                    var alertBoxModel = new AlertBoxModel({
                        type: 'success',
                        text: 'Message posted successfully!'
                    });
                    // _this.AlertBoxRegion.show(new AlertBoxView({
                    //     model: alertBoxModel
                    // }));

                }
            });
            console.log(data);
        }

    });

});
