var titles = [
    "Solutions",
    "Advancement",
    "Independence",
    "Prosperity"
];

var colors = [
    "#FFAB00",
    "#DD2C00",
    "#0091EA",
    "#00C853"
];

var i = 1;

$(document).ready(function() {
    setInterval(function() {
        var num_titles = titles.length;
        var title;

        if (i >= num_titles) {
            i = 0;
            title = titles[i];
            $("#title-container").hide().html(title).css("color", colors[i]).fadeIn(1000);
            i++;
        } else {
            title = titles[i];
            $("#title-container").hide().html(title).css("color", colors[i]).fadeIn(1000);
            i++;
        }
    }, 4000);
});