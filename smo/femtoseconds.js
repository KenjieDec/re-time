const set = (text) => {
    var item = parseInt(text)
    var titem = text
  var w = titem.replace(/[0-9]/g, '');
    let s = w.split(" ").join("")
    let yes = item*1000;
    if(s == "femtosecond" && item < 60 && item == 1){
        return yes;
    }else if(item > 1){
      throw TypeError('That\'s more than a femtosecond!')
    }else if(item < 10000 && item > 1){
      return yes;
    }else if(item <= 1){
      throw TypeError('That\'s even less than 2 femtoseconds!')
    }else if(item == 1000){
      throw TypeError('That\'s a attosecond!')
    }else if(item > 1000){
      throw TypeError('That\'s even more than a attosecond!')
    }
  }
  
  module.exports = {
  set
  }