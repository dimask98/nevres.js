</script>
    <style>
        #movieIframe {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
        }
        #movieIframe iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        #closeIframe {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 10px;
            background: red;
            color: white;
            cursor: pointer;
        }
        #openMovieSite {
            position: absolute;
            top: 20px;
            left: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="fl fa fa-sign-in btn btn-primary dots roomh border corner" style="padding:4px;max-width:180px;min-width:60px;" onclick="Send_Rjoin('oiud40azdi')">Aflam</div>

    <div id="movieIframe">
        <iframe src=""></iframe>
        <div id="closeIframe">إغلاق</div>
    </div>

    <script>
        $(document).ready(function() {
            var isIframeVisible = false;

            function showIframe() {
                $('#movieIframe iframe').attr('src', 'https://web3.topcinema.top/');
                $('#movieIframe').show();
                isIframeVisible = true;
            }

            function hideIframe() {
                $('#movieIframe').hide();
                $('#movieIframe iframe').attr('src', '');
                isIframeVisible = false;
            }

            $('#closeIframe').click(function() {
                hideIframe();
            });

            window.Send_Rjoin = function(roomId) {
                if (roomId === 'oiud40azdi') {
                    showIframe();
                }
            };
        });
    </script>
</body>
</html>











<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مشاهدة الأفلام</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        #movieIframe {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            overflow: hidden;
        }
        #movieIframe iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        #closeIframe {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 10px;
            background: red;
            color: white;
            cursor: pointer;
        }
        .hide-on-mobile {
            display: none;
        }
        @media (min-width: 768px) {
            .hide-on-mobile {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="fl fa fa-sign-in btn btn-primary dots roomh border corner hide-on-mobile" style="padding:4px;max-width:180px;min-width:60px;" onclick="Send_Rjoin('oiud40azdi')">Aflam</div>

    <div id="movieIframe">
        <iframe src=""></iframe>
        <div id="closeIframe">إغلاق</div>
    </div>

    <script>
        $(document).ready(function() {
            var isIframeVisible = false;

            function showIframe() {
                $('#movieIframe iframe').attr('src', 'https://web3.topcinema.top/');
                $('#movieIframe').show();
                isIframeVisible = true;
            }

            function hideIframe() {
                $('#movieIframe').hide();
                $('#movieIframe iframe').attr('src', '');
                isIframeVisible = false;
            }

            $('#closeIframe').click(function() {
                hideIframe();
            });

            window.Send_Rjoin = function(roomId) {
                if (roomId === 'oiud40azdi') {
                    showIframe();
                }
            };
        });
    </script>
</body>
</html>
