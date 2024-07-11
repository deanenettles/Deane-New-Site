/* ADDING Captions */

$(function(){

$('a > img[style]').each(function(){
    $el = $(this);
    var style = $el.attr('style');
    $el.attr('style','');
    $el.parent().attr('style',style);
}); //Moves the inline styles

$("img").each(function(){
    var title = this.alt;
    $(this).after('<div class="caption">'+ title +'</div>');
}); //Adds the dynamic captions.
}); 