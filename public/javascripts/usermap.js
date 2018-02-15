function main () {
  console.log(places);

  function userMap () {
    var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};

    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 10,
        center: ironhackBCN
      }
    );
    var IronHackBCNMarker = new google.maps.Marker({
      position: {
        lat: ironhackBCN.lat,
        lng: ironhackBCN.lng
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
  }

  userMap();
}
window.onload = main;
