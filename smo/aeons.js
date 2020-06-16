const set = (text) => {
  var item = parseInt(text)
  var titem = text
var w = titem.replace(/[0-9]/g, '');
  let s = w.split(" ").join("")
  let yes = item*1000;
  if(s == "aeon" && item < 60 && item == 1){
      return yes;
  }else if(s == "aeon" && item > 1){
    throw TypeError('That\'s more than a aeon!')
  }else if(s == "aeons" && item < 60 && item > 1){
    return yes;
  }else if(s == "aeons" && item <= 1){
    throw TypeError('That\'s less than 2 aeons!')
  }
}

module.exports = {
set
}