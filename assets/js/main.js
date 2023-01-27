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
  const queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
  
});	