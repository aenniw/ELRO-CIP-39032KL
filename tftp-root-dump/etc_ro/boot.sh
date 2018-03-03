
mount -t jffs2 /dev/mtdblock5 /mnt

cp /etc_ro/group /etc
cp /etc_ro/passwd /etc
cp /etc_ro/udhcpd.conf /etc/
cp -dpr /etc_ro/Wireless /etc/

insmod -q rt2860v2_sta

ifconfig eth2 0.0.0.0
ifconfig ra0 0.0.0.0

#brctl addbr br0
#brctl setfd br0 1

switch reg w 14 5555
switch reg w 40 1001
switch reg w 44 1001
switch reg w 48 1001
switch reg w 4c 1
switch reg w 50 2001
switch reg w 70 ffffffff
switch reg w 98 7f7f
switch reg w e4 7f
switch clear


#insmod -q rt2860v2_sta

/mnt/test.sh


mkdir -p /var/lib/misc/
touch /var/lib/misc/udhcpd.leases

#udhcpd -fS /etc/udhcpd.conf 
