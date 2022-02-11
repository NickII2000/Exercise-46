'use strict';

// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 15,
//     b: 20,
//     sum: function () {
//         console.log(this);
//     },
// };
// obj.sum();

// const obj2 = {
//     a: 15,
//     b: 20,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     },
// };
// obj2.sum();

// function UserOldSynt(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello, ${this.name}`);
//     };
// }
// const ivan = new UserOldSynt('Ivan', 28);
// const alex = new UserOldSynt('Alex', 31);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' +
//         surname);
// }

// const user = {
//     name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(10));
// console.log(double(25));

// const btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     console.log(this);
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this);
//             console.log(this.num);
//         };
//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2;
// console.log(double(250));


const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = 'red';
});


// 1. Обычная функция: this = window, но если 'use strict' - undefined. 
// 2. Контекст у методов объекта - это сам объект.
// 3. This в конструкторах и классах - это новый экземпляр объекта.
// 4. Ручная привязка this: call, apply, bind.
// 5. У стрелочной функции нет своего контекста 
// (она связывается с лексическим окружением, то есть функцией, внутри которой определена стрелочная функция).

// Откуда берет контекст стрелочная функция?
// Вкратце: контекст обычных функций зависит от места вызова,
// а контекст стрелочных функций — от того места, где они были определены.