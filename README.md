# ELRO-CIP-39032KL IP-Camera device dumps

Defualt telnet login [root:123456] http login [admin:]

[Vendor manuals, software](https://drive.google.com/file/d/1MJy82aT7aFVucKvwRhahrEcRmY4LAfqH/view?usp=sharing)

### Device info

#### /proc/mtd 
```
dev:    size   erasesize  name
mtd0: 00020000 00010000 "Bootloader"
mtd1: 00010000 00010000 "Config"
mtd2: 00010000 00010000 "Factory"
mtd3: 00130000 00010000 "Kernel"
mtd4: 00190000 00010000 "RootFS"
mtd5: 00500000 00010000 "user"
```

#### cat /proc/cpuinfo
```
system type             : Ralink SoC
processor               : 0
cpu model               : MIPS 24K V4.12
BogoMIPS                : 239.61
wait instruction        : yes
microsecond timers      : yes
tlb_entries             : 32
extra interrupt vector  : yes
hardware watchpoint     : yes
ASEs implemented        : mips16 dsp
VCED exceptions         : not available
VCEI exceptions         : not available
```

#### /proc/meminfo 
```
MemTotal:        28972 kB
MemFree:          4072 kB
Buffers:          1600 kB
Cached:           3848 kB
SwapCached:          0 kB
Active:           7260 kB
Inactive:         1988 kB
SwapTotal:           0 kB
SwapFree:            0 kB
Dirty:               0 kB
Writeback:           0 kB
AnonPages:        3828 kB
Mapped:           8732 kB
Slab:             4880 kB
SReclaimable:      600 kB
SUnreclaim:       4280 kB
PageTables:        156 kB
NFS_Unstable:        0 kB
Bounce:              0 kB
CommitLimit:     14484 kB
Committed_AS:     9608 kB
VmallocTotal:  1048404 kB
VmallocUsed:      9716 kB
VmallocChunk:  1037452 kB
```

#### /proc/version
```
Linux version 2.6.21 (root@test) (gcc version 3.4.2) #136 Mon May 20 11:39:34 CST 2013
```

### Mount jffs2 partition

```
mkdir mtdblock
modprobe mtdram total_size=24576 erase_size=128
modprobe mtdblock
dd if=./mtblock-dumps/mtdblock5.img of=/dev/mtdblock0
mount -t jffs2 /dev/mtdblock0 mtdblock
```

### Dump scripts

```
#!/bin/sh
# Usage script.sh /

for f in $1*; do
	if [ "${f}" == "/dev" ] || [ "${f}" == "/tmp" ] || [ "${f}" == "/sys" ] || [ "${f}" == "/proc" ]; then
		continue
	fi
	test -d "${f}" && $0 "${f}/"
	test -f "${f}" && tftp -l ${f} -p ${TFTP_SERVER}
done
```

### Endpoint without auth

```
curl http://${CAMERA_IP}/get_realip.cgi
curl http://${CAMERA_IP}/get_status.cgi
curl http://${CAMERA_IP}/get_tutk_account.cgi
```
