# RE-TIMES
Use re-times to turn number into time in **String** or **Milliseconds**

## Function
* Turn second to Milliseconds
* Turn Time ( Number in Second ) to Text Up to 
* Turn Number to Milliseconds in time ( Up to Aeons )

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
```js
const retimes = require("re-times");

///Turn number to Milliseconds ( Up to Aeons )
retimes.second(1) // 1000
retimes.minutes(1) // 60000
retimes.hours(1) // 3600000
retimes.days(1) // 86400000
retimes.weeks(1) // 604800000
retimes.months(1) // 2628000000
retimes.years(1) // 31556952000
retimes.decades(1) // 315400000000
retimes.centuries(1) /// 3153600000000
retimes.millenniums(1) // 31540000000000
retimes.aeons(1) /// 31536000000000000000
```

## More Information:
```
as = Attoseconds
fs = Femtoseconds
ps = Picoseconds
ns = Nanoseconds
μs = Microseconds
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

## Issue Reports
* <a href="https://discord.gg/j6Ya9dp" rel="nofollow"><img src="https://camo.githubusercontent.com/b12a95e20b7ca35f918c0ab5103fe56b6f44c067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d6f6e253230646973636f72642d3732383964612e737667" alt="Chat" data-canonical-src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" style="max-width:100%;"></a>

* <a href="https://github.com/KenjieDec/re-time/issues/new/">clone</a>