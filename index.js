// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
console.log(name.toUpperCase());

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var arr = sentence.split(" ");
var newStr = "";

arr.forEach((item,index,arr)=> { 
    newStr += item[0].toUpperCase()+item.substring(1)+" ";  
})
console.log(newStr)

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
console.log(money.substring(1));
