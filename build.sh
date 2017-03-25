#!/bin/bash
set -e
task="$1"
force="$2"

if [ "$task" == "-d" ]; then
	npm i
	npm update
	gulp dist
	gulp zip
fi

if [ "$task" == "-t" ]; then
	grunt karma:prod "$force"
	exit 0
fi
