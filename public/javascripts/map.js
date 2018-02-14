function main () {
  function startMap () {
    var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916};

    var map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 15,
        center: ironhackBCN
      }
    );
    var IronHackBCNMarker = new google.maps.Marker({
      position: {
        lat: ironhackBCN.lat,
        lng: ironhackBCN.lng
      },
      map: map,
      title: 'Barcelona Campus'
    });

    places.forEach((place) => {
      var marker = new google.maps.Marker({
        position: {
          lat: place.location.coordinates[0] + 0.90909,
          lng: place.location.coordinates[1] + 9.90787
        },
        map: map,
        title: place.name
      });
    });
  }

  console.log('Test');

  startMap();
}
window.onload = main;
