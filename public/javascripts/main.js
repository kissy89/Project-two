
function main () {
  function selectedChange (event) {
    console.log(event.target.value);
    const id = event.target.value;

    // get data from the api
    axios.get('/api/' + id)
      .then(response => {
        console.log(response.data);
        // we have the data from that place. Lets feed the inputs with that data
      })
      .catch(err => {
        console.error(err);
      });
  }

  const choice = document.getElementById('choice');
  choice.addEventListener('change', selectedChange);
}

window.onload = main;
