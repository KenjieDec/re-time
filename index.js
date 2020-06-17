
const string = (value, op) => {

    if(isNaN(value)) return;
    const negat = Math.sign(value)
    if(negat == -1) return;
    var time = 0
    var time = 0
    timenum = value;
       if(op === true || op === 1){
        if(timenum >= 0.000000000000000000001 && timenum < 0.000000000000000001){
            var timev = `${timenum*1000000000000000000000} Xeptoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000000} Zeptosecond`
            return timev;
        }else if(timenum >= 0.000000000000000001 && timenum < 0.000000000000001){
            var timev = `${timenum*1000000000000000000} Attoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Attosecond`
            return timev;
        }else if(timenum >= 0.000000000000001 && timenum < 0.000000000001){
            var timev = `${timenum*1000000000000000000} Femtoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Femtosecond`
            return timev;
        }else if(timenum >= 0.000000000001 && timenum < 0.000000001){
            var timev = `${timenum*1000000000000000000} Picoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Picosecond`
            return timev;
        }else if(timenum >= 0.000000001 && timenum < 0.0000001){
            var timev = `${timenum*1000000000000000000} Nanoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Nanosecond`
            return timev;
        }else if(timenum >= 0.0000001 && timenum < 1){
            var timev = `${timenum*1000000000000000000} Microseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Microsecond`
            return timev;
        }else if(timenum == 0){
            var timev = `0 Second`
            return timev;
        }else if(timenum >= 1 && timenum < 60){
                var timev = `${timenum} second`
                if(timenum > 1) var timev = `${timenum} seconds`;
                return timev;
            }else if(timenum >= 60 && timenum < 3600){
                var timev = `${timenum/60}minute`
                var time = timenum % 60;
                var name = "minutes"
                var secondname = "seconds"
                var timenumcut = timenum/60
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "minute"
                while(item == "false"){
                    if(time == 0){
                  if(timenumfirst == count.toString()){
                    if(time == 1) secondname = "second"
                      var timev = `${timenumfirst} ${name}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
            }else{
                if(timenumfirst == count.toString()){
                    if(time == 1) secondname = "second"
                    var timev = `${timenumfirst} ${name} ${time} ${secondname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
              }
            }
        }
            }else if(timenum >= 3600 && timenum < 86400){
                var timev = ``
                var timevv = timenum / 3600
                var time = Math.round(timevv / 60)
                var time2 = timenum % 60
                var name = "Hours"
                var secondname = "Minutes"
                var thirdname = "Seconds"
                var timenumcut = timenum/3600
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Hour"
                while(item == "false"){
                    if(time == 0 && time2 > 0 ){
                        if(time == 1 || time == 0) secondname = "Minute"
                        if(time2 == 1 || time2 == 0) thirdname = "Second"
                  if(timenumfirst == count.toString()){
                      var timev = `${timenumfirst} ${name} ${time} ${secondname} and ${time2} ${thirdname}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
            }else if(time == 0 && time2 == 0){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
           }else{
                if(timenumfirst == count.toString()){
                    if(time == 1 || time == 0) secondname = "Minute"
                    if(time2 == 1 || time2 == 0) thirdname = "Second"
                    var timev = `${timenumfirst} ${name} ${time} ${secondname} and ${time2} ${thirdname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
                }
            }
        }
            }else if(timenum >= 86400 && timenum < 604800){
                var timev = ``
                var timevv = timenum % 86400
                var time = Math.round(timevv / 3600)
                var name = "Days"
                var secondname = "Hours"
                var timenumcut = timenum/86400
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Day"
                while(item == "false"){
                    if(time == 0){
                        if(time == 1 || time == 0) secondname = "Hour"
                  if(timenumfirst == count.toString()){
                      var timev = `${timenumfirst} ${name}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
           }else{
                if(timenumfirst == count.toString()){
                    if(time == 1 || time == 0) secondname = "Hour"
                    var timev = `${timenumfirst} ${name} and ${time} ${secondname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
            }
        }
    }
            }else if(timenum >= 604800 && timenum < 2628000){
                var timev = ``
                var name = "Weeks"
                var timenumcut = timenum/604800
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Week"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 2628000 && timenum < 31556952){
                var timev = ``
                var name = "Months"
                var timenumcut = timenum/2628000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Month"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31556952 && timenum < 3153600000){
                var timev = ``
                var name = "Years"
                var timenumcut = timenum/31556952
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Year"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 315400000 && timenum < 315400000){
                var timev = ``
                var name = "Decades"
                var timenumcut = timenum/315400000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Decade"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 3153600000 && timenum < 31540000000){
                var timev = ``
                var name = "Centuries"
                var timenumcut = timenum/3153600000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Century"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31540000000 && timenum < 31536000000000000){
                var timev = ``
                var name = "Millenniums"
                var timenumcut = timenum/31540000000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Millennium"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31536000000000000){
                var timev = ``
                var name = "Aeons"
                var timenumcut = timenum/31536000000000000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Aeon"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }
        }else{
        if(timenum >= 0.000000000000000001 && timenum < 0.000000000000001){
            var timev = `${timenum*1000000000000000000}as`
            return timev;
        }else if(timenum >= 0.000000000000001 && timenum < 0.000000000001){
            var timev = `${timenum*1000000000000000}fs`
            return timev;
        }else if(timenum >= 0.000000000001 && timenum < 0.000000001){
            var timev = `${timenum*1000000000000}ps`
            return timev;
        }else if(timenum >= 0.000000001 && timenum < 0.0000001){
            var timev = `${timenum*1000000000}ns`
            return timev;
        }else if(timenum >= 0.000001 && timenum < 1){
            var timev = `${timenum*1000000}μs`
            return timev;
        }else if(timenum >= 1 && timenum < 60){
            var time = Math.round(timenum)
            var timev = `${time}s`
            return timev;
        }else if(timenum >= 60 && timenum < 3600){
            var time = Math.round(timenum/60)
            var timev = `${time}min`
            return timev;
        }else if(timenum >= 3600 && timenum < 86400){
            var time = Math.round(timenum/3600)
            var timev = `${time}hr`
            return timev;
        }else if(timenum >= 86400 && timenum < 604800){
            var time = Math.round(timenum/86400)
            var timev = `${time}day`
            return timev;
        }else if(timenum >= 604800 && timenum < 2628000){
            var time = Math.round(timenum/604800)
            var timev = `${time}wk`
            return timev;
        }else if(timenum >= 2628000 && timenum < 31556952){
            var time = Math.round(timenum/2628000)
            var timev = `${time}mo`
            return timev;
        }else if(timenum >= 31556952 && timenum < 3153600000){
            var time = Math.round(timenum/31556952)
            var timev = `${time}yr`
            return timev;
        }else if(timenum >= 315400000 && timenum < 315400000){
            var time = Math.round(timenum/315400000)
            var timev = `${time}dec`
            return timev;
        }else if(timenum >= 3153600000 && timenum < 31540000000){
            var time = Math.round(timenum/3153600000)
            var timev = `${time}cent`
            return timev;
        }else if(timenum >= 31540000000 && timenum < 31536000000000000){
            var time = Math.round(timenum/31540000000)
            var timev = `${time}mill`
            return timev;
        }else if(timenum >= 31536000000000000){
            var time = Math.round(timenum/31536000000000000)
            var timev = `${time}eon`
            return timev;
        }
    }
};

const text = (value, op) => {

    if(isNaN(value)) return;
    const negat = Math.sign(value)
    if(negat == -1) return;
    var time = 0
    var time = 0
    timenum = value;
       if(op === true || op === 1){
        if(timenum >= 0.000000000000000000001 && timenum < 0.000000000000000001){
            var timev = `${timenum*1000000000000000000000} Xeptoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000000} Zeptosecond`
            return timev;
        }else if(timenum >= 0.000000000000000001 && timenum < 0.000000000000001){
            var timev = `${timenum*1000000000000000000} Attoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Attosecond`
            return timev;
        }else if(timenum >= 0.000000000000001 && timenum < 0.000000000001){
            var timev = `${timenum*1000000000000000000} Femtoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Femtosecond`
            return timev;
        }else if(timenum >= 0.000000000001 && timenum < 0.000000001){
            var timev = `${timenum*1000000000000000000} Picoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Picosecond`
            return timev;
        }else if(timenum >= 0.000000001 && timenum < 0.0000001){
            var timev = `${timenum*1000000000000000000} Nanoseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Nanosecond`
            return timev;
        }else if(timenum >= 0.0000001 && timenum < 1){
            var timev = `${timenum*1000000000000000000} Microseconds`
            if(timev == 1) timev = `${timenum*1000000000000000000} Microsecond`
            return timev;
        }else if(timenum == 0){
            var timev = `0 Second`
            return timev;
        }else if(timenum >= 1 && timenum < 60){
                var timev = `${timenum} second`
                if(timenum > 1) var timev = `${timenum} seconds`;
                return timev;
            }else if(timenum >= 60 && timenum < 3600){
                var timev = `${timenum/60}minute`
                var time = timenum % 60;
                var name = "minutes"
                var secondname = "seconds"
                var timenumcut = timenum/60
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "minute"
                while(item == "false"){
                    if(time == 0){
                  if(timenumfirst == count.toString()){
                    if(time == 1) secondname = "second"
                      var timev = `${timenumfirst} ${name}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
            }else{
                if(timenumfirst == count.toString()){
                    if(time == 1) secondname = "second"
                    var timev = `${timenumfirst} ${name} ${time} ${secondname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
              }
            }
        }
            }else if(timenum >= 3600 && timenum < 86400){
                var timev = ``
                var timevv = timenum / 3600
                var time = Math.round(timevv / 60)
                var time2 = timenum % 60
                var name = "Hours"
                var secondname = "Minutes"
                var thirdname = "Seconds"
                var timenumcut = timenum/3600
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Hour"
                while(item == "false"){
                    if(time == 0 && time2 > 0 ){
                        if(time == 1 || time == 0) secondname = "Minute"
                        if(time2 == 1 || time2 == 0) thirdname = "Second"
                  if(timenumfirst == count.toString()){
                      var timev = `${timenumfirst} ${name} ${time} ${secondname} and ${time2} ${thirdname}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
            }else if(time == 0 && time2 == 0){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
           }else{
                if(timenumfirst == count.toString()){
                    if(time == 1 || time == 0) secondname = "Minute"
                    if(time2 == 1 || time2 == 0) thirdname = "Second"
                    var timev = `${timenumfirst} ${name} ${time} ${secondname} and ${time2} ${thirdname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
                }
            }
        }
            }else if(timenum >= 86400 && timenum < 604800){
                var timev = ``
                var timevv = timenum % 86400
                var time = Math.round(timevv / 3600)
                var name = "Days"
                var secondname = "Hours"
                var timenumcut = timenum/86400
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Day"
                while(item == "false"){
                    if(time == 0){
                        if(time == 1 || time == 0) secondname = "Hour"
                  if(timenumfirst == count.toString()){
                      var timev = `${timenumfirst} ${name}`;
                      item = "true"
                      return timev;
                  }else if(timenumfirst != count.toString()){
                    var co = count +  1
                    co.toString()
                    count = co
                }
           }else{
                if(timenumfirst == count.toString()){
                    if(time == 1 || time == 0) secondname = "Hour"
                    var timev = `${timenumfirst} ${name} and ${time} ${secondname}`;
                    item = "true"
                    return timev;
                }else if(timenumfirst != count.toString()){
                  var co = count +  1
                  co.toString()
                  count = co
            }
        }
    }
            }else if(timenum >= 604800 && timenum < 2628000){
                var timev = ``
                var name = "Weeks"
                var timenumcut = timenum/604800
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Week"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 2628000 && timenum < 31556952){
                var timev = ``
                var name = "Months"
                var timenumcut = timenum/2628000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Month"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31556952 && timenum < 3153600000){
                var timev = ``
                var name = "Years"
                var timenumcut = timenum/31556952
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Year"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 315400000 && timenum < 315400000){
                var timev = ``
                var name = "Decades"
                var timenumcut = timenum/315400000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Decade"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 3153600000 && timenum < 31540000000){
                var timev = ``
                var name = "Centuries"
                var timenumcut = timenum/3153600000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Century"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31540000000 && timenum < 31536000000000000){
                var timev = ``
                var name = "Millenniums"
                var timenumcut = timenum/31540000000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Millennium"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }else if(timenum >= 31536000000000000){
                var timev = ``
                var name = "Aeons"
                var timenumcut = timenum/31536000000000000
                var timenumfirst = Math.trunc(timenumcut)
                var item = "false"
                var count = 1
                if(timenumfirst == 1) name = "Aeon"
                while(item == "false"){
                if(timenumfirst == count.toString()){
                     var timev = `${timenumfirst} ${name}`;
                     item = "true"
                     return timev;
                 }else if(timenumfirst != count.toString()){
                   var co = count +  1
                   co.toString()
                   count = co
               }
              }
            }
        }else{
        if(timenum >= 0.000000000000000001 && timenum < 0.000000000000001){
            var timev = `${timenum*1000000000000000000}as`
            return timev;
        }else if(timenum >= 0.000000000000001 && timenum < 0.000000000001){
            var timev = `${timenum*1000000000000000}fs`
            return timev;
        }else if(timenum >= 0.000000000001 && timenum < 0.000000001){
            var timev = `${timenum*1000000000000}ps`
            return timev;
        }else if(timenum >= 0.000000001 && timenum < 0.0000001){
            var timev = `${timenum*1000000000}ns`
            return timev;
        }else if(timenum >= 0.000001 && timenum < 1){
            var timev = `${timenum*1000000}μs`
            return timev;
        }else if(timenum >= 1 && timenum < 60){
            var time = Math.round(timenum)
            var timev = `${time}s`
            return timev;
        }else if(timenum >= 60 && timenum < 3600){
            var time = Math.round(timenum/60)
            var timev = `${time}min`
            return timev;
        }else if(timenum >= 3600 && timenum < 86400){
            var time = Math.round(timenum/3600)
            var timev = `${time}hr`
            return timev;
        }else if(timenum >= 86400 && timenum < 604800){
            var time = Math.round(timenum/86400)
            var timev = `${time}day`
            return timev;
        }else if(timenum >= 604800 && timenum < 2628000){
            var time = Math.round(timenum/604800)
            var timev = `${time}wk`
            return timev;
        }else if(timenum >= 2628000 && timenum < 31556952){
            var time = Math.round(timenum/2628000)
            var timev = `${time}mo`
            return timev;
        }else if(timenum >= 31556952 && timenum < 3153600000){
            var time = Math.round(timenum/31556952)
            var timev = `${time}yr`
            return timev;
        }else if(timenum >= 315400000 && timenum < 315400000){
            var time = Math.round(timenum/315400000)
            var timev = `${time}dec`
            return timev;
        }else if(timenum >= 3153600000 && timenum < 31540000000){
            var time = Math.round(timenum/3153600000)
            var timev = `${time}cent`
            return timev;
        }else if(timenum >= 31540000000 && timenum < 31536000000000000){
            var time = Math.round(timenum/31540000000)
            var timev = `${time}mill`
            return timev;
        }else if(timenum >= 31536000000000000){
            var time = Math.round(timenum/31536000000000000)
            var timev = `${time}eon`
            return timev;
        }
    }
};

const number = (value) => {

    timenum = value
    
    if(timenum >= 1 && timenum < 60){
        var time = timenum*1000
        return time;
    }else if(timenum >= 60 && timenum < 3600){
        var time = timenum*1000
        return time;
    }else if(timenum >= 3600 && timenum < 86400){
        var time = timenum*1000
         return time;
    }else if(timenum >= 86400 && timenum < 604800){
        var time = timenum*1000
        return time;
    }else if(timenum >= 604800 && timenum < 2628000){
        var time = timenum*1000
        return time;
    }else if(timenum >= 2628000 && timenum < 31556952){
        var time = timenum*1000
        return time;
    }else if(timenum >= 31556952 && timenum < 3153600000){
        var time = timenum*1000
        return time;
    }else if(timenum >= 315400000 && timenum < 315400000){
        var time = timenum*1000
        return time;
    }else if(timenum >= 3153600000 && timenum < 31540000000){
        var time = timenum*1000
        return time;
    }else if(timenum >= 31540000000 && timenum < 31536000000000000){
        var time = timenum*1000
        return time;
    }else if(timenum >= 31536000000000000){
        var time = timenum*1000
        return time;
    }
};
const zeptoseconds = (second) => {
    if(second < 1) return;
    return second/1000000000000000000
}
const attoseconds = (second) => {
    if(second < 1) return;
    return second/1000000000000000
}
const femtoseconds = (second) => {
    if(second < 1) return;
    return second/1000000000000
}
const picoseconds = (second) => {
    if(second < 1) return;
    return second/1000000000
}
const nanoseconds = (second) => {
    if(second < 1) return;
    return second/1000000
}
const microseconds = (second) => {
    if(second < 1) return;
    return second/1000
}
const seconds = (second) => {
    if(second < 1) return;
    return second*1000
}
const minutes = (second) => {
    if(second < 1) return;

    return second*60
}
const hours = (second) => {
    if(second < 1) return;

    return second*3600
}
const days = (second) => {
    if(second < 1) return;

    return second*86400
}
const weeks = (second) => {
    if(second < 1) return;

    return second*604800
}
const months = (second) => {
    if(second < 1) return;

    return second*2628000
}
const years = (second) => {
    if(second < 1) return;

    return second*31556952
}
const decades = (second) => {
    if(second < 1) return;

    return second*315400000
}
const centuries = (second) => {
    if(second < 1) return;

    return second*3153600000
}
const millenniums = (second) => {
    if(second < 1) return;

    return second*31540000000
}
const aeons = (second) => {
    if(second < 1) return;

    return second*31536000000000000
}
const zeptosecond = (second) => {
    if(second < 1) return;
    return second/1000000000000000000;
}
const attosecond = (second) => {
    if(second < 1) return;
    return second/1000000000000000
}
const femtosecond = (second) => {
    if(second < 1) return;
    return second/1000000000000
}
const picosecond = (second) => {
    if(second < 1) return;
    return second/1000000000
}
const nanosecond = (second) => {
    if(second < 1) return;
    return second/1000000
}
const microsecond = (second) => {
    if(second < 1) return;
    return second/1000
}
const second = (second) => {
    if(second < 1) return;
    return second*1000
}
const minute = (second) => {
    if(second < 1) return;

    return second*60
}
const hour = (second) => {
    if(second < 1) return;

    return second*3600
}
const day = (second) => {
    if(second < 1) return;

    return second*86400
}
const week = (second) => {
    if(second < 1) return;

    return second*604800
}
const month = (second) => {
    if(second < 1) return;

    return second*2628000
}
const year = (second) => {
    if(second < 1) return;

    return second*31556952
}
const decade = (second) => {
    if(second < 1) return;

    return second*315400000
}
const century = (second) => {
    if(second < 1) return;

    return second*3153600000
}
const millennium = (second) => {
    if(second < 1) return;

    return second*31540000000
}
const aeon = (second) => {
    if(second < 1) return;

    return second*31536000000000000
}
const zs = (second) => {
    if(second < 1) return;
    return second/1000000000000000000;
}
const as = (second) => {
    if(second < 1) return;
    return second/1000000000000000
}
const fs = (second) => {
    if(second < 1) return;
    return second/1000000000000
}
const ps = (second) => {
    if(second < 1) return;
    return second/1000000000
}
const ns = (second) => {
    if(second < 1) return;
    return second/1000000
}
const μs = (second) => {
    if(second < 1) return;
    return second/1000
}
const s = (second) => {
    if(second < 1) return;
    return second*1000
}
const min = (second) => {
    if(second < 1) return;

    return second*60
}
const hr = (second) => {
    if(second < 1) return;

    return second*3600
}
const wk = (second) => {
    if(second < 1) return;

    return second*604800
}
const mo = (second) => {
    if(second < 1) return;

    return second*2628000
}
const yr = (second) => {
    if(second < 1) return;

    return second*31556952
}
const dec = (second) => {
    if(second < 1) return;

    return second*315400000
}
const cent = (second) => {
    if(second < 1) return;

    return second*3153600000
}
const mill = (second) => {
    if(second < 1) return;

    return second*31540000000
}
const eon = (second) => {
    if(second < 1) return;

    return second*31536000000000000
}
function set(text) {
    const { existsSync } = require('fs')
    var shortcut = require('./sdata/shortc')
    var datatime = require('./sdata/datatime')
    var titem = text.toLowerCase()
	var w = titem.replace(/[0-9]/g, '');
    let s = w.split(" ").join("")
    let ss = shortcut.item(s) || s
    if(ss == 'century') ss = 'centuries'
    if(!ss == ss.endsWith('s')) ss = `${ss}s`
    const exi = `node_modules/re-times/smo/${ss}.js`
    if(!existsSync(exi)) throw TypeError(`Can't find specified time`)
    const datatimes = datatime(ss)
    const time = require(`./smo/${ss}`)
    var num = parseInt(text)
    var numtex = num + " " + s
    const items = time.set(numtex)
    return datatimes;
}

module.exports = {
    string,
    number,
    text,
    zeptosecond,
    attosecond,
    femtosecond,
    picosecond,
    nanosecond,
    microsecond,
    second,
    minute,
    hour,
    day,
    week,
    month,
    year,
    decade,
    century,
    millennium,
    aeon,
    zeptoseconds,
    attoseconds,
    femtoseconds,
    picoseconds,
    nanoseconds,
    microseconds,
    seconds,
    minutes,
    hours,
    days,
    weeks,
    months,
    years,
    decades,
    centuries,
    millenniums,
    aeons,
    zs,
    as,
    fs,
    ps,
    ns,
    μs,
    s,
    min,
    hr,
    wk,
    mo,
    yr,
    dec,
    cent,
    mill,
    eon,
    set,
}

