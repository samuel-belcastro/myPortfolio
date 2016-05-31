var titles = [
  "Web Developer",
  "CDL Techranger",
  "UCF Student"
];

var colors = [
  "#00C853",
  "#0091EA",
  "#FFAB00"
];

var i=1;

$(document).ready(function() {
  setInterval(function(){
    var num_titles = titles.length;
    var title;

    if(i >= num_titles)
    {
      i = 0;
      title = titles[i];
      $("#title").hide().html(title).css("color", colors[i]).fadeIn(1000);
      i++;
    }
    else
    {
      title = titles[i];
      $("#title").hide().html(title).css("color", colors[i]).fadeIn(1000);
      i++;
    }
  }, 4000);
});
