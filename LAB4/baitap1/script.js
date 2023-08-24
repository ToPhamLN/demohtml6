var ptb2 = new Object();
ptb2.a = null;
ptb2.b = null;
ptb2.c = null;
ptb2.nhap = function () {
    this.a = parseFloat(window.prompt("Nhập số a: "));
    this.b = parseFloat(window.prompt("Nhập số b: "));
    this.c = parseFloat(window.prompt("Nhập số c: "));

    if (isNaN(this.a) || isNaN(this.b) || isNaN(this.c)) {
        alert("Vui lòng chỉ nhập số, không nhập chữ!");
        return;
    }

    var str = this.a + "x<sup>2</sup> + " + this.b + "x + " + this.c + " = 0";
    document.getElementById("pt").innerHTML = str;
};
ptb2.giai = function () {
    var delta = this.b * this.b - 4 * this.a * this.c;
    var kq;
    if (delta < 0) {
        kq = "Phương trình vô nghiệm";
    } else if (delta == 0) {
        var x = -this.b / (2 * this.a);
        kq = "Phương trình có nghiệm là: " + x;
    } else {
        var x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
        var x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
        kq = "Phương trình có hai nghiệm phân biệt là: x1 = " + x1 + ", x2 = " + x2;
    }
    document.getElementById("kq").innerHTML = kq;
};