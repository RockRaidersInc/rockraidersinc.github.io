function displayContentForEvent(event){
    document.title += " "+event.title;
    document.getElementById("title").innerHTML += event.title;
    document.getElementById("date").innerHTML += event.date;
    document.getElementById("time").innerHTML += event.time;
    document.getElementById("location").innerHTML += event.location;
    document.getElementById("description").innerHTML += event.description;
}

var urlParams = getQueryParams();
if(urlParams.event === undefined){
    window.location.replace("/pages/events.html");
}
else {
    runWithJSONDataOnPageLoad("/resources/data/events/"+urlParams.event+".json", displayContentForEvent);
}