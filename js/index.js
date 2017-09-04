$(function(){
	if($(window).width()<=720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	$(window).resize(function(){
		if($(window).width()<720){
			(function (win,doc){
				function change(){
					doc.documentElement.style.fontSize=20*doc.documentElement.clientWidth/360+'px';
				}
				change();
				win.addEventListener('resize',change,false);
			})(window,document);
		}
	})
	setTimeout(function(){
		$('.ban_i2').addClass('show');
	},1000)
	$('.btn_box p').click(function(){
		$('.btn_box p').removeClass('on2').eq($(this).index()).addClass('on2');
		$('.show_box').hide().eq($(this).index()).show()
	})
})