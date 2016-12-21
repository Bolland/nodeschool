#!/usr/bin/env bash

PS3="Choose"
select ITEM in option1 option2 option3
do 
	echo -n "Enter option name: " && read OPTION
	case $ITEM in 
	option1) echo "option1 $OPTION" ;;
	option2) echo "option2 $OPTION" ;;
	option3) echo "option3 $OPTION" ;;
	esac
break
done

