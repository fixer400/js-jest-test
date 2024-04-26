const findMissing = require('./findMissing');
const array =  [5,0,1,3,2];
const array2 = [7, 29,20, 26, 555];
const array3 = [7, 9,10, 11, 12]

test('findMissing', () => {
    expect(findMissing(array)).toBe(4);
    expect(findMissing(array2)).toBe('No sequence found');
    expect(findMissing(array3)).toBe(8);

})