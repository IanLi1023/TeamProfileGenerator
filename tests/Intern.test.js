const Intern = require('../lib/Intern')

test('to school', () => {
    const school = 'University of Colorado'
    const e = new Intern('Ian', 1, 'email@gmail.com', school)

    expect(e.school).toBe(school);
}) 