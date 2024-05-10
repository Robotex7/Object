const number = "8;

function newFunctionNumber(num) {
	const cleanedNumber = num.replace(/\D/g, '');
	return cleanedNumber;
}


export default newFunctionNumber;