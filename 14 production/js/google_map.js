/**
 * Created by teeganjansen on 4/22/16.
 */

//Make map & center on Davis Square
var map;
var geocoder;

function initMap() {
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.396379, lng: -71.122309},
        zoom: 16
    });

    ////Set new styles
    var styles = [
        {
            stylers: [
                {hue: "#D2DADC"},
                {saturation: "-60"}
            ]
        }
    ];
    map.setOptions({styles: styles});


//Set results biased to Davis Square, set up autocomplete

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.392106, -71.128712),
        new google.maps.LatLng(42.398884, -71.115353));

    var input = document.getElementById('searchTextField');
    //var input = window.HTMLInputElement("input");
    var options = {
        bounds: defaultBounds
    };

    autocomplete = new google.maps.places.Autocomplete(input, options);

//
//Drawing circle with radius of 0.5 miles
//    var distance_circle = new google.maps.Circle({
//        strokeColor: '#FF0000',
//        strokeOpacity: 0.8,
//        strokeWeight: 2,
//        fillColor: '#FF0000',
//        fillOpacity: 0.35,
//        map: map,
//        center: {lat: 42.396379, lng: -71.122309},
//        radius: 805
//    });




// On click, call function to geocode user's address and load database results (no filters)
//    var geocoder = new google.maps.Geocoder();

//    document.getElementById('search').addEventListener('click', function (event) {
//        event.preventDefault();
//        geocodeAddress(geocoder, map);
//
//
//        //fade in list of results
//        $('ol').hide().fadeIn(1500);
//
//
//
//
//       //Geosort results- by distance from user input
//        function sortResults () {
//            // Grab current position
//            var latlon = LatLon(locLat, locLng)
//
//            var bathrooms = document.getElementById('bathrooms');
//            var bathroomList = bathrooms.querySelectorAll('li');
//            var bathroomArray = Array.prototype.slice.call(bathroomList, 0);
//
//            bathroomArray.sort(function(a,b){
//                var locA  = a.getAttribute('data-latlon').split(',');
//                var locB  = b.getAttribute('data-latlon').split(',');
//                console.log('did this');
//
//                distA = latlon.distanceTo(new LatLon(Number(locA[0]),Number(locA[1])));
//                distB = latlon.distanceTo(new LatLon(Number(locB[0]),Number(locB[1])));
//                return distA - distB;
//            });
//
//
//            //Reorder the list
//            bathrooms.innerHTML = "";
//            bathroomArray.forEach(function() {
//                bathrooms.appendChild();
//                console.log('did this too');
//            }); }
//
//
//        //make numbered markers
//            var coords = [
//                {
//                    "name": "Diesel Café",
//                    "lat": 42.395877,
//                    "long": -71.121812
//                },
//                {
//                    "name": "iYo Bistro",
//                    "lat": 42.394942,
//                    "long": -71.121796
//                },
//                {
//                    "name": "Starbucks",
//                    "lat": 42.395917,
//                    "long": -71.122232
//                },
//                {
//                    "name": "Flatbread Company",
//                    "lat": 42.395976,
//                    "long": -71.123810
//                },
//                {
//                    "name": "Five Horses",
//                    "lat": 42.395819,
//                    "long": -71.120830
//                },
//                {
//                    "name": "Rosebud",
//                    "lat": 42.391571,
//                    "long": -71.114579
//                }
//            ];
//        for(var i = 0; i < coords.length; i++) {
//            var marker = new google.maps.Marker({
//                position: new google.maps.LatLng(coords[i].lat, coords[i].long),
//                map: map,
//                title: coords[i].name,
//                icon:  "https://chart.googleapis.com/chart?chst=d_map_pin_letter&chld=" + (i + 1) + "|FFFFFF|000000"
//            });
//
//
//
//
//        //load results from json file
//        var xhr = new XMLHttpRequest();
//        responseObject = JSON.parse(xhr.responseText);
//        var newContent = '';
//        for(var i=0; i < responseObject.bathrooms.length; i++){
//            newContent += '<div class="result">';
//            newContent += '<h2>'+responseObject.bathrooms[i].name+ '</h2>';
//            newContent += '<h3>'+ responseObject.bathrooms[i].address+ '<br>';
//            newContent += responseObject.bathrooms[i].hours + '</h3>';
//            newContent += '<p>' +responseObject.bathrooms[i].description +'</p>';
//            newContent += '</div>';
//        }
//        document.getElementById('content').innerHTML = newContent;
//        xhr.open('GET', '../bathrooms.json', true);
//        xhr.send(null);
//
//
//
//
//}});
 }

    $('#search').on('click', function(event){
        event.preventDefault();
        console.log('got here');

            $.getJSON( 'bathrooms-new.json', "", function ( response ) {
                var items = '' ;

                // Loop through the set of elements in the JSON file.
                $.each ( response, function( bathrooms ) {
                    // Add each element to the items string, and add some HTML formatting along the way.
                    //items += '<p>' + '<strong>' + type + '</strong>: ' + name + '<p>' ;
                    console.log('name', bathrooms.name);

                    //name, address, lat, long, hours, stalls, pay, image, description
                });

                // Set the content of the #content div to the items.
                //$('#content').html ( items ) ;
            });
    }

    );



//Grab user's longitude and latitude and place a 'you are here' marker
var locLat;
var locLng;

function geocodeAddress() {
    var address = document.getElementById("searchTextField").value;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            }
            );
            //Gets user location latitude and longitude
            locLat = results[0].geometry.location.lat();
            locLng = results[0].geometry.location.lng();
            console.log(locLat);
            console.log(locLng);

        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }

    });
}


