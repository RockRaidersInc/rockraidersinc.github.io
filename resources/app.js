//Simple function to force links to open a new tab/window
function openLinkInNewWindow(link){
    window.open(link);
}

//Convenience function for making JSON requests
//Requests url and passes the parsed JSON response to onResponse
function getJSONData(url, onResponse){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        onResponse(JSON.parse(this.responseText))
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

/*
Code to load JSON concurrently with the page load
Triggers callback with parsed data after both the data and page are ready
*/

var pageHasLoaded = false;
var parsedResponses = [];
var readyWithDataCallbacks = [];
//Listener to support the functions below
window.addEventListener("load", function() {
    pageHasLoaded = true;
    for(i = 0; i < parsedResponses.length; ++i){
        if(parsedResponses[i] != null){ //Any already parsed data can get its callback now
            readyWithDataCallbacks[i](parsedResponses[i]);
        }
    }
})
//Requests JSON from url, and parses the response with parseResponse immediately on receiving
//Then, runs onReadyWithData with the parsed data as soon as it is available, or when the DOM
//loads, whichever comes first
function JSONRequestDuringLoad(url, parseResponse, onReadyWithData){
    var index = parsedResponses.length; //Index for the new request
    parsedResponses.push(null); //Put in null initially
    readyWithDataCallbacks.push(onReadyWithData);//Store callback for window event listener
    getJSONData(url, function(resp) {
        parsedResponses[index] = parseResponse(resp);
        if(pageHasLoaded){ //If the page has already loaded, we are good to go
            readyWithDataCallbacks[index](parsedResponses[index]);
        }
    });
}
// Convenience wrappers for common use cases of the above

//Requests the specified url, sends the response JSON to the parser, and adds the returned
//string to the innerHTML of the element with the target ID
function addContentFromJSON(url, parser, targetId){
    JSONRequestDuringLoad(url, parser, function(content) {
        document.getElementById(targetId).innerHTML += content;
    });
}
//Runs callback with the unmodified result of the JSON response, but guaranteed to run when
//the DOM is available
function runWithJSONDataOnPageLoad(url, callback){
    JSONRequestDuringLoad(url, function(it) {return it;}, callback);
}