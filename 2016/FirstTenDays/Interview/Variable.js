/**
 * 虽然在函数内部，不加var关键字会定义成全局访问
 */
function Foo(){
	getName = function (){
		console.log('1');
	}
	return this;
}
Foo.getName = function (){
	console.log('2');
}
Foo.prototype.getName = function(){
	console.log('3');
}
var getName = function(){
	console.log('4');
}
function getName(){
	console.log('5');
}
//ques1
console.log('question1');
Foo.getName();
/**
 * Answer1
 * 此时访问的是Foo函数是储存的静态属性
 * 注意：函数体内不用var声明的变量或者函数表达式作用域为全局
 */
//ques2
console.log('question2');
getName();
/**
 * Answer2
 * 4;
 * 直接调用getName函数,访问当前上下文中的getName函数
 * 注意点：1.变量提升 2.函数表达式
 * //理解代码
 * 1.	console.log('x=' + x);
 *   	var x;
 *    	x = 2;
 *     	实际执行顺序
 *      var x;console;x=2;
 * 2.   var getName与function getName都是声明语句，区别在于var getName是函数表达式而
 * 		function getName是函数声明，函数表达式会被拆分成两行代码分别执行
 *   	console.log(x);
 *   	var x = 1;
 *   	function x(){}
 *   	最终执行顺序为：
 *   	var x;
 *   	function x(){};
 *   	console.log(x);
 *   	x = 1;
 *   	题目中的执行顺序：
 *   	var getName;
 *   	function getName(){console.log(5)}
 *   	getName = function(){console.log(4)}
 */

// //ques3
// console.log('question3');
console.log(Foo());
//Foo().getName();

