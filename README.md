### RE-TIMES

## WHAT IS RE-TIMES?
Re-Times is a package that helps you to change number to times, Up to Aeon(eon)!

## How to use
# Code:
```js
const retimes = require("re-times");
///Convert To Time in Number
console.log(retimes.number(value))
///Convert To Time in Text
console.log(retimes.number(string))
```
# Example:
```js
const retimes = require("re-times");
///Convert To Time in Number
console.log(retimes.number(1)) // 1000 ( 1 second )
console.log(retimes.number(60)) // 60000 ( 1 minute )
//Up to 1eon ( 1 Aeon )

///Convert To Time in Text
console.log(retimes.number(1)) // 1s
console.log(retimes.number(60)) // 1min
//Up to 1eon ( 1 Aeon )
```

## Download
```
npm i --save re-times
```