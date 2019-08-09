


import { getFood } from './index'

test('should return biryani', (done) => {
    let promise = getFood();
    promise.then(result => {
        expect(result).toBe('biryani')
        done();
    })
})