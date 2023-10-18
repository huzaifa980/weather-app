const apikey="2a909a8a21e7936e4b41ef97ddaaccff";
 const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search Button");
 const weatherIcon =document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src = "images/Clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        weatherIcon.src = "images/Rain.png";
   
}
else if(data.weather[0].main =="Drizzel"){
    weatherIcon.src = "images/Drizzle.png";
}
else if(data.weather[0].main =="Mist"){
    weatherIcon.src = "images/Mist.png";

}
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
})


