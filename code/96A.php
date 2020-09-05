<?php

$input = readline("Enter");


if(strpos($input,"0000000") !== false || strpos($input,"1111111") !== false){
    echo "YES";
}else{
	echo "NO";
}




