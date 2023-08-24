function them(button) {
    button.classList.add("muted");
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.classList.add("unmuted");
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute("onclick", "xoa(this)");
    document.getElementById("cart").appendChild(row);
    document.getElementById("cart").style.display = "";
    document.getElementById("tong-wr").style.display = "";


    tinhtong();
}

function xoa(button) {
    var row = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhtong();
}

function tinhtong() {
    var cart = document.getElementById("cart");
    var row = cart.getElementsByTagName("tr");

    var tong = 0;
    for (var i = 0; i < row.length; i++) {
        var price = row[i].children[2].innerText;
        price = parseInt(price);
        tong += price;
    }
    document.getElementById("tong").innerHTML = tong;
}

function daott(obj) {
    var row = obj.parentElement.parentElement;
    var btn = row.getElementsByTagName("button")[0];
    btn.disabled = !btn.disabled;
}

document.getElementById("cart").style.display = "none";
document.getElementById("tong-wr").style.display = "none";


