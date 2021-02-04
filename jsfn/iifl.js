var abc=(function() {
   var abc=0;
   return function(){
        abc+=1;
       console.log(abc);
   }
   //console.log(abc);
})();
abc();
abc();