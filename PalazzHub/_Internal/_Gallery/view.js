const FILE_PATH = "_Images";
const FILE_EXTENSION = "png";
const N = 6

var recyclerView = document.getElementById("view");
for (var i = 1; i < N+1; i++) 
{
    var newImage = document.createElement("img");
    
    var path = FILE_PATH + "/" + i + "." + FILE_EXTENSION;
    newImage.src = path;
    recyclerView.appendChild(newImage);
}