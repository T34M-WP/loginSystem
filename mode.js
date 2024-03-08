// เมื่อคลิกที่ปุ่มเปลี่ยนโหมด
document.getElementById("mode-toggle").addEventListener("click", function() {
    // เปลี่ยน body class จาก light-mode เป็น dark-mode หรือ ngượcกัน
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
    // บันทึกการเปลี่ยนโหมดไว้ใน local storage เพื่อเก็บค่าโหมดที่ผู้ใช้เลือกไว้
    var mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", mode);
    
    // เปลี่ยนไอคอนบนปุ่มตามโหมดที่ถูกเลือก
    var iconClass = mode === "dark" ? "fas fa-moon" : "fas fa-sun";
    document.getElementById("mode-toggle").innerHTML = '<i class="' + iconClass + '"></i>';
});

// ตรวจสอบว่ามีการบันทึกโหมดไว้ใน local storage หรือไม่
var savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    // ถ้ามีให้ใช้ dark mode
    document.body.classList.add("dark-mode");
    document.getElementById("mode-toggle").innerHTML = '<i class="fas fa-moon"></i>';
} else {
    // ถ้าไม่มีให้ใช้ light mode (default)
    document.body.classList.add("light-mode");
    document.getElementById("mode-toggle").innerHTML = '<i class="fas fa-sun"></i>';
}
