
// Обьявление переменной const и let и отличие между ними.
let an = 2
an = 20
const bn = 10
const vn = true
console.log(typeof vn)

// Диалоговое окно prompt и как узнать тип данных typeof /// number, string, true, false
// let avn = prompt('Ви бажаєте підписатися?')
// avn = Number(avn)
// console.log(typeof avn)

// Number.parseInt (обрезать целое число) /// 50
let elementWidth = '50px'
elementWidth = Number.parseInt(elementWidth)
console.log('elementWidth:', elementWidth)

// Number.parseFloat (обрезать число с точкой) /// 200.74
let elementWidthp = '200.74px'
elementWidthp = Number.parseFloat(elementWidthp)
console.log('elementWidth:', elementWidthp)

// После точки 3 числа Number(salary.toFixed(3) /// 1300.678
// let salary = 1300.67890
// salary = Number(salary.toFixed(3))
// console.log(salary)

// Перевести в число Конструктор Number(quantity) /// 12 число
let quantity = '12'
console.log(Number(quantity)) /// 12 число

// Возвести число в степень Math.pow()
// const base = 2
// const power = 5
// const result = Math.pow(base, power)
// console.log(base ** power)

// Сгенерировать случайное число формула Math.round(Math.random() * (max - min) + min)
// const max = 10
// const min = 0
// const result = Math.round(Math.random() * (max - min) + min)
// console.log(result)

// Задача 1 Напиши скрипт который просит пользователя ввести число и степень возводит число в эту степень и выводит результат в консоль
// Шаг 1 Попросить ввести число и сохранить в переменную
// let base = prompt('Давай число')
// base = Number(base)
// console.log(base)

// // Шаг 2 Попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень')
// power = Number(power)
// console.log(power)

// // Шаг 3 возвести введенные данные в степень и вывести в консоль
// const result = base ** power
// console.log(result)

// Задача 2 Генерим псевдослучайные цвета body
const colors = ['tomato', 'while', 'pink', 'orange']
const max = colors.length - 1
const min = 0

const index = Math.round(Math.random() * (max - min) + min)
const color = colors[index]
console.log(color)

document.body.style.background = color

// Узнать длину строки .length
// const masage = 'В этой строке 26 символов.'
// console.log(masage.length)

// Конкатенация строк без пробелов (сщивание строк)
// const firstName = 'Chelsy'
// const lastName = 'Emerald'
// const fullName = firstName + lastName
// console.log(fullName)

// Конкатенация строк без пробелов
// const firstName = 'Chelsy'
// const lastName = 'Emerald'
// const fullName = firstName + ' ' lastName
// console.log(fullName)

// Конкатенация строк без пробелов
// Пример Переменная ${firstName}
const firstName = 'Chelsy'
const lastName = 'Emerald'
const type = 'VIP'
const room = 716

const welcomeMsd = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room} `
console.log(welcomeMsd)

// Нормализаия пользовательского ввода .toLowerCase() Перевести в нижний регистр
// let brand = 'SuMsUnG'
// brand = brand.toLowerCase()
// console.log(brand)

// Обратится к любому символу строки console.log(переменная[0])
// let brand = 'Sumsbng'
// console.log(brand[0])

// Обрезать в строке любую букву
// let brand = 'SuMsbng'
// console.log(brand.slice(1).toLowerCase())

// let brand = 'SuMsbng'
// brand = brand[0] + brand.slice(1).toLowerCase()
// console.log(brand)

// Поиск в строке нужного слова с методом includes()
// const word1 = 'cпам';
// const word2 = 'pаспродажа';
// Этот метод не работает с переменнами

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой модели, не пропустите!';
// const string3 = 'Рекламная компания спам и распродажа';

// console.log(string1.includes('спам'));
// console.log(string1.includes('распродажа'));

// console.log(string2.includes('спам'));

// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes('распродажа'));


// console.log(string3.includes('спам'));
// console.log(string3.includes('распродажа'));

// Операторы сравнения > < >= <= операторы возвращают буль true или false

// Операторы сравнений и возвращение условий
// console.log(5 > 10)
// console.log(15 > 10)
// console.log(15 >= 10)
// console.log(15 >= 15)
// console.log(15 < 30)
// console.log(15 < 3)

// Приведение (преобразование) типов к числу
// Операт слева и оперант с права обязательно приводиться к числу
// console.log(true > 5)
// console.log(Number(true))

// Оператор равенства
// const isEqual = 1 === '1'
// console.log(isEqual)
// каждое сравнение равно только самому себе 1 равно 1 тру равно тру и так далее
// это число а это строка они не равны поэтому фолс

// Оператор Не равно
const isEqual = 1 !== '1'
console.log(isEqual)

// Приведение к булю используем конструктор Boolean()
// Есть преобразование булевое это когда любое значение приводится к true или к false
console.log(Boolean(5))
console.log(Boolean('qwe'))
// Есть правило 6 ложных значений
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean(false))
// Абсолютно все остальное приводится к true. Обьекты функции массивы приводится к true в булевом преобразовании

// Логическое И &&
//  - Проверяет все значения на true или false
// - Запинается на лжи (false)
//  - Возвращает то, на чем запнулось или последний оперант
// Применятся когда нужно проверить 2 условия
console.log(5 && 6)
console.log(5 && 6 && 7 && 'hello')
// В этой цепочке нет ни одного значения false по этому возвращает последнее значение
// Ищет до первого false и запинаеться на нем
console.log(false && 'hello')

// Логическое ИЛИ (оператор ||)
// - Запинается на правде true
// - Возвращает то, на чем заптнулось или послений оперант
//  То есть или это или это или это
console.log(5 || 7 || 8 || 10)
console.log(false || 7 || 8 || 10)
console.log(false || 0 || 8 || 10)
console.log(false || 0 || null || 10)

// Лоническое НЕ (операто !)
// Делает инверсию правда > лож и лож > правда
console.log(!false)
console.log(!true)
console.log(!0)

// Задача 3 Напииши скрпит который проверяет вхождение числа в отрезок обозначенный х1 и х2 ${переменная}
// - До х1 10 начало отрезка
// - После х2 30 конец отрезка
// - От х1 до х2
// - До х1 или после х2
//  и само чило 50 котрое нужно проверить или входит в отрезок

const x1 = 10
const x2 = 30
const number = 50

console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1)

console.log(`Число ${number} попадает в отрезок до ${x2}? `, number > x2)

console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, number > x1 && number < x2)

console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, number < x1 || number > x2)

// Задача 4 Напиши скрипт который проверяет возможность открыть чат с пользователем 
// Для этого пользователь должен бытьи другом и онлайн и без режима не беспокоить &&
// Для этого пользователь должен быть
// - другом
// - онлайн
// - без режима не беспокоить

const isOnline = true
const isFrend = true
const isDnd = false

const canOpenChat = isOnline && isFrend && !isDnd
console.log('Можно открыть чат? ', canOpenChat)

// Задача 5 Напиши скрипт проверки подписки пользователя при доступе к контенту
// Есть 3 типа подписки free pro и vip
// Получить доступ могут только пользователи pro и vip

const sub = 'pro'

const canAccessContent = sub === 'pro' || sub === 'vip'
console.log('Есть доступ к контенту? ', canAccessContent)

// Оператор ветвления if это код по условию  тут приводиться к тру или фолс и тогда выполняеться тело
// Если да то выполняй тело
// if (5 > 3) {
//     // тело
//     console.log('qwe')
// }
// console.log('Дальше')

// if (5 > 30) {
//     // тело
//     console.log('аfgh')
// }
// console.log('Нет')

// Оператор ветвления if...else Если да сделай это а в противном случае сделайй то
if (50 > 30) {
    console.log('x > y')
} else {
console.log('x < y')
}
//  else тут может быть только один

// Оператор ветвления else... if а тут может быть много условий Это ветка как дерево
// Мы используем else...if когда много условий а выполнится должно только одно условие 
const salary = 1501

if (salary <= 500) {
    console.log('Уровень 1')
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2')
} else if (salary > 1500 && salary < 3000) {
    console.log('Уровень 3')
} else { 
    console.log('Уровень 4')
}
console.log('qwe')

// Тернарный оператор
// Используется в простых случаях записи в переменную по условиям
const balance = 1000

const masage = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс'
console.log(masage)

// Блочная область видимости переменных и глобальная область видимости переменной (разница)
const m = 5
console.log(m)
// Эта переменная видна ниже по коду. Тут глобальная область видимости переменной

// А если обьявить ее в внутри if
// if (true) {
//     const s = 10
// }
// console.log(s)
// Тут будет ошибка тут скобки создают новую вложенную область видимости
// А тут блочная область видимости.Переменная s есть только внутри тело if
if (true) {
    const s = 10
    console.log(s)
}
// console.log(s) вне скобок эта переменная не существует
const d = 15

if (true) {
    console.log(d)
}
console.log(d)