
$(document).ready(function(){
    $('body').bootstrapMaterialDesign();
    var altura = $(window).height();
    var anchura = $(window).width();
    $('#contenedor').height(altura);
    $('#contenedor').width(anchura);
});



function ajustaImg(){
  var imgLogo = document.getElementById("logo");
  var altura = $(window).height();
  var anchura = $(window).width();
  imgLogo.width = anchura*(0.2);
}


$(document).on('click', '#toggle-password', function(){
  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $('#password');
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
