function openLinkInNewWindow(link){
    window.open(link);
}

function getJSONData(url, onResponse){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        onResponse(JSON.parse(this.responseText))
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// Code to load JSON concurrently with the page load
// Triggers callback with parsed data after both the data and page are ready

var pageHasLoaded = false;
var parsedResponses = [];
var readyWithDataCallbacks = [];
window.addEventListener("load", function() {
    pageHasLoaded = true;
    for(i = 0; i < parsedResponses.length; ++i){
        if(parsedResponses[i] != null){
            readyWithDataCallbacks[i](parsedResponses[i]);
        }
    }
})
function JSONRequestDuringLoad(url, parseResponse, onReadyWithData){
    var index = parsedResponses.length;
    parsedResponses.push(null);
    readyWithDataCallbacks.push(onReadyWithData);
    getJSONData(url, function(resp) {
        parsedResponses[index] = parseResponse(resp);
        if(pageHasLoaded){
            readyWithDataCallbacks[index](parsedResponses[index]);
        }
    });
}

function addContentFromJSON(url, parser, targetId){
    JSONRequestDuringLoad(url, parser, function(content) {
        document.getElementById(targetId).innerHTML += content;
    });
}