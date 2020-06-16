const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "hour" && item < 60 && item == 1){
      return yes;
  }else if(s == "hour" && item > 1){
    throw TypeError('That\'s more than a hour!')
  }else if(s == "hours" && item < 24 && item > 1){
    return yes;
  }else if(s == "hours" && item <= 1){
    throw TypeError('That\'s less than 2 hours!')
  }else if(s == "hours" && item == 24){
    throw TypeError('That\'s a day!')
  }else if(s == "hours" && item > 24){
    throw TypeError('That\'s even more than a day!')
  }
}

module.exports = {
set
}