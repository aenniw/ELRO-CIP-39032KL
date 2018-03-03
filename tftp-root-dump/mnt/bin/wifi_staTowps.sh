#!/bin/sh
cp /mnt/5350/wifiConfig/wps/Wireless/ /etc/ -r
ifconfig ra0 down
rmmod rt2860v2_sta
insmod rt2860v2_sta
ifconfig ra0 up
