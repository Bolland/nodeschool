#!/usr/bin/env bash

parameters=(${@:2:2})
parameters=(I am ${parameters[*]} and $4)
echo ${parameters[*]}
