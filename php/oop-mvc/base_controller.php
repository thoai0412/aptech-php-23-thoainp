<?php
class BaseController
{
    protected $folder; // biến có giá trị là thư mực nào đó trong thư mục views, chứ các file view template của phần đang truy cập.
    // hàm hiển thị ra kết quả cho người dùng.
    function render($file, $data = array())
    {
        //kiểm tra file gọi đến có tồn tại hay không?
        $view_file = 'view/' . $this->folder . '/' . $file . 'php';
        if (is_file($view_file)) {
            // nếu tồn tại file đó thì tạo ra các biến chứa giá trị truyền vào lúc gọi hàm
            extract($data);
            // Sau đó lưu giá trị trả về khi chạy file view template với các dữ liệu đó vào 1 biến chứ chưa hiển thị luôn ra trình duyệt
        ob_start();
        require_once($view_file);
        $content = ob_get_clean();
        // sau khi có kết quả đã được lưu vào biến $content, gọi ra template chung của hệ thống để hiển thị ra cho người dùng
        require_once('views/layouts/application.php')
        } else {
            // Nếu file muốn gọi ra không tồn tại thì chuyển hướng đến trang báo lỗi
            header('Location: index.php?controller=pages&action=error');
        }
    }
}