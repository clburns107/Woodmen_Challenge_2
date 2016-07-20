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
        },
        {
            "name": "Algeria",
            "capital": "Algiers",
            "altSpellings": [
                "DZ",
                "Dzayer",
                "Algérie"
            ],
            "relevance": "0",
            "region": "Africa",
            "subregion": "Northern Africa",
            "translations": {
                "de": "Algerien",
                "es": "Argelia",
                "fr": "Algérie",
                "ja": "アルジェリア",
                "it": "Algeria"
            },
            "population": 39500000,
            "latlng": [
                28,
                3
            ],
            "demonym": "Algerian",
            "area": 2381741,
            "gini": 35.3,
            "timezones": [
                "UTC+01:00"
            ],
            "borders": [
                "TUN",
                "LBY",
                "NER",
                "ESH",
                "MRT",
                "MLI",
                "MAR"
            ],
            "nativeName": "الجزائر",
            "callingCodes": [
                "213"
            ],
            "topLevelDomain": [
                ".dz"
            ],
            "alpha2Code": "DZ",
            "alpha3Code": "DZA",
            "currencies": [
                "DZD"
            ],
            "languages": [
                "ar"
            ]
        },
        {
            "name": "American Samoa",
            "capital": "Pago Pago",
            "altSpellings": [
                "AS",
                "Amerika Sāmoa",
                "Amelika Sāmoa",
                "Sāmoa Amelika"
            ],
            "relevance": "0.5",
            "region": "Oceania",
            "subregion": "Polynesia",
            "translations": {
                "de": "Amerikanisch-Samoa",
                "es": "Samoa Americana",
                "fr": "Samoa américaines",
                "ja": "アメリカ領サモア",
                "it": "Samoa Americane"
            },
            "population": 55519,
            "latlng": [
                -14.33333333,
                -170
            ],
            "demonym": "American Samoan",
            "area": 199,
            "gini": null,
            "timezones": null,
            "borders": [],
            "nativeName": "American Samoa",
            "callingCodes": [
                "1684"
            ],
            "topLevelDomain": [
                ".as"
            ],
            "alpha2Code": "AS",
            "alpha3Code": "ASM",
            "currencies": [
                "USD"
            ],
            "languages": [
                "en",
                "sm"
            ]
        },
        {
            "name": "Andorra",
            "capital": "Andorra la Vella",
            "altSpellings": [
                "AD",
                "Principality of Andorra",
                "Principat d'Andorra"
            ],
            "relevance": "0.5",
            "region": "Europe",
            "subregion": "Southern Europe",
            "translations": {
                "de": "Andorra",
                "es": "Andorra",
                "fr": "Andorre",
                "ja": "アンドラ",
                "it": "Andorra"
            },
            "population": 76949,
            "latlng": [
                42.5,
                1.5
            ],
            "demonym": "Andorran",
            "area": 468,
            "gini": null,
            "timezones": [
                "UTC+01:00"
            ],
            "borders": [
                "FRA",
                "ESP"
            ],
            "nativeName": "Andorra",
            "callingCodes": [
                "376"
            ],
            "topLevelDomain": [
                ".ad"
            ],
            "alpha2Code": "AD",
            "alpha3Code": "AND",
            "currencies": [
                "EUR"
            ],
            "languages": [
                "ca"
            ]
        },
        {
            "name": "Angola",
            "capital": "Luanda",
            "altSpellings": [
                "AO",
                "República de Angola",
                "ʁɛpublika de an'ɡɔla"
            ],
            "relevance": "0",
            "region": "Africa",
            "subregion": "Middle Africa",
            "translations": {
                "de": "Angola",
                "es": "Angola",
                "fr": "Angola",
                "ja": "アンゴラ",
                "it": "Angola"
            },
            "population": 24383301,
            "latlng": [
                -12.5,
                18.5
            ],
            "demonym": "Angolan",
            "area": 1246700,
            "gini": 58.6,
            "timezones": [
                "UTC+01:00"
            ],
            "borders": [
                "COG",
                "COD",
                "ZMB",
                "NAM"
            ],
            "nativeName": "Angola",
            "callingCodes": [
                "244"
            ],
            "topLevelDomain": [
                ".ao"
            ],
            "alpha2Code": "AO",
            "alpha3Code": "AGO",
            "currencies": [
                "AOA"
            ],
            "languages": [
                "pt"
            ]
        },
        {
            "name": "Anguilla",
            "capital": "The Valley",
            "altSpellings": [
                "AI"
            ],
            "relevance": "0.5",
            "region": "Americas",
            "subregion": "Caribbean",
            "translations": {
                "de": "Anguilla",
                "es": "Anguilla",
                "fr": "Anguilla",
                "ja": "アンギラ",
                "it": "Anguilla"
            },
            "population": 13452,
            "latlng": [
                18.25,
                -63.16666666
            ],
            "demonym": "Anguillian",
            "area": 91,
            "gini": null,
            "timezones": null,
            "borders": [],
            "nativeName": "Anguilla",
            "callingCodes": [
                "1264"
            ],
            "topLevelDomain": [
                ".ai"
            ],
            "alpha2Code": "AI",
            "alpha3Code": "AIA",
            "currencies": [
                "XCD"
            ],
            "languages": [
                "en"
            ]
        },
        {
            "name": "Antigua and Barbuda",
            "capital": "Saint John's",
            "altSpellings": [
                "AG"
            ],
            "relevance": "0.5",
            "region": "Americas",
            "subregion": "Caribbean",
            "translations": {
                "de": "Antigua und Barbuda",
                "es": "Antigua y Barbuda",
                "fr": "Antigua-et-Barbuda",
                "ja": "アンティグア・バーブーダ",
                "it": "Antigua e Barbuda"
            },
            "population": 86295,
            "latlng": [
                17.05,
                -61.8
            ],
            "demonym": "Antiguan, Barbudan",
            "area": 442,
            "gini": null,
            "timezones": [
                "UTC−04:00"
            ],
            "borders": [],
            "nativeName": "Antigua and Barbuda",
            "callingCodes": [
                "1268"
            ],
            "topLevelDomain": [
                ".ag"
            ],
            "alpha2Code": "AG",
            "alpha3Code": "ATG",
            "currencies": [
                "XCD"
            ],
            "languages": [
                "en"
            ]
        },
        {
            "name": "Argentina",
            "capital": "Buenos Aires",
            "altSpellings": [
                "AR",
                "Argentine Republic",
                "República Argentina"
            ],
            "relevance": "0",
            "region": "Americas",
            "subregion": "South America",
            "translations": {
                "de": "Argentinien",
                "es": "Argentina",
                "fr": "Argentine",
                "ja": "アルゼンチン",
                "it": "Argentina"
            },
            "population": 43131966,
            "latlng": [
                -34,
                -64
            ],
            "demonym": "Argentinean",
            "area": 2780400,
            "gini": 44.5,
            "timezones": [
                "UTC−03:00"
            ],
            "borders": [
                "BOL",
                "BRA",
                "CHL",
                "PRY",
                "URY"
            ],
            "nativeName": "Argentina",
            "callingCodes": [
                "54"
            ],
            "topLevelDomain": [
                ".ar"
            ],
            "alpha2Code": "AR",
            "alpha3Code": "ARG",
            "currencies": [
                "ARS"
            ],
            "languages": [
                "es",
                "gn"
            ]
        },
        {
            "name": "Armenia",
            "capital": "Yerevan",
            "altSpellings": [
                "AM",
                "Hayastan",
                "Republic of Armenia",
                "Հայաստանի Հանրապետություն"
            ],
            "relevance": "0",
            "region": "Asia",
            "subregion": "Western Asia",
            "translations": {
                "de": "Armenien",
                "es": "Armenia",
                "fr": "Arménie",
                "ja": "アルメニア",
                "it": "Armenia"
            },
            "population": 3006800,
            "latlng": [
                40,
                45
            ],
            "demonym": "Armenian",
            "area": 29743,
            "gini": 30.9,
            "timezones": [
                "UTC+04:00"
            ],
            "borders": [
                "AZE",
                "GEO",
                "IRN",
                "TUR"
            ],
            "nativeName": "Հայաստան",
            "callingCodes": [
                "374"
            ],
            "topLevelDomain": [
                ".am"
            ],
            "alpha2Code": "AM",
            "alpha3Code": "ARM",
            "currencies": [
                "AMD"
            ],
            "languages": [
                "hy",
                "ru"
            ]
        },
        {
            "name": "Aruba",
            "capital": "Oranjestad",
            "altSpellings": [
                "AW"
            ],
            "relevance": "0.5",
            "region": "Americas",
            "subregion": "Caribbean",
            "translations": {
                "de": "Aruba",
                "es": "Aruba",
                "fr": "Aruba",
                "ja": "アルバ",
                "it": "Aruba"
            },
            "population": 107394,
            "latlng": [
                12.5,
                -69.96666666
            ],
            "demonym": "Aruban",
            "area": 180,
            "gini": null,
            "timezones": null,
            "borders": [],
            "nativeName": "Aruba",
            "callingCodes": [
                "297"
            ],
            "topLevelDomain": [
                ".aw"
            ],
            "alpha2Code": "AW",
            "alpha3Code": "ABW",
            "currencies": [
                "AWG"
            ],
            "languages": [
                "nl",
                "pa"
            ]
        },
        {
            "name": "Australia",
            "capital": "Canberra",
            "altSpellings": [
                "AU"
            ],
            "relevance": "1.5",
            "region": "Oceania",
            "subregion": "Australia and New Zealand",
            "translations": {
                "de": "Australien",
                "es": "Australia",
                "fr": "Australie",
                "ja": "オーストラリア",
                "it": "Australia"
            },
            "population": 23868800,
            "latlng": [
                -27,
                133
            ],
            "demonym": "Australian",
            "area": 7692024,
            "gini": 30.5,
            "timezones": [
                "UTC+05:00",
                "UTC+06:30",
                "UTC+07:00",
                "UTC+08:00",
                "UTC+09:30",
                "UTC+10:00",
                "UTC+10:30",
                "UTC+11:30"
            ],
            "borders": [],
            "nativeName": "Australia",
            "callingCodes": [
                "61"
            ],
            "topLevelDomain": [
                ".au"
            ],
            "alpha2Code": "AU",
            "alpha3Code": "AUS",
            "currencies": [
                "AUD"
            ],
            "languages": [
                "en"
            ]
        },
        {
            "name": "Austria",
            "capital": "Vienna",
            "altSpellings": [
                "AT",
                "Österreich",
                "Osterreich",
                "Oesterreich"
            ],
            "relevance": "0",
            "region": "Europe",
            "subregion": "Western Europe",
            "translations": {
                "de": "Österreich",
                "es": "Austria",
                "fr": "Autriche",
                "ja": "オーストリア",
                "it": "Austria"
            },
            "population": 8602112,
            "latlng": [
                47.33333333,
                13.33333333
            ],
            "demonym": "Austrian",
            "area": 83871,
            "gini": 26,
            "timezones": [
                "UTC+01:00"
            ],
            "borders": [
                "CZE",
                "DEU",
                "HUN",
                "ITA",
                "LIE",
                "SVK",
                "SVN",
                "CHE"
            ],
            "nativeName": "Österreich",
            "callingCodes": [
                "43"
            ],
            "topLevelDomain": [
                ".at"
            ],
            "alpha2Code": "AT",
            "alpha3Code": "AUT",
            "currencies": [
                "EUR"
            ],
            "languages": [
                "de"
            ]
        } ] }


$(data.countries_list).each(function(index, element){  
     $('#countries_list').append('<tr><td> '+element.name[0]+' </td> <td> '+element.name[1]+' </td></tr>');       
})
