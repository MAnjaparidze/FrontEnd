//#region 
// ------------ ჯეიქუერის მივამატებთ ჩვენს პლაგინს ------------- //

// BAD - (მაინც აბრუნებს რაღაცას)
/* 
$.fn.myPlugin = function () {
    // logic
    console.log('myPlugin');
}
*/


// BETTER -  ამ შემთხვევაში დამალულია closure-ში, მინუსია ის რომ მხოლოდ ერთი პლაგინის გაწერა შეგვიძლია
/* 
(function ($) {
    $.fn.myPlugin = function () {
        // logic
        console.log('myPlugin 2nd way');
    }
})(jQuery)
*/

// THE BEST - საშუალებას გვაძლევს რამდენიმე პლაგინი გავუწეროთ
// (function ($) {
//     $.extend($.fn, {
//         myPlugin() {
//             // logic
//             console.log('myPlugin 3rd way');
//         },
//         myPlugin2() {
//             // logic
//             console.log('myPlugin2 3rd way');
//         },
//     });
// })(jQuery)

// ----------------------------------------------------------------------------------- //

(function ($) {
    $.fn.styleElement = function (options) {
        let config = $.extend({
            text: 'styleElement Default Text',
            color: 'indianred',
            fontStyle: null,
            fontSize: '20px',
            fontFamily: 'sans-serif',
            backgroundColor: '#c6b5c0',
            padding: '10px',
        }, options)
        return this.each(function () {
            $(this).text(config.text);
            if (config.color) {
                $(this).css('color', config.color);
            }
            if (config.fontStyle) {
                $(this).css('font-style', config.fontStyle);
            }
            if (config.fontSize) {
                $(this).css('font-size', config.fontSize);
            }
            if (config.fontFamily) {
                $(this).css('font-family', config.fontFamily);
            }
            if (config.backgroundColor) {
                $(this).css('background-color', config.backgroundColor);
            }
            if (config.padding) {
                $(this).css('padding', config.padding);
            }
        })
    }
})(jQuery)