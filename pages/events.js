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
var baseEventUrl = "/pages/event_detail.html?event=";
function htmlForRow(event){
    if(event.title === undefined){ //Empty object, insert spacing row
        return "<tr><td colspan=2 class='spacer-row'></td></tr>";
    }
    return ""+
"<tr>"+
    "<td class='date-col'>"+ event.date +"</td>"+
    "<td class='desc-col clearfix'>"+
        "<div class='subtitle'>"+
            "<a class='event-title' href = '"+baseEventUrl+ event.dataFile +"'>"+ event.title +"</a>"+
            event.subtitle+
        "</div>"+
    "</td>"+
"</tr>";
}
function htmlForEventList(list){
    if(list.length == 0) return "<div class='no-events'>No Upcoming Events</div>";
    else{
        var ret = "<table id='event-list'>";
        for(event of list){
            ret += htmlForRow(event);
        }
        ret += "</table>";

        return ret;
    }
}

//Use the data from the given JSON and the above function to fill the content div
addContentFromJSON("/resources/data/events/outline.json",htmlForEventList,"content");