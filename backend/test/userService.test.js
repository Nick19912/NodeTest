const { isNull, save, createCard, getUserDetails } = require('../service/userService');
const mock = require('redis-mock');
const client = mock.createClient();

describe("userService", () => {
    jest.mock('redis', () => mock)

    test('isNull', (done) => {
        expect(isNull(null)).toBe(true)
        expect(isNull({
            givenName: 'Sam',
            surname: 'Fairfax',
            email: 'sam.fairfax@fairfaxmedia.com.au',
            phone: '0292822833',
            houseNumber: '100',
            street: 'Harris Street',
            suburb: 'Pyrmont',
            state: 'NSW',
            postcode: '2009',
            country: 'Australia'
        })).toBe(false)

        done();
    })

    it('save', async () => {
        //Save with data
        await expect(save({givenName: "Nick"})).resolves.toBe(true)
        await expect(save(
            {
                givenName: 'Sam',
                surname: 'Fairfax',
                email: 'sam.fairfax@fairfaxmedia.com.au',
                phone: '0292822833',
                houseNumber: '100',
                street: 'Harris Street',
                suburb: 'Pyrmont',
                state: 'NSW',
                postcode: '2009',
                country: 'Australia'
            }
        )).resolves.toBe(true)

        //Save without data
        await expect(save({givenName: null})).resolves.toBe(true)
        await expect(save(
            {
                givenName: null,
                surname: null,
                email: null,
                phone: null,
                houseNumber: null,
                street: null,
                suburb: null,
                state: null,
                postcode: null,
                country: null
            }
        )).resolves.toBe(true)
        await expect(save(null)).resolves.toBe(false)
    })
    
    it('getUserDetails', async () => {
        expect(getUserDetails()).toEqual(expect.anything())
    })
})
