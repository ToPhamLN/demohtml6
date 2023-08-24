function check() {
    arr = document.getElementsByName("me");
    var kq = document.getElementById("ketqua");
    for (i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            var v = arr[i].value;
            var chu = document.createTextNode(v);
            var tagp = document.createElement("p");
            tagp.appendChild(chu);
            kq.appendChild(tagp);
        }
        dem++;
    }
}

var dem = 0;
kq.innerHTML = "";

if (dem > 0) {
    kq.className = "abc"
} else {
    kq.innerHTML = "Bạn chưa chọn mục nào";
    kq.className = "xyz";
}