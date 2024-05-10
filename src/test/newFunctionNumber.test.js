import newFunctionNumber from "../newFunctionNumber/newFunctionNumber";

test('test return function number format', () => {

	const number = "8";
	const func = newFunctionNumber(number)

	const result = "8"

	expect(func).toEqual(result)
})