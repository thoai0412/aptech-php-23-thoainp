<?php
    abstract class dongvat{}

        public $chan = 4;

        abstract function run($chan);
        public function eat(){

        }
}

class concho extends dongvat{
    public function run($chan) {
        echo "chay bang 4 ban"
    }
}
class connguoi extends dongvat{
    public function run($chan){
        echo "chay bang 2 chan";
    }
}

$concho = new concho();
$concho->run();