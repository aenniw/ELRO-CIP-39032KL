#!/usr/bin/env bash

TOOLCHAIN_URL="https://archive.openwrt.org/chaos_calmer/15.05/ramips/rt288x/OpenWrt-SDK-15.05-ramips-rt288x_gcc-4.8-linaro_uClibc-0.9.33.2.Linux-x86_64.tar.bz2"
TOOLCHAIN_DIR="RT288x-Toolchain"

if [ ! -d ${TOOLCHAIN_DIR} ]; then
    mkdir ${TOOLCHAIN_DIR}
    wget ${TOOLCHAIN_URL}
    tar jxf *.tar.bz2 --strip-components=1 -C ./${TOOLCHAIN_DIR}
    rm  ./*.tar.bz2

	echo "-- Installing toolchain done"
elif [ -z ${STAGING_DIR} ]; then
	export STAGING_DIR=${PWD}/${TOOLCHAIN_DIR}/staging_dir
	alias gcc-rt288x=`ls -d ${STAGING_DIR}/toolchain-*/bin`/mipsel-openwrt-linux-gcc

	echo "-- Setting toolchain done"
fi