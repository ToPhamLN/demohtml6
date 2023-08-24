var dh = null;

function tg() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    document.getElementById("dongho").innerHTML = h + ":" + m + ":" + s;
}

function startstopDH() {
    if (dh == null) dh = setInterval("tg()", 1000);
    else {
        clearInterval(dh);
        dh = null;
    }
}

dh = setInterval("tg()", 1000);


setTimeout(function () {
    var hoTen = "Phạm Lê Nguyễn Tố";
    alert("Tôi là " + hoTen + ". Chào Bạn! Chúc an lành");
}, 10000);