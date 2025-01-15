$(function(){
	$('html').removeClass('no-js');//no-js

	$('.openMenu').addClass('show');
	
	$('.openMenu').click( function(){
		$('.closeMenu,.mobileMenu,.mlmenu,.mpwrap,.nav').addClass('show');
		$('.openMenu').removeClass('show');
	})

	$('.closeMenu').click( function(){
		$('.openMenu').addClass('show');
		$('.closeMenu').removeClass('show');
		$('.mobileMenu').removeClass('show');
		$('.mlmenu').removeClass('show');
		$('.mpwrap').removeClass('show');
		$('.nav').removeClass('show');
		
	})


	






	$(window).on("resize", function () {

		var WIN_W =$(window).width();
		console.log(WIN_W);
		if(WIN_W<768){
// $('.mlmenu.show ul li ul').css('display','none');
$('.mlmenu ul li a').click(function(event) {
	$('.mlmenu.show ul li ul').hide();
	$(this).siblings('ul').show();
});
}else{
	var Lis = document.getElementsByTagName("li");
	for(var i=0;i<Lis.length;i++){
		Lis[i].onmouseover =function(){
			var Uls=this.getElementsByTagName("ul")[0]; /*從這個(this)li裡面找出ul標籤*/
			if(Uls != undefined){
				Uls.style.display="block";
			}
		}
		Lis[i].onmouseout =function(){
			var Uls=this.getElementsByTagName("ul")[0];
			if(Uls != undefined){
				Uls.style.display="none";
			}
		}
	}
}

}).resize();



// $('.mlmenu ul li ul li a').click(function(event) {
// 	return false;
// });

})