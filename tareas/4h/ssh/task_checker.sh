#!/bin/bash

if [ $# -ne 1 ] ; then 
	echo "Format is check_tast taskfile.txt"; 
	exit -1; 
fi

echo -e "Further: ";
grep -En --color=auto " +### *" "$1";

echo -e "\nInvestigate:";
grep -Eno --color=auto '# ([[:alnum:]]+ )+#' "$1";

echo -e "\nImportant:";
grep -Eno --color=auto '\* ([[:alpha:]]+ )+\*' "$1" ;
