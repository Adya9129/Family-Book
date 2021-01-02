var reasonlist=[
    "2.Rajani Kotturi",
    "3.Badri Garlapati"
];
var images=[
    "https://clipground.com/images/mother-clipart-cartoon-9.jpg",
    "https://cdn1.vectorstock.com/i/1000x1000/76/80/cartoon-dad-vector-10157680.jpg"
];
var i=0;
function nextslide(){
    if(i>2){i=0;}
    document.getElementById("FamilyNames").innerHTML=reasonlist[i];
    document.getElementById("images").src=images[i];
i++;
}