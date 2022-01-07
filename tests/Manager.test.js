const Manager = require('../lib/Manager')

test('to officenumber', () => {
    const officenumber = '123.456.1234'
    const e = new Manager('Ian', 1, 'email@gmail.com', officenumber)

    expect(e.officeNumber).toBe(officenumber);
}) 