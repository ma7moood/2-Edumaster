



$(function(){
		'use strict';
		(function animateDiv(){

			$(".slide .n-1").animate({top:'40px',left:'337.25px'} ,5000 , function(){
				$(this).animate({left:'50px'},1000 , function(){
					animateDiv();
				})});
			$(".slide .n-2").animate({top:'97.5px',left:'394.25px'} ,5000 ,function(){
				$(this).animate({left:'50px'} ,1000)});
			$(".slide .n-3").animate({top:'155px',left:'451.75px'} ,5000 , function(){
				$(this).animate({left:'50px'},1000)});
			$(".slide .n-4").animate({top:'212.5px',left:'394.25px'} ,5000 ,function(){
				$(this).animate({left:'50px'},1000)});
			$(".slide .n-5").animate({top:'270px',left:'337.25px'} ,5000 ,function(){
				$(this).animate({left:'500px'},1000)});
			$(".slide .n-6").animate({top:'212.5px',left:'279.75px'} ,5000 ,function(){
				$(this).animate({left:'500px'},1000)});
			$(".slide .n-7").animate({top:'155px',left:'222.25px'} ,5000 ,function(){
				$(this).animate({left:'500px'},1000)});
			$(".slide .n-8").animate({top:'97.5px',left:'279.75px'} ,5000 ,function(){
				$(this).animate({left:'500px'},1000)});
				
		}());
});








