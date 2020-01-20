#!/bin/bash


nmap -PS -iL ./ldc_hosts.txt -oN test_ldc_hosts.nmp
nmap -PS -iL ./ldc_serv.txt -oN test_ldc_serv.nmp
nmap -PS -iL ./ldc_internet.txt -oN test_ldc_internet.nmp
