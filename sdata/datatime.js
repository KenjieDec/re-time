const item = (text) => {
    var item = 1
    var ss = text
    if(ss == 'zeptoseconds'){
        item = 0.000000000000000000001
    }else if(ss == 'attoseconds'){
        item = 0.000000000000000001
    }else if(ss == 'femtoseconds'){
        item = 0.000000000000001
    }else if(ss == 'picoseconds'){
        item = 0.000000000001
    }else if(ss == 'nanoseconds'){
        item = 0.000000001
    }else if(ss == 'microseconds'){
        item = 0.000001
    }else if(ss == 'milliseconds'){
        item = 0.001
    }else if(ss == 'seconds'){
        item = 1
    }else if(ss == 'minutes'){
        item = 60
    }else if(ss == 'hours'){
        item = 3600
    }else if(ss == 'days'){
        item = 86400
    }else if(ss == 'weeks'){
        item = 604800
    }else if(ss == 'months'){
        item = 2628000
    }else if(ss == 'years'){
        item = 31556952
    }else if(ss == 'decades'){
        item = 315400000
    }else if(ss == 'centuries'){
        item = 3153600000
    }else if(ss == 'millenniums'){
        item = 31540000000
    }else if(ss == 'aeons'){
        item = 31536000000000000
    }
    return item*1000
}

module.exports = item