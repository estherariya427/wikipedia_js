$("document").ready(function() {
$("#searchTerm").on("keypress" , function(e){
  if(e.which == 13) {
    var searchTerm = $("#searchTerm").val();
    var api = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;
  $.getJSON(api, function(data) {

    $('#output').html('');
    for (var i=data[1].length - 1; i >= 0 ; i--) {
    $('#output').prepend("<div><div class='well'><a href= "+data[3][i]+"><h3>" +data[1][i]+ "</h3>"+"<p>" +data[2][i]+ "</p></a></div></div>");
  }
});
  return (false);
  }
});
$("#search").on("click", function(){
  var searchTerm = $('#searchTerm').val();
    var api = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm;
  $.getJSON(api, function(data) {

    $('#output').html('');
    for (var i=data[1].length - 1; i >= 0 ; i--) {
    $('#output').prepend("<div><div class='well'><a href= "+data[3][i]+"><h4>" +data[1][i]+ "</h4>"+"<p>" +data[2][i]+ "</p></a></div></div>");
  }
  });
});
});
