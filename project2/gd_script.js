//This is a jQuery file.
function show(){
    $(document).ready(function(){
        //hide my elements.
        $('.uno, .text1').hide();
        //start mouse over.
        $('.image1').hover(function (evt) {
            evt.preventDefault();
            // over
                $('.uno, .text1').show(2000);
            }, function () {
                // out
                $('.uno, .text1').hide(2000);
            }
        );
    });

    $(document).ready(function(){
        //hide my elements.
        $('.duo, .text2').hide();
        //start mouse over.
        $('.image2').hover(function (evt) {
            evt.preventDefault();
                // over
                $('.duo, .text2').show(2000);
            }, function () {
                // out
                $('.duo, .text2').hide(2000);
            }
        );
    });

    $(document).ready(function(){
        //hide my elements.
        $('.tre, .text3').hide();
        //start mouse over.
        $('.image3').hover(function (evt) {
            evt.preventDefault();
                // over
                $('.tre, .text3').show(2000);
            }, function () {
                // out
                $('.tre, .text3').hide(2000);
            }
        );
    });

    $(document).ready(function(){
        //hide my elements.
        $('.quattro, .text4').hide();
        //start mouse over.
        $('.image4').hover(function (evt) {
            evt.preventDefault();
                // over
                $('.quattro, .text4').show(2000);
            }, function () {
                // out
                $('.quattro, .text4').hide(2000);
            }
        );
    });

    /*$('.image1').on("touchstart", function(e){
        var touch = $(this);
        if(touch.hasClass('hover')) {
            return true;        
        }
        else{
            touch.addClass('hover');
            $('.image1').not(this).removeClass('hover');
            e.preventDefault();
            return false;
        }
    
    });*/
}

function mouseover(){
    //javascript.
    const image = document.querySelector('.image1');
    const texto = document.querySelector('.uno');

    image.addEventListener("click", () => {
        texto.classList.toggle("show");
    });
}