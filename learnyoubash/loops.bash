#!/usr/bin/env bash

#Print all even numbers from param 1 to param 2
for ((i=$1; i<=$2; i++)); do
	if [[ $(($i % 2)) != 0 ]]; then continue; fi
	echo $i
done
