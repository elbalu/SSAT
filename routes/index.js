var express = require('express'),
    router = express.Router(),
    corsJS = require('../cors'),
    _ = require('underscore');

var venueList = require('./../models/venuesList');
router.get('/api/ciscopispy/venues', function(req, res) {
    return res.json(venueList.venueList)
});

router.post('/hackathon/signup', function(req, res) {
    return res.json({
        success: true
    })
});

router.post('/hackathon/datacenter/:userName/profile', function(req, res) {
    return res.json({
        success: true
    })
});


router.get('/hackathon/:userName/service', function(req, res) {
    res.json([{
        name: 'UC',
        features: ['CUBE', 'FAX Pass Through', 'Translation Rules', 'Dial Peer']
    }, {
        name: 'Security',
        features: ['PKI', 'SNORT']
    }]);
});
router.get('/hackathon/datacenter/:userName/:serviceName/feature/:featureName/ciscoupdates', function(req, res) {
    res.json([{
        name: 'Support',
        features: [{
            name: 'Updates',
            subFeatures: ['Major Upadte on CUBE', 'Quality Increased']
        }],
        active: false
    }]);
});

router.get('/hackathon/datacenter/feature', function(req, res) {
    res.json([{
        name: 'Dial Peer',
        customers: ['Apple', 'Google']

    },
    {
        name: 'Voice Class Codec',
        customers: ['Google']

    },
    {
        name: 'Voice Translation Rule',
        customers: ['Apple', 'Google']

    },
    {
        name: 'Address Hiding',
        customers: ['Apple']

    },
    {
        name: 'Dspfarm',
        customers: ['Google']

    },
    {
        name: 'Fax-passthru',
        customers: ['Apple']

    },
    {
        name: 'Sip Trunking',
        customers: ['Google', 'Apple']

    }]);
});

router.post('/hackathon/datacenter/feature', function(req, res) {
	console.log(req.body);
	// Twilio Credentials 
var accountSid = 'ACc015d81c4d6136854451cfe9c429b8e4'; 
var authToken = '8da661bea3c0b34825b9efb4719d7b84'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
	to: "+14158124634", 
	from: "+14088053822", 
	body: req.body.message +' - SSAT CISCO',   
}, function(err, message) { 
	console.log(message.sid); 
});

client.messages.create({ 
	to: "+16092160502", 
	from: "+14088053822", 
	body: req.body.message +' - SSAT CISCO',   
}, function(err, message) { 
	console.log(message.sid); 
});
    res.json({success: true});
});


router.get('/hackathon/:userName/:serviceName/feature/:featureName', function(req, res) {
    res.json([{
        name: 'Features',
        features: [{
            name: 'SIP Trunks',
            subFeatures: []
        }, {
            name: 'Address Hiding',
            subFeatures: []
        }, {
            name: 'SIP Profile',
            subFeatures: []
        }, {
            name: 'DTMF',
            subFeatures: []
        }, {
            name: 'Translation Rule',
            subFeatures: []
        }],
        active: true

    }, {
        name: 'Notifications',
        features: [{
            name: 'Alarms',
            subFeatures: ['DSP Failure', 'Tracback']
        }, {
            name: 'Warning',
            subFeatures: ['High CPU']
        }, {
            name: 'Info',
            subFeatures: ['Up Time', 'Max Calls', 'Max Usage', 'Windows']
        }],
        active: false
    }, {
        name: 'TroubleShoot',
        features: [{
            name: 'Issues',
            subFeatures: ['Voice Path', 'Quality', 'DTMF', 'Others']
        }, {
            name: 'Devices',
            subFeatures: ['SJC-gtwy', 'BSTN-Gtwy', 'RTP-gtwy']
        }],
        active: false
    }]);
});

module.exports = router;
