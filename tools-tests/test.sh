#!/bin/bash


for i in $@; do 
	VAR=$i" "`dig +short $i`; 
	echo $VAR; 
done	
