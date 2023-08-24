var w;

function moWin() {
    w = window.open("thongtin.html", "tt", "width=400, height=200, top-50, left=600");
    w.focus();
}

function dongWin() {
    w = close;
    w.focus();
}
function dichuyen1Win() {
    w.moveBy(5, 10)
    w.focus();
}

function dichuyen2Win() {
    var x = prompt("Nhập x: ");
    var y = prompt("Nhập y: ");
    w.moveTo(x, y);
    w.focus();
}

function inAnWin() {
    w.print();
    w.focus();
}