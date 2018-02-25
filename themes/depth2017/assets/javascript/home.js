var home = function($) {
    homeParallax();
};

jQuery(document).ready(home);

function homeParallax() {
    $(document).on('scroll', function() {
        var height = $(window).scrollTop();
        if( height > 250 ) {
            $('.work-section .block').removeClass('down');
        }
        if( height > 2250 ) {
            $('.office-section .block').removeClass('down');
        }
    })
}
