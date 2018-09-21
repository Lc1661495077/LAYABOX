(function () {
	function news(box,data,tem,min,max) {
		this.$dom = box;
		this.min = min||0;
		this.max = max||1;
		this.data = data;
		this.len = 0;
		this.compiled = _.template($(tem).html());
		this.bindEvent(this.data);
		this.crea();
	}
	news.prototype.bindEvent = function (page) {
		this.$dom.empty();
		var self = this;
		var pa = page;
		var self = this;
		var dataObj = typeof data=='object'?data:eval('('+data+')');		
		var list = dataObj[pa];
		
		if(pa=='data2'){
			this.len = Math.ceil(list.length / 10);			
		}		
		var a = this.min*10;
		var b = this.max*10;		
		var c = list.slice(a,b);	
		_.each(c,function (item) {
			var str = self.compiled(item);
			$(str).appendTo(self.$dom);
		});
	}
	news.prototype.crea = function () {
		var self = this;
		for (var i = 0;i<this.len;i++) {
				var a = document.createElement('li');
				a.innerHTML = i+1;
				$('.dian').append(a);
			}
			$('.dian li').eq(0).addClass('select');
			$('.dian li').click(function () {
				$(this).addClass('select').siblings().removeClass('select');
				self.min = $(this).index();
				self.max = $(this).index()+1;
				console.log();
				self.bindEvent(self.data);
			});
	}
	new news($('.new_news'),'data1','#template1');
	new news($('.new_trends'),'data2','#template2');
})();
