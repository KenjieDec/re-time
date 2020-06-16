const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "second" && item < 60 && item == 1){
      return yes;
  }else if(s == "second" && item > 1){
    throw TypeError('That\'s more than a second!')
  }else if(s == "seconds" && item < 60 && item > 1){
    return yes;
  }else if(s == "seconds" && item <= 1){
    throw TypeError('That\'s less than 2 seconds!')
  }else if(s == "seconds" && item == 60){
    throw TypeError('That\'s a minute!')
  }else if(s == "seconds" && item > 60){
    throw TypeError('That\'s even more than a minute!')
  }
}

module.exports = {
set
}