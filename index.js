// 阅读以上推荐链接，了解所有的JavaScript字符串方法。
/*1.charAt()  返回指定位置的字符
2.charCodeAt()  返回在指定的位置的字符的 Unicode 编码。
3.concat()  用于连接两个或多个字符串。
4.fromCharCode()  接受一个指定的 Unicode 值，然后返回一个字符串
5.indexOf()  返回指定字符串在字符串中首次出现的位置。匹配不到则返回-1
6.lastIndexOf() 返回指定字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索
7.match()  在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
8.replace()  用于在字符串中用一些字符替换另一些字
9.search()   用于检索字符串中指定的子字符串
10.slice()  提取字符串的某个部分，并以新的字符串返回被提取的部分。
11.split()  用于把一个字符串分割成字符串数组。
12.substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符
13.substring() 方法用于提取字符串中介于两个指定下标之间的字符
14.toLocaleUpperCase() / toLocaleLowerCase()  用于字符串转换大小写（与下面的方法方法仅在某些外国小语种有差别）
15.toUpperCase() / toLowerCase()   用于字符串转换大小写*/


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
