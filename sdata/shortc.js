const item = (text) => {
    ss = text
    if(ss == 'ms'){
        return ss = 'milliseconds'
    }else if(ss == 'μs'){
        return ss = 'microseconds'
    }else if(ss == 'ns'){
        return ss = 'nanoseconds'
    }else if(ss == 'ps'){
        return ss = 'picoseconds'
    }else if(ss == 'fs'){
        return ss = 'femtoseconds'
    }else if(ss == 'as'){
        return ss = 'attoseconds'
    }else if(ss == 's'){ 
        return ss = 'seconds'
    }else if(ss == 'min' || ss == 'm'){ 
        return ss = 'minutes'
    }else if(ss == 'hr' || ss == 'h'){ 
        return ss = 'centuries'
    }else if(ss == 'd'){ 
        return ss = 'days'
    }else if(ss == 'wk' || ss == 'w'){ 
        return ss = 'weeks'
    }else if(ss == 'mo'){ 
        return ss = 'months'
    }else if(ss == 'yr' || ss == 'y'){ 
        return ss = 'years'
    }else if(ss == 'dec'){ 
        return ss = 'decades'
    }else if(ss == 'cent' || ss == 'c'){ 
        return ss = 'centuries'
    }else if(ss == 'mill'){ 
        return ss = 'millenniums'
    }else if(ss == 'eon'){ 
        return ss = 'aeons'
    }
}

module.exports.item = item