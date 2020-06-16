const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "day" && item < 60 && item == 1){
      return yes;
  }else if(s == "day" && item > 1){
    throw TypeError('That\'s more than a day!')
  }else if(s == "days" && item < 7 && item > 1){
    return yes;
  }else if(s == "days" && item <= 1){
    throw TypeError('That\'s less than 2 days!')
  }else if(s == "days" && item == 7){
    throw TypeError('That\'s a week!')
  }else if(s == "days" && item > 7){
    throw TypeError('That\'s even more than a week!')
  }
}

module.exports = {
set
}