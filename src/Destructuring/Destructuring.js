export default function extractAttacks(character) {
	const newArrayExtendsAttack = [];

	for (const attack of character.special) {
		const {
			id, name, description, icon,
		} = attack;
		newArrayExtendsAttack.push({
			id,
			name,
			description: description !== undefined ? description : 'Описание недоступно',
			icon,
		});
	}

	return newArrayExtendsAttack;
}