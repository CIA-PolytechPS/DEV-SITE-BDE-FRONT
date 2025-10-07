#!/bin/sh

TARGET="./runtime-config.json"
SOURCE="/runtime-config.json.template"
rm -f "${TARGET}"
touch "${TARGET}"
while IFS= read -r line; do
    eval "echo \"${line}\"" >> "${TARGET}"
done < "${SOURCE}"

nginx -g 'daemon off;'
