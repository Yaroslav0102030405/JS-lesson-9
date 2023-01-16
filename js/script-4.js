// Функцию можна записать в переменную
// Получается что в переменной будет лежать ссылка на функцию

// Функию называют существительным. То есть что она делает? Должна отвечать на вопрос

// Это функциональное выражение. Вы обьявляете функцию и присваиваете в переменную.
// Коглда вы обьявили функцию она еще не выполняется.
// В пузатых скобках вы обьявляете параметры. Они доступны только внутри тела этой функции
// const add = function (a, b) {
//     console.log(a)
//     console.log(b)

//     // console.log('а + b:', result)
//     // тело функции. Тут вы пишите что ей нужно сделать
//     console.log('Выполняется функция add');

//     return a + b
    // тут можеть быть одно значение число массив строка или другая цункция
// Вы где-то в памяти создали функцию и положили ее и она ничего не делает (этап обьявления функции)

// Чтобы вызвать функцию вы пишите имя переменной и после имени ставите пкзатые скобочки

// const r1 = add(5, 3);
// console.log(r1)

// const r2 = add(30, 50)
// console.log(r2)
// вызов функции и модет быть сколько угодно этих вызовов. Когда вы вызываете функцию то выполняется тело функции каждый раз

// у функции есть два темина параметры и аргументы
// При вызове функции вы передаете аргументы

// Я хочу вызвать функцию что-то ей передать и в том месте где ее вызвал получить что-то боратно (то есть рехзуольтат ее работы)
// 99% случаев функция что-то принимает и что-то возвращает

// Чтобы что-то вернтуть из функции есть такая инструкия деректива return (возврат)


// Где вы поставите retutn там функция прекратить прекратит выполнение
// const fn = function (value) {
//     console.log(1)
//     console.log(2)
    
//     if (value < 50) {
//         return 'Меньше чем 50'
//     } 
//     // тут else не нужен
//     return 'Больше чем 50'
// }

// console.log('Результат функции:', fn(10))

// console.log('Результат функции:', fn(60))

// в функции может быть два ретерна или 20 но выполниться какой-то один
// return прерыввет польностью прекращение функции. Где инпретатор встретил ретерн там ункция прекратила выполнение

// return - возвращает одно значение функцию число массив обьект строку буль. Он не может несколько значений выполнить

// Стек вызовов - это механизм благодаря которому вобще работают функции в JS
// const FnA = function () {
//     console.log('Выполняется функция А');
// };

// const FnB = function () {
//     console.log('Выполняется функция B');
// };

// const FnC = function () {
//     console.log('Выполняется функция с');
// };

// FnA();

// FnB();

// FnC();

// Второй вариант
// const FnA = function () {
//     console.log('Выполняется функция А');
// };

// const FnB = function () {
//     console.log('Выполняется функция B');
// };

// const FnC = function () {
//     console.log('Выполняется функция с');
// };

// console.log('Лог перед вызовом функции А');
// FnA();
// console.log('Лог после вызова функции А');

// console.log('Лог перед вызовом функции B');
// FnB();
// console.log('Лог после вызова функции B');

// console.log('Лог перед вызовом функции С');
// FnC();
// console.log('Лог после вызова функции C');

// Третий вариант Функция вызывается внутри другой функции
// const FnA = function () {
//     console.log('Выполняется функция А');

//     FnВ();
// };

// const FnB = function () {
//     console.log('Выполняется функция B');

//     FnC();
// };

// const FnC = function () {
//     console.log('Выполняется функция с');
// };

// // console.log('Лог перед вызовом функции А');
// FnA();
// console.log('Лог после вызова функции А');

// // console.log('Лог перед вызовом функции B');
// FnB();
// // console.log('Лог после вызова функции B');

// // console.log('Лог перед вызовом функции С');
// FnC();
// console.log('Лог после вызова функции C');

// тут стек вызовов А ждет пока выполниться В В ждет пока выполниться С С ждем пока выполниться консоль лог
// и когда глубже нет других вызовов (в нашем случае последний это консоль лог то оно начинает снимать со стека)

// Stack trace - Поиск ошибок в функциях
// const FnA = function () {
//     console.log('Выполняется функция А');

//     console.log(value);

//     // FnВ();
// };

// const FnB = function () {
//     console.log('Выполняется функция B');

//     // FnC();
// };

// const FnC = function () {
//     console.log('Выполняется функция с');
// };

// // console.log('Лог перед вызовом функции А');
// FnA();
// // console.log('Лог после вызова функции А');

// // // console.log('Лог перед вызовом функции B');
// FnB();
// // // console.log('Лог после вызова функции B');

// // // console.log('Лог перед вызовом функции С');
// FnC();
// console.log('Лог после вызова функции C');

// at FnA (script-4.js:141:17) (а это эфэнбе) нас интересует самое последнее тут говориться в какой функции произошла ошибка даже подчеркивает
// at script - 4.js: 157: 1(эта функция меин это кадр стека где храниться служебная информация) это то что вы видите называется стейк трейс
// и на 141 строке оно запхнулось остановилось потому что такой переменной не существует и она не была обьявленна
// Ошибка это всегда самая верхняя (надпись)

// параметр это то что функцию обьявили как локальную переменую в пузатых скобачках а аргумент это значение для параметров во время ее вызова

// Теперь мы будем задачи с прошлого урока 3 переписывать в виде функций
// с сегодняшнего дня большинство кода это будут функции

// Задача 1
// Напиши функцию calculateTotalPrice(items)
// которая принимает массив цен (чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }

// console.log('Total:', total);

// const calculateTotalPrice = function (items) {
//     console.log(items);

//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// };

// const r1 = calculateTotalPrice([1, 2, 3])

// console.log(`Общая сумма покупок ${r1}`);
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// Задача 2 95% случаев йункции что-то возвращают и 5% будет когда функция ничего не возвращает. Пример 5%
// Напиши функцию logItems(items) для перебора и логирования массива


// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item)
//     }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax'])
// logItems([1, 2, 3, 4, 5])
// logItems(['клавиатура', 'наушники', 'часы'])

// Задача 3 Напиши функцию findlogin(alllogins, login) для поиска логина
// - если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// - если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findlogin = function (alllogins, loginToFind) {
//     for (const login of alllogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден`;
// }

// console.log(findlogin(logins, 'qqwqewe'));
// console.log(findlogin(logins, 'k1widab3st'));
// console.log(findlogin(logins, 'poly1scute'));
// console.log(findlogin(logins, 'asddfgfg'));

// Пример через тернарный оператор
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findlogin = function (alllogins, loginToFind) {
//     for (const login of alllogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден`;
// }

// console.log(findlogin(logins, 'qqwqewe'));
// console.log(findlogin(logins, 'k1widab3st'));
// console.log(findlogin(logins, 'poly1scute'));
// console.log(findlogin(logins, 'asddfgfg'));const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findlogin = function (alllogins, loginToFind) {
//     for (const login of alllogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден`;
// }

// console.log(findlogin(logins, 'qqwqewe'));
// console.log(findlogin(logins, 'k1widab3st'));
// console.log(findlogin(logins, 'poly1scute'));
// console.log(findlogin(logins, 'asddfgfg'));const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// Пример через тернарный оператор

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

// const findlogin = function (alllogins, loginToFind) {
//     return alllogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
// };

// console.log(findlogin(logins, 'qqwqewe'));
// console.log(findlogin(logins, 'k1widab3st'));
// console.log(findlogin(logins, 'poly1scute'));
// console.log(findlogin(logins, 'asddfgfg'));

// В будущем будет два разных файла
// в одном файле будет обьявлена функция
// а в другом файле обьявлены логины
// и код сломаеться потому что в файле где буте функция не будет переменной логинс
// по этому мы тут логины передаем как аргумент во время вызова
// и этот наш масив записывается в параметр логинс
// Привыкайте использовать как можно мешьше использовать какие-то глобальные переменные
// все с чем функция работает она должна получить ввиде параметров
// как аргумент вы должны передать это туда и не надеятся что гдето там выше будет какая-то переменная магическая потому что ее не будет
// у вас будет сотни файлов в каждом будет отдельная маленькая функция
// а потом в одном большом файле вы будете это все вызывать

// Задача 4
// Напиши функцию fingSmallesNumber(numbers) для поиска самого маленького числа в массиве
// При условии что числа уникальные (не повторяются)

// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];

//     for (const number of numbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }

//         return smallestNumber;
//     };

// console.log(findSmallesNumber([3, 8, 12, -2, 15]));
// console.log(findSmallesNumber([100, 54, 8, 12, 47]));
// console.log(findSmallesNumber([7, 21, 84, 15, 4]));

// Задача 5
// напишите функцию changeCase(string) которая заменяет регистр
// каждого символа на противоположный
// Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"

const changeCase = function (string = '') {
    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isInLowerCase = letter === letter.toLowerCase();

        invertedString += isInLowerCase
            ? letter.toUpperCase()
            : letter.toLowerCase();
    }
    
return invertedString;
};

console.log(changeCase('JavaScript'));
console.log(changeCase('JAVAscript'));
console.log(changeCase('JavaSCRIPT'));

// когда ты будешь использовать эту функцию ты просто ее вызываешь по имени понятно что она делате
// и если тебе нужно понять как она работает
// ты зайдешь в тело функции и прочитаешь код
// но в 99% случаев тебе это не нужно ты просто будешь использовать по имени.
// по этому имя йункции должно быть очень хорошим. Что там проиходит?

// Имя функции должно быть очень хорошее чтобы понимать что там происходит не заходят в тело функции
// иначе... ваш код будет не читабелен
// 70% твоего кода это имена твоих переменных
// если ты плохо называешь свои переменные то твой код не читаеться другими разработчиками

// Задача 6
// Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов

const slugily = function (string) {
    return string.toLowerCase().split(' ').join('-');
};

console.log(slugily('Top 10 benefits of React framework'));
console.log(slugily('Azure Static Web Apps are Awesome'));

// Програмирование это практика нужно решать заадачи иначе не работает
// Все все выучат просто придет какое-то время

// По сути функция это абстракция для решения какщй-то задачи
// На вход кинул данные и получил результат.

// Иногда бывают такие задачи когда вам нужно написать функцию в которой вы не знаете сколько будет аргументов заранее
// в одном вызыове у нее будет три аргумента во втором вызове будет четыри аргумента а в третьем семь
// Аргумент метод использовать не будете (arguments в нем нету всех методов)
// вы будете использовать метод Array
// как взять псевдомассив и преобразовать его в настоящий массив используем конструктор Array.from() и метод фром
// Array.from () - это переводиться дословно сделай массив из. Это устаревший метд
// Современный метод ... три точки и ияме переменно
// const Fn = function (...args) {
//     console.log(args);
// };

// Fn(1, 2, 3);
// Fn(1, 2, 3, 4, 5);
// Fn(1, 2, 3, 4, 5, 6, 7);

// а если первой приходит строка. И как сделать чтобы у меня строки были отдельно а числа отдельно.
// const Fn = function (a, ...args) {
//     // console.log(a)
//     console.log(`${a}`);
//     console.log(args);
// };

// Fn('hello', 1, 2, 3);
// Fn('Aloxa', 1, 2, 3, 4, 5);
// Fn('hi', 1, 2, 3, 4, 5, 6, 7);
// первый аргумент был записан в параментр а это слово а второй аргумент был записан в переменную args как массив

// Задача 7
// Напиши функцию add для сложения произвольного количества аргументов (чисел)
// операция (...rest)

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// Задача 8
// Напиши функцию filterNumbers(array [, number1, ...]) которая:
// - первым аргментом принимает массив чисел
// - после первого аргумента может быть произвольное количество других аргументов
// которые будут числами
// Функция должна вернуть новый массив, в которм будут только те аргументы,
// начиная со второго,
// для которых есть аналог в оригинальном массиве.
const filterNumbers = function (array, ...args) {
    console.log('array', array);
    console.log('args', args);
    const uniqueElements = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);

            console.log(`${element} есть везде!`);
        }
    }
    return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));

// каждая функция делает свою маленькую задачу и не пытайтесь сделать функцию которая делает все
// иначе это будет муссорка из кода в которой никто ничего не поймет что там написанно