#!/usr/bin/env bash

my_func ()
{
	if [[ $1 -lt $2 ]]; then
		if [[ $(($1 % 2)) == 0 ]]; then
			for (( j=0; j<$(( $3 / 2 )); j++ )); do
				#$z=$(( $z + 1 ))
				echo -n " "
#				echo "loop"
			done
			echo $1
		fi
		my_func $(( $1 + 1)) $2 $(( $3 + 1 ))
		fi
	return 0
}


main () {
	echo $FUNCNAME
	my_func $1 $2 2 #call my_func
	return 0
}

main $1 $2
