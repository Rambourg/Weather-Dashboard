// store the value of the input
let city = $("#searchTerm").val();
// store api key
const apiKey = "9a60c250e08b4efa5dac2a0a39abe514";

let date = new Date();

$("#searchTerm").keypress(function(event) { 
    if (event.keyCode === 13) {
        event.preventDefault();
        $("#searchBtn").click();
        
    }

});
	
$("searchBtn").on("click", function() {
  $("#forecastH5").addClass("show");

  //get the value of the input from user
  city = $("#searchTerm").val();

  //clear input box
  $("#searchTerm").val("");

  //url to call API
  const queryUrl = "https://home.openweathermap.org/api_keys" + city + apiKey;

  $.ajax({
    URL: queryUrl, method:"GET"
  })
  .then(function (response) {
    console.log(response);
    console.log(response.name);
    console.log(response.weather[0].icon);

    let tempF = (response.main.temp -273.15) * 1.80 + 32;
    console.log(Math.floor(tempF));

    console.log(response.main.humidity);

    console.log(response.wind.speed);

    getCurrentConditions(response);
    getCurrentForecast(response);
    makeList();


    
  })

});	
//function to addClass to create a list item HTML
function makeList() {
  let listItem = $("<li>").addClass("list-group-item").text(city);
  $(".list").append(listItem);
};

//TO GET THE CURRENT WEATHER CONDITIONS
function getCurrentConditions (response) {
  let tempertureF = (response.main.temp -273.15) * 1.80 + 32,
  temperatureF = Math.floor(tempF),

  $("#currentCity").empty(),
};

//next lines is to set the content

const card =$("<div>").addClass("card");
const cardBody = $("<div>").addClass("cardBody");
const cities = $("<div>").addClass("card-title").text(response.name);
const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString("en-US"));
const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + "°F");
const humidity = $("<p>").addClass("card-text current humidity").text("Humidity: " + response.main.humidity + "%");


//to be added in the page append
city.append(cityDate,Image);
cardBody.append(city,temperature,humidity,wind);
card.append(cardBody);
$("#currentCity").append(card);

}

function getCurrentForecast() {
  $.ajax({
    URL: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey,
    method: "GET"
  }).then(function(response)){
    console.log(response);
    console.log(response.Date);
    $("#forecast").empty();
  }
}

//creating a variable to hold response.list
let result = response.list;
console.log(result);

for (let i = 0; i < result.length; i++) {
  let day = Number(result[i].date_txt.split("")[2].split("")[0]);
  let hour = result[i].date_txt.split("")[2].split("")[1];
  console.log(day);
  console.log(hour):
  
}