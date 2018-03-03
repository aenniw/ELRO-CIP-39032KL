#!/bin/sh
cp /mnt/5350/wifiConfig/ap/Wireless/ /etc/ -r
cp /mnt/5350/etc/udhcpd.conf /etc
ifconfig ra0 down
rmmod rt2860v2_sta
insmod /mnt/5350/modules/rt2860v2_ap.ko
#ifconfig eth2 down
ifconfig ra0 192.168.0.1
#iwpriv ra0 set AuthMode=OPEN
#iwpriv ra0 set EncrypType=NONE
#iwpriv ra0 set SSID=PhoneCar_0009
udhcpd -fS /etc/udhcpd.conf &
