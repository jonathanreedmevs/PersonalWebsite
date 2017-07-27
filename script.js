var heightForParagraphCentering;
var widthForParagraphCentering;
$(document).ready(function(){
    $('#propic').each(function(){
        // console.log($(this).prop('height'));
        widthForParagraphCentering = $(this).prop('width');
        heightForParagraphCentering = $(this).prop('height');});
    
    $('#intro-col').css('text-align', 'center');

});

