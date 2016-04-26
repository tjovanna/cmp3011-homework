/**
 * Created by teeganjansen on 4/22/16.
 */
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 42.396379, lng: -71.122309},
        zoom: 16
    });
}