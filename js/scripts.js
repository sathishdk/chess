$(document).ready(function(){
  var x = [ 1, 2, 3 ];
  $.each( x, function( index, value ) {
    console.log( "index", index, "value", value );
  });
});
