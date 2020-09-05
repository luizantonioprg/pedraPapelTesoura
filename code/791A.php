<?php
$inputArr = readline("Weight of Limak and the weight of Bob:");
$explode = explode(" ",$inputArr);
$years = 0;


$limak = intval($explode[0]); 
$bob = intval($explode[1]); 

while($limak <= $bob){
	$limak *= 3;
	$bob *= 2;

	$years++;

}
echo $years;


