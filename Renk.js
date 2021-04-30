$(` 	<link rel="stylesheet" href="bootstrap.min.css">
			<link rel="stylesheet" href="bootstrap-theme.min.css">
			 
			 
			<link rel="stylesheet" href="style.css">
			<link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="grupes.css">
			 
			  
			 
			<script>
				var updateTypingT = false;
				var animateCSST = false;
				var loginT = false;
				var loginOlT = false;
				var ritT = false;
				
			</script>
			<style>
				

			</style>



			

					<style>
						* {
							font-family: serif;
							font-weight: bold;
							text-shadow: none!important;
							font-size: 15px !important;
						}
						.ae {
							border: 1px solid black;
							border-radius: 2px;
							margin: 1px;
							float: left; 
							padding: 6px 2px;
						}
						.pmsgc {
							background-color: rgba(0, 77, 255, 0.08)!important;
						}
						.hmsg {
							background-color: linen!important;
						}
						.label-primary,
						.btn-primary,
						.bg-primary,
						.label-primary:hover,
						.btn-primary:hover,
						.btn-primary:focus {
							background-color: #438ac7;
							background-image: none;
						} 
						.bg {
							background-color: #AD7995;
						} 
						.bgg {
							background-color: lightslategray;
						} 
						.pophead {
							background-color: slategrey;
						}

						.light {
							background-color: #E6E6E6;
						}
						.label-primary,.btn-primary{  
							background-color: #AD7995!important;
						}
						.hid {
							display: none;
						}







						.primaryborder{  
							border-color: #AD7995!important;
						}



						.rating-box {
							color: #a2a2a2;
							text-shadow: 0px 1px 10px black;
							margin: -19px auto 2px auto;
							height: 20px;
						}

						.rating-star {
							font-size: 20px !important;
							width: 15px;
							height: 20px;
							padding: 0 2px;
							position: relative;
							display: block;
							float: left;
						}

						.full-star:before {
							color: #f2b01e;
							content: "\2605";
							position: absolute;
							left: 0;
							overflow: hidden;
						}

						.empty-star:before {
							content: "\2605";
							position: absolute;
							left: 0;
							overflow: hidden;
						}

						.half-star:before {
							color: #f2b01e;
							content: "\2605";
							width: 60%;
							position: absolute;
							left: 0;
							overflow: hidden;
						}

						.half-star:after {
							content: '\2605';
							position: absolute;
							left: 9px;
							width: 75%;
							text-indent: -0.7rem;
							overflow: hidden;
						}

						.sco .form{
							width: 100%;
							position: relative;
							height: 40px;
							background: blue;
							overflow: hidden;
							margin: 5px 0;
						}
						.sco .form input{
							width: 100%;
							height: 100%;
							color: #595f6e;
							padding-top: 10px;
							border: none;
							outline: none;
						}
						.sco .form label{
							position: absolute;
							bottom: 0px;
							right: 0%;
							width: 100%;
							/*		height: 100%;*/
							color: #616161;
							pointer-events: none;
							border-bottom: 2px solid #eee;
						}
						.sco .form label::after{
							content: "";
							position: absolute;
							bottom: -1px;
							right: 0px;
							width: 100%;
							/*		height: 100%;*/
							pointer-events: none;
							border-bottom: 2px solid #616161;
							transform: translateX(100%);
							transition:transform 0.5s ease;
						}
						.sco .content-name{
							position: absolute;
							bottom: 5px;
							right: 0px;
							transition: all 0.5s ease;
						}
						.sco .form input:focus + .label-name .content-name,
						.sco .form input:valid + .label-name .content-name{
							transform: translateY(-140%);
							font-size: 12px;
							color: #5fa8d3
						}
						.sco .form input:focus + .label-name::after,
						.sco .form input:valid + .label-name::after{
							transform: translateY(0%);
						}


					</style>
					<style>
						.divColorLo{
							display: none;
							width: 100%;
							background-color: white;
							margin: auto auto;
							position: absolute;
							right: 0;
							left: 0;
							top: 0;
							z-index: 999;
							padding: 2px 0;
							border-bottom: 1px solid #d0d0d0;
						}
						.dots2{
							padding: 9px!important;
							width: 20px;
							height: 20px;
							border-radius: 5px;
							border: 1px solid #d0d0d0;
						}
						.inpDiv{
							float: right;
							width: 25%;
							padding: 0;
							margin: 0;
							text-align: center;
						}
					</style>
					</head>
				<body class="bg" onload="if (typeof load == 'undefined'){setTimeout('location.reload();',6000);return;};load();" style="background-color: rgb(64, 64, 79); height: 100%; max-height: 100%; margin: 0px; padding: 0px; overflow: hidden; zoom: 1;">
                    
                        	

					<div style="width:100%; height:100%;max-height:100%;max-width:380px;padding:0px;" class="center-block bg dad">
						<div id="tlogins" class="border corner light fr break" style="z-index:1000; position:absolute;margin-left:-4px;height:100%; top:0px;width:100%;max-width:390px;min-height:100%;">






							<div class="divColorLo">
								<div class="inpDiv">
									<input value="000" class="color {pickerPosition:'top'} bgcolor  corner   dots2" style="background-color: rgb(0, 0, 0); background-image: none; color: rgb(255, 255, 255);" autocomplete="off">
								</div>
								<div class="inpDiv">
									<input value="000" class="color {pickerPosition:'top'} hicolor  corner   dots2" style="background-color: rgb(0, 0, 0); background-image: none; color: rgb(255, 255, 255);" autocomplete="off">
								</div>
								<div class="inpDiv">
									<input value="000" class="color {pickerPosition:'top'} btcolor  corner   dots2" style="background-color: rgb(0, 0, 0); background-image: none; color: rgb(255, 255, 255);" autocomplete="off">
								</div>
								<div class="inpDiv">
									<input value="000" class="color {pickerPosition:'top'} bocolor  corner   dots2" style="background-color: rgb(0, 0, 0); background-image: none; color: rgb(255, 255, 255);" autocomplete="off">
								</div>
								<div class="inpDiv">لون القوالب</div>
								<div class="inpDiv">لون المحتوى</div>
								<div class="inpDiv">لون الأزرار</div>
								<div class="inpDiv">لون الحدود</div>
								<br>
								<button class="btn btn-success fa fa-save" onclick="saveColor()" disabled="disabled">حفظ</button>
								<button class="btn btn-danger fa fa-times" onclick="localStorage.removeItem('colorLo');localStorage.removeItem('colorSt');getLoColor();$('.divColorLo').slideToggle();" disabled="disabled">حذف</button>
								<div style="float: right;padding: 3px 3px 3px 10px;color: #616161;border-radius: 10px 0 0 10px;border: 1px solid;margin-right: -1px;">لون الموقع على ذوقك</div>
							</div> `).insertBefore('body');
