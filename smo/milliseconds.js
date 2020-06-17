const set = (text) => {
    var item = parseInt(text)
    var titem = text
  var w = titem.replace(/[0-9]/g, '');
    let s = w.split(" ").join("")
    let yes = item*1000;
    if(item == 1){
        return yes;
    }else if(item > 1){
      throw TypeError('That\'s more than a millisecond!')
    }else if(item < 1000 && item > 1){
      return yes;
    }else if(item == 1000){
      throw TypeError('That\'s a microsecond!')
    }else if(item > 1000){
      throw TypeError('That\'s even more than a microsecond!')
    }
  }
  
  module.exports = {
  set
  }