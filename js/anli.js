(function () {
	function news(box,data,tem) {
		this.$dom = box;
		this.data = data;
		this.compiled = _.template($(tem).html());
		this.bindEvent(this.data);
	}
	news.prototype.bindEvent = function (page) {
		$("#box1,#box2").empty();
		var pa = page;
		var self = this;
		var dataObj = typeof data=='object'?data:eval('('+data+')');		
		var list = dataObj[pa];
		console.log(list);
		_.each(list,function (item) {
			var str = self.compiled(item);
			$(str).appendTo(self.$dom);
		});
	}
	new news($('#box1'),'data1','#template');
	$(".game-category div").on("click",function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).index()==0) {
			new news($('#box1'),'data1','#template');
		}else {
			new news($('#box2'),'data2','#template');
		}
		$('.gamelist ul').eq($(this)).css("display","block");
		$('.gamelist ul').eq($(this)).siblings().css("display","none");
		$(".con-lg").on("mouseover",function () {
			$(this).find('.game_qr').css({
				"transition":"all 0.5s linear 0s",
				"left":0
			})
		});
		$(".con-lg").on("mouseout",function () {
			$(this).find('.game_qr').css({
				"transition":"all 0.5s linear 0s",
				"left":"-100%"
			})
		});
	});
	$(".con-lg").on("mouseover",function () {
			$(this).find('.game_qr').css({
				"transition":"all 0.5s linear 0s",
				"left":0
			})
		});
		$(".con-lg").on("mouseout",function () {
			$(this).find('.game_qr').css({
				"transition":"all 0.5s linear 0s",
				"left":"-100%"
			})
		});
})();