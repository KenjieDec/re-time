const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "minute" && item < 60 && item == 1){
      return yes;
  }else if(s == "minute" && item > 1){
    throw TypeError('That\'s more than a minute!')
  }else if(s == "minutes" && item < 60 && item > 1){
    return yes;
  }else if(s == "minutes" && item <= 1){
    throw TypeError('That\'s less than 2 minutes!')
  }else if(s == "minutes" && item == 60){
    throw TypeError('That\'s an hour!')
  }else if(s == "minutes" && item > 60){
    throw TypeError('That\'s even more than an hour!')
  }
}

module.exports = {
set
}