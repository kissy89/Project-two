function main () {
  function startMap () {
    let center;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const ironhackBCN = {
          lat: 41.3977381,
          lng: 2.190471916};

        if (center === undefined) {
          center = ironhackBCN;
        }

        const map = new google.maps.Map(
          document.getElementById('map'),
          {
            zoom: 15,
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
          let marker = new google.maps.Marker({
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

  startMap();
}
window.onload = main;
