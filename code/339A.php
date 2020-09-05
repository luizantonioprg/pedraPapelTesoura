<?php
$input = readline("Enter:");
$toArr = str_split($input);

foreach ($toArr as  $key=>$number) {
	if($number == "+"){
		unset($toArr[$key]);

	}
}
$reIndex = array_values($toArr);
sort($reIndex);

echo join("+",$reIndex);
