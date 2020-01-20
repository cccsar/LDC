#!/bin/bash

# First assumming input is ok
# Only tests using ICMP ping along with (this is not good) grep.

# Check how to implement this using parallel processes
# Check how to test for connection first with default gateway, second wit 1.1.1.1


if [ $# -eq 0 ] ; then 
	echo -e "myHD:\nNo argumets supplied"; 
	exit -1; 
fi

OUTFILE="scan_log.log"
TEMPFILE="temp.txt"


######	 PREPARATION

if [ ! -e $TEMPFILE ] ; then 
	touch $TEMPFILE;
else  
	echo -e "myHD:\n$TEMPFILE exists. Ending execution";
	exit -2; 
fi

if [ ! -e $OUTFILE ] ; then 
	touch $OUTFILE; 
	echo -e "Hosts up: " >> $OUTFILE; 
else
	echo -e "myHD:\n$OUTFILE exists. Ending execution"; 
	exit -3; 
fi 


######	BEGGINNING

for i in $@; do 
	ping -q -c 3 -w 1 $i > $TEMPFILE; 
	
	CURRENT=`grep -c "0 received" $TEMPFILE`;
	if [ "$CURRENT" -ne 1 ]; then 
		echo -e "$i" >> $OUTFILE;
	fi

	#If interrupted anywhere this loop, it leaves the created files
done

######	 TERMINATION
rm $TEMPFILE; 

if [ "`wc -l $OUTFILE | cut -d " " -f 1`" -eq  1 ] ; then
	rm $OUTFILE; 
	echo -e "myHD:\nNo hosts up "; 
	exit -4; 
fi

exit 0 ;
