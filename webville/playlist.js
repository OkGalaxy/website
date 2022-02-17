var button = document.getElementById("addButton");
function handleButtonClick() {
    alert("Button was clicked!");
}
window.onload = init;
function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}
function handleButtonClick() {
    alert("Button was clicked!");
}
function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    if (songName == "") {
        alert("Adding " + songName);
    } else {
        alert("Adding " + songName);
    }
}

        