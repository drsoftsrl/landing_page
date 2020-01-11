#!/bin/sh

echo "git push"
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"
git config --global push.default current
git stash
git checkout ${TRAVIS_BRANCH}
git stash pop
npm run deploy
git push https://${GH_TOKEN}@github.com/drsoftsrl/landing_page.git
