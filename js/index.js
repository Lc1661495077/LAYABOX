// $("#one").mouseenter(function (){
// 	$("#one1").animate({
// 		"top":"0px"
// 	},500);
// });
// $("#one").mouseleave(function (){
// 	$("#one1").animate({
// 		"top":"-100%"
// 	},500);
// })
(function(){
function Animate(cl,cla){
	this.cl = cl;
	this.cla = cla;
	this.init();
}
Animate.prototype.init = function(){
	var self = this;
	$(this.cl).mouseenter(function(){
		$(self.cla).animate({
			"top":"0px"
		},500);
	});
	$(this.cl).mouseleave(function(){
		$(self.cla).animate({
			"top":"-100%"
		},500);
	});
}
var one = new Animate("#one","#one1");
var two = new Animate("#two","#two1");
var three = new Animate("#three","#three1");
var four = new Animate("#four","#four1");
var five = new Animate("#five","#five1");
var six = new Animate("#six","#six1");


$("#box1").mouseover(function(){
	// $("#box1").addClass("ClassBoxBlue").siblings().removeClass("ClassBoxBlue");
	$(".classBox1").css("display","block");
	$(".classBox2").css("display","none");
	$(".classBox3").css("display","none");
	$(".classBox4").css("display","none");
})
$("#box2").mouseover(function(){
	// $("#box2").addClass("ClassBoxBlue").siblings().removeClass("ClassBoxBlue");
	$(".classBox1").css("display","none");
	$(".classBox2").css("display","block");
	$(".classBox3").css("display","none");
	$(".classBox4").css("display","none");
})
$("#box3").mouseover(function(){
	// $("#box3").addClass("ClassBoxBlue").siblings().removeClass("ClassBoxBlue");
	$(".classBox1").css("display","none");
	$(".classBox2").css("display","none");
	$(".classBox3").css("display","block");
	$(".classBox4").css("display","none");
})
$("#box4").mouseover(function(){
	// $("#box4").addClass("ClassBoxBlue").siblings().removeClass("ClassBoxBlue");
	$(".classBox1").css("display","none");
	$(".classBox2").css("display","none");
	$(".classBox3").css("display","none");
	$(".classBox4").css("display","block");
})

	function NavTop(){
		this.btn = $(".navbar_toggle");
		this.uls = $(".nav_u").eq(0);
		this.init();
	}
	NavTop.prototype = {
		init:function(){
			this.bind();
		},
		bind:function(){
			var self = this;
			this.btn.on("click",function(){
				self.uls.stop().slideToggle();
			});
		}
	}
	new NavTop();
})(window);