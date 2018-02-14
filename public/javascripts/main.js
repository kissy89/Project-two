
function main () {
  function selectedChange (event) {
    const nameInputElement = document.getElementById('name');
    const descriptionInputElement = document.querySelector('#description');
    const latitudeInputElement = document.querySelector('#latitude');
    const longitudeInputElement = document.querySelector('#longitude');

    console.log(event.target.value);
    const id = event.target.value;

    // get data from the api
    axios.get('/api/' + id)
      .then(response => {
        const place = response.data.place;

        nameInputElement.value = place.name;
        descriptionInputElement.value = place.description;
        latitudeInputElement.value = place.location.coordinates[0];
        longitudeInputElement.value = place.location.coordinates[1];
      })
      .catch(err => {
        console.error(err);
      });
  }

  const choice = document.getElementById('choice');
  choice.addEventListener('change', selectedChange);
}

window.onload = main;
