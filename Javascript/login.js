async function olduser(username) {
  const response = await fetch('http://127.0.0.1:1029/login/' + username);
  console.log('response', response);
  const data = await response.json();
  console.log('Old User data', data);
  return data;
}

async function validate(event) {
  event.preventDefault()
  poista()
  const username = document.getElementById('username').value;
  const loguser = await olduser(username);
  if (username === loguser.correct) {
    window.location.href= '/ClearSkies/HTML/dashboard.html'
    localStorage.setItem("textvalue", username)
    return false;
  } else {
    alert('Login failed!');
    console.log(loguser);
  }
}
document.querySelector('#login').addEventListener('submit', validate)


function poista(){
  localStorage.removeItem('thunderstrom')
  localStorage.removeItem('drizzle')
  localStorage.removeItem('rain')
  localStorage.removeItem('snow')
  localStorage.removeItem('clouds')
  localStorage.removeItem('haze')
  localStorage.removeItem('clear')
}