(function(){
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