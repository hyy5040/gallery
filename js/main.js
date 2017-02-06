$(document).ready(function() {
		function spill() {
		var poster = document.getElementsByClassName("poster");
		for(i = 0; i < poster.length; i++) {
			random(poster[i]);
			
		}
		}
		spill();

		function setRem() {
			var prerem = document.documentElement.clientWidth / 5;
			var cssEl = document.createElement("style");
			document.documentElement.firstElementChild.appendChild(cssEl);
			cssEl.innerHTML = 'html{font-size:' + prerem + 'px!important;}';
		}
		setRem();

		function makeCenter(element) {
			$(element).css("transform", "translate(2rem,0.2rem) rotate(0deg)");
			$(element).css("z-index", "12");
		}
		
		function flip(element) {
			if($(element).css("z-index")==12){//如果是正面
			$(element).css("transform", "translate(2rem,0.2rem) rotate(0deg) rotateY(180deg)");	
			$(element).css("z-index", "13");
			$(element).find(".photo").css("display","none");
			$(element).find(".font").css("display","none");
			$(element).children(".description").css("display","block");
			
			}else{//如果是反面
			$(element).css("transform", "translate(2rem,0.2rem) rotate(0deg) rotateY(0deg)");
			$(element).css("z-index", "12");
			$(element).find(".photo").css("display","block");
			$(element).find(".font").css("display","block");
			$(element).find(".description").css("display","none");
			}
		
		}
		
		function random(element) {
			var angle = Math.random();
			var distanceX = Number(Math.random());
			var distanceY = Number(Math.random());
			var zindex = Math.round(Number(Math.random()*10));
			$(element).css("transform", "translate(" + Number(distanceX * 5) + "rem," + Number(distanceY * 1) + "rem) rotate(" + Number(angle * 360) + "deg) rotateY(0deg) ");
			$(element).css("z-index", ""+zindex);	
			$(element).find(".photo").css("display","block");
			$(element).find(".font").css("display","block");
			$(element).find(".description").css("display","none");
		}
		function cycleStyle () {
			
		}
		
		function listclick () {
			
			var list = document.getElementsByClassName("circle");
			var poster = document.getElementsByClassName("poster");
			var photo = document.getElementsByClassName("photo");
			var description = document.getElementsByClassName("description");
			//点击圆圈
			for(var i = 0; i <=list.length; i++) {
			$(list[i]).click(function() {
				var pid= "p"+this.id;
				var number = Number(this.id);
				var position = $("#"+pid).css("z-index");
				
				if(position==12)
			{
			flip("#"+pid);
			
			position=13;
			}
			else if(position==13){
				
				flip("#"+pid);
			}else{
				makeCenter("#"+pid);
				$("#"+number).css("background-color","#EEEEEE");
				for(var j = 0; j <= list.length; j++) {
					if(j!=number){
						random("#p"+j);
						
					}
				}
			}
			});
			
			}
			//点击海报
			for(var i = 0; i <=list.length; i++) {	
			$(poster[i]).click(function() {
				var number = this.id;
				var position = $("#"+this.id).css("z-index");
			if(position==12)
			{
			flip("#"+this.id);
			
			position=13;
			}
			else if(position==13){
				
				flip("#"+this.id);
			}

			else
			{
				makeCenter("#"+this.id);//居中海报
				for(var j = 0; j <= list.length; j++) { //打乱非居中的海报
					var jplus = "p"+j;
					if(jplus!=number){
						random("#p"+j);
					}else{
						
					}
				}
			}
				
			});
			}
		}
		listclick (); 


	
		
		
});