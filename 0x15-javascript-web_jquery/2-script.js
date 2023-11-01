// A JavaScript script that uses the jQuery API to change the color of the div#red_header to red on clicking

$('div#red_header').click(function (){
  $('header').css('color', '#FF0000');
});
