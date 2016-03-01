/*jshint node:true*/
'use strict';

const TEST_TAGS = {};
const TEXT_TAG_PREFIX = /^TEST_/;

for(var tag in process.env) {
  if( !TEXT_TAG_PREFIX.test(tag) ) { continue; }
  var tagName = tag.replace(TEXT_TAG_PREFIX, '');
  TEST_TAGS[tagName] = process.env[tag];
}

module.exports = function(environment, appConfig) {
  if(appConfig['TEST_TAGS']) {
    for(tag in TEST_TAGS) {
      appConfig['TEST_TAGS'][tag] = TEST_TAGS[tag];
    }
  } else {
    appConfig['TEST_TAGS'] = TEST_TAGS;
  }

  return { TEST_TAGS: appConfig['TEST_TAGS'] };
};
