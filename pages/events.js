var htmlNoEvents = "<div class='no-events'>No Upcoming Events</div>";
var baseEventUrl = "/pages/event_detail.html?event=";

/*
EVENT OUTLINE JSON
{
    "date":"",
    "title":"",
    "subtitle":"",
    "dataFile":""
}
*/

function htmlForRow(event){
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
    if(list.length == 0) return htmlNoEvents;
    else{
        var ret = "<table id='event-list'>";
        for(event of list){
            ret += htmlForRow(event);
        }
        ret += "</table>";

        return ret;
    }
}

addContentFromJSON("/data/events/outline.json",htmlForEventList,"content");