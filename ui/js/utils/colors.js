/*jslint white:true,indent:false*/
/* global define,_,moment,Backbone */
/**
 * util/colors
 */
define([], function() {
    "use strict";
    /* Brand colors */
    var brandColors = [{
        'code': '#004BAF',
        'name': 'LakeBlue',
        'family': ['blue']
    }, {
        'code': '#097DBC',
        'name': 'RiverBlue',
        'family': ['blue']
    }, {
        'code': '#049FD9',
        'name': 'CiscoBlue',
        'family': ['blue']
    }, {
        'code': '#C4D6ED',
        'name': 'IcyBlue',
        'family': ['blue']
    }, {
        'code': '#58585B',
        'name': 'DkGray2',
        'family': ['gray']
    }, {
        'code': '#9E9EA2',
        'name': 'MedGray2',
        'family': ['gray']
    }, {
        'code': '#C6C7CA',
        'name': 'LtGray2',
        'family': ['gray']
    }, {
        'code': '#E8EBF1',
        'name': 'PaleGray1',
        'family': ['gray']
    }];

    function getByFamily(family) {

        var arr = $.merge(brandColors),
            filteredarray = arr.filter(function(arrItem) {

                if (arrItem['family'].indexOf(family) >= 0) {
                    return true;
                }

            }).map(function(filteredItem) {

                return filteredItem['code'];

            });

        return filteredarray;

    }


    function getAll() {

        return $.merge(brandColors);

    }

    function getBlue() {

        return getByFamily('blue');
    }

    return {

        getAll: getAll,
        getBlue: getBlue

    };

});
