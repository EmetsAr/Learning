/*
Task 1
    getString - возвращает строку
    getNumber - возвращает число
    getFunction - возвращает функцию
    getUndefined - возвращает undefined
    getConsole - возвращает объект console
    getMath - возвращает объект Math
*/
function getString(){
	return "а роза упала на лапу азора"
}

function getNumber(){
	return 123
}



function mult(a,b){
	return a+b
}
function getFunction(a,b){
	return mult(a,b);
}


function getUndefined(){
	return
}

function getConsole(){
	return console.log(123)
}

function getMath(){
	return Math.random();
}




/* Task 2 */
function greaterNum (a,b){
	if(a>b){
		return a
	}else if(a==b){
		return "числа равны"
	}else {
		return b
	}
}
console.log( "Наибольшее число между 5 и 10:"+  greaterNum (5,10))
console.log( "Наибольшее число между 8 и 2:"+  greaterNum (8,2))
console.log( "Наибольшее число между 5 и 5:"+  greaterNum (5,5))

function helloWorld(ln){
	if(ln=="en"){
		console.log('Hello world!')
	} else if(ln=="de"){
		console.log('Guten tag')
	} else if(ln=="es"){
		console.log('Holla!')
	} else {
		console.log('Привет')
	}
}
helloWorld('en')
helloWorld('de')
helloWorld('es')
helloWorld('ee')

function assignGrade(point){
	if(point>=90){
		console.log(point +'=>5')
	} else if(point>=75){
		console.log(point +'=> 4')
	} else if(point>=60){
		console.log(point +'=>3')
	} else {
		console.log(point +'=>2')
	}
}
assignGrade(92)
assignGrade(87)
assignGrade(27)
assignGrade(77)
assignGrade(67)


/* Task 3*/
	function add(a, b) {
		return a + b;
	}
	function minus(a, b) {
		return a - b;
	}
	function devide(a, b) {
		return a / b;
	}
	function mult(a, b) {
		return a * b;
	}

function convertFahrenheitToCelsius(a){
	return mult(minus(a,32),devide(5,9))
}
console.log(convertFahrenheitToCelsius(100))


function convertCelsiusToFahrenheit(a){
	return add(mult(a,devide(9,5)),32)
}
console.log(convertCelsiusToFahrenheit(100))