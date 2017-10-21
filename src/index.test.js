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
