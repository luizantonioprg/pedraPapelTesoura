<?php

$howMany = readline("How many words?:");
$howManyToInt = intval($howMany);
$wordsArr = [];
for($i = 1;$i < $howManyToInt+1; $i++){


	$word = readline("Enter word ".$i." :");
	array_push($wordsArr, $word);
}

foreach($wordsArr as $word){

	$split = str_split($word);
	if(sizeof($split) > 10){
		
		for($i = 0;$i < sizeof($split); $i++){

			$last = sizeof($split) -1;
			$comp = sizeof($split) -2;

			echo $split[0].$comp.$split[$last]."\n";
			break;
		}





	}else{
		echo $word."\n";
	}
}