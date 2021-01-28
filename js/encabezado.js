$(document).ready(function(){
    $('body').bootstrapMaterialDesign();
    var altura = $(window).height();
    var anchura = $(window).width();
    $('#menuSuperior').height(altura*0.1);
    $('#hamburguesa').css("font-size", (altura*0.1)*0.6);
    $('#campana').css("font-size", (altura*0.1)*0.5);
    $('#numNotificaciones').css("font-size", (altura*0.1)*0.3);
});


function ajustaLogo(){
  var anchura = $(window).width();
  $('#imgLogo').css("width", (anchura*0.15));
}

function openNav() {
    document.getElementById("sideNavigation").style.width = "79%";
    document.getElementById("main").style.marginLeft = "79%";
    document.getElementById("main").style.backgroundColor = "#e0e0e0";
    document.getElementById("menuSuperior").style.backgroundColor = "#cfa31b";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.backgroundColor = "#fff";
    document.getElementById("menuSuperior").style.backgroundColor = "#e4b320";
}
