import topThreeWords from './donQFunction.js';

let textSample = `In a village of La Mancha, the name of which I have
no desire to call to mind, there lived not long since one of those
gentlemen that keep a lance in the lance-rack, an old buckler, a lean
hack, and a greyhound for coursing. An olla of rather more beef than
mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays,
and a pigeon or so extra on Sundays, made away with three-quarters of his
income.`

describe('Top three words', () => {
    it('should return an array by default', () => {
        const result = topThreeWords()
        expect(Array.isArray(result))
            .toBe(true)
        expect(result.length).toBe(0)
    })
    it('should return only lower case output', () => {
        const result = topThreeWords('balenciaga Balenciaga BALENCIAGA aquazzura chalayan');
        expect(result.every(word => word === word.toLowerCase())).toBe(true);
    })
    it('should return an array of length 1 if there is only one unique word', () => {
        const result = topThreeWords('Balenciaga');
        expect(result).toEqual(['balenciaga']);
    })
    it('should return an array of length 2 if there are only two unique words', () => {
        const result = topThreeWords('Balenciaga aquazzura balenciaga');
        expect(result).toEqual(['balenciaga', 'aquazzura']);
    })
    it('should return an array of length 3 if there are three or more unique words', () => {
        const result = topThreeWords(textSample);
        expect(result).toEqual(['a', 'of', 'on']);
    })
});