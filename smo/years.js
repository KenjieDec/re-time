const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(item == 1){
      return yes;
  }else if(item > 1){
    throw TypeError('That\'s more than a year!')
  }else if(item < 10 && item > 1){
    return yes;
  }else if(item <= 1){
    throw TypeError('That\'s less than 2 years!')
  }else if(item == 10){
    throw TypeError('That\'s a decade!')
  }else if(item > 10){
    throw TypeError('That\'s even more than a decade!')
  }
}

module.exports = {
set
}