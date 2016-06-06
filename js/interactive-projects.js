$( document ).ready( function() {

  function get_public_repos()
  {

    $( '#github-public-repos' ).html( "" );
    var html = "<h2>Github Public Projects</h2>";

    $.ajax( {
      	url : "https://api.github.com/users/samuel-belcastro/repos",
      	dataType : "jsonp",
      	success : function ( returndata ) {
        	$.each( returndata.data, function ( i, item ) {
          	html += '<li>' +
            	'<h3><a href="' + this.html_url + '">' + this.name.replace(/\-/g, " ") + '</a></h3>' +
            	'<ul>' +
            	'<li>' + 'Description: ' + this.description + '</li>' +
            	'<li>' + 'Language: ' + this.language + '</li>' +
            	'<li>' + 'Updated: ' + this.updated_at + '</li>' +
            	'<li>' + 'Owner: ' + this.owner.login + '</li>' +
            	'</ul>' +
            	'</li>';

        	} );
          html += '<hr />';
        $( '#github-public-repos' ).append( html );
       } // close success handler
       });

    }

    get_public_repos()

}); //close document ready
