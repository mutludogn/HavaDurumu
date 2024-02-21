const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    ///console.log(cityInput.value)
    getData(cityInput.value)
})

function getData(name){
    //apı ve fetch
    const API = "1b3cc6d0c4ffec29bd589ce7ffd51f53"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=tr`
    console.log(baseURL)
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
        const {name, sys:{country}, main:{temp, feels_like, humidity}, wind:{speed} ,weather:[{description}] } = data;
        //veri çekme
        const city = document.querySelector("#sehir")
        const temperature = document.querySelector("#sicaklik")
        const weatherDesc = document.querySelector("#havaDurumu")
        const feel = document.querySelector("#hissedilen")
        const hum = document.querySelector("#humidity")
        const wind = document.querySelector("#wind")
        console.log(city, temperature, weatherDesc, feel, hum, wind)
        //çekilen verileri html yansıtma
       city.textContent = `${name}, ${country}`;
       temperature.innerText = `${temp.toFixed(1)}°`;
       hum.textContent = `Nem: %${humidity}`;
       wind.innerHTML = `Rüzgar: ${speed} km/s`;
       weatherDesc.textContent = `Hava Durumu: ${description}`;
       feel.innerText = `Hissedilen Sıcaklık: ${feels_like}°`
    })
    .catch(err => console.log(err))
    
    cityInput.value = "";
    cityInput.focus();
}