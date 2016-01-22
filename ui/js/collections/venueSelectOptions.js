/*global define */

define([
	'backbone',
	'models/venueSelectOption',
	'core/config'
], function (Backbone, VenueSelectOption, Config) {
	'use strict';

	return Backbone.Collection.extend({
		model: VenueSelectOption,
		url: Config.url() + '/api/ciscopispy/venues'
	});
});
