//POST /login
{
    name: 'apple',
    pwd: * * * *
}

//GET /profile/:userId
{
    name: '',
    location: '',
    phone: '',
    userCountL '',
    desc: '',
    features: ''
}
//POST /profile/:userId

{
    type: 'success',
    message: 'Profile Updated Successfully!'
}

//GET /services/:customerName
[{
    name: 'UC',
    id: 1234,
    features: ['CUBE', 'CME', 'MGCP']
    active: true

}, {
    name: 'Security',
    id: 2345,
    features: ['PKI', 'SNORT'],
    active: false
}]


//GET/ features/:service:/:customerId

[{
    name: 'CUBE',
    features: [{
        name: 'SIP Tracking',
        id: 1234,
        clickable: true,
        desc: 'this is a sip tracking features'
    }, {
        name: 'sap Tracking',
        id: 234,
        clickable: true,
        desc: 'this is a sap tracking features'
    }],
    issues: [{
        name: 'Voice Path',
        id: 3434,
        clickable: true,
        desc: 'this is a voice path which is 10 miles'
    }, {
        name: 'Noice Path',
        id: 3434,
        clickable: true,
        desc: 'this is a noice path which is 10 miles'
    }],
    notifications: [{
        type: 'alarm',
        message: 'crtical alarm'
    }, {
        type: 'warning',
        message: 'Hich CPU'
    }]
}]
