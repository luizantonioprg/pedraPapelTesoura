<?php

$name = readline("Command: "); // le o enter no shell

	$arr = str_split($name);// transforma stringem arr
	$lenght_arr_one = sizeof($arr);


	$arr2 = (array_unique($arr)); // limpa caracteres repetidos
	$lenght_arr_two = sizeof($arr2);// mostra o length


	if($lenght_arr_two % 2 == 0){
		echo 'CHAT WITH HER!';

		
	}else{
		echo 'IGNORE HIM!';

		
	}
