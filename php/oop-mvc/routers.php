<?php
$controllers = arry(
    'pages' => ['home', 'error']
); // các controllers trong hệ thống và các action có thể gọi ra từ controller đó.
// Nếu các tham số nhận được từ url không hợp lệ (không thuộc list controller và action có thể gọi)
// thì trang báo lỗi sẽ được gọi ra.
if (!array_key_exists($controller, $controllers) || !in_array($action, $controllers[$controller])) {
    $controller = 'pages';
    $action = 'error';
}
// nhúng file định nghĩa controller vào để có thể dùng được class định nghĩa trong file
include_once('controllers/' . $controller . '_controller.php');
// tạo ra tên controller class từ các giá trị lấy được từ url gọi ra để hiển thị
$klass = str_replace('_', '', ucwords($controller, '_')) . 'Controller';
$controller = new $klass;
$controller->$action();
