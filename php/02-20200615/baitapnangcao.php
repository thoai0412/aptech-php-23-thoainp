<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
//  "ten" , "gia" , "xuat su"
$tensp =[ "gucci", "nike" , "adidas"];
$giasp = [ 100 , 200 , 300 ];
$xuatxusp = ["VN" , "US", "CN"];
?>
<table>
<thead>
<tr>
    <th>STT</th>
    <th>tensp</th>
    <th>giasp</th>
    <th>xuatxusp</th>
</tr>
</thead>


<tbody>
    <?php for($i = 0; $i < count($tensp); $i++ ){?>
    <tr>
        <td><?php echo ($i + 1); ?></td>
        <td><?php echo $tensp[$i]; ?></td>
        <td><?php echo $giasp[$i]; ?></td>
        <td><?php echo $xuatxusp[$i]; ?></td>
    </tr>
    <?php } ?>
</tbody>
</table>
</body>
</html>