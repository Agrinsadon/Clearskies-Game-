async function newuser(user, icao) {
  const response = await fetch('http://127.0.0.1:1029/signup/' + user + '/' + icao);
  console.log('response', response);
  const data = await response.json();
  console.log('Player data', data);
  return data;
}

async function newone(event) {
  event.preventDefault();
  poista();
  const icao = document.getElementById('icao').value;
  const user = document.getElementById('user').value;
  const username = await newuser(user);
  const oldusername = username.old
  const airport = await newuser(user, icao);
  const wrongicao = airport.icao
  if (oldusername) {
      alert('Username already taken!');
  }
  else if (wrongicao) {
    alert('Incorrect ICAO-Code!');
  }
  else {
     window.location.href = '/ClearSkies/HTML/dashboard.html';
     localStorage.setItem('textvalue', user);
  }
}
document.querySelector('#signup').addEventListener('submit', newone);

function poista() {
  localStorage.removeItem('thunderstrom');
  localStorage.removeItem('drizzle');
  localStorage.removeItem('rain');
  localStorage.removeItem('snow');
  localStorage.removeItem('clouds');
  localStorage.removeItem('haze');
  localStorage.removeItem('clear');
}