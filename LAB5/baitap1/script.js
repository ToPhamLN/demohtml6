function hienThi() {
    var tensp = document.getElementById("ten").innerText;
    var soluongsp = document.getElementById("qty").value;
    var giasp = 1950;
    var tinhtien = giasp * soluongsp;
    console.log(tensp, soluongsp, tinhtien, giasp);

    document.getElementById("name").innerText = tensp;
    document.getElementById("amount").innerText = "$" + tinhtien;
};