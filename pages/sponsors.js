function htmlForSponsor(sponsor){
    return ""+
"<div class='sponsor_container'>"+
    "<a href='"+ sponsor.url +"'>"+
        "<img src='"+ sponsor.img +"' title='"+ sponsor.name +"'/>"+
    "</a>"+
"</div>";
}

var sponsor_img_prefix = "/resources/img/sponsors/";

function htmlForSponsorList(list){
    var content = "";
    for(obj of list){
        obj.img = sponsor_img_prefix + obj.img; //Add prefix to img reference
        content+=htmlForSponsor(obj);
    }
    return content;
}

addContentFromJSON("/data/sponsors/sponsors.json", htmlForSponsorList, "content");

