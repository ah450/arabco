describe('Module', function() {
  beforeEach(module('arabco'));

  it('exists', function() {
    // Will error if module does not exist
    return expect(true).to.be.true;
  });
});