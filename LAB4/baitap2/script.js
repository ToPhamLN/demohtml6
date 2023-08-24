var sv = new Object();
sv.hoTen = prompt("Họ và tên: ");
sv.diem = prompt("Điểm: ");

sv.hienThi = function () {
    if (this.diem >= 5) this.hocLuc = "Đậu"; else this.hocLuc = "Rớt";
    var result = "<p>Họ và tên: " + this.hoTen + " </p>";
    result += "<p>Điểm TB: " + this.diem + " </p>";
    result += "<p>Học lực: " + this.hocLuc + " </p>";
    console.log(this.hoTen, this.diem, this.hocLuc);
    document.getElementById("kq").innerHTML = result;
}