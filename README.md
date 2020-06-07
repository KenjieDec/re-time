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
retimes.text(1, true) // 1 Second
retimes.text(60, true) // 1 Minute
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

## Bug Reports
<a href="https://discord.gg/j6Ya9dp" rel="nofollow"><img src="https://camo.githubusercontent.com/b12a95e20b7ca35f918c0ab5103fe56b6f44c067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d6f6e253230646973636f72642d3732383964612e737667" alt="Chat" data-canonical-src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" style="max-width:100%;"></a>
