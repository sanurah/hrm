#!/bin/bash
cd docker
rm -r *.jar
find ../app/target/ -name "*.jar" -exec cp '{}' ./ \;
#find ../auth/target/ -name "*.jar" -exec cp '{}' ./ \;
docker-compose -p 'hrm' up
trap "docker-compose  -p 'hrm' down" EXIT