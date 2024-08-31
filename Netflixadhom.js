$(document).ready(function() {
    var newLabel = $('<label>', {
        text: 'NETFLIX',
        css: {
            'background-color': 'black',
            'color': 'red',
            'width': '98.7%',
            'margin': '4px 0px',
            'padding': '8px',
            'border-radius': '16px',
            'font-size': '14px',
            'font-family': "'El Messiri', 'جزيرة', sans-serif",
            'text-align': 'center',
            'font-weight': '300',
            'cursor': 'pointer'
        },
        class: 'label tc border btn label-info fl'
    });

    newLabel.on('click', function() {
        var iframe = $('<iframe>', {
            src: 'https://web2.topcinema.cam/',
            css: {
                'width': '100%',
                'height': '100%',
                'border': '0',
                'position': 'fixed',
                'top': '0',
                'left': '0',
                'z-index': '10000',
                'background-color': 'white'
            },
            id: 'cinemaIframe'
        });

        var closeButton = $('<button>', {
            text: 'إغلاق',
            css: {
                'position': 'fixed',
                'top': '10px',
                'right': '10px',
                'z-index': '10001',
                'padding': '10px',
                'background-color': 'red',
                'color': 'white',
                'border': 'none',
                'border-radius': '5px',
                'cursor': 'pointer'
            },
            click: function() {
                iframe.remove();
                closeButton.remove();
                minimizeButton.remove();
                maximizeButton.remove();
            }
        });

        var minimizeButton = $('<button>', {
            text: 'تصغير',
            css: {
                'position': 'fixed',
                'top': '10px',
                'right': '80px',
                'z-index': '10001',
                'padding': '10px',
                'background-color': '#f0ad4e',
                'color': 'white',
                'border': 'none',
                'border-radius': '5px',
                'cursor': 'pointer'
            },
            click: function() {
                iframe.css({
                    'width': '300px',
                    'height': '200px',
                    'position': 'fixed',
                    'bottom': '10px',
                    'right': '10px'
                });
                minimizeButton.hide();
                maximizeButton.show();
            }
        });

        var maximizeButton = $('<button>', {
            text: 'تكبير',
            css: {
                'position': 'fixed',
                'top': '10px',
                'right': '80px',
                'z-index': '10001',
                'padding': '10px',
                'background-color': '#5bc0de',
                'color': 'white',
                'border': 'none',
                'border-radius': '5px',
                'cursor': 'pointer',
                'display': 'none'
            },
            click: function() {
                iframe.css({
                    'width': '100%',
                    'height': '100%',
                    'position': 'fixed',
                    'top': '0',
                    'left': '0'
                });
                maximizeButton.hide();
                minimizeButton.show();
            }
        });

        $('body').append(iframe).append(closeButton).append(minimizeButton).append(maximizeButton);
    });

    $('#more').append(newLabel);

    // Add the message below NETFLIX label with glowing and colorful effect
    var message = $('<div>', {
        html: 'تنويه: <strong>لتجنب ظهور الإعلانات، قم بتحميل (متصفح بريف) وادخل منه للاستمتاع بمشاهدة خالية من الإزعاج. نتمنى لك تجربة ممتعة!</strong> 🎥✨',
        css: {
            'color': 'white',
            'font-size': '12px',
            'text-align': 'center',
            'margin': '10px 0',
            'font-weight': 'bold',
            'position': 'relative',
            'display': 'inline-block',
            'background': 'black',
            'padding': '5px',
            'border-radius': '8px',
            'font-family': "'جزيرة', sans-serif",
            'text-shadow': '0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00, 0 0 20px #00FF00',
            'animation': 'glow 1.5s ease-in-out infinite'
        }
    });

    $('#more').append(message);

    // Add CSS for animation
    $('<style>').text(`
        @keyframes glow {
            0% { text-shadow: 0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00, 0 0 20px #00FF00; }
            50% { text-shadow: 0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF, 0 0 40px #FF00FF; }
            100% { text-shadow: 0 0 5px #00FF00, 0 0 10px #00FF00, 0 0 15px #00FF00, 0 0 20px #00FF00; }
        }
    `).appendTo('head');
});


$(document).ready(function() {
    $('#l1 > button, #l2 > button').click(function() {
        alert('مرحبا عزيزي / عزيزتي، نود إخباركم أنه تم تفعيل المايكات بالعام. أخفض الصوت إذا كان الوضع غير مناسب لديك 🌹');
    });
});
