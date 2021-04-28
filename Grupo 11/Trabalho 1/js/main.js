function cadastrar(){
    var e = document.getElementById("inputEmail").value;
    var a = document.getElementById("inputAnimal").value;
    var n = document.getElementById("inputNome").value;
    console.log(e);
    console.log(a);
    console.log(n);
    if (e == "" || a == "" || n == ""){
        alert("Preencha todos os campos!")
    } else{

        var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

        var row = document.getElementById('table').rows.length;

        tableRef.insertRow().innerHTML = 
        "<th scope='row'>" + row +"</th>" + 
        "<td>" +e+ "</td>"+
        "<td>" +a+ "</td>"+
        "<td>" +n+ "</td>" +
        "<td><button type='button' class='btn btn-warning'>Edit</button> <span> </span>" + 
        "<button type='button' class='btn btn-danger' onclick='deletar(" + row + ")'>X</button> </td> ";
    }
}

function deletar(id){
    document.getElementById("table").deleteRow(id);
}

(function ($) {
    "use strict";
    
    //Wowjs
    new WOW().init();
    
    
    // Button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    //Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
        } else {
            $('.nav-bar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });



})(jQuery);