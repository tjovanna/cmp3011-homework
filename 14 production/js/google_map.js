/**
 * Created by teeganjansen on 4/22/16.
 */
//Make map & center on Davis Square
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.396379, lng: -71.122309},
        zoom: 16
    });

    ////Set new styles
    var styles = [
        {
            stylers: [
                { hue: "#D2DADC" },
                { saturation: "-60"}
            ]
        }
    ];
    map.setOptions ({styles: styles});


//Set results biased to Davis Square, set up autocomplete

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(42.392106, -71.128712),
        new google.maps.LatLng(42.398884, -71.115353));

    var input = document.getElementById('searchTextField');
    var options = {
        bounds: defaultBounds
    };

    autocomplete = new google.maps.places.Autocomplete(input, options);

//Drawing circle with radius of 0.5 miles
    var distance_circle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    map: map,
    center: {lat: 42.396379, lng: -71.122309},
    radius: 805
});

}