define([
    'marionette',
    'templates',
    'models/singup',
    'views/utils/alert-box',
    'models/alert-box'
], function(Marionette, templates, SignupModel, AlertBoxView, AlertBoxModel) {
    'use strict';

    return Marionette.Layout.extend({
        template: templates.signup,
        ui: {
            'Selectpicker': '.selectpicker'
        },

        regions: {
            'AlertBoxRegion': '.alert-box'
        },

        events: {
            'click .signup': 'submitSignup'
        },

        submitSignup: function(e) {
            e.preventDefault();
            var form = $('.signup-form');
            var _this = this;
            var data = $(form).serializeArray();
            var signupModel = new SignupModel({
                name: data[0].value,
                password: data[1].value
            });
            localStorage.setItem('user', JSON.stringify({
                name: data[0].value,
                password: data[1].value
            }));
            signupModel.save(null, {
                type: 'POST',
                success: function(data, response) {
                    var alertBoxModel = new AlertBoxModel({
                        type: 'success',
                        text: 'signed up successfully !. Redirecting to profile.'
                    });
                    _this.AlertBoxRegion.show(new AlertBoxView({
                        model: alertBoxModel
                    }));

                    setTimeout(function() {
                        window.location.hash = '/profile'
                    }, 3000);
                }
            });
            console.log(data);
        }
    });
});
