const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "millennium" && item < 60 && item == 1){
      return yes;
  }else if(s == "millennium" && item > 1){
    throw TypeError('That\'s more than a millennium!')
  }else if(s == "millenniums" && item < 999873.1 && item > 1){
    return yes;
  }else if(s == "millenniums" && item <= 1){
    throw TypeError('That\'s less than 2 millenniums!')
  }else if(s == "millenniums" && item == 999873.1){
    throw TypeError('That\'s a aeon!')
  }else if(s == "millenniums" && item > 999873.1){
    throw TypeError('That\'s even more than a aeon!')
  }
}

module.exports = {
set
}