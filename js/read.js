function countToTen() {
  var count = 0;
  while (count < 10) {
    count++;
    document.getElementById("theCount") .innerHTML +=
    count + "<br>";
  }
}





var firstNumber = prompt('Введите первое число', [3]);
var secondNumber = prompt('Введите второе число');
var total = Number(firstNumber) * Number(secondNumber);
alert (total);



var movie = "Крестный отец";

function showGoodMovie () {
  alert (movie + "-хороший фильм!");
}

function showBadMovie () {
  movie = "Знакомьтесь, Джо Блэк!";
  alert (movie + "-плохой фильм!");
}

showBadMovie();


let age = prompt('Сколько тебе лет?', 100);
alert(`Тебе ${age} лет!`);



 let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?»


let isBoss = confirm("Ты здесь главный?");
alert(isBoss);


let currentUserName = prompt('Как тебя зовут?', "");
alert(`Его имя – ${currentUserName}`);




let a = prompt('Первое число', 1);
let b = prompt('Второе число', 2);

alert(+a + +b);



let questionNameJs = prompt('Какое правильное название JavaScript?', "");

if (questionNameJs == 'ECMAScript') {
	alert('Верно!');
} else {
	alert('Неа(');
}




let userValue = prompt('Введите какое-либо значение', '0');

if (userValue > 0) {
	alert(+1);
} else if (userValue == 0) {
	alert('значение равно нулу');
} else {
	alert(-1);
}



if (1 && 0) {
	alert('Это не должно быть выведено на экран');
}









let height = null;
let width = null;
// ...сработает вот так (совсем не как нам нужно):
let area = height ?? (100 * width) ?? 50;



let i = 0;
while (i < 3) {
	alert(i);
	i++;
}


let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


let i = 0;

for (; i < 3;) {
  alert( i++ );
}




for (let i=2; i <= 10; i++) {
	if (i % 2 == 0) {
	alert(i);
  }
}




Задание: Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.


let i;
do {
	i = prompt('Введите число > 100', '');
}
while (i !== null && i < 100);
alert(`Ты ввел число ${i}! И это правильный ответ`);


let i=prompt('Введите число > 100', '');

while (i !== null && i <= 100) {
	i=prompt('Давай-ка по-внимательнее прочтем задание');
}
alert(`Ты ввел число ${i}! И это правильный ответ`);




let i = prompt('Введите число > 100', '');

while (i !== null && i <= 100) {
  i = prompt('Давай-ка по-внимательнее прочтем задание');
}

if (i !== null) {
  alert(`Ты ввел число ${i}! И это правильный ответ`);
} else {
  alert('Вы отменили ввод.');
}





Вывести простые числа
let n = 100;
nextPrime:
for (let i = 2; i <= n; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue nextPrime;
	}
	alert(i);
}





let arg = prompt("Введите число?");
switch (arg) {
  case '0':
  case '1':
    alert( 'Один или ноль' );
    break;

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Никогда не выполнится!' );
    break;
  default:
    alert( 'Неизвестное значение' );
}




let userName = "Василий";

function showMessage() {
 let message = "Hello, my dear " + userName + '!';

	alert(message);
}
showMessage();




let userName = 'Василий';

function showMessage() {
	let userName = 'Петр';
	let message = 'Привет, ' + userName + '!';
	alert(message);
}

showMessage();
alert(userName);



function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert( result );


Пример 22
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('А родители разрешили?');
  }
}

let age = prompt('Сколько вам лет?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'Доступ закрыт' );
}


Пример 23
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Вам показывается кино" ); // (*)
  // ...
}






function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }
}
Второй вариант использует дополнительную функцию isPrime(n) для проверки на простое:

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // простое
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}









Перепишите функцию, используя оператор '?' или '||'
важность: 4
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор ||


let age = prompt('How older you?');
function checkAge(age) {
	return (age > 18) ? alert('Добро пожаловать!') : confirm('Родители-то разрешили?');
}

checkAge(age);


let age = prompt('How older you?');

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}







Написать функцию, которая возвращает меньшее из двух чисел

let min_a = +prompt('Введите число №1', ' ');
let min_b = +prompt('Введите число №2', ' ');

function minNumber(num_a, num_b) {
	return (num_a < num_b) ? `Число ${num_a} > числа ${min_b}` : num_b;
}

alert(minNumber(min_a, min_b));


let num_exp_1 = +prompt('Введите число, которое будет возведено в степень', '4');
let num_exp_2 = +prompt('Введите степень', '2');

function exponentiation(num_exp_1, num_exp_2) {
	return `Число ${num_exp_1}, возведенное в степень ${num_exp_2} = ${num_exp_1 ** num_exp_2}`;
}

alert(exponentiation(num_exp_1, num_exp_2));



let num_exp_1 = +prompt('Введите число, которое будет возведено в степень', '4');
let num_exp_2 = +prompt('Введите степень', '2');

function exponentiation(num_exp_1, num_exp_2) {
	if (Number(num_exp_1) && Number(num_exp_2)) {
		return `Число ${num_exp_1}, возведенное в степень ${num_exp_2} = ${num_exp_1 ** num_exp_2}`;
	} else {
		alert('Нужны числа, а не буквы!');
	}
}

	if (exponentiation(num_exp_1, num_exp_2)) {
		alert(exponentiation(num_exp_1, num_exp_2));	
	} 



function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n >= 1 && n % 1 == 0) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}





function sayHi() {
	alert('Hi');
}

let function_link = sayHi;

sayHi();
function_link();




Пример 25
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

function showOk() {
	alert('Вы дали согласие!');
}

function showCancel() {
	alert('Вы не согласны!');
}

ask('Вы согласны?', showOk, showCancel);





Пример 25_1
function ask(question, yes, no) {
	if (confirm(question)) {
		yes();
	} else {
		no();
	}
}

ask('Вы даете свое согласие?',
	function() { alert('Вы дали свое согласие!'); },
	function() { alert('Вы не дали свое согласие!'); }
	);




BigInt
let n = (20 ** 20);

alert(typeof n);
alert (n);
























































































































