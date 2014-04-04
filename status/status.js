$(document).ready(function() {
  // Note: this would figure out the RFC number of the document it's running in,
  // pull the data with AJAX, then update the DOM with the info, including links.
  var wss = $('#withScriptStatus');
  var obs = ['2817', '5785', '6266', '6585'];
  var links = obs.map(function(x) {
    return "<a href='http://tools.ietf.org/html/rfc" + x + "'>RFC " + x + "</a>";
  });
  wss.html("<span>Obsoleted by: " + links.join(',') + "</span>");
});
