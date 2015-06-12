$(document).ready(function(){
  var x = { 
            'a': [ "a8", "b8", "c8" ],
            'b': [ "a7", "b7", "c7" ],
          };
  $.each( x, function( key, value ) {
    console.log("Value: " + x[key]);
  });
});
