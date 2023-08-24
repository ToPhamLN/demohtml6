function tinhtien() {
    var nguoilon_arr = document.getElementsByClassName("nl");
    var treem_arr = document.getElementsByClassName("te");
    var sotien_arr = document.getElementsByClassName("tien");
    var tongnguoilon = 0, tongtreem = 0, tongtien = 0;
    for (var i = 0; i < nguoilon_arr.length; i++) {
        var songuoilon = nguoilon_arr[i].innerText;
        var sotreem = treem_arr[i].innerText;
        songuoilon = parseInt(songuoilon);
        sotreem = parseInt(sotreem);

        tongnguoilon += songuoilon;
        tongtreem += sotreem;

        t = songuoilon * 1000000 + sotreem * 600000;
        tongtien += t;

        var nf = new Intl.NumberFormat();
        t = nf.format(t);
        // tongtien = nf.format(tongtien);
        sotien_arr[i].innerText = t;
    }

    document.getElementById("tongnl").innerText = tongnguoilon;
    document.getElementById("tongte").innerText = tongtreem;
    document.getElementById("tongtien").innerText = tongtien;
}

function tien(obj) {
    var row = obj.parentNode;
    sonl = row.children[1].innerText;
    sote = row.children[2].innerText;
    t = sonl * 1000000 + sote * 600000;
    var nf = new Intl.NumberFormat();
    t = nf.format(t);
    row.children[3].innerText = t;

}

function anhien() {
    var row_arr = document.getElementsByClassName("row");
    for (var i = i; i < row_arr.length - 1; i++) {
        if (row_arr[i].computedStyleMap.display == "none") row_arr[i].computedStyleMap.display = "";
        else row_arr[i].style.display = "none";
    }
}

var dh = null;

function tg() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    document.getElementById("ngay").innerHTML = h + ":" + m + ":" + s;
}

dh = setInterval("tg()", 1000);