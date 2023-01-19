/*
 * План занятия
 *
 * - Прототипное наследование
 * - Прототип обьекта и Object.create()
 * - Создание обьектов через new - функция-конструктор
 * - Статические методы и свойства
 */

// Прототипное наследование это возможность связать обьекты по ссылке чтобы получить свойства другого обьекта
// У каждого обьекта есть ссылка на другой обьект (это называеться прототип)
// Мы можем привязать один обьект к другому и сделать один обьект который будет для другого прототипом
// Как выглядит прототип. У каждого лобьекта есть такое свойство __proto__: Object
// В  этом свойстве лежить ссылка на прототип этого обьекта на какой-то другой обьект с такими же свойствасмм и методами
// Свойство __proto__ есть у каждого обьета.
// Мы можем делать это автоматически или в ручную.
// Следующую связь ObjectA и для него пусть прототип будет ObjectB То есть в свойство __proto__ на ObjectA запишеться ссылка на весь
// обьект ObjectB. И тогда ObjectB становиться прототипом для ObjectA И тогда мы можем получить через ObectA все свойства ObjectB
// Цепочка модет быть бесконечная. Это не только связь между двумя обьектами это связть между произвольным количеством обьектов
// это называется цепочка прототипов
// Это набор обьектов которые связанны в цепочку ссылочками друг на друга
// Есть первый элемент цепочки который не являеться прототипом ни для чего и есть последний элемент в цепочке и о нем сеяас будет говорить
//  Главное чтобы в конце чепочки стоит Object прототайп или арей прототайи главное хранилице методов и свойств обьекта
// Пример мы сделаем чтобы С был прототипом В

const objC = {
  z: 3,
};
// console.log('objC', objC);

const objB = Object.create(objC);
// Object.create - это штука создает новый пустой обьект и делает протоипом для этого objB тот обьаект который вы укажите как аргумент
objB.y = 2;

// console.log('objB', objB)
// Очень важно что цепочка строиться с конца. У нас было А В С. Мы делаем самый главный наш прототип в конце С а потом идем на лево на лево
const objA = Object.create(objB);
objA.x = 1;

// console.log('objA', objA)

// console.log(objA.z, objA.y, objA.x)
console.log(objA.x);
// Это собственное свойство
console.log(objA.y);
// Это свойство на обьекте прототип
console.log(objA.z);

// Перезаписать значение z
objA.z = 1000;

console.log(objA.z);

// Object.create - создает пустой обьект и возвращает тебе с привызяанным прототипом и потом ты его наполняешь
// нельзя переопределять прототипы это плохая практика

// Собственные свойства это те свойства которые лажет на обьекте
// Проверить собственное свойство
console.log(objA.hasOwnProperty("x"));

/*
 * Алгоритм поиска свойств в цепочке прототипов:
 *
 * 1. Поиск начинвется в собственных свойствах
 * 2. Если свойства нет в собственных, поиск переходит к цепочке прототипов
 * 3. Поиск прекращаеться при первом совпадении (есть такое свойство)
 * 4. Возвращается значение свойства.
 */

const objD = Object.create({ v: 5 })
objD.r = 100
console.log('objD', objD)

/*
* Основы ООП: класс, экземпляр (обьект), интерфейс
*/

/*
* Функция-конструктор
* Именование
* Оператор new
* Свойство Function.prototype
*/

// Обьявляем функцию конструктор
// Она отличаеться что она называеться с большой буквы и она не отвечает на вопрос что сделать
// тут название переменной стоит в единственном числе существительное стоит - машина

// Функциия конструктор
// но ее имя должно быть с большой буквы и существительным в единственном числе
// const Car = function () {}

// // Как сделать экземпляр
// const myCar = new Car()
// // Оператор new - отвечает за создание экземпляра

// // В результате вызова мы ыполучаем обьект который является экземпляром класса Car
// console.log(myCar)


// Используя классы конструктор мы можем описать какую-то сущность
// внутри нее используя this определить набор характеристик каких-то
// и потом просто передавать разные значения и ун ас получиться фабрика обьектов

// тут мы сделали деструктуризацию
const Car = function ({brand, model, price} = {}) {
  // 2 Йункция вызывается в контексте созданного обьекта
  // то есть в this записывается ссылка на него
  this.brand = brand
  this.model = model
  this.price = price

  // this.a = value
  // 4 Ссылка на обьект возвращается в место вызова Car

  this.changePrice = function (newPrice) {
    this.price = newPrice;
    // Мы сейчас добавим метод который изменяет цену
// то что вы обьявляете внутри этой функции уходит на каждый экземпляр делается копия 
};

// 1 Если функция вызываеться через new создаеться пустой обьект
const myCar = new Car({ brand: 'Audi', model: '03',price: 3500, });
console.log(myCar);

const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 5000 });
console.log(myCar2);

// const myCar3 = new Car();
//   console.log(myCar3);