// onload jquery
$(function() {
    ScrollReveal().reveal('.container', { delay: 500 });
    ScrollReveal().reveal('.heading', { delay: 500    });
    ScrollReveal().reveal('.ag-courses_item', { delay: 500 });
    
    $('.round').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});