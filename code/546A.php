<?php

$inputArr = readline("Enter k,n and w:");
$explode = explode(" ",$inputArr);

$k = $explode[0];
$n = $explode[1];
$w = $explode[2];
$totalPrice = 0;


for($i = 1;$i <= $w;$i++){

	$totalPrice = $totalPrice + ($k * $i);

}

	$needToBorrow = $n - $totalPrice;

	if($needToBorrow < 0){
		echo $needToBorrow * (-1);
	}else{
		echo "0";
	}





