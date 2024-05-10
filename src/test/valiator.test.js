import Validator from "../class/Validator";

test('validator name test', () => {

	const validatorUserName4 = new Validator("valid", "Undead");
	const result = validatorUserName4.validateUserName()
	expect(validatorUserName4.validateUserName()).toBe("valid");
})

test('validator name test', () => {
	const validatorUserName3 = new Validator("valid---", "Zombie");
	const result = () => validatorUserName3.validateUserName();
	expect(result).toThrowError('перепишите имя');
});