$(document).on('ready', function() {
    $('textarea').hide();
    $('.editable').on('click', function() {
        var newText = $(this).text();
        $(this).hide();
        $(this).siblings('textarea').show();
        $(this).siblings('textarea').focus();
        $(this).siblings('textarea').val(newText);
    });

    $('textarea').blur(function(){
        var newText = $(this).val();
        $(this).siblings('p').text(newText);
        $(this).hide();
        $(this).siblings('p').show();
    });
});