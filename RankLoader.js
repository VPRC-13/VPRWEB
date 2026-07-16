function GetLR(Text){
fetch("LowRanks.txt")
.then(function(Response) {
return Response.text();
})
.then(function(Text){
document.getElementById("LowRanks").innerHTML = Text;

});




}
GetLR();
