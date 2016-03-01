import Em from 'ember';
import config from 'ember-cli-qunit-test-tags/config/environment';
import { skip, test } from 'qunit';

const TEST_TAGS = config.TEST_TAGS;

function taggedTest(description, tags, callback) {
  if( arguments.length === 1) {
    return skip(description);
  }

  if( arguments.length === 2 && typeof tags === 'function' ) {
    callback = tags;
    return test(description, callback);
  }

  var tagsArray  = Em.makeArray(tags);
  var matchedTag = tags.some( (currentTag) => {
    return TEST_TAGS[currentTag.toUpperCase()] === 'true';
  });

  if(matchedTag) {
    return test(description, callback);
  } else {
    return skip(description, callback);
  }
}

export default taggedTest;
