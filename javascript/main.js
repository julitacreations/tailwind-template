$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
});

// Automatic footer year update
document.getElementById("year").innerHTML = new Date().getFullYear();
// If you are using a different copyright for mobile, ensure to include the below. ID only works once
// document.getElementById("year-mob").innerHTML = new Date().getFullYear();