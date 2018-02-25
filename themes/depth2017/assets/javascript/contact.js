var contact = function($) {
    loadGMap();
};

jQuery(document).ready(contact);

function loadGMap() {
    $('#responsive_map').gMap({
        maptype: google.maps.MapTypeId.ROADMAP,
        zoom: 16,
        markers: [{
            latitude: 40.762077,
            longitude: -111.903012,
            html: "<img src='https://www.depthinteractive.com/storage/app/media/logos/logo_black.png'><br/><span style='color:black;'>324 South 400 West Ste 100 Salt Lake City, Utah 84101-1157</span><strong></strong>",
            popup: false,
            flat: true,
            icon: {
                image: "/storage/app/media/logos/logo_contact.png",
                iconsize: [149, 149],
                iconanchor: [74, 74]
            }
        }],
        panControl: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: true,
        scrollwheel: false,
        styles: [ { "stylers": [ { "hue": "#cccccc" }, { "gamma": 1.58 }, { "saturation": -100 } ] } ],
        onComplete: function() {
            // Resize and re-center the map on window resize event
            var gmap = $("#responsive_map").data('gmap').gmap;
            window.onresize = function(){
                google.maps.event.trigger(gmap, 'resize');
                $("#responsive_map").gMap('fixAfterResize');
            };
        }
    });
}
