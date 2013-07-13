var basepos = new google.maps.LatLng(53.551791, 9.943053); // MakerHub

var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    // create the map itself
    var mapOptions = {
        center: basepos,
        zoom: 0,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // create the directions service
    var rendererOptions = {
        markerOptions: {
            visible: false // don't show markers in directions results
        }
    };

    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
    directionsDisplay.setMap(map);
}


function updateDirectionsForRoute(route) {
    var request = createDirectionsRequest(route);

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        } else {
            console.error('direction calculation had an error.');
        }
    });
}