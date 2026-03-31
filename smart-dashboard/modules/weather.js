export async function getWeather() {
  const city = document.getElementById("city").value;

  const res = await fetch(
    `https://wttr.in/${city}?format=3`
  );

  const data = await res.text();

  document.getElementById("weatherResult").innerText = data;
}