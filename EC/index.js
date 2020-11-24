$(function(){
    var cart1 = document.getElementById("cart1");
    var cart1result = cart1.first;
    var cart2 = document.getElementById("cart2");
    var cart2result = cart2.ok ;
    var top = $('#check1').offset().top;



    if(cart1result.value === ""){
        $('#check1').css('opacity', '0');
    }else{
        $('#check1').css('opacity', '1');
    }



    if(cart2result.value === ""){
        $('#check2').css('display', 'none');
    }else{
        $('#check2').css('display', 'inline'); 
    }




});


