var sponsor_data =
[
    {
        name: "CATS",
        url: "http://www.cats.rpi.edu/",
        img: "cats.png"
    },
    {
        name: "Dell",
        url: "http://www.dell.com/en-us/",
        img: "dell.png"
    },
    {
        name: "Grainger",
        url: "https://fconline.foundationcenter.org/grantmaker-profile?key=GRAI002",
        img: "grainger.png"
    },
    {
        name: "LRIG",
        url: "http://www.lrig.org/chapters/upstate-new-york",
        img: "lrig.jpg"
    },
    {
        name: "NY Star",
        url: "https://esd.ny.gov/nystar/",
        img: "nystar.jpg"
    },
    {
        name: "Rensselaer Polytechnic Institute",
        url: "http://www.rpi.edu",
        img: "rpi.jpg"
    },
    {
        name: "JH Bennett",
        url: "http://www.jhbennett.com/",
        img: "jhb.png"
    },
    {
        name: "Harting",
        url: "http://www.harting-usa.com/home/",
        img: "harting.jpg"
    }
];
var sponsor_img_prefix = "/resources/img/sponsors/";

function htmlForSponsor(sponsor){
    return ""+
"<div class='sponsor_container'>"+
    "<a href='"+ sponsor.url +"'>"+
        "<img src='"+ sponsor.img +"' title='"+ sponsor.name +"'/>"+
    "</a>"+
"</div>";
}

sponsor_data.forEach(function(obj){
    obj.img = sponsor_img_prefix + obj.img; //Add prefix to img reference
    document.write(htmlForSponsor(obj));
});