
$(document).ready(function () {
    $("#btn").click(function (event) {
      // changes background to red
      $("html").toggleClass("on");
     
      });
      $("#btn").click(function (event) {
      // changes button to red
      $("#toggle").toggleClass("red");
     
      });
      
      $("#btn").click(function (event) {
      // expands shadow around text and changes the color 
      $("#ball").toggleClass("expand");
      });
     //  Control switch for on and off 
     $("#btn").click(function (event) {
      // changes based on off or on
      $("h3").toggleClass("o");
      });
});
