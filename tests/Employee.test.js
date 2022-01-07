const Employee = require('../lib/Employee')
test('is it working', () => {
    const em = new Employee();

    expect(typeof(em)).toBe('object')
})

test('set name', () => {
    const name = 'Ian'
    const e = new Employee(name)

    expect(e.name).toBe(name);
}) 