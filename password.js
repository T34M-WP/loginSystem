function togglePasswordField() {
    var passwordField = document.getElementById("passwordField");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        // เปลี่ยนข้อความบนลิงก์เป็น "Hide" เมื่อรหัสถูกแสดง
        document.querySelector(".show-password").innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {
        passwordField.type = "password";
        // เปลี่ยนข้อความบนลิงก์เป็น "Show" เมื่อรหัสถูกซ่อน
        document.querySelector(".show-password").innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}


