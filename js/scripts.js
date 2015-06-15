$(document).ready(function(){
  document.getElementById("showRules").addEventListener(click, function(){
    document.getElementById("rulesData").style.display = "block";
  });
  document.getElementById("rulesClose").addEventListener(click, function(){
    document.getElementById("rulesData").style.display = "none";
  });
});
