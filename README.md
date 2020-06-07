# RE-TIMES
Use re-times to turn number into time in **String** or **Milliseconds**

## Function
* Turn second to Milliseconds
* Turn Time ( Number in Second ) to Text Up to 

## Example:
```js
const retimes = require("re-times");
///Turn Number to Time in Milliseconds
retimes.number(1) // 1000 ( 1 second )
retimes.number(60) // 60000 ( 1 minute )


///Turn Number to Time in Text
retimes.text(1) // 1s
retimes.text(60) // 1min
``` 

## More Information:
```
s = Seconds
min = Minutes
hr = Hours
day = Days
wk = Week
mo = Months
yr = Years
dec = Decades
cent = Centuries
mill = Milleniums
eon = Aeons
```

## Install Cmd
```
npm i --save re-times
```
