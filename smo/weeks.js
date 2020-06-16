const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "week" && item < 60 && item == 1){
      return yes;
  }else if(s == "week" && item > 1){
    throw TypeError('That\'s more than a week!')
  }else if(s == "weeks" && item < 4.3452380952381 && item > 1){
    return yes;
  }else if(s == "weeks" && item <= 1){
    throw TypeError('That\'s less than 2 weeks!')
  }else if(s == "weeks" && item == 4.3452380952381){
    throw TypeError('That\'s a month!')
  }else if(s == "weeks" && item > 4.3452380952381){
    throw TypeError('That\'s even more than a month!')
  }
}

module.exports = {
set
}