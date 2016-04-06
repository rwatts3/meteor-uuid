//Client Tests
if (Meteor.isClient) {
	//uuid.new() tests
	describe('uuid.new()' , function() {
		it('Should generate a new uuid.' , function () {
			var uuidTest = uuid.new();
			chai.assert.equal(uuidTest, uuidTest);
		});
	});

	//uuid.tiny() tests
	describe('uuid.tiny()' , function() {
		it('Should generate a new tiny uuid.' , function () {
			var uuidTinyTest = uuid.tiny();
			chai.assert.equal(uuidTinyTest , uuidTinyTest);
		})
	})
};
