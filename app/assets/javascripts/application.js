// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require dataTables/jquery.dataTables


$(document).ready( function () {
    $('#countries_list').DataTable();
} );

var data = { "countries_list" : [
        {
            "name": "Afghanistan",
            "capital": "Kabul",
            "altSpellings": [
                "AF",
                "Afġānistān"
            ],
            "relevance": "0",
            "region": "Asia",
            "subregion": "Southern Asia",
            "translations": {
                "de": "Afghanistan",
                "es": "Afganistán",
                "fr": "Afghanistan",
                "ja": "アフガニスタン",
                "it": "Afghanistan"
            },
            "population": 26023100,
            "latlng": [
                33,
                65
            ],
            "demonym": "Afghan",
            "area": 652230,
            "gini": 27.8,
            "timezones": [
                "UTC+04:30"
            ],
            "borders": [
                "IRN",
                "PAK",
                "TKM",
                "UZB",
                "TJK",
                "CHN"
            ],
            "nativeName": "افغانستان",
            "callingCodes": [
                "93"
            ],
            "topLevelDomain": [
                ".af"
            ],
            "alpha2Code": "AF",
            "alpha3Code": "AFG",
            "currencies": [
                "AFN"
            ],
            "languages": [
                "ps",
                "uz",
                "tk"
            ]
        },
        {
            "name": "Åland Islands",
            "capital": "Mariehamn",
            "altSpellings": [
                "AX",
                "Aaland",
                "Aland",
                "Ahvenanmaa"
            ],
            "relevance": "0",
            "region": "Europe",
            "subregion": "Northern Europe",
            "translations": {
                "de": "Åland",
                "es": "Alandia",
                "fr": "Åland",
                "ja": "オーランド諸島",
                "it": "Isole Aland"
            },
            "population": 28875,
            "latlng": [
                60.116667,
                19.9
            ],
            "demonym": "Ålandish",
            "area": 1580,
            "gini": null,
            "timezones": null,
            "borders": [],
            "nativeName": "Åland",
            "callingCodes": [
                "358"
            ],
            "topLevelDomain": [
                ".ax"
            ],
            "alpha2Code": "AX",
            "alpha3Code": "ALA",
            "currencies": [
                "EUR"
            ],
            "languages": [
                "sv"
            ]
        },
        {
            "name": "Albania",
            "capital": "Tirana",
            "altSpellings": [
                "AL",
                "Shqipëri",
                "Shqipëria",
                "Shqipnia"
            ],
            "relevance": "0",
            "region": "Europe",
            "subregion": "Southern Europe",
            "translations": {
                "de": "Albanien",
                "es": "Albania",
                "fr": "Albanie",
                "ja": "アルバニア",
                "it": "Albania"
            },
            "population": 2893005,
            "latlng": [
                41,
                20
            ],
            "demonym": "Albanian",
            "area": 28748,
            "gini": 34.5,
            "timezones": [
                "UTC+01:00"
            ],
            "borders": [
                "MNE",
                "GRC",
                "MKD",
                "KOS"
            ],
            "nativeName": "Shqipëria",
            "callingCodes": [
                "355"
            ],
            "topLevelDomain": [
                ".al"
            ],
            "alpha2Code": "AL",
            "alpha3Code": "ALB",
            "currencies": [
                "ALL"
            ],
            "languages": [
                "sq"
            ]
        } ] }


$(data.countries_list).each(function(index, element){  
     $('#countries_list').append('<tr><td> '+element.name[0]+' </td> <td> '+element.name[1]+' </td></tr>');       
})
