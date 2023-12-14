---
title: Es6
description: A reference page in my new Starlight docs site.
---
<meta name="referrer" content="no-referrer" />

### ES6 变量

- let 声明变量
- const 声明常量
- 块级作用域

#### let 声明：

1. 使用 let 声明不会有变量提升。
2. 在循环中，使用 let 声明变量会特殊处理，每次循环，都会开启新的作用域，循环结束后会销毁；（！不要在外面声明后再循环体使用）
3. 底层实现上，实际上也会有提升，但是，提升后会将其放入到“暂时性死区”，如果访问改区的变量，就会报“cannot access 'a' before initialization"，当代码运行到声明语句时，会将其移出死区。

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1650978344972-ca5b2fde-1e23-49ce-aa8e-69d2c16ec5d9.png#clientId=u15b8f17d-db30-4&from=paste&height=373&id=ub976c874&originHeight=497&originWidth=840&originalType=binary&ratio=1&rotation=0&showTitle=false&size=62796&status=done&style=none&taskId=ub96bc50e-cd74-467d-87b8-0787072292c&title=&width=630)![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1650978315938-0c7d89d6-40e5-44a4-b486-039b11b5b933.png#clientId=u15b8f17d-db30-4&from=paste&height=233&id=uc16697c1&originHeight=310&originWidth=846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=45181&status=done&style=none&taskId=u19c79cf8-21cc-4b20-b147-6aa21c9bec5&title=&width=635)
![](https://pic.imgdb.cn/item/65782d12c458853aefb72738.jpg)

#### const 声明常量：

1. 开发中，尽量使用 const 声明变量，避免被随意更改；因为实际开发中，很多变量，都不会更改；
2. 很多框架、第三方库都要求数据不可变。
3. 常量不可变，是指声明常量的内存空间不变，该内存空间中指向的其他空间可以改变，比如对象；
4. 常量：
   1. 特殊常量：一定不可变，全部大写 ，多个单词之间使用下划线分割。 如 PI（圆周率）、月底距离
   2. 普通常量
   3. for 循环中，循环变量不可以用 const 声明，for in 循环可以

#### 块级作用域：执行完销毁，块级作用域用 let 定义的变量，外部不能访问。

### 字符串和正则

#### 新的 Unicode 支持

###

#### 字符串 api

```javascript
const text = '王者荣耀国服亚瑟';

console.log('是否包含王者：' + text.includes('王者'));
console.log('是否是王者开头:' + text.startsWith('王者'));
console.log('是否以亚结尾:' + text.endsWith('亚'));
console.log('重复四遍:' + text.repeat(4));
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651049219102-eca5a6a0-f386-42b7-9301-2a94a3a8fa30.png#clientId=ucfc57d7f-2109-4&from=paste&height=121&id=u644af420&originHeight=161&originWidth=1111&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30357&status=done&style=none&taskId=u58094c40-e4e5-463d-851c-ce89d3e2d36&title=&width=833)

#### 模板字符串

```javascript
let zs = '招式';
let jz = '绝招 ';

let text = `把最简单的${zs}
练到极致,
\n\n
那就是${jz}
转义在$前加一个\${我被转义了}`;
console.log(text);
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651051435466-1666f128-f499-4a2d-937f-7b60d7dbf918.png#clientId=ucfc57d7f-2109-4&from=paste&height=169&id=u58c63bf2&originHeight=226&originWidth=1127&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23295&status=done&style=none&taskId=u2df02630-0cb9-455b-b015-074fd1d7a4f&title=&width=845)

#### 模板字符串标记

模板字符串前可以加上标记函数：

- 参数 1：被插值分割的字符串数组。
- 后续参数：所有插值。
- String.row`自动转义\n`

```javascript
let text = safe`mobanzifuchuan`;
function safe() {}

let str = String.row`王者\n      荣耀`;
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651059967597-3723fce2-e448-4e70-bf61-dffbbde856e4.png#clientId=u35a299c6-d935-4&from=paste&height=57&id=u775611c7&originHeight=113&originWidth=992&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24776&status=done&style=none&taskId=ud8339ae6-e448-4e27-b543-99fb193e94c&title=&width=497.0000305175781)![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651059927569-cb61c605-d07d-4cbd-9d09-c36c9abebed2.png#clientId=u35a299c6-d935-4&from=paste&height=136&id=u4962ebdc&originHeight=364&originWidth=607&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11386&status=done&style=none&taskId=ue97da5c8-eb74-4560-bf43-47b86676974&title=&width=226)

```javascript
const contain = document.getElementsByTagName('div')[0];
const btn = document.getElementsByTagName('button')[0];
const textarea = document.getElementsByTagName('textarea')[0];
btn.onclick = function () {
	contain.innerHTML = safe`<p>
${textarea.value}
</p>`;
};
function safe(parts) {
	const values = Array.prototype.slice.apply(arguments).slice(1); //得到要插入的字符串
	// console.log(arguments);
	// console.log(parts);//参数
	// console.log(values);
	var str = '';
	for (let i = 0; i < values.length; i++) {
		let v = values[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');
		str += parts[i] + v;
		if (i == values.length - 1) {
			str += parts[values.length];
		}
	}
	return str;
}
```

#### 正则粘连标记

```javascript
const text = 'hello World!!';

let reg = /W\w+/;
console.log(reg.test(text));
let reg1 = /W\w+/y;
console.log('正则粘连标记匹配:' + reg1.lastIndex);
console.log(reg1.test(text));
reg1.lastIndex = 6;
console.log(reg1.test(text));
```

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651050364537-9be0afed-034d-4e3a-8564-d78747b0dd2d.png#clientId=ucfc57d7f-2109-4&from=paste&height=128&id=uc7f49bf4&originHeight=171&originWidth=1113&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23987&status=done&style=none&taskId=u5b9dae91-9a5c-4599-9715-b576864047e&title=&width=835)

### 函数

#### 参数默认值

#### 剩余参数

```javascript
function (...形参名){
}
```

arguments 缺陷：

1. 和形参配合使用，容易混乱。
2. 不符合语义。
3. 一个函数只能由一个剩余形参
4. 剩余参数必须放到最后

![image.png](https://cdn.nlark.com/yuque/0/2022/png/2899360/1651151743236-b9f4a6c3-7354-43f8-a355-eea8e7c72ca3.png#clientId=u16a71cb7-2951-4&from=paste&height=62&id=u5a96da3a&originHeight=82&originWidth=836&originalType=binary&ratio=1&rotation=0&showTitle=false&size=11006&status=done&style=none&taskId=u07bc55e6-8915-4172-814d-b2af1df086c&title=&width=627)

#### 展开运算符

浅克隆

```javascript
let arr = [...arr1];
let obj = {
	...obj1,
	loves: [...obj1.loves, '种菜'],
	adsress: {
		...obj1.address,
	},
};
```

传参

```javascript
var sum = numSum(...arr);
```

柯里化函数

#### 明确函数的两个用途

以前：

```javascript
if (!(this instanceof Person)) {
	throw new Error('你没有使用new来调用该函数');
}
//但使用call调用依然可以
let person3 = Person.call(new Person(), '李信', 24);
```

es6:
**new.target ：如果用 new 调用构造函数，就返回构造函数本身。不使用 new 调用，就返回 undefined**

```javascript
if(new.target === undefined){
  throw new Error('你没有使用new调用该函数');
}
```

#### 箭头函数

细节：

- 箭头函数是函数表达式，理论上，任何使用函数表达式的场景都可以使用箭头函数。
- 箭头函数没有原型。 所以不能做构造函数。
- 箭头函数中没有自己的 this、arguments、new.target。如果用了，使用的是外层的。
- 箭头函数中的 this，取决于箭头函数定义的位置的 this 的指向，与如何调用无关。
- 不在函数里的 this 指向 window 。

应用场景：

- 临时是使用：
  - 事件处理函数
  - 异步处理函数
  - 临时性函数
- 为了绑定外层 this 的函数。
- 为了保持代码简洁，比如：数组中的回调函数。
- 对象的属性一般不用箭头函数

```javascript
(参数1， 参数2, ...) =>{
  //函数体
}

//只有一个参数
参数 => {
  //函数体
}

//只有一条返回语句，可以省略大括号和return关键字，返回对象需要用小括号括起来

(a, b) => a - b;
(x, y) => ({x : x, y : y, sum : a + b})
```

### 对象

#### 新增对象字面量语法：

1. 成员速写

```javascript
function person(name, id) {
	function doing() {
		console.log('我在学习');
	}

	return {
		name,
		id,
		doing,
	};
}
```

2. 方法速写

```javascript
const obj1 = {
	name: '关羽',
	id: '00',
	say() {
		console.log('我是' + this.name + ', 我的id是' + this.id + '。');
	},
};
```

3. 计算属性名

```javascript
let prop1 = 'name';
let prop2 = 'id';
let prop3 = 'production';

const obj3 = {
	[prop1]: '女娲',
	[prop2]: '02',
	[prop3]() {
		console.log('我叫' + this[prop1] + '，我的id是' + this[prop2]);
	},
};
```

####

#### Object 函数新增的 api

1. Object.is

用于判断两个数据是否相等，基本上和严格相等（===）差不多，除了这两点：

- NaN 和 NaN 相等
- +0 和 -0 不相等

2. Object.assign

用于混合对象，但 es7 的 ...obj 展开符更好用

3. Object.getOwnProperrtyNames 的枚举属性。

该方法以前就有，只不过 es6 明确要求了如何排序：
a. 先排数字，升序
b. 再排其他，按照书写顺序

4. Object.setPrototypeOf

设置某个对象的原型

#### 类

```javascript
function Animal(type, name, age, sex) {
	this.type = type;
	this.name = name;
	this.age = age;
	this.sex = sex;
}

Animal.prototype.print = function () {
	console.log('类型：' + this.type);
	console.log('名称：' + this.name);
	console.log('年龄：' + this.age);
	console.log('性别：' + this.sex);
};

const dog = new Animal('狗', '哈巴狗', '7岁', '公');
dog.print();
```

```javascript
class Animal {
	constructor(type, name, age, sex) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	print() {
		console.log('类型：' + this.type);
		console.log('名称：' + this.name);
		console.log('年龄：' + this.age);
		console.log('性别：' + this.sex);
	}
}

const dog = new Animal('狗', '哈士奇', '8岁', '雌');
dog.print();
```

传统构造函数的问题：

1. 属性和原型方法定义分离，可读性差。
2. 原型成员可枚举
3. 默认情况下，构造函数还是可以当作普通函数使用

类的特点：

1. 类声明不会被提升，与 let 和 const 一样，存在暂时性死区。
2. 类中所有代码都在严格模式下执行。
3. 类的所有方法都是不可枚举的。
4. 类中所有方法都无法被当作构造函数使用
5. 类的构造器必须使用 new 来调用。

##### 类的其他书写：

1. 可计算的成员名：
2. getter 和 setter

Object.defineProperty 可定义某个对象成员苏醒的读取和设置。  
getter 和 setter 设置的属性不在原型上

```javascript
const printName = 'print';
class Animal {
	constructor(type, name, age, sex) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.sex = sex;
	}

	set age(age) {
		if (typeof age !== 'number') {
			throw new TypeError('age 类型不是数字！');
		}
		if (age <= 0) {
			age = 0;
		}
		if (age >= 1000) {
			age = 1000;
		}
		this._age = age;
		console.log(this.age);
	}
	get age() {
		console.log(1);
		return this._age + '岁';
	}

	[printName]() {
		console.log('类型：' + this.type);
		console.log('名称：' + this.name);
		console.log('年龄：' + this.age);
		console.log('性别：' + this.sex);
	}
}

const dog = new Animal('狗', '哈士奇', 8, '雌');
dog[printName]();
```

3. 静态成员

`static width = 50；`
构造函数本身的成员，不能通过实例对象访问。

4. 字段初始化器（es7）

   1. 使用 static 的字段初始化器，是静态成员。
   2. 没用使用 static 的字段初始化器，添加的成员位于对象上。
   3. 箭头函数在字段初始化器位置上，指向构造器构造的对象上，但会占用多一点内存空间。

5. 类表达式

```javascript
const A = class {
	a = 1;
	b = 2;
};
const a = new A();
console.log(a);
```

6. 装饰器

##### 类的继承

关键字：

- extends
- super 两个作用

```javascript
class Animal {
	constructor(type, name, age, sex) {
		this.type = type;
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	print() {
		console.log('类型：' + this.type);
		console.log('名称：' + this.name);
		console.log('年龄：' + this.age);
		console.log('性别：' + this.sex);
	}
}
class Dog extends Animal {
	constructor(name, age, sex) {
		super('犬类', name, age, sex);
		this.color = '白色';
	}
	jiao() {
		console.log('汪汪');
	}
	print() {
		super.print();
		console.log(`颜色：${this.color}`);
	}
}
const dog1 = new Dog('哈士奇', 12, '雄');
```
