<!DOCTYPE html>
<html lang="en">
<head>
<style type="text/css">
tr{
    border-style: 1px black solid;
}

</style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    $tensp=[ "gucci", "nike", "addias"];
    $giasp=[ 100, 200 , 50];
    $nsx=[ "da nang", "ha noi", "hcm"]; 
    ?>

    <table>
    <thead>
    <tr>
        <th>STT</th>
        <th>Ten</th>
        <th>Gia</th>
        <th>nsx</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>1</td>
        <td><?php echo $tensp[0] ;?></td>
        <td><?php echo $giasp[0] ;?></td>
        <td><?php echo $nsx[0] ;?></td>
    </tr>
    <tr>
        <td>2</td>
        <td><?php echo $tensp[1] ;?></td>
        <td><?php echo $giasp[1] ;?></td>
        <td><?php echo $nsx[1] ;?></td>
    </tr>
    <tr>
        <td>3</td>
        <td><?php echo $tensp[2] ;?></td>
        <td><?php echo $giasp[2] ;?></td>
        <td><?php echo $nsx[2] ;?></td>
    </tr>
    </tbody>
    </table>
</body>
</html>