const Engineer = require('../lib/Engineer')
test('to GitHub', () => {
    const gitHubName = 'Ian.Li1023'
    const e = new Engineer('Ian', 1, 'email@gmail.com', gitHubName)

    expect(e.github).toBe(gitHubName);
}) 