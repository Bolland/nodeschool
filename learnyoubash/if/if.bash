#!/usr/bin/env bash

#get current hour
HOUR=$(date +%H)

if [[ $HOUR -ge 0 && $HOUR -lt 12 ]]; then
echo "Good morning, it is $HOUR o'clock!"
elif [ $HOUR -ge 12 ] && [ $HOUR -lt 18 ]; then
echo "Good afternoon, it is $HOUR o'clock!"
elif [ $HOUR -ge 18 ] && [ $HOUR -lt 24 ]; then
echo "Good evening, it is $HOUR o'clock!"
else
echo "Error!"
fi
