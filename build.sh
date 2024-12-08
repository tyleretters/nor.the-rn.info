#!/bin/sh
bundle install
sass assets/stylesheets/style.scss:assets/stylesheets/style.css
echo "hash: $(git rev-parse --short HEAD)" > _data/build.yml
echo "time: $(date -u +"%Y-%m-%dT%H:%M:%SZ")" >> _data/build.yml
bundle exec jekyll build