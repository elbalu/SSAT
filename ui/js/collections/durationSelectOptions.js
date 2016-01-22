/*global define */

define([
	'backbone',
	'models/durationSelectOption',
	'core/config'
], function (Backbone, DurationSelectOption, Config) {
	'use strict';

	return Backbone.Collection.extend({
		model: DurationSelectOption,
		url: './js/staticdata/duration.json'
	});
});
