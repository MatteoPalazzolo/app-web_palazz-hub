const FILE_PATH = "images";
const FILE_EXTENSION = "jpg";
const N = 24

const names = [
    "Ottavia Alvaro",
    "Roberto Bargero",
    "Ilaria Berlai",
    "Simone Bezzeccheri",
    "Matilde Capello",
    "Andrea Cerrato",
    "Gioele Contratto",
    "Ruben Cuttica",
    "Matteo D'Alise",
    "Asia Dorella",
    "Simone Franco",
    "Tommaso Giachetto",
    "Domenico Giubellini",
    "Alessandro Guglielmi",
    "Valeria Lombardi",
    "Giuseppe Maggio",
    "Roberto Monticone",
    "Ilaria Nigra",
    "Matteo Palazzolo",
    "Isabella Picchioldi",
    "Stefano Ricchiardi",
    "Anna Roncaglione",
    "Simone Ruffino",
    "Pietro Sapia"
];

const links = [
    "http://ottaviaalvaro.altervista.org/",
    "", /*Bargero*/
    "http://ilariaberlai.altervista.org/",
    "http://simonebezzeccheri.altervista.org/",
    "http://matildecapello.altervista.org/",
    "http://andreacerrato.altervista.org/",
    "http://gioelecontratto.altervista.org/",
    "http://rubencuttica.altervista.org/",
    "http://matteodalise.altervista.org/",
    "http://dorellaasia.altervista.org/",
    "http://simonefranco.altervista.org/",
    "http://ftp.tommasogiachettomena.altervista.org/",
    "http://giubellinidomenico.altervista.org/",
    "http://guglielmialessandro.altervista.org/index2.html",
    "http://valerialombardi.altervista.org/",
    "", /*Maggio*/
    "http://robertomonticone.altervista.org/",
    "http://ilarianigra.altervista.org/",
    "http://ftp.matteopalazzolo.altervista.org/",
    "http://isabellapicchioldi.altervista.org/",
    "http://stefanorichiardi.altervista.org/",
    "https://annaroncaglionetet.altervista.org",
    "http://simoneruffino.altervista.org/", /*Ruffino*/
    "http://pietrosapia.altervista.org/"
]

const recyclerView = document.getElementById("view");
for (var i = 0; i < N; i++) 
{
    recyclerView.appendChild(createFragment(i));
}

function createFragment(i) {
    //fragment
    var fragment = document.createDocumentFragment();

    //a
    var newA = document.createElement("a");
    newA.classList.add("item");
    newA.target = "blank";
    newA.href = links[i];

    //div
    var newDiv = document.createElement("div");

    //image
    var newImage = document.createElement("img");
    newImage.src = getPath(i+1)
    newDiv.appendChild(newImage);

    //h1
    var newText = document.createElement("h1");
    newText.innerHTML = names[i];
    newDiv.appendChild(newText);

    newA.appendChild(newDiv);
    fragment.appendChild(newA);
    return fragment;
}

function getPath(i) {
    var j = i;
    if (i.toString().length === 1) j = "0"+i;
    var path = FILE_PATH + "/" + j + "." + FILE_EXTENSION;
    return path;
}