---
title: js数组常用方法
description: A reference page in my new Starlight docs site.
---

<meta name="referrer" content="no-referrer" />

## jsarr

分类思路： 1.按类型 2. 是否改变原数组 3.遍历数组
静态方法（在构造器上的方法）：Array.of
原型方法：Array.prototype.slice.call(调用者)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/2899360/1682868701321-d74cc866-dbce-435f-bbd0-3590b37571b9.png#averageHue=%23fbfaf9&clientId=u321f1a53-97ab-4&from=paste&height=669&id=u162f26d4&originHeight=1200&originWidth=685&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=127445&status=done&style=none&taskId=u082125f2-d0c1-4a12-a37a-75def5aaa07&title=&width=382)

:::info
转字符串
:::

#### toString

转为字符串，扁平化数组

#### join

扁平化数组，只能扁平一层

:::info
修改：新增、删除（堆栈方法）
:::

#### push

往后添加一项
返回值：修改后的长度。

#### pop

删除数组最后一项
返回值：删除的值

#### unshift

首位添加一项
返回值：修改后的长度

#### shift

首位删除一项
返回值：删除的值

:::info
排序相关
:::

#### reverse

逆转数组
返回值：逆转后的原数组

#### sort

排序，可以改成随机排序
返回值：重新排序后的数组

:::info

#### 拼接相关

:::

#### concat

简单拼接，但拼接多维数组不会扁平化，一般要结合...拓展符
返回值：拼接后的数组

:::info
截取、删改
:::

#### slice

截取区间，[ 小,大 )，是负数的时候倒数。
返回值：截取后的数组区间

#### splice

操作原数组，参数 1：起始、增加、删除的位置，参数 2：删除的个数，参数 3：插入的值
返回值：删除后的原数组

:::info
索引相关
:::

#### indexOf

正序查找指定值的索引
返回值：值对应的索引，没有返回-1

#### lastIndexOf

倒序查找指定值的索引
返回值：值对应的索引，没有返回-1

#### includes

是否包含指定值
返回值：布尔值

#### find

查找符合要求的值，参数：条件函数
返回值：返回第一个符合条件的成员

#### findIndex

查找符合要求的值对应的索引，参数：条件函数
返回值：返回第一个符合条件的成员对应的索引

:::info
创建数组
:::

#### Array

有歧义几乎不用

> ES6 方法

#### Array.of

定义：返回由所有参数值组成的数组，如果没有参数，就返回一个空数组。
目的：Array.of() 出现的目的是为了解决上述构造器因参数个数不同，导致的行为有差异的问题。

```
let a = Array.of(4, 11, 8); // [4,11,8]
let a = Array.of(4); // [4]
```

#### Array.from

将类数组转成数组

#### 拓展符...

...是 Array.from 的封装

#### fill

填充数组，参数 1：填充的值，参数 2：起始位置，参数 3：结束位置。区间：左闭右开，

:::info
遍历相关
:::

> es5 遍历方法
> 除了 reduce，es5 这几个方法的参数基本一致

#### forEach

遍历数组。自动忽略稀疏项。第一个参数用了箭头函数，第二个参数无效。不能用 break 终止遍历。类数组调用方式[...arg].forEach()
参数：1. 一个方法，方法的参数依次是（item,index,arr) 。2.指定的上下文
没有返回值，return 啥都是 undefined

```javascript
arr.forEach((item, index, arr) => {
	console.log(item, index, arr);
});
```

#### map

作用：
参数：1. 一个方法，方法的参数依次是（item,index,arr) 。2.指定的上下文
返回值：映射后的新数组

```javascript
// map  有返回值
var arr = [1, 3, 5, 7];
var arr0 = ['a', 'b'];
var res = arr0.map(function (item, index, arr) {
	return item + this[index];
}, arr);
console.log(res);
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/2899360/1682941618574-7deaac91-faeb-4fa2-98d6-77ed6383764a.png#clientId=u67810595-3bc2-4&from=paste&height=19&id=ue5539635&originHeight=33&originWidth=408&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=2015&status=done&style=none&taskId=u0b1d2b55-0b00-46f1-9721-a55550c5aa6&title=&width=233.14285714285714)

#### filter

作用：过滤数组，筛选符合条件的项
参数：1. 一个方法，方法的参数依次是（item,index,arr) 。2.指定的上下文
返回值：新数组

```javascript
// filter  过滤，返回新数组
var arr = [1, 3, 5, 7, 9];
var res = arr.filter(function (item, index, arr) {
	return item > 3;
});
console.log('res : ', res);
```

#### some

作用：判断数组是否存在符合条件的项
参数：1. 一个方法，方法的参数依次是（item,index,arr) 。2.指定的上下文
返回值： 布尔值

```javascript
// some  判断数组是否存在符合条件的项
var arr = [1, 3, 5, 7, 9];
var res = arr.some(function (item, index, arr) {
	return item > 7;
});
console.log('res : ', res);
```

#### every

作用：判断数组的项是否全部符合条件。
参数：1. 一个方法，方法的参数依次是（item,index,arr) 。2.指定的上下文
返回值：布尔值

```javascript
//every 判断数组的项是否全部符合条件
var arr = [1, 3, 5, 7, 9];
var res = arr.every(function (item, index, arr) {
	return item > 7;
});
console.log('res : ', res);
```

#### reduce

#### redeuceRight

> es6 遍历方法

Object.keys、Object.values、Object.entries 是静态方法，这三个是在原型上的方法

#### keys

#### values

#### entries

```javascript
// 区别数组的使用
var arr = ['1', 2, 3, 4, 6, 7];

console.log('arr.keys() : ', arr.keys());
console.log('arr.values() : ', arr.values());
console.log('arr.entries() : ', arr.entries());

for (let key of arr.keys()) {
	console.log('key : ', key);
}

for (let value of arr.values()) {
	console.log('value : ', value);
}

for (let [key, value] of arr.entries()) {
	console.log(key, value);
}
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/2899360/1682938394454-4ab2f060-0d3e-4cf9-8067-447a3c68b420.png#averageHue=%23fdfcfc&clientId=uc6466a15-5e2a-4&from=paste&height=382&id=u5e3eb746&originHeight=669&originWidth=716&originalType=binary&ratio=1.75&rotation=0&showTitle=false&size=100450&status=done&style=none&taskId=u869262cf-a770-4f30-834b-f30c39300f3&title=&width=409.14285714285717)
