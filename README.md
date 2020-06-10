# RE-TIMES
Use re-times to turn number into time in **String** or **Milliseconds**

## Function
* Turn second to Milliseconds
* Turn Time ( Number in Second ) to Text Up to 
* Turn specified time to Milliseconds ( Up to Aeons )

## Example:
** Turn Number to Time **
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
retimes.text(1, 0) // 1s
retimes.text(60, 0) // 1s
retimes.text(1, 1) // 1 Second
retimes.text(60, 1) // 1 Minute

``` 
** Turn Number to specified time in Milliseconds ( Up to Aeons ) **
```js
const retimes = require("re-times");

///Turn Number to specified time in Milliseconds ( Up to Aeons )
retimes.as(1) // 0.000000000000001
retimes.fs(1) // 0.000000000001
retimes.ps(1) // 0.000000001
retimes.ns(1) // 0.000001
retimes.μs(1) // 0.001
retimes.s(1) // 1000
retimes.min(1) // 60000
retimes.hr(1) // 3600000
retimes.day(1) // 86400000
retimes.wk(1) // 604800000
retimes.mo(1) // 2628000000
retimes.yr(1) // 31556952000
retimes.dec(1) // 315400000000
retimes.cent(1) /// 3153600000000
retimes.mill(1) // 31540000000000
retimes.eon(1) /// 31536000000000000000

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

## Found a Bug?
* <a href="https://discord.gg/j6Ya9dp" rel="nofollow"><img src="https://camo.githubusercontent.com/b12a95e20b7ca35f918c0ab5103fe56b6f44c067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d6f6e253230646973636f72642d3732383964612e737667" alt="Chat" data-canonical-src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" style="max-width:100%;"></a>

* <a href="https://github.com/KenjieDec/re-time/issues/new/">Create new Issue on Github</a>