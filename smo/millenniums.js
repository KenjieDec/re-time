const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(item == 1){
      return yes;
  }else if(item > 1){
    throw TypeError('That\'s more than a millennium!')
  }else if(item < 999873.1 && item > 1){
    return yes;
  }else if(item == 999873.1){
    throw TypeError('That\'s a aeon!')
  }else if(item > 999873.1){
    throw TypeError('That\'s even more than a aeon!')
  }
}

module.exports = {
set
}