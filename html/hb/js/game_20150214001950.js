//游戏控制类 
var Game={
	//游戏时间
	//time:61,
	
	//目前分数
	nowScore : 0, 

	//修改游戏分数
	changeScore : function(score){
		this.nowScore += score;
	}, 

	start:function(){
		if(this.nowScore>39){
			endGame();
			return; 
		}
		var _this = this; 

		var hb_num=$('.hb').length;
		var rannum=parseInt(Math.random() * 4);
		if(hb_num>rannum){
			$('.hb').remove();
		}
		var randeg=parseInt(Math.random() * 5);
		var deg="deg"+randeg;
		var ranleft=parseInt(Math.random() * 70+5);
		var rantop=parseInt(Math.random() * 50+35);
		$('#panel').append('<div class="hb '+deg+'" onclick="remme(this)" style="left:'+ranleft+'%;top:'+rantop+'%;"></div>');
		
		var rantime=parseInt(Math.random() * 500);
		setTimeout(function(){_this.start();},rantime); 
	},
	//倒计时
	// startTime : function(){
	// 	this.time -= 1;
	// 	var _this = this;
	// 	document.getElementById('time').innerHTML = this.time;
	// 	if(this.time > 0){
	// 		setTimeout(function(){_this.startTime()},1000);
	// 	}
	// }, 
}
//游戏开始函数
function GameStart(){
	$('#ready').hide();
	$('#gamelayer').show();
	Game.start();
	//Game.startTime();
} 
function remme(_this){
	_this.style.backgroundImage="url('images/hb2.gif')";
	Game.changeScore(20);
	setTimeout(function(){_this.remove();},500);
}
function endGame(){

	$('#panel').hide();
	if(Game.nowScore<40) $('#loose').show();
	else $('#win').show();
	setTimeout(function(){
		$('.win-loo').css({
		    "width": "94%",
		    "height": "90%",
		    "left": "3%",
		    "bottom":"4%"
		});
	},100);
	
}