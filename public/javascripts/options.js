
function layouts (event) {
  const nightlife = document.querySelector('#nightlife');
  const art = document.querySelector('#art');
  const sport = document.querySelector('#sport');
  const eating = document.querySelector('#eating');
  const business = document.querySelector('#business');
}

function main () {
  const themeInput = document.querySelector('#theme-input');
  const kindElement = document.querySelector('#kind');

  checkIfThereIsOption();

  function changeLayaout (e) {
    const option = e.currentTarget.value;
    themeInput.value = option;

    changeTheme(option);
    saveOptionToBackend(option);
  }

  kindElement.addEventListener('change', changeLayaout);
}

function changeTheme (layout) {
  const bodyElement = document.querySelector('#body');
  const headerElement = document.querySelector('#header');
  const footerElement = document.querySelector('#footer');

  switch (layout) {
  case 'Nightlife':
    headerElement.style.background = 'linear-gradient(#6080ac, #5d7dac)';
    footerElement.style.background = 'linear-gradient(#6080ac, #5d7dac)';
    bodyElement.style.backgroundImage = 'url("https://wallup.net/wp-content/uploads/2017/11/17/364154-city-cityscape-lights-city_lights-blurred.jpg")';
    break;
  case 'Business':
    headerElement.style.background = 'linear-gradient(#8c92b1, #777297)';
    footerElement.style.background = 'linear-gradient(#8c92b1, #777297)';
    bodyElement.style.backgroundImage = 'url("https://wallpaperstudio10.com/static/wpdb/wallpapers/1920x1080/172989.jpg")';
    break;
  case 'Art':
    headerElement.style.background = 'linear-gradient(#e5d6d2, #dac8c5)';
    footerElement.style.background = 'linear-gradient(#e5d6d2, #dac8c5)';
    bodyElement.style.backgroundImage = 'url("https://wallpaperscraft.com/image/united_states_new_york_street_city_people_106627_2248x1552.jpg")';
    break;
  case 'Sport':
    headerElement.style.background = 'linear-gradient(#faddd7, #fcf0f7)';
    footerElement.style.background = 'linear-gradient(#e5d6d2, #dac8c5)';
    bodyElement.style.backgroundImage = 'url("http://cpplunkett.photos/wp-content/uploads/2014/08/boat-tour-chicago-river-at-sunset-081714.jpg")';
    break;
  case 'Eating':
    headerElement.style.background = 'linear-gradient(#f2ecfd,#fbeefe)';
    footerElement.style.background = 'linear-gradient(#fbeefe, #d5d0e9)';
    bodyElement.style.backgroundImage = 'url("http://cpplunkett.photos/wp-content/uploads/2014/05/chicago-board-of-trade-building-lasalle-and-wacker-050314-watermark-1800.jpg")';
  }
}

function checkIfThereIsOption () {
  const themeInput = document.querySelector('#theme-input');
  const kindElement = document.querySelector('#kind');
  const option = themeInput.value;
  if (option) {
    switch (option) {
    case 'Nightlife':
      kindElement.selectedIndex = 0;
      break;
    case 'Art':
      kindElement.selectedIndex = 1;
      break;

    case 'Sport':
      kindElement.selectedIndex = 2;
      break;

    case 'Eating':
      kindElement.selectedIndex = 3;
      break;

    case 'Business':
      kindElement.selectedIndex = 4;
      break;
    }
    changeTheme(option);
  }
}

function saveOptionToBackend (option) {
  axios.post('/api', {
    theme: option
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

main();
changeTheme();
