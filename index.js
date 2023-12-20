// onload jquery
$(function() {
    ScrollReveal().reveal('.container', { delay: 500 , distance: '100px'});
    ScrollReveal().reveal('.heading', { delay: 500 , distance: '100px', scale : 2, });
    ScrollReveal().reveal('.ag-courses_item', { delay: 500 , distance: '100px', });
    
    $('.round').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});