const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
  jokeEl.innerHTML = 'Please wait...';
  jokeBtn.disabled = true;
  jokeBtn.style.backgroundColor = '#eee';
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
  jokeBtn.disabled = false;
  jokeBtn.style.backgroundColor = '#9f68e0';
}
