import { module }     from 'qunit';
import TestRunCounter from 'dummy/tests/helpers/test-run-counter';
import runTaggedTest  from 'ember-cli-qunit-test-tags/run-tagged-test';

const TEST_TAGS = {
  onFleek: true,
  sick:    'true',
  bitchin: false,
  tubular: 'wut',
  rad:     undefined,
  groovy:  null
};

function taggedTest(description, tags, callback) {
  runTaggedTest(TEST_TAGS, description, tags, callback);
}

module('tagged test - used like regular test');

taggedTest('can act like the test method signature', function (assert) {
  assert.expect(1);
  assert.ok(true, 'should mimic the Qunit.test method signature');
});

var singleTagTests;

module('tagged test - single tags', {
  beforeEach() {
    singleTagTests = singleTagTests || new TestRunCounter(3);
  },

  afterEach() {
    singleTagTests.testRan();
  }
});

taggedTest('runs a tagged test when tag value is true', 'onFleek', function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest("runs a tagged test when tag value is the string 'true'", 'sick', function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest("runs a tagged test when tag value is undefined", 'rad', function(assert) {
  assert.expect(1);
  assert.ok(true, 'onFleek tag is true and should have run');
});

taggedTest('skips a tagged test when tag value is false', 'bitchin', function(assert) {
  assert.expect(1);
  assert.ok(false, 'bitchin tag is false and should not have run');
});

taggedTest('skips a tagged test when tag value is a string and not true', 'tubular', function(assert) {
  assert.expect(1);
  assert.ok(false, 'tubular tag is falsey and should not have run');
});

taggedTest('skips a tagged test when tag value is null', 'groovy', function(assert) {
  assert.expect(1);
  assert.ok(false, 'groovy tag is falsey and should not have run');
});
