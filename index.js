var retimes = {
string: function(value, op) {

    if(isNaN(value)) return;
    negat = Math.sign(value)
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
},

text: function(value, op) {

    if(isNaN(value)) return;
    negat = Math.sign(value)
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
},

number: function (value) {

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
},
zeptoseconds: function (second) {
    if(second < 1) return;
    return second/1000000000000000000
},
attoseconds: function (second) {
    if(second < 1) return;
    return second/1000000000000000
},
femtoseconds: function (second) {
    if(second < 1) return;
    return second/1000000000000
},
picoseconds: function (second) {
    if(second < 1) return;
    return second/1000000000
},
nanoseconds: function (second) {
    if(second < 1) return;
    return second/1000000
},
microseconds: function (second) {
    if(second < 1) return;
    return second/1000
},
seconds: function (second) {
    if(second < 1) return;
    return second*1000
},
minutes: function (second) {
    if(second < 1) return;

    return second*60
},
hours: function (second) {
    if(second < 1) return;

    return second*3600
},
days: function (second) {
    if(second < 1) return;

    return second*86400
},
weeks: function (second) {
    if(second < 1) return;

    return second*604800
},
months: function (second) {
    if(second < 1) return;

    return second*2628000
},
years: function (second) {
    if(second < 1) return;

    return second*31556952
},
decades: function (second) {
    if(second < 1) return;

    return second*315400000
},
centuries: function (second) {
    if(second < 1) return;

    return second*3153600000
},
millenniums: function (second) {
    if(second < 1) return;

    return second*31540000000
},
aeons: function (second) {
    if(second < 1) return;

    return second*31536000000000000
},
zeptosecond: function (second) {
    if(second < 1) return;
    return second/1000000000000000000;
},
attosecond: function (second) {
    if(second < 1) return;
    return second/1000000000000000
},
femtosecond: function (second) {
    if(second < 1) return;
    return second/1000000000000
},
picosecond: function (second) {
    if(second < 1) return;
    return second/1000000000
},
nanosecond: function (second) {
    if(second < 1) return;
    return second/1000000
},
microsecond: function (second) {
    if(second < 1) return;
    return second/1000
},
second: function (second) {
    if(second < 1) return;
    return second*1000
},
minute: function (second) {
    if(second < 1) return;

    return second*60
},
hour: function (second) {
    if(second < 1) return;

    return second*3600
},
day: function (second) {
    if(second < 1) return;

    return second*86400
},
week: function (second) {
    if(second < 1) return;

    return second*604800
},
month: function (second) {
    if(second < 1) return;

    return second*2628000
},
year: function (second) {
    if(second < 1) return;

    return second*31556952
},
decade: function (second) {
    if(second < 1) return;

    return second*315400000
},
century: function (second) {
    if(second < 1) return;

    return second*3153600000
},
millennium: function (second) {
    if(second < 1) return;

    return second*31540000000
},
aeon: function (second) {
    if(second < 1) return;

    return second*31536000000000000
},
zs: function (second) {
    if(second < 1) return;
    return second/1000000000000000000
},
as: function (second) {
    if(second < 1) return;
    return second/1000000000000000
},
fs: function (second) {
    if(second < 1) return;
    return second/1000000000000
},
ps: function (second) {
    if(second < 1) return;
    return second/1000000000
},
ns: function (second) {
    if(second < 1) return;
    return second/1000000
},
μs: function (second) {
    if(second < 1) return;
    return second/1000
},
s: function (second) {
    if(second < 1) return;
    return second*1000
},
min: function (second) {
    if(second < 1) return;

    return second*60
},
hr: function (second) {
    if(second < 1) return;

    return second*3600
},
wk: function (second) {
    if(second < 1) return;

    return second*604800
},
mo: function (second) {
    if(second < 1) return;

    return second*2628000
},
yr: function (second) {
    if(second < 1) return;

    return second*31556952
},
dec: function (second) {
    if(second < 1) return;

    return second*315400000
},
cent: function (second) {
    if(second < 1) return;

    return second*3153600000
},
mill: function (second) {
    if(second < 1) return;

    return second*31540000000
},
eon: function (second) {
    if(second < 1) return;

    return second*31536000000000000
},
set: function(text) {
    const digits_only = string => [...string].every(c => '0123456789+-=?/`\\[]{}()*&^%$#@!~`><.,'.includes(c));
    if(text.length == 1 || digits_only(text)) throw TypeError(`Can't find specified time Type.`)
    const { existsSync } = require('fs')
    var shortcut = require('./sdata/shortc')
    var datatime = require('./sdata/datatime')
    var titem = text.toLowerCase()
	var w = titem.replace(/[0-9]/g, '');
    let s = w.split(" ").join("")
    let ss = shortcut.item(s)
    if(ss == 'century') ss = 'centuries'
    if(!ss == ss.endsWith('s')) ss = `${ss}s`
    const exi = `node_modules/re-times/smo/${ss}.js`
    if(!existsSync(exi)) throw TypeError(`Can't find specified time, please contact owner on Discord ( PBRs#8817 ) for errors!`)
    const datatimes = datatime(ss)
    const time = require(`./smo/${ss}`)
    var num = parseInt(text)
    var numtex = num + " " + s
    const items = time.set(numtex)
    return datatimes;
    },
    
}

module.exports = retimes