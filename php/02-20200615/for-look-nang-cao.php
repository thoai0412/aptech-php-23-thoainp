<!DOCTYPE html>
<html lang="en">
<head>
<style>
th,tr, td{
    border-style: solid;
    border-width: 1px;
    border-color: green;
}

</style>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    


<?php
$products=[
    ["Bphone",
500,
"Vietnam"],

    ["iphone 12",
    1500.00,
    "Quang Chau, Trung quoc"
    ]
];
?>
<table>
<thead>
<tr>
<th>Ten</th>
<th>Gia</th>
<th>NSX</th>
</tr>
</thead>
<tbody>
    <?php 
    for($i = 0; $i <count($products); $i++){ ?>
    <tr>
    <?php  for($n=0; $n < count($products[$i]); $n++){ ?>
    <td><?php echo $products[$i][$n]; ?></td>
    <?php } ?>
    </tr>
    <?php } ?>
</tbody>
</table>



</body>
</html>