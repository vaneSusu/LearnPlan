/**
 * 1. 引用类型的值是引用类型的一个实例，在es中，引用类型是一种数据结构，
 * 用于将数据和功能组织在一起。
 * 2. 引用类型有时候也被称为对象定义，因为它们描述的是一类对象所具有的属性和方法
 * 3. var person = new Object();创建了object引用类型的一个新实例，然后把该实例保存在变量person中。
 *    使用的构造函数是object
 * 4. 创建对象的方法有两种 1.构造函数 2.字面量创建
 */
 var person = new Object();
 person.name = 'kobe';
 person.age = 40;

 person = {
 	name:"kobe",
 	age:40
 }
//对象字面量是向函数传递大量可选参数的首选方式
 function displayInfo(args){
 	var output = "";
 	if(typeof args.name == "string"){
 		output += "Name:" + args.name + "\n";
 	}

 	if(typeof args.age == "number"){
 		output += "Age:" + args.age + "\n";
 	}

 	//console.log(output);
 }

 displayInfo({
   name:"kobe",
   age:29
 })

 displayInfo({
 	name:"James"
 })
//js支持object['attr']访问对象的属性
//console.log(person["name"]); 
var variableName = "name";
//console.log(person[variableName]);



/**
 * Array类型 同object创建方式有两种 1.构造函数 2.数组字面量表示
 */
var colors = ['red','yellow'];
colors[2] = "black";
colors[3] = "brown";
var isA = {a:'b'};
//检测是否为数组可以用 checkValue instanceof Array
//instanceof 操作符的问题在于 它指定只有一个全局环境,如果网页中包含多个框架，那实际上就存在
//两个以上不同的执行环境，从而存在两个版本的Array构造函数；为了解决这个问题，es5新增了isArray()
//方法，这个方法的目的是最终确定某个值到底是不是数组
// if(isA instanceof Array){
// 	console.log('yes1!');
// }
if(Array.isArray(isA)){
	console.log('yes1!');
}
//
if(Array.isArray(colors)){
	console.log('yes2!')
}
/**
 * 所有对象都有toLocaleString(),toString()和valueOf()方法
 */
var newarrs = ['test','test2'];
console.log(newarrs.toString())
console.log(newarrs.valueOf());
console.log(newarrs.toLocaleString())
console.log(newarrs);



