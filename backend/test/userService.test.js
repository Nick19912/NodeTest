const { isNull, save, createCard, getUserDetails } = require('../service/userService');
const mock = require('redis-mock');
const client = mock.createClient();



describe("userService", () => {
    jest.mock('redis', () => mock)

    test('isNull', (done) => {
        expect(isNull(null)).toBe(true)
        expect(isNull({name: "Nick"})).toBe(false)
        done()
    })

    test('save', (done) => {
        expect(save({name: "Nick"})).resolves.toBe(true)
        expect(save(null)).resolves.toBe(false)
        done()
    })
    
    test('createCard', (done) => {
        expect(createCard({name: "Nick"})).resolves.toBe()
        done()
    })
    
    test('getUserDetails', (done) => {
        expect(getUserDetails()).toEqual(expect.anything())
        done()
    })
})
