// displays time and date
function updateDT(){
    var refresh=995; // Refresh rate in milli seconds
    setTimeout('displayDateTime()',refresh);
    // console.log("here");
}

function displayDateTime() {
    var currDate = new Date();
    document.getElementById("time").innerHTML = currDate.toLocaleTimeString();
    document.getElementById("date").innerHTML = currDate.toDateString();
    updateDT();
}

// weather API shenanigans
function updateWeather(){
    var refresh=1000*60*60; // Refresh rate in milli seconds
    setTimeout('getWeather()',refresh);
    // console.log("here");
}

async function getWeather() {
    await fetch("https://api.weatherapi.com/v1/current.json?key=11dadd99486740f6bfa30121252008&q=Sydney&aqi=no", {
        method: "POST",
        body: JSON.stringify ({
            // "location": {
            //     "name": "Sydney",
            //     "region": "New South Wales",
            //     "country": "Australia"
            // }
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(async function(response){
        const weather = await response.json();
        // console.log(weather);
        document.getElementById("textConditions").innerHTML = weather.current.temp_c + "°C - " + weather.current.condition.text + " - " + weather.current.precip_mm + "mm";
        document.getElementById("lastRefresh").innerHTML = "last refreshed " + weather.current.last_updated.slice(-5);
        if(!response.ok){
            throw new Error("login button displaying went wrong ;-;");
        };
    })
    updateWeather();
}