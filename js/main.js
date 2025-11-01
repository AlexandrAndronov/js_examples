// function countToTen() {
//   var count = 0;
//   while (count < 10) {
//     count++;
//     document.getElementById("theCount") .innerHTML +=
//     count + "<br>";
//   }
// }
//
//
//
//
//
// var firstNumber = prompt('Введите первое число', [3]);
// var secondNumber = prompt('Введите второе число');
// var total = Number(firstNumber) * Number(secondNumber);
// alert (total);
//
//
//
// var movie = "Крестный отец";
//
// function showGoodMovie () {
//   alert (movie + "-хороший фильм!");
// }
//
// function showBadMovie () {
//   movie = "Знакомьтесь, Джо Блэк!";
//   alert (movie + "-плохой фильм!");
// }
//
// showBadMovie();


// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`);



//  let name = "Ilya";

// alert( `hello ${1}` ); // ?

// alert( `hello ${"name"}` ); // ?

// alert( `hello ${name}` ); // ?»


// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);


// let currentUserName = prompt('Как тебя зовут?', "");
// alert(`Его имя – ${currentUserName}`);




// let a = prompt('Первое число', 1);
// let b = prompt('Второе число', 2);

// alert(+a + +b);



// let questionNameJs = prompt('Какое правильное название JavaScript?', "");

// if (questionNameJs == 'ECMAScript') {
// 	alert('Верно!');
// } else {
// 	alert('Неа(');
// }




// let userValue = prompt('Введите какое-либо значение', '0');

// if (userValue > 0) {
// 	alert(+1);
// } else if (userValue == 0) {
// 	alert('значение равно нулу');
// } else {
// 	alert(-1);
// }



// if (1 && 0) {
// 	alert('Это не должно быть выведено на экран');
// }









// let height = null;
// let width = null;
// // ...сработает вот так (совсем не как нам нужно):
// let area = height ?? (100 * width) ?? 50;



// let i = 0;
// while (i < 3) {
// 	alert(i);
// 	i++;
// }


// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);


// let i = 0;

// for (; i < 3;) {
//   alert( i++ );
// }




// for (let i=2; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 	alert(i);
//   }
// }




// Задание: Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.


// let i;
// do {
// 	i = prompt('Введите число > 100', '');
// }
// while (i !== null && i < 100);
// alert(`Ты ввел число ${i}! И это правильный ответ`);


// let i=prompt('Введите число > 100', '');

// while (i !== null && i <= 100) {
// 	i=prompt('Давай-ка по-внимательнее прочтем задание');
// }
// alert(`Ты ввел число ${i}! И это правильный ответ`);




// let i = prompt('Введите число > 100', '');

// while (i !== null && i <= 100) {
//   i = prompt('Давай-ка по-внимательнее прочтем задание');
// }

// if (i !== null) {
//   alert(`Ты ввел число ${i}! И это правильный ответ`);
// } else {
//   alert('Вы отменили ввод.');
// }





// Вывести простые числа
// let n = 100;
// nextPrime:
// for (let i = 2; i <= n; i++) {
// 	for (let j = 2; j < i; j++) {
// 		if (i % j === 0) continue nextPrime;
// 	}
// 	alert(i);
// }





// let arg = prompt("Введите число?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//     break;

//   case '2':
//     alert( 'Два' );
//     break;

//   case 3:
//     alert( 'Никогда не выполнится!' );
//     break;
//   default:
//     alert( 'Неизвестное значение' );
// }




// let userName = "Василий";

// function showMessage() {
//  let message = "Hello, my dear " + userName + '!';

// 	alert(message);
// }
// showMessage();




// let userName = 'Василий';

// function showMessage() {
// 	let userName = 'Петр';
// 	let message = 'Привет, ' + userName + '!';
// 	alert(message);
// }

// showMessage();
// alert(userName);



// function sum(a, b) {
//   return a + b;
// }
// let result = sum(1, 2);
// alert( result );


// Пример 22
// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('А родители разрешили?');
//   }
// }

// let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }


// Пример 23
// function showMovie(age) {
//   if ( !checkAge(age) ) {
//     return;
//   }

//   alert( "Вам показывается кино" ); // (*)
//   // ...
// }


































































// aaaaaa