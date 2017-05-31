function htmlForSponsor(sponsor){
    return ""+
"<div class='sponsor_container'>"+
    "<a href='"+ sponsor.url +"' title='"+ sponsor.name +"' style='background-image:url(\""+ sponsor.img +"\")'/>"+
"</div>";
}

//Path prefix for all sponsor image names
var sponsor_img_prefix = "/resources/img/sponsors/";

function htmlForSponsorList(list){
    var content = "";
    for(i = 0; i < list.length; ++i){
        obj = list[i];
        obj.img = sponsor_img_prefix + obj.img; //Add prefix to img reference
        content+=htmlForSponsor(obj);
    }
    return content;
}

//Use the data from the given JSON and the above function to fill the content div
addContentFromJSON("/resources/data/sponsors/sponsors.json", htmlForSponsorList, "content");