$( document ).ready( function() {

  var colors = {
    Amber : "#FFAB00",
    Blue : "#2962FF",
    Cyan : "#00B8D4",
    DeepOrange : "#DD2C00",
    DeepPurple : "#6200EA",
    Green : "#00C853",
    Indigo : "#304FFE",
    LightBlue : "#0091EA",
    Lime : "#AEEA00",
    Orange : "#FF6D00",
    Pink : "#C51162",
    Purple : "#AA00FF",
    Red : "#D50000",
    Teal : "#00BFA5",
    Yellow : "#FFD600"
  }

  var colorArray = [colors.Amber, colors.Blue, colors.Cyan, colors.DeepOrange, colors.DeepPurple, colors.Green, colors.Indigo, colors. LightBlue, colors.Lime, colors.Orange, colors.Pink, colors.Purple, colors.Red, colors.Teal, colors.Yellow];

  function get_public_repos(tag)
  {

    $( '#github-public-repos' ).html( "" );
    var html = "<h1>Github Public Projects <small>(Click on a project to learn more!)</small></h1>";

    $.ajax( {
      	url : "https://api.github.com/users/samuel-belcastro/repos",
      	dataType : "jsonp",
      	success : function ( returndata ) {
          console.log(tag);
        	$.each( returndata.data, function ( i, item ) {

            j = Math.floor((Math.random() * (colorArray.length - 1)));
          	html += '<div class="project-container">' +
            	'<div class="project-title" id="' + this.name + '" style="background-color: ' + colorArray[j] + '">' + this.name.replace(/\-/g, " ") + '</div>' +
              '<div class="project-desc" id="' + this.name + '2">' +
            	'<p>' + 'Description: ' + this.description + '</p>' +
            	'<p>' + 'Language: ' + this.language + '</p>' +
            	'<p>' + 'Updated: ' + this.updated_at + '</p>' +
            	'<p>' + 'Owner: ' + this.owner.login + '</p>' +
              '</div>' +
            	'</div>';
            } );

          html += '<hr />';
        $( '#github-public-repos' ).append( html );
       } // close success handler
       });

    }

    $(document.body).click(function(event) {
      clicked = event.target;

      if(clicked.classList[0] === "tag")
        get_public_repos($(event.target).text());

      //Sliding descriptions
      var descId = "#" + clicked.id + "2";
      if($(descId).css('display') === 'none')
      {
        $(descId).slideDown();
      }
      else
      {
        $(descId).slideUp();
      }
    });

    get_public_repos()

}); //close document ready
