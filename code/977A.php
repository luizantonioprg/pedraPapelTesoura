<?php

$input  =readline("Enter");

$str = explode(" ", $input);


$n = $str[0];
$k = $str[1];


 $nToInt = intval($n);
 $kToInt = intval($k);





for($i = 0; $i < $k; $i++){
	$string = strval($nToInt);

	if(substr($string, -1) == "0"){
		$nToInt = $nToInt/10;

	}else{
		$nToInt--;

	}
}
echo $nToInt;
