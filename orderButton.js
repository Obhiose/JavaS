$('.order').on('click', function () {
    const button = $(this);
    if (!button.hasClass('animate')) {
        button.addClass('animate');
        
        // Remove 'animate' after the animation ends
        button.on('animationend', function () {
            button.removeClass('animate');
            button.off('animationend'); // Remove the listener
        });
    }
});
