$(document).ready(function() {
  {
    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?=', function(json) {
      author = json.quoteAuthor;
      text = "\"" + json.quoteText + "\"";
      $("#quotes").html(text);
      $(".author").html(author);
    });
  }

  var author = " ";
  var text = " ";
  $("#but").on("click", function() {
    $.getJSON('https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?', function(json) {
      author = json.quoteAuthor;
      text = "\"" + json.quoteText + "\"";
      $("#quotes").html(text);
      $(".author").html(author);
    });
  });

  $(".tweet").on("click", function() {
    
    var q = 'https://twitter.com/intent/tweet?text=' + text + ' ' + author + ' ';
    window.open(q, 'twitter');
  });
})