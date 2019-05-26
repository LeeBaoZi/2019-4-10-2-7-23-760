const main = require('../main/main');

describe('taxi fee', function () {
    it('within 2km and parking' , function() {
        let inputs = {distance:1,parkTime:5};
        let summary = main(1,5);
        let expected = 7;
        expect(summary).toEqual(expected);
    });
    it('between 2km and 8km and parking' , function() {
        let inputs = {distance:7,parkTime:10};
        let summary = main(7,10);
        let expected = 13;
        expect(summary).toEqual(expected);
    });
    it('more than 8km and parking' , function() {
        let inputs = {distance:10,parkTime:20};
        let summary = main(10,20);
        let expected = 18;
        expect(summary).toEqual(expected);
    });
    it('more than 8km and no parking' , function() {
        let inputs = {distance:15,parkTime:0};
        let summary = main(15,0);
        let expected = 19;
        expect(summary).toEqual(expected);
    });
});
