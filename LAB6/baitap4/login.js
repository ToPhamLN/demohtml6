function checklogin() {
    if (document.flogin.u.value == "") {
        alert("Bạn chưa nhập username");
        document.flogin.u.focus();
        return false;
    }
    if (document.flogin.p.value == "") {
        alert("Bạn chưa nhập mật khẩu");
        document.flogin.p.focus();
        return false;
    }
    return true;
}