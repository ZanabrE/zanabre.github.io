function animation(){
    $(document).ready(function () {
        $('.dashboard1, .dashboard2, .dashboard3').hover(function () {
                // in
                $(this).stop().animate(
                    {
                        right: '0',
                        backgroundColor: 'rgba(207, 207, 199, 0.3)'
                    },
                    500,
                    'easeInSine'
                );// end animate.
            }, 
            function () {
                // out
                $(this).stop().animate(
                    {
                        right: '-92px',
                        backgroundColor: 'rgb(151, 146, 139)'
                    },
                    1500,
                    'easeOutBounce'
                );// end animate.
            }
        );// end hover.
    });// end function.
}