<?php
//  "ten" , "gia" , "xuat su"
$tensp =[ "gucci", "nike" , "adidas"];
$giasp = [ 100 , 200 , 300 ];
$xuatxusp = ["VN" , "US", "CN"];
?>
 <table>
 <tr>
 <th>STT</th>
 <th>Ten</th>
 <th>Gia</th>
 <th>NSX</th>
 </tr>
 </table>
<tbody>
<?php for($i = 0; $i <= count($tensp); $i++ ); {?>
<tr>
    <td><?php echo ($i + 1 );?></td>
    <td><?php echo $tensp[$i];?></td>
    <td><?php echo $giasp[$i];?></td>
    <td><?php echo $xuatxusp[$i];?></td>
</tr>
<?php} ?>
</tbody>