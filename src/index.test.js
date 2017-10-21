/* global describe it expect */

describe('basic tests', () => {
	it('should multiply 2*2', () => {
		expect(2/2).toEqual(1)
		console.log('hello!')
	})
	it('should concat strings', () =>{
		expect('hell'+'o!').toEqual('hello!')
	})
    it('should be able to add 1+1', () => {
    expect(1 + 1).toEqual(2)
  })
})

describe('Array.slice()', () => {
  it('should grab [2,3,4] with positive indexes', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    expect(arr.slice(1, 4)).toEqual([2, 3, 4])
  })

  it('should grab [2,3,4] with negative indexes', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    expect(arr.slice(1, -3)).toEqual([2, 3, 4])
  })
})
