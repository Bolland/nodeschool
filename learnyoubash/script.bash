#!/usr/bin/env bash

fruits[0]=Apple
fruits[1]=Pear
fruits[2]=Plum
echo ${fruits[*]:0:2} # Apple Pear
echo ${@:2:3} # slice of positional parameters
