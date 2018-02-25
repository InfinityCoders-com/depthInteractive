var project = function($) {
    placeImages();
    $(window).on('resize', placeImages);
};

jQuery(document).ready(project);

function placeImages() {
    var left = $('.container').offset().left;
    var translateLeft = left + 15;
    var translateRight = left + 35;
    $('.left').css('transform', 'translateX(-'+ translateLeft + 'px)');
    $('.right').css('transform', 'translateX('+ translateRight + 'px)');
}
