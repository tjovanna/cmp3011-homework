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
//
// On click, call function to geocode user's address and load database results (no filters)
//    var geocoder = new google.maps.Geocoder();

    document.getElementById('search').addEventListener('click', function (event) {
        event.preventDefault();
        geocodeAddress(geocoder, map);

        //load results from json file
        var xhr = new XMLHttpRequest();
        responseObject = JSON.parse(xhr.responseText);
        var newContent = '';
        for(var i=0; i < responseObject.bathrooms.length; i++){
            newContent += '<div class="result">';
            newContent += '<h2>'+responseObject.bathrooms[i].name+ '</h2>';
            newContent += '<h3>'+ responseObject.bathrooms[i].address+ '<br>';
            newContent += responseObject.bathrooms[i].hours + '</h3>';
            newContent += '<p>' +responseObject.bathrooms[i].description +'</p>';
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;
        xhr.open('GET', '../bathrooms.json', true);
        xhr.send(null);
    });
}

//Grab user's longitude and latitude and place a 'you are here' marker
var locLat;
var locLng;

function geocodeAddress() {
    //var locLat;
    //var locLng;
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

//Get distance between user location and database results

