import { sum } from './sum.js';
describe ('sum', () => {
    it('sum numbers', () => {
        expect(sum(1, 2)).toEqual(3);
    });
});