import Swordsman from './class/Swordsman.js';
import CopyOrderObject from './object/CopyOrderObject.js';
import extractAttacks from './Destructuring/Destructuring.js';
import Validator from './class/Validator.js';


const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

const mySwordsman = new Swordsman('Arthur');
mySwordsman.attack = 70;
mySwordsman.defence = 25;

const sortedPropsArray = CopyOrderObject(mySwordsman, types);
console.log(sortedPropsArray);


const character = {
	name: 'Лучник',
	type: 'Bowman',
	health: 50,
	level: 3,
	attack: 40,
	defence: 10,
	special: [
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон'
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...'
			// <- обратите внимание, описание "засекречено"
		}
	]
};

let extractedAttacks = extractAttacks(character);
console.log(extractedAttacks);

const validatorUserName1 = new Validator("my_valid", "Bowerman");
const validatorUserName2 = new Validator("user123_", "Magician");
const validatorUserName3 = new Validator("alid-123", "Zombie");
const validatorUserName4 = new Validator("valid", "Undead");

const validators = [validatorUserName1, validatorUserName2, validatorUserName3, validatorUserName4];

for (const validator of validators) {
	try {
		const isValid = validator.validateUserName();
		console.log(`Имя "${validator.name}" валидное: ${isValid}`);
	} catch (error) {
		console.error(`Ошибка при проверке имени "${validator.name}": ${error.message}`);
	}
}