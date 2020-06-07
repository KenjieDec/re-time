const string = (value, op) => {

    var time = 0
    timenum = value;
       if(op === true){
            if(timenum >= 1 && timenum < 60){
                var timev = `${timenum}second`
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
                var time = Math.floor(timevv / 60)
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
                var time = Math.floor(timevv / 3600)
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
        if(timenum >= 1 && timenum < 60){
            var timev = `${timenum}s`
            return timev;
        }else if(timenum >= 60 && timenum < 3600){
            var timev = `${timenum/60}min`
            return timev;
        }else if(timenum >= 3600 && timenum < 86400){
            var timev = `${timenum/3600}hr`
            return timev;
        }else if(timenum >= 86400 && timenum < 604800){
            var timev = `${timenum/86400}day`
            return timev;
        }else if(timenum >= 604800 && timenum < 2628000){
            var timev = `${timenum/604800}wk`
            return timev;
        }else if(timenum >= 2628000 && timenum < 31556952){
            var timev = `${timenum/2628000}mo`
            return timev;
        }else if(timenum >= 31556952 && timenum < 3153600000){
            var timev = `${timenum/31556952}yr`
            return timev;
        }else if(timenum >= 315400000 && timenum < 315400000){
            var timev = `${timenum/315400000}dec`
            return timev;
        }else if(timenum >= 3153600000 && timenum < 31540000000){
            var timev = `${timenum/3153600000}cent`

        }else if(timenum >= 31540000000 && timenum < 31536000000000000){
            var timev = `${timenum/31540000000}mill`
            return timev;
        }else if(timenum >= 31536000000000000){
            var timev = `${timenum/31536000000000000}eon`
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
        var time = timenum
        return time;
    }
};

module.exports = {
    string,
    number,
    text,
}