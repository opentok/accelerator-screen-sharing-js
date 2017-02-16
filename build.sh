#!/bin/bash
set -e
task="$1"
force="$2"

if [ "$task" == "-d" ]; then
	if [[ -d opentok.js-screen-sharing ]]
	then
		cd opentok.js-screen-sharing
		gulp dist
		gulp zip
	else
		echo "Please run this script from 'JS'."
		exit 1
	fi
fi

if [ "$task" == "-t" ]; then
	cd opentok.js-screen-sharing
	grunt karma:prod "$force"
	exit 0
fi
