<?php
$name = htmlspecialchars($_POST['name']);
$message = htmlspecialchars($_POST['message']);

$data = "ชื่อ: $name\nข้อความ: $message\n----------------------\n";

// บันทึกลงไฟล์ messages.txt
file_put_contents("messages.txt", $data, FILE_APPEND);

echo "ส่งข้อความเรียบร้อยแล้ว 💗<br><a href='index.html'>กลับหน้าเว็บ</a>";
?>