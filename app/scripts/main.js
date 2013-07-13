var basepos = new google.maps.LatLng(53.551791, 9.943053); // MakerHub

var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    // create the map itself
    var mapOptions = {
        center: basepos,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControl: true,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: basepos,
        map: map,
        title: 'MakerHub.de'
    });
}

initialize();