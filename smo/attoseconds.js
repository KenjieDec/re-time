const set = (text) => {
    var item = parseInt(text)
    var titem = text
  var w = titem.replace(/[0-9]/g, '');
    let s = w.split(" ").join("")
    let yes = item*1000;
    if(item < 60 && item == 1){
        return yes;
    }else if(item > 1){
      throw TypeError('That\'s more than a attosecond!')
    }else if(item < 60 && item > 1){
      return yes;
    }else if(item <= 1){
      throw TypeError('That\'s even less than 2 attoseconds!')
    }
  }
  
  module.exports = {
  set
  }