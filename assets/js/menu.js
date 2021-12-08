$(document).ready(function() {
  
    $(".menu-link").click(function(event) {
      event.preventDefault();
      $(".menu-overlay").toggleClass("open");
      $(".menu").toggleClass("open");
  
    });
  
    $(".buttondec").click(function(event) {
      $(".menu-overlay").removeClass("open");
      $(".menu").removeClass("open");
    });
      
    $(".nav-links1").click(function(event) {
      $(".menu-overlay").removeClass("open");
      $(".menu").removeClass("open");
    });
  
    $(".nav-links2").click(function(event) {
      $(".menu-overlay").removeClass("open");
      $(".menu").removeClass("open");
    });
  
    $(".nav-links3").click(function(event) {
      $(".menu-overlay").removeClass("open");
      $(".menu").removeClass("open");
    });
  
    $(".nav-links4").click(function(event) {
      $(".menu-overlay").removeClass("open");
      $(".menu").removeClass("open");
    });
  
  });
  