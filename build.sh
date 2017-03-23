#!/bin/bash
set -e
task="$1"
force="$2"

if [ "$task" == "-t" ]; then
	grunt karma:prod "$force"
	exit 0
fi
