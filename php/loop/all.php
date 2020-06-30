<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<body>
<?php
// bai tap 1
for($i =1; $i <=10; $i++){
    echo "em hua se lam bai tap day du <br />";
}
?>
<!-- bai tap 2 -->
<?php 
$a = 1;
$e = 6;
while ($a <= $e){
    $result .= str_repeat("*",$a ) . "<br />";
    $a++ ;
}
echo $result;

?>
<!-- bai tap 3 -->
<?php 
$u = 6;
while ($u >= 1){
    $result .= str_repeat("*",$u ) . "<br />";
    $u--;
}
echo $result;
?>
<?php
$p = 1;
do{
    echo "xin dung khoc <br />";
    $p++;
} while($p <=20);
?>

<?php
$i =1;
do{
    echo '<img src="images/nature-0'. $i.'.jpg" />';
    $flagShow = 0;
    if (isset($_GET["show"])){
        $flagShow = $_GET["show"];
        $i++;
    }
}while($i <=4 && $flagShow ==1);
?>

<?php
$n=0;
for ($i=1; $i <= 100; $i++){
    if($n < 3)  {
        if($i % 8 == 0) {
            echo $i . "<br />";
            $n++;
        }
    } else{
        break;
    }
}

?>
<?php
    for($i = 0; $i <= 10; $i++){
       if ($i==3 || $i == 8) continue;
       echo $i . "<br />" ;
    }
?>
<?php 
    $a = "Bien a";
    $b = 'Bien b';
    echo "gia tri cua a: $a <br />";
    echo 'gia tri cua b: $b';
?>



<?php
// x, y
// 3x + 10y =100 (y <=9, x <=30)
// x + y =17
// x =1 y Chay : 3x + 10y && x + y = 17
for ($x = 1; $x <= 30; $x++){
    for($y =  1; $y <= 9; y++){
        if(3*$x + 10*$y == 100 && $x + $y == 17){
            echo "$x người yêu nhau, $y người ghét nhau";
        }
    }
}
?>
</body>
</html>