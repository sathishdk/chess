$(document).ready(function(){
  
  var rows = {
            'row8' : ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'],
            'row8' : ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
            'row8' : ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
            'row8' : ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
            'row8' : ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
            'row8' : ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
            'row8' : ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
            'row8' : ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1']
  };
  
  $.each(rows, function(key, value){
    console.log(key, value);
  });
  
  function addRows(num){
    
    if (num%2 === 0){
      for (var i=-2; i<10; i++){
        if(i%2 === 0){
         $('.row8').append( "<div class='col-md-1 " + row8[i] + "'></div>" );  
        }
        else{
          $('.row8').append( "<div class='col-md-1 black " + row8[i] + "'></div>" ); 
        }
      }
    }
    else{
      for (var i=-2; i<10; i++){
        if(i%2 === 0){
          $('.row8').append( "<div class='col-md-1 black " + row8[i] + "'></div>" ); 
        }
        else{
          $('.row8').append( "<div class='col-md-1 " + row8[i] + "'></div>" );
        }
      }
    }
  }
  
});
