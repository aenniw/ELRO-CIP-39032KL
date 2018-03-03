#/bin/sh
>/dev/null 2>&1
mkdir /etc/ppp
mkdir /var/run
cp /mnt/5350/etc/ppp /etc/ -rf

if [ -e /mnt/mtd/update/html/index.htm ]; then
rm /mnt/5350/web/html/codebase -rf
cp /mnt/mtd/update/html/* /mnt/5350/web/html/ -rfp
fi
rm /mnt/mtd/update/html/* -rf

if [ -e /mnt/mtd/update/file/sys_flag ]; then
cp /mnt/mtd/update/file/ipcamn /mnt/bin/
cp /mnt/mtd/update/file/videocatch /mnt/bin/
cp /mnt/mtd/update/file/test.sh /mnt/
cp /mnt/mtd/update/file/*ko /mnt/5350/modules/
cp /mnt/mtd/update/file/*so* /mnt/5350/lib/
cp /mnt/mtd/update/file/*.asf /mnt/5350/web/html/
cp /mnt/mtd/update/file/*.cgi /mnt/5350/web/html/
fi
rm -f /mnt/mtd/update/file/*

insmod /mnt/5350/modules/i2c.ko
insmod /mnt/5350/modules/i2s.ko
insmod /mnt/5350/modules/gpio.ko
insmod /mnt/5350/modules/watchdog.ko

ifconfig eth2 192.168.7.183
ifconfig lo 127.0.0.1
sleep 5
videocatch>/dev/null 2>&1 &
ipcamn>/dev/null 2>&1 &
