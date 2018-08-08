// BAD
/*
$.fn.myPlugin = function(){
    // logic
    console.log("MyPlugin");
}
*/

/*
( function($){
    $.fn.myPlugin = function(){
        console.log("MyPlugin 2nd way");
    }
})(jQuery)

*/

// ( function($){
//     $.extend($.fn, {
//         myPlugin(){
//             console.log("hello MyPlugin");
//         },
//         myPlugin2(){
//             console.log("hello MyPlugin2");
//         }
//     });
// })(jQuery)

( function($){
    $.fn.styleElement = function(options){

        let config = $.extend( {
            text: 'styleElement Default Text',
            color: 'white',
            fontStyle: null,
            fontSize: '16px',
            backgroundColor: 'purple',
            padding: '7px',
        }, options); 

        return this.each( function() {

            $(this).text( config.text );
            
            if( config.color ){
                $(this).css('color', config.color);
            }

            if( config.fontStyle ){
                $(this).css('font-style', config.fontStyle);
            }
            
            if( config.fontSize ){
                $(this).css('font-size', config.fontSize);
            }

            if( config.backgroundColor ){
                $(this).css('background-color', config.backgroundColor);
            }

            if( config.padding ){
                $(this).css('padding', config.padding);
            }
            
        });
    }
})(jQuery)