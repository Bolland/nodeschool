#!/bin/bash

echo "debugging disabled"
    for (( i = 0; i < 3; i++ )); do
      echo $i
    done


set -x
echo "debugging enabled"
  for (( i = 0; i < 3; i++ )); do
    echo $i
  done

set +x
echo "debugging disabled"
