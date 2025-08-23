console.log('привет!')

const greeting = 'Привет'
const name = 'Даниил'
const goodbye = 'Пока'

const message = `${greeting}, ${name}!`

console.log(message)

const age = +prompt('Сколько тебе лет?')

switch (true) {
    case age < 18: {
        console.log('Доступ закрыт!')
        break;1
    }

    case age <= 125: {
        console.log('Доступ разрешен!')
        break;
    }

    case age >= 126: {
        console.log('Вампир что ли?')
        break;
    }

    default: {
        console.log('Возраст введен некоректно!')
        break;
    }
}