const urlParams = new URLSearchParams(window.location.search);
const mode = urlParams.get('mode');
const inputData = urlParams.get('inputdata');

let deeplinkURL = "";
if(inputData)
{
    deeplinkURL = "spaceardl://tkobro?" + mode + "&" + inputData;
}
else
{
    deeplinkURL = "spaceardl://tkobro?" + mode;
}

var projtitle = document.getElementById("input-project-title");

document.getElementById("custom-query-button").onclick = function() {
    console.log(deeplinkURL);
    this.href = deeplinkURL;
};

