// Все массивы все обьекты все функции это все const
// Все сложные типы через const
// Массивы можно изменять
// Меняеться не значение переменной а то что в этом знаении лежит

// На практике не бывает массиво где сразу хранилось и число  и строка и буль
// У вас будет или массив строк или массив чисел или массив обьектов

// Массив - это колекция список для однотипных элементов

// Как создать пустой массив
// const friends = [];
// // Это пустой массив
// console.log(friends);

// Как добавить элементы в массив Из одного элемента
// const friends = ['Mango'];
// console.log(friends);

// Массив из 4 элементов
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends.length);
// массив индексируеться и начинается с 0
// Сейчас длина массива 5 элементов индекс 0 1 2 3 4 (-1)
// Первый элемент стоит под индексом 0
// Элементы разделяються запятой

// Как удобно выводить массивы
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// Индекс последнего элемента -1
// Массивы будут динамические и ты не будешь знать сколько в них значений
// И тебе нужно от начала до конца их перебирать

// Как узнать последний индекс
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 2, 3, 4, 5];
// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// Изменить массив (значение массива) не в переменную записать новое значение
// а изменить то что там уже находится

// так можно сделать только со сложными типами (массивами, обьектами, функиями)

// Как обратиться к элементу массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.log(friends[1]);

// Второй вариант
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.log(['Mango', 'Kiwi', 'Poly', 'Ajax',][2]);

// Как что-то записать в массив это изменение элемента массива (сложного типа)
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.table(friends);

// friends[2] = 'super';
// // тут мы не записыввем в переменную новое значение
// // это боращение место в памяти где лежит это значение в ячейку где лежит это значение
// // Я не записываю в переменную я записываю в то место памяти где лежит это строка
// // я изменяю ее значение

// console.log(friends);

// Можно изменять сколько угодно
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.table(friends);

// friends[2] = 'super';
// friends[0] = 'qwert';
// friends[1] = 'gdggdgfdg'

// console.log(friends);

// Примитивы и сложные типы
// тут отличается как друг к другу присваевается переменные

// Передача по значениею
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// // b - это независимая копия и связи нет

// a = 20

// console.log(a);
// console.log(b);
// тут значение поменялось только у переменной a
// А у переменной b значение не п=поменялось

// Передача по ссылке (сложный тип) массив
// создается отдельное место в памяти где лежит массив
// переменная с - храниться не сам массив а указатель ссылка на массив
 // происходжт перенаправление указателей на массив на одно и тоже место в памяти
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// // Тут один и тот же массив мы сравнили с собой

// console.log([1, 2, 3] === [1, 2, 3]);
// сложные типы не равны друг другу (у них две разные ячейки в памяти)
// да у них одинаковые внутри элементы
// сравнение происходит по адресу в памяти а не по значению
// тут два разных массива с одинаковыми значениями по этому они фолс

// Примитвы просто передаются по значению и делается точная копия не связанная дру с другом
// + примитивы сравниваются по значениям 5 = 5 строка равна строке

// сложные типы передабтся по ссылке (делается новая переменная и в нее кидается ссылка в место в памяи где лежит массив)
// и ссылочные типы сравниваются по адресу где лежит массив
// по этому два массива разных никогда не будут равны друг другу даже если у них одинаковые элементы
// по тому что это два разных места в памяти

// Перебор Итерация массива (тут пригодится цикл for) и for of чтобы цикл можно было перебрать
// for - если нужен индекс или нужно изменить элемент массива
// for...of - если индекс не нужен и в массиве ничего менять не нужно

// Задача 1 Вывести в консоль все элементы этого массива не через консоль тейбл а по элементно
// Плохое решение задачи (не маштабируется)
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// Для перебора массива есть цикл
// Переберем массивы элементов по индексу
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//     console.log(i);
// }

// Перебрать все элементы массива (тут обращение к каждому элементу массива)
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//     console.log(friends[i]);
// }

// Как добавить что-то каждому элементу массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];
// console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//     friends[i] += '-1';
// }

// console.table(friends);

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',];

// for (let i = 0; i <= friends.length - 1; i += 1) {
//     friends[i] += `-${i}`;
// }

// console.table(friends);

// Оператор += это присвоение с добавлением

// теперь for...of деклоративный код Его используете если вам не нужен индекс
// или вам не нужно изменять элемент массива
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax',]

// for (const friend of friends) {
//     console.log(friend);
// }

// Задача 2
// Подсчитать общую сумму покупок в корзине
// когда вы видите массив скроее всего вам нужно перебрать его по элементно
// const cart = [54, 28, 105, 70, 92, 17, 120];
// // 2. Сделатиь переменную до цикла
// let total = 0;
// // Как получить доступ к каждому элементу массива?
// // нужно перебрать его в цикле

// // Шаг 1. перебрать массив
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
// // 3. Каждый элемент приплюсовать к total
//     total += cart[i];
// }

// console.log('Total:', total);
// на каждой итерации ты сможешь получить доступ к элементуэтого массива к каждому

// Тот же пример только с меньшим количеством кода
// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
//     }

// console.log('Total:', total);

// Задача 3 Перебрать маасив и добавить к тоталу 10%
// const cart = [54, 28, 105, 70, 92, 17, 120];
// // let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);

// Задача 4 
// Напиши скрпит который подсчитывает сумму всех четрных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// 1. переменная total
// 2. перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     // 3. на каждой итерации проверить элемент на четность
//     if (numbers[i] % 2 === 0) {
//         console.log('Четное');

//     // 4. если четный плюсуем к total
//     total += numbers[i];
//     }

// }

// console.log('Total:', total);

// Как улучшить код чтобы лучше читалось
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

//     // 3. на каждой итерации проверить элемент на четность
//     if (number % 2 === 0) {
//         console.log('Четное');

//     // 4. если четный плюсуем к total
//     total += number;
//     }

// }

// console.log('Total:', total);

// Вариант 2 с for...of
// for (const number of numbers) {
//     // console.log(number);

//     // 3. на каждой итерации проверить элемент на четность
//     if (number % 2 === 0) {
//         console.log(`${number} - четное`);

//     // 4. если четный плюсуем к total
//     total += number;
//     }

// }

// console.log('Total:', total);

// Задача 5 Напиши скрпит который подсчитывает сумму всех нечетрных чисел в массиве
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// // 1. переменная total
// // 2. перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     // 3. на каждой итерации проверить элемент на четность
//     if (numbers[i] % 2 !== 0) {
//         console.log('Четное');

//     // 4. если четный плюсуем к total
//     total += numbers[i];
//     }

// }

// console.log('Total:', total);

// Логика от обратного (математически правильнее будет)
// Сначала буде мпроверять самый плохой случай а потом хорощший
// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('Эту итерацию можно пропустить', number);
//         continue;
//     }

//     console.log(`${number} - четное`);
//     total += number;

// }

// console.log('Total:', total);

// Задача 6 Напиши скрипт поиска логина
// - если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
// - если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

// Сначала через for
// Потом через for...of
// Логика break
// Метод includes() с тернарным оператором

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = '';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = 'Пользователь ${loginToFind} найден.'
//         break;
//     }
//     message = 'Пользователь ${loginToFind} не найден.'
// }

// console.log(message);

// Пример задачи на for...of
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`
//         break;
//     }
// }

// console.log(message);


// Второй вариант решения задачи
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден.';

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = 'Пользователь ${loginToFind} найден.'
//     }
// }

// console.log(message);

// 1. пеербтать массив
// 2. сравнить каждый элемент

// Используем Метод includes() чтобы простой найти есть оно там или нет
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден.';

// console.log(logins.includes('poly1scute')); 
// этот метод возвращает если найдено сопадение true
// если совпадение не найдено false

// Пример с тернарным оператором
const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = 'Пользователь ${loginToFind} не найден.';
const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден.`
    : `Пользователь ${loginToFind} не найден.`;

console.log(message); 

// Задача 7 Напиши скрипт поиска самого маленького числа в массиве
// при условии что числа уникальные (не повторяються)

// const numbers = [51, 18, 13, 24, 7, 85, 19]

// // Вытягиваем первое число и говорим что это число самое саленькое
// // потом перебираем по одной и сравниваем
// // если вытянули меньше число заменяем
// // если вытянули больше выкидываем и говорим это все еще меньше

// // 1 Перебор массива по одному элементу это будет цикл for
// // 2 нужна переменная чтобы хранить маленькое число
// let smalllestNumber = numbers[0];
// // тут мы указали первое число как самое маленько

// // теперь перебирать циклом for...of
// for (const number of numbers) {
//     if (number < smalllestNumber) {
//         smalllestNumber = number;
//     }
// }

// console.log('smalllestNumber:', smalllestNumber);

// Задача 8 Напишите скрпит который обьединяет все элементы массива в одно строковое значение
// Элементов может быть произвольное количество
// Пусть элементы массива в строке будут разделены запятой
// Делаем через join() джоин берет массив и вшивает в строку
// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// const string = friends.join(',')

// console.log(string);

// а слип берет строку и разбивает ее в массив
// Напиши скрипт который заменяет регистр каждого символа в строке на противоположный
// Например, если строка "JavaScript", то на выходе должна быть строк
// "jAVAsCRIPT"

const string = 'JavaScript';
const letters = string.split('');
let invertedString = '';
// тут мы пришиваем к пустой строке иначе будет значение андефайн
// Всчегда указывайте значение
// тотал = 0
// начальная строка равно пустой строке
// массив равно пустой массив
// Значение должно быть всегда

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log('Эта буква в нижнем регистре - ', letter);
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    //     console.log('Эта буква в верхнем регистре! -', letter);
    // }

    invertedString += letter === letter.toLowerCase()
        ? letter.toUpperCase()
        : letter.toLowerCase();     
}

console.log(invertedString);


// Задача 9 Делаем slug в URL из названия статьи (например на dev.to)
// Заголовок статьи состоит только из букв и пробелов.

// Нормализируем строку
// Разбиваем по словам
// Сшиваем в строку разделителями

// Должно получиться top-10-benefits-of-react-framework
const title = 'Top 10 benefits of React framework'
// 1 Привести к нижнему регистру
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// Абстракции - это встроенные методы
// По словам и по пробелу разбить в массив
// const words = normalizedTitle.split(' ');
// console.log(words);

// А теперь методом джойн нам нужно соединить в строку с разделителем тире
// const slug = words.join('-');
// console.log(slug);

// как записать несколько методов дл одной переменной
// это называется цепочка вызовов метода
// Повседневный код
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1)
// вызыввется не на title а на результате работы предыдущего метода

// Задача 10 Напиши скрипт который который считает сумму элементов двух массивов

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// let total = 0;

// // Решение. for пройтись по array1 и  приплюсовать к total
// //  и потом пройтись по array2 и приплюсовать к total
// // 1 из двух массивов сделать один с помощью метода concat()
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// через запятую можно пришить любое количество массивов
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const numbers = array1.concat(array2, [1, 2, 3], [90, 70]);

for (const number of numbers) {
    total += number;
}

console.log(total);

// До собеседования вы должны знать что делает конкат пуш слайс слайт инклуд
// что возвращает что передает
// основные методы нужно знать на изусть

// В конце курса вы должны помнить 500 методов

// Задача 10
// Работа с колекцией карточек в trello
// Метод splice()
// - Удалить
// - Добавить
// - Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

console.table(cards);

// Удаление (по индексу), метод indexOf()
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// // можно удалить несколько элементов 1 поменять на 2 или 3

// console.table(cards);

// Добавление (по индексу)
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// // добавление элемента без удаления по этому3 ставм 0

// console.table(cards);

// Обновление (по индексу) Заменить один єлемент на другой
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, 'Обновленная карточка-4');
// на этом индексе удали эту строку и замени на новую строку

console.table(cards);


