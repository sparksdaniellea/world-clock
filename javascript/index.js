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

setInterval(updateTime, 1000);
