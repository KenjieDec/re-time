const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "hour" && item < 60 && item == 1){
      return yes;
  }else if(item > 1){
    throw TypeError('That\'s more than a hour!')
  }else if(item < 24 && item > 1){
    return yes;
  }else if(item <= 1){
    throw TypeError('That\'s even less than 2 hours!')
  }else if(item == 24){
    throw TypeError('That\'s a day!')
  }else if(item > 24){
    throw TypeError('That\'s even more than a day!')
  }
}

module.exports = {
set
}