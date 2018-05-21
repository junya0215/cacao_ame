if(!Array.from){
  Array.from = function(list){
    var arr = [];
    for(var i =0; i< list.length; i++){
      arr.push(list[i]);
    }
    return arr;
  };
}