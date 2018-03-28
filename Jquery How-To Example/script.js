$(document).ready(function(){
    $("#hide").click(function(){
        $(".imageone").hide();
    });
    $("#show").click(function(){
        $(".imageone").show();
    });

    $(".screen").hover(function(){
        $(".screen").fadeOut(1000);
  });
    $(".imghover").hover(function(){
      $(".screen").fadeIn(1000);
});

$(".moreinfo").hover(function(){
    $("a",).css("background-color", "blue");
    $("a",).css("color", "white");
});

$("#clickhere").click(function(){
    $(".moreinfo").show();
});

$("#replacetext").hover(function(){
$("#replace").html("<p>Repeat the process and enjoy!</p>");
});







});
