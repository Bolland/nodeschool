#!/usr/bin/env bash

case "$1" in
       (apple)
         echo 'Mmmmh... I like apple!'
         ;;
       (banana)
         echo 'Hm, a bit awry, no?'
         ;;
       (orange|tangerine)
         echo "I don't like it!" && exit 1
       ;;
       (*)
         echo "Unknown fruit - sure it isn't toxic?"
       ;;
     esac
