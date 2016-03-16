import castTestArguments from 'ember-cli-qunit-test-tags/-private/cast-test-arguments';
import matchesTags       from 'ember-cli-qunit-test-tags/-private/matches-tags';
import { test }          from 'ember-qunit';
import { skip }          from 'qunit';

function taggedTest(envTags, description, tags, callback) {
  [description, tags, callback] = castTestArguments(description, tags, callback);
  if(!tags.length) { return test(description, callback); }
  if(matchesTags(envTags, tags)) {
    return test(description, callback);
  } else {
    return skip(description, callback);
  }
}

export default taggedTest;
