const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "century" && item < 60 && item == 1){
      return yes;
  }else if(s == "century" && item > 1){
    throw TypeError('That\'s more than a century!')
  }else if(s == "centuries" && item < 10 && item > 1){
    return yes;
  }else if(s == "centuries" && item <= 1){
    throw TypeError('That\'s less than 2 centuries!')
  }else if(s == "centuries" && item == 10){
    throw TypeError('That\'s a millennium!')
  }else if(s == "centuries" && item > 10){
    throw TypeError('That\'s even more than a millennium!')
  }
}

module.exports = {
set
}