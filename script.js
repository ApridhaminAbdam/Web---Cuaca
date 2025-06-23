// script.js

const apiKey = '88923e478dc830268e2c50c89e3380be'; // Ganti dengan API key kamu

document.getElementById('getweather').addEventListener('click', () => {
  const city = document.getElementById('city').value.trim();

  if (!city) {
    alert('Masukkan nama kota!');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Kota tidak ditemukan!');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').textContent = `Suhu: ${data.main.temp}°C`;
      document.getElementById('description').textContent = `Cuaca: ${data.weather[0].description}`;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById('icon').alt = data.weather[0].description;
      document.getElementById('weather').classList.remove('hidden');
    })
    .catch(error => {
      alert(error.message);
      document.getElementById('weather').classList.add('hidden');
    });
});
