<?php

$kilos = readline("Enter w:");
$weight = intval($kilos);

$rand1 = $weight-1;
$rand2 = 1;


for($i = 0;$i <= $weight; $i++){
	$result = $rand1 + $rand2;
	if($result == $weight && $rand1 %2==0 && $rand2 %2==0){
		if($rand1 != 0 && $rand2 != 0){ 
			echo "YES";
			//echo $rand1;
			//echo $rand2;
			break;
		}else{
			if($i >= $weight){
				echo "NO";
			}else{
					$rand1--;
					$rand2++;	
			}
		}
	}else{
		if($i >= $weight){
			echo "NO";
		}else{
				$rand1--;
				$rand2++;	
		}
	}
	
}

				


		




