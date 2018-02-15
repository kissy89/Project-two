function main () {
  function userMap () {
    let center;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const innsbruck = {
          lat: 47.3977381,
          lng: 11.190471916};

        if (center === undefined) {
          center = innsbruck;
        }

        const map = new google.maps.Map(
          document.getElementById('map'),
          {
            zoom: 10,
            center: center
          }
        );

        const centerMarker = new google.maps.Marker({
          position: {
            lat: center.lat,
            lng: center.lng
          },
          map: map,
          title: 'You are here'
        });

        places.forEach((place) => {
          var marker = new google.maps.Marker({
            position: {
              lat: place.location.coordinates[0],
              lng: place.location.coordinates[1]
            },
            map: map,
            title: place.name
          });
        });
      });
    }
  }

  userMap();
}
window.onload = main;
