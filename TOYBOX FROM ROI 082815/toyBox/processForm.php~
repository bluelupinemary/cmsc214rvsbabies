<?php	
                $variables = explode(",",$_POST['vardec']);
		$RDUCKY = [];
		$NUMBLK = [];
		$LETBLK = [];
		$MBOX = [];

		foreach($variables as $var) {
			$info = explode("_",$var);
			if(strcmp($info[0],"rducky")==0) {
				$RDUCKY[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"numblk")==0) {
				$NUMBLK[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"letblk")==0) {
				$LETBLK[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"mbox")==0) {
				$MBOX[$info[1]] = $info[2];
			}
		}

		$fvariables = explode(",",$_POST['funcdec']);
		$FRDUCKY = [];
		$FNUMBLK = [];
		$FLETBLK = [];
		$FMBOX = [];

		foreach($fvariables as $fvar) {
			$info = explode("_",$fvar);
			if(strcmp($info[0],"rducky")==0) {
				$FRDUCKY[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"numblk")==0) {
				$FNUMBLK[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"letblk")==0) {
				$FLETBLK[$info[1]] = $info[2];
			}
			else if(strcmp($info[0],"mbox")==0) {
				$FMBOX[$info[1]] = $info[2];
			}
		}

		echo "OPENBOX\n\n";
              
		foreach($RDUCKY as $key=>$value) {
			if(empty($value) || $value == " ") {
				echo "RDUCKY ".$key."#\n";
			}
			else {
				echo "RDUCKY ".$key." AS ".$value."#\n";
			}
		}

		
		foreach($NUMBLK as $key=>$value) {
			if(empty($value) || $value == " ") {
				echo "NUMBLK ".$key."#\n";
			}
			else {
				echo "NUMBLK ".$key." AS ".$value."#\n";
			}
		}

		foreach($LETBLK as $key=>$value) {
			if(empty($value) || $value == " ") {
				echo "LETBLK ".$key."#\n";
			}
			else {
				echo "LETBLK ".$key." AS ".$value."#\n";
			}
		}


		foreach($MBOX as $key=>$value) {
			if(empty($value) || $value == " ") {
				echo "MBOX ".$key."#\n";
			}
			else {
				echo "MBOX ".$key." AS ".$value."#\n";
			}
		}
		
		$hh = explode(",",$_POST['maincode']);	
		$showState = 0;
		$varCount = 0;
		foreach($hh as $hhtok) {
			if(preg_match('~hoola~',$hhtok)) {
				echo "HOOLA ";
			}
			else if(preg_match('~hoop~',$hhtok)) {
				echo " HOOP\n";
			}
			else if(preg_match('~mbopen~',$hhtok)) {
				echo "MATCHBOARD [\n";
			}
			else if(preg_match('~semicolon~',$hhtok)) {
				echo ":\n";
			}
			else if(preg_match('~mbclose~',$hhtok)) {
				echo "\n]\n";
			}
			else if(preg_match('~hole~',$hhtok)) {
				echo "HOLE ";
			}
			else if(preg_match('~opare~',$hhtok)) {
				echo " ( ";
			}
			else if(preg_match('~cpare~',$hhtok)) {
				echo " ) ";
			}
			else if(preg_match('~comma~',$hhtok)) {
				echo ",";
			}
			else if(preg_match('~exclpt~',$hhtok)) {
				echo " !\n";
			}
			else if(preg_match('~collect~',$hhtok)) {
				echo "COLLECT ";
			}
			else if(preg_match('~show~',$hhtok)) {
				if($showState == 0) {
					echo "SHOW ";
					$showState = 1;
				}
			}
			else if(preg_match('~give~',$hhtok)) {			
				echo "GIVE ";
			}
			else if(preg_match('~findpm~',$hhtok)) {
				echo "FIND_PLAYMATE ";
			}
			else if(preg_match('~lthop~',$hhtok)) {
				echo " SMALLER_THAN ";
			}
			else if(preg_match('~gtop~',$hhtok)) {
				echo " BIGGER_THAN ";
			}
			else if(preg_match('~lteop~',$hhtok)) {
				echo " AS_SMALL_AS ";
			}
			else if(preg_match('~gteop~',$hhtok)) {
				echo " AS_BIG_AS ";
			}
			else if(preg_match('~equop~',$hhtok)) {
				echo " THE_SAME_AS ";
			}
			else if(preg_match('~neqop~',$hhtok)) {
				echo " NOT_THE_SAME_AS ";
			}
			else if(preg_match('~plusop~',$hhtok)) {
				echo " + ";
			}
			else if(preg_match('~minusop~',$hhtok)) {
				echo " - ";
			}
			else if(preg_match('~multop~',$hhtok)) {
				echo " * ";
			}
			else if(preg_match('~divop~',$hhtok)) {
				echo " / ";
			}
			else if(preg_match('~modop~',$hhtok)) {
				echo " % ";
			}
			else if(preg_match('~andop~',$hhtok)) {
				echo " AND ";
			}
			else if(preg_match('~orop~',$hhtok)) {
				echo " OR ";
			}
			else if(preg_match('~notop~',$hhtok)) {
				echo " NOT ";
			}
			else if(preg_match('~asop~',$hhtok)) {
				echo " AS ";
			}
			else if(preg_match('~letters~',$hhtok)) {
				$val = explode("_",$hhtok);
				if($showState == 1) {
					if($varCount == 0) {
						echo $val[2];
					}
					else {
						echo ",".$val[2];
					}
					$varCount++;
				}
				else {
					echo $val[2]." ";
				}
				
			}
			else if(preg_match('~numbers~',$hhtok)) {
				$val = explode("_",$hhtok);
				if($showState == 1) {
					if($varCount == 0) {
						echo $val[2];
					}
					else {
						echo ",".$val[2];
					}
					$varCount++;
				}
				else {
					echo $val[2]." ";
				}	
			}
			else if(preg_match('~pound~',$hhtok)) {
				if($showState == 1) {
					$showState = 0;
					$varCount = 0;
				}
				echo "#\n";	
			}
			else {
				if($showState == 1) {
					if($varCount == 0) {
						echo $hhtok;
					}
					else {
						echo ",".$hhtok;
					}
					$varCount++;
				}
				else {
					echo $hhtok." ";
				}
			}
			
		}

		$hh = explode(",",$_POST['functsection']);	
		$showState = 0;
		$varCount = 0;
		$declare = 0;
		foreach($hh as $hhtok) {
			if(preg_match('~hoola~',$hhtok)) {
				echo "HOOLA ";
			}
			else if(preg_match('~hoop~',$hhtok)) {
				echo " HOOP\n";
			}
			else if(preg_match('~mbopen~',$hhtok)) {
				echo "MATCHBOARD [\n";
			}
			else if(preg_match('~semicolon~',$hhtok)) {
				echo ":\n";
				if($declare == 1) {
						foreach($FRDUCKY as $key=>$value) {
							if(empty($value) || $value == " ") {
								echo "RDUCKY ".$key."#\n";
							}
							else {
								echo "RDUCKY ".$key." AS ".$value."#\n";
							}
						}

		
						foreach($FNUMBLK as $key=>$value) {
							if(empty($value) || $value == " ") {
								echo "NUMBLK ".$key."#\n";
							}
							else {
								echo "NUMBLK ".$key." AS ".$value."#\n";
							}
						}

						foreach($FLETBLK as $key=>$value) {
							if(empty($value) || $value == " ") {
								echo "LETBLK ".$key."#\n";
							}
							else {
								echo "LETBLK ".$key." AS ".$value."#\n";
							}
						}


						foreach($FMBOX as $key=>$value) {
							if(empty($value) || $value == " ") {
								echo "MBOX ".$key."#\n";
							}
							else {
								echo "MBOX ".$key." AS ".$value."#\n";
							}
						}
						$declare = 0;
					}
			}
			else if(preg_match('~mbclose~',$hhtok)) {
				echo "\n]\n";
			}
			else if(preg_match('~hole~',$hhtok)) {
				echo "HOLE ";
			}
			else if(preg_match('~opare~',$hhtok)) {
				echo " ( ";
			}
			else if(preg_match('~cpare~',$hhtok)) {
				echo " ) ";
			}
			else if(preg_match('~comma~',$hhtok)) {
				echo ",";
			}
			else if(preg_match('~exclpt~',$hhtok)) {
				echo " !\n";
			}
			else if(preg_match('~collect~',$hhtok)) {
				echo "COLLECT ";
			}
			else if(preg_match('~show~',$hhtok)) {
				if($showState == 0) {
					echo "SHOW ";
					$showState = 1;
				}
			}
			else if(preg_match('~give~',$hhtok)) {
				echo "GIVE ";
			}
			else if(preg_match('~ppopen~',$hhtok)) {
				echo "\nOPEN_PLAYPEN ";
			}
			else if(preg_match('~ppclose~',$hhtok)) {
				echo "\nCLOSE_PLAYPEN\n";
			}
			else if(preg_match('~returnpm~',$hhtok)) {
				echo "RETURN_TO_PLAYMATE ";
			}
			else if(preg_match('~findpm~',$hhtok)) {
				echo "FIND_PLAYMATE ";
			}
			else if(preg_match('~lthop~',$hhtok)) {
				echo " SMALLER_THAN ";
			}
			else if(preg_match('~gtop~',$hhtok)) {
				echo " BIGGER_THAN ";
			}
			else if(preg_match('~lteop~',$hhtok)) {
				echo " AS_SMALL_AS ";
			}
			else if(preg_match('~gteop~',$hhtok)) {
				echo " AS_BIG_AS ";
			}
			else if(preg_match('~equop~',$hhtok)) {
				echo " THE_SAME_AS ";
			}
			else if(preg_match('~neqop~',$hhtok)) {
				echo " NOT_THE_SAME_AS ";
			}
			else if(preg_match('~plusop~',$hhtok)) {
				echo " + ";
			}
			else if(preg_match('~minusop~',$hhtok)) {
				echo " - ";
			}
			else if(preg_match('~multop~',$hhtok)) {
				echo " * ";
			}
			else if(preg_match('~divop~',$hhtok)) {
				echo " / ";
			}
			else if(preg_match('~modop~',$hhtok)) {
				echo " % ";
			}
			else if(preg_match('~andop~',$hhtok)) {
				echo " AND ";
			}
			else if(preg_match('~orop~',$hhtok)) {
				echo " OR ";
			}
			else if(preg_match('~notop~',$hhtok)) {
				echo " NOT ";
			}
			else if(preg_match('~asop~',$hhtok)) {
				echo " AS ";
			}
			else if(preg_match('~letters~',$hhtok)) {
				$val = explode("_",$hhtok);
				if($showState == 1) {
					if($varCount == 0) {
						echo $val[2];
					}
					else {
						echo ",".$val[2];
					}
					$varCount++;
				}
				else {
					if($declare == 0) {
						$declare = 1;
					}
					echo $val[2]." ";
				}	
			}
			else if(preg_match('~numbers~',$hhtok)) {
				$val = explode("_",$hhtok);
				if($showState == 1) {
					if($varCount == 0) {
						echo $val[2];
					}
					else {
						echo ",".$val[2];
					}
					$varCount++;
				}
				else {
					echo $val[2]." ";
				}
				
				
			}
			else if(preg_match('~pound~',$hhtok)) {
				if($showState == 1) {
					$showState = 0;
					$varCount = 0;
				}
				echo "#\n";	
			}
			else {
				if($showState == 1) {
					if($varCount == 0) {
						echo $hhtok;
					}
					else {
						echo ",".$hhtok;
					}
					$varCount++;
				}
				else {
					echo $hhtok." ";
				}
			}
			
		}
		
		echo "\n";
		echo "CLOSEBOX";
?>

