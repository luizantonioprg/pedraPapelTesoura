<?php 
$year = readline("Enter:");
$yearInt = intval($year);



for($i = 0;$i < 9000;$i++){
	$yearInt++;
	
	$arr  = array_map('intval', str_split($yearInt));// transforma int em array
	$arrUnique = array_unique($arr);


	if($arr == $arrUnique){
		echo $yearInt;
		break;
	}
}

	
	



