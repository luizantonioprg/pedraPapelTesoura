<?php

$inputArr = readline("Enter k and n:");
$explode = explode(" ",$inputArr);

$secondInput = readline("Enter points:");
$secondExplode =explode(" ",$secondInput);

$k = $explode[1];
$n = $explode[0];
$approved = 0;






foreach($secondExplode as $key=>$score){
		if($key == $k-1){
			$reference =  $score;

		}	
}

foreach($secondExplode as $score){

		if($score >= $reference && $score != 0){
			$approved++;

		}
}

 echo $approved;