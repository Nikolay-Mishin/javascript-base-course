// Тема: switch, case, break
// Примечание: работа без break

const name = prompt('Как вас зовут?', 'Алексей')

switch (name) {
	case 'Алексей':
		console.log('Имя Алексей в переводе с древнегреческого языка означает «защитник», «оберегающий»')
		break
	case 'Дмитрий':
		console.log('Имя Дмитрий – распространённое русское имя греческого происхождения, означающее «посвящённый богине Деметре»')
		break
	case 'Константин':
		console.log('Имя Константин в переводе с латинского означает «стойкий», «постоянный»')
		break
	default:
		console.log('К сожалению я не знаю что значит имя ' + name)
}