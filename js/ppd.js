jQuery(document).ready(function($){
    $('.container-ppd-features-outer:first').show();
    $('.logo-ppd:first').addClass('logo-ppd-active');

    $('.logo-ppd').hover(
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


        });


});