const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "decade" && item < 60 && item == 1){
      return yes;
  }else if(s == "decade" && item > 1){
    throw TypeError('That\'s more than a decade!')
  }else if(s == "decades" && item < 10 && item > 1){
    return yes;
  }else if(s == "decades" && item <= 1){
    throw TypeError('That\'s less than 2 decades!')
  }else if(s == "decades" && item == 10){
    throw TypeError('That\'s a century!')
  }else if(s == "decades" && item > 10){
    throw TypeError('That\'s even more than a century!')
  }
}

module.exports = {
set
}