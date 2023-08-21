function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = document.querySelector("#new-york-date");
    let newYorkTimeElement = document.querySelector("#new-york-time");
    newYorkDateElement.innerHTML = moment().format("dddd, MMMM DD, YYYY");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("h:mm:ss A");
  }

  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = document.querySelector("#johannesburg-date");
    let johannesburgTimeElement = document.querySelector("#johannesburg-time");
    johannesburgDateElement.innerHTML = moment().format("dddd, MMMM DD, YYYY");
    johannesburgTimeElement.innerHTML = moment()
      .tz("Africa/Johannesburg")
      .format("h:mm:ss A");
  }

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = document.querySelector("#tokyo-date");
    let tokyoTimeElement = document.querySelector("#tokyo-time");
    tokyoDateElement.innerHTML = moment().format("dddd, MMMM DD, YYYY");
    tokyoTimeElement.innerHTML = moment().tz("Asia/Tokyo").format("h:mm:ss A");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = document.querySelector("#paris-date");
    let parisTimeElement = document.querySelector("#paris-time");
    parisDateElement.innerHTML = moment().format("dddd, MMMM DD, YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss A");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = document.querySelector("#sydney-date");
    let sydneyTimeElement = document.querySelector("#sydney-time");
    sydneyDateElement.innerHTML = moment().format("dddd, MMMM DD, YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss A");
  }
}

function changeCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("dddd, MMMM DD, YYYY");
  let cityTime = moment().tz(cityTimeZone).format("h:mm A");
  let changeCityElement = document.querySelector("#cities");
  changeCityElement.innerHTML = `<div  class="city"> 
  <div> <h2>${cityName}</h2> 
  <div class="date">${cityDate}</div>
  </div> 
  <div class="time">${cityTime}</div>
   </div>
   </br>
  <a href="https://danielle-world-clock.netlify.app">👈 Show All Cities</a>    </div>
`;
}

let selectElement = document.querySelector("#select");
selectElement.addEventListener("change", changeCity);
setInterval(updateTime, 1000);
setInterval(changeCity, 1000);
