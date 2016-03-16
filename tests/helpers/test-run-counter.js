class TestRunCounter {
  constructor(numberOfTests, waitForTests) {
    this.testsLeft      = numberOfTests;
    this.startCountDown(waitForTests);
  }

  testRan() {
    --this.testsLeft;
    if(this.testsLeft >= 0) { return; }
    throw new Error('Too many tests have run');
  }

  startCountDown(waitForTests = 500) {
    setTimeout(() => {
      if(this.testsLeft === 0) { return; }
      throw new Error('Not all the tests ran that needed to');
    }, waitForTests);
  }
}

export default TestRunCounter;
