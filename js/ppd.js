jQuery(document).ready(function($){
    $('.container-ppd-features-outer:first').show();
    $('.logo-ppd:first').addClass('logo-ppd-active');

/*    $('.logo-ppd').hover(
        function(){
            $('.logo-ppd:first').removeClass('logo-ppd-active');
            var features = $(this).find('img').data('features');
            features = '#' + features;

            if ($(features).is('visible')){

            } else {
                $('.container-ppd-features-outer').hide();
                $(features).show();
            }

        },function(){


        });*/

    $('.logo-ppd').click(function(){
            $('.logo-ppd:first').removeClass('logo-ppd-active');
            var features = $(this).find('img').data('features');
            features = '#' + features;

            if ($(features).is('visible')){

            } else {
                $('.container-ppd-features-outer').hide();
                $(features).show();
            }

        });


    $('ul.ppd-category').each(function(){
        $(this).find('li:first').addClass('active').show();
    });

    $('.container-ppd-assets').each(function(){
        $(this).find(' ul.ppd-asset li:first').addClass('active').show();
    });


    $('ul.ppd-category li').click(function(){

        var listParent = $(this).closest('ul');
        var listItems = $(listParent).find('li').removeClass('active');

        $(this).addClass('active');


        var indexAsset = $(this).parent().children().index(this);
        var parentAssets = $(this).closest(".row").find('.container-ppd-assets');
        var listAssetsAll = $(parentAssets).find('.ppd-asset li');
        var listAssets = $(parentAssets).find('.ppd-asset:eq(' + indexAsset +')');

        $(listAssetsAll).hide();
        $(listAssets).find('li').show();

    })


});