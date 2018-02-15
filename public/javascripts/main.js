
function main () {
  function selectedChange (event) {
    const nameInputElement = document.getElementById('name');
    const latitudeInputElement = document.querySelector('#latitude');
    const longitudeInputElement = document.querySelector('#longitude');

    const id = event.target.value;

    // get data from the api
    axios.get('/api/' + id)
      .then(response => {
        const place = response.data.place;

        nameInputElement.value = place.name;
        latitudeInputElement.value = place.location.coordinates[0];
        longitudeInputElement.value = place.location.coordinates[1];
      })
      .catch(err => {
        console.error(err);
      });
  }

  function initializeAutocomplete () {
    const input = document.getElementById('locality');

    const autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
      let place = autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      const name = place.name;

      document.getElementById('latitude').value = lat;
      document.getElementById('longitude').value = lng;
      document.getElementById('name').value = name;
    });
  }

  // const choice = document.getElementById('choice');
  // choice.addEventListener('change', selectedChange);
  const localityElement = document.querySelector('#locality');
  localityElement.addEventListener('focus', initializeAutocomplete);
}

main();

// window.onload = main;
