define([
    'marionette',
    'templates',
    'models/register',
    'views/utils/alert-box',
    'models/alert-box'
], function(Marionette, templates, RegisterModel, AlertBoxView, AlertBoxModel) {
    'use strict';

    return Marionette.Layout.extend({
        template: templates.register,
        ui: {
            'Selectpicker': '.selectpicker'
        },

        regions: {
            'AlertBoxRegion': '.alert-box'
        },

        events: {
            'click .register': 'submitProfile'
        },

        submitProfile: function(e) {
            e.preventDefault();
            var form = $('.register-form');
            var _this = this;
            var data = $(form).serializeArray();
            var registerModel = new RegisterModel({
                name: data[0].value,
                location: data[1].value,
                email: data[2].value,
                phone: data[3].value
            });
            registerModel.save({
                userName: JSON.parse(localStorage.getItem('user')).name
            }, {
                success: function(data, response) {
                    var alertBoxModel = new AlertBoxModel({
                        type: 'success',
                        text: 'Profile saved successfully !. Redirecting to services page.'
                    });
                    _this.AlertBoxRegion.show(new AlertBoxView({
                        model: alertBoxModel
                    }));
                    setTimeout(function() {
                        var user = localStorage.getItem('user');

                        window.location.hash = '/services/' + JSON.parse(localStorage.getItem('user')).name
                    }, 3000);
                }
            });
            console.log(data);
        }
    });
});
