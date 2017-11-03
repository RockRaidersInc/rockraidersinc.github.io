/*
EVENT OUTLINE JSON
Array of:
{
    "date":"",
    "title":"",
    "subtitle":"",
    "dataFile":""
}
OR
{}
For spacing row
*/

//Base url for event detail page. The specific event dataFile is appended to create the full target links
var baseEventUrl = "event_detail.html?event=";
function htmlForRow(event){
    if(event.title === undefined){ //Empty object, insert spacing row
        return "<div class='row'><div class='col-xs-12 spacer-row'></div></div>";
    }
    return ""+
"<div class='row'>"+
    "<div class='date-col col-xs-12 col-sm-3'>"+ event.date +"</div>"+
    "<div class='desc-col col-xs-12 col-sm'>"+
        "<div class='subtitle'>"+
            "<a class='event-title' href = '"+baseEventUrl+ event.dataFile +"'>"+ event.title +"</a>"+
            event.subtitle+
        "</div>"+
    "</div>"+
"</div>";
}
function htmlForEventList(list){
    if(list.length == 0) return "";
    else{
        var ret = "<h2>Major Upcoming Events:</h2><div class='container-fluid'>";
        for(i=0; i<list.length; ++i){
            ret += htmlForRow(list[i]);
        }
        ret += "</div>";

        return ret;
    }
}

//Use the data from the given JSON and the above function to fill the content div
addContentFromJSON("/resources/data/events/outline.json",htmlForEventList,"major-events-div");