var show = true;
            
                
if (document.body.classList.contains('fp-viewing-2')) {
    $('.about-numbers__number').css('opacity', '1');
    $('.about-numbers__number').spincrement({
        thousandSeparator: "",
        duration: 1200
    });

    show = false;
}
