import runTaggedTest from 'ember-cli-qunit-test-tags/run-tagged-test';
import config        from '../../config/environment';

function taggedTest(description, tags, callback) {
  return runTaggedTest(config.TEST_TAGS, description, tags, callback);
}

export default taggedTest;
