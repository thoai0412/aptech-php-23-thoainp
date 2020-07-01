<?php
//tao ra khuon mau ten la con nguoi su dung tu khoa class
class ConNguoi
{
    public $name;

    function setName($name){
        $this->name = $name;

    }
    public function getName()
    {
        return $this->name;
    }
}
$binh = new ConNguoi();
echo $binh->name;

$tuan = new ConNguoi();
echo $tuan->name;

$tuan->setName('Van Con Hoc <br>');
echo $tuan->getName();


$binh->setName('Binh Ngu Gat <br>');
echo $binh->getName();
?>
