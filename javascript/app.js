console.log("hello world")

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=CRFy3PHJVIfBdRWsSbt92lLPiA4SoQuF";
var query = "&q=rainbow";

function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}

function gotData(giphy) {
    for (var i = 0; i < giphy.data.length; i++) {
        createImg(giphy.data[i].images.original.url);
    }
}

function draw() {

}