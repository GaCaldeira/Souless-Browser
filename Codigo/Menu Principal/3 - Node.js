function redirectToContinue() {
    window.location.assign('./Continue/1 - Index.html');
}

function redirectToNewGame() {
    window.location.assign('./New Game/1 - Index.html'); 
}

document.getElementById("options").onclick = function() {
    window.location.href = "1 - Index.html";
};