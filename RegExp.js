// RegExp.$1
//date.replace(
//   /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
//   '$1/$2/$3'
// )
//Reg practice\
const mulSrt = "@123\n@456\n@789"

console.log(mulSrt.replace(/^@\d/gm, 'HI'))

console.log(('@123@abc@').replace(/.@$/g, 'Q'))

console.log(('@123@abc@').replace(/^@./g, 'Q'))

console.log(('This is a boy').replace(/\Bis\b/g,'0'))

console.log(('hI I am lucY').replace(/\bhI/,'fsaf'))

var reg = /\bis\b/
new RegExp("hI")
// 'He is a boy'.replace('')
console.log('2016-09-12'.replace(/[0-9-]/g, 'A'))

console.log('a1b2d3x4z9ADSAAFDGDS'.replace(/[a-zA-Z]/g, 'Q'))

console.log('a1b2c3d4'.replace(/[abc]/g, 'X'))

console.log('a1b2c3d4'.replace(/[^abc]/g, 'X'))
/////////元字符////////

//  .元字符，匹配除了回車换行符以外的任意字符 = [^\r\n]

//  *元字符，不是字符，不是位置，是数量，*前边的内容可以连续重复使用任意次以使整个表达式得到匹配

//  \b，单词的开头或结尾，单词的分界处。

//  \d，匹配數字 = [0-9]
//  \D，匹配非數字 = [^0-9]

//  \s，匹配空白符 = [\t\n\x0B\f\r]
//  \S，匹配非空白符 = [^\t\n\x0B\f\r]

//  \w，單詞字符 = [a-zA-Z_0-9]
//  \W，非單詞字符 = [^a-zA-Z_0-9]

//  ^，匹配字符串的開始
//  $，匹配字符串的結束

//  g，全局匹配
//  m，多行

///////限定符/////////

//  *，重複零次或更多次
//  +，重複一次或更多次
//  ?，重複零次或一次
//{n}，重複n次
//{n,}，重複n次或多次
//{n,m}，重複n~m次

//ex:  Windows\d+ 匹配Window後面跟1個或更多數字  
//ex: ^\w+匹配一行的第一个单词(或整个字符串的第一个单词，具体匹配哪个意思得看选项设置)

//////////類//////////

//  在方括号里列出它们，
//  像[aeiou]就匹配任何一个英文元音字母，
//  像[.?!]匹配标点符号(.或?或!)。

//  指定一个字符范围
//  像[0-9]代表的含意与\d就是完全一致的：一位数字；
//  同理[a-z0-9A-Z_]也完全等同于\w（如果只考虑英文的话）。