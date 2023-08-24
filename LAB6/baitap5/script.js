function randomNumbers() {
    var min = 1;
    var max = 10;
    var num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    var num2 = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("soA").value = num1;
    document.getElementById("soB").value = num2;
}

function kiemTraDapAn() {
    var soA = parseInt(document.getElementById("soA").value);
    var soB = parseInt(document.getElementById("soB").value);
    var dapAn = parseInt(document.getElementById("dapAn").value);

    if (dapAn === soA + soB) {
        document.getElementById("ketQua").innerHTML = "GIỎI QUÁ BÉ ƠI";
    } else {
        document.getElementById("ketQua").innerHTML = "SAI RỒI BÉ IU. Đáp án đúng là: " + (soA + soB);
    }
}

window.onload = randomNumbers;