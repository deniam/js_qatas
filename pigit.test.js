const Pigit = require('./pigit');

describe("Pigit", () => {
    it("test", () => {
    expect(Pigit('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
    expect(Pigit('This is my string')).toBe('hisTay siay ymay tringsay')
    expect(Pigit('O tempora o mores !')).toBe('Oay emporatay oay oresmay !')
    });
    });