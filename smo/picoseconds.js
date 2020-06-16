const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "picosecond" && item < 60 && item == 1){
      return yes;
  }else if(s == "picosecond" && item > 1){
    throw TypeError('That\'s more than a picosecond!')
  }else if(s == "picoseconds" && item < 10000 && item > 1){
    return yes;
  }else if(s == "picoseconds" && item <= 1){
    throw TypeError('That\'s even less than 2 picoseconds!')
  }else if(s == "picoseconds" && item == 1000){
    throw TypeError('That\'s a femtosecond!')
  }else if(s == "picoseconds" && item > 1000){
    throw TypeError('That\'s even more than a femtosecond!')
  }
}

module.exports = {
set
}