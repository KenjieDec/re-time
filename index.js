const string = (val) => {


    timenum = val

    if(timenum >= 1 && timenum < 60){
        var timev = `${timenum}s`
        return timev;
    }else if(timenum >= 60 && timenum < 3600){
        var timev = `${time/60}min`
        return timev;
    }else if(timenum >= 3600 && timenum < 86400){
        var timev = `${time/3600}hr`
        return timev;
    }else if(timenum >= 86400 && timenum < 604800){
        var timev = `${time/86400}day`
        return timev;
    }else if(timenum >= 604800 && timenum < 2628000){
        var timev = `${time/604800}wk`
        return timev;
    }else if(timenum >= 2628000 && timenum < 31556952){
        var timev = `${time/2628000}mo`
        return timev;
    }else if(timenum >= 31556952 && timenum < 3153600000){
        var timev = `${time/31556952}yr`
        return timev;
    }else if(timenum >= 315400000 && timenum < 315400000){
        var timev = `${time/315400000}dec`
        return timev;
    }else if(timenum >= 3153600000 && timenum < 31540000000){
        var timev = `${time/3153600000}cent`

    }else if(timenum >= 31540000000 && timenum < 31536000000000000){
        var timev = `${time/31540000000}mill`
        return timev;
    }else if(timenum >= 31536000000000000){
        var timev = `${time/31536000000000000}eon`
        return timev;
    }
};

const number = (val) => {

    timenum = val

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
    number
}