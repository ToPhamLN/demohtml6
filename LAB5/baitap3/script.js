var flag = true;
var count = 0;

function mark(index) {
    var button = document.getElementsByTagName("button")[index];
    button.innerText = flag ? "X" : "O";
    button.style.background = flag ? "aqua" : "yellow";
    button.setAttribute("disabled", "true");
    flag = !flag;

    count++;
    if (count == 9) {
        alert("Game Over!");
        location.reload();
    }
}