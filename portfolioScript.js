//This document will have jQuery and JavaScript.
function load(){
	$("document").ready(function(){
		$('#header').hide();
		$('#header').show('slide', {direction: "up"},2000);
		
		$('#intro').hide();
		$('#intro').show('slide', {direction: "up"},2000);
		
		$('#about').hide();
		$('#about').show('slide', {direction: "up"},2000);
		
		$('#skills').hide();
		$('#skills').show('slide', {direction: "up"},2000);
		
		$('#work').hide();
		$('#work').show('slide', {direction: "up"},2000);
		
		$('#contact').hide();
		$('#contact').show('slide', {direction: "up"},2000);
		
		$('.button').hide();
		$('.button').show('slide', {direction: "up"},2000);
		
		$('.copyright').hide();
		$('.copyright').show('slide', {direction: "up"},2000);
	});
	
}