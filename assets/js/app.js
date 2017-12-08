$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});

$('ul').on('click', 'span', function(e){ //e stands for event
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); //this refers this specific element --> $(this).parent()!!
	});
	e.stopPropagation(); //do not trigger other events on parent elements.. stop bubbling
});

$('input[type="text"]').keypress(function(e){
	if(e.which === 13){
		$('ul').append('<li><span class="delete"><i class="fa fa-trash-o" aria-hidden="true"></i></span> ' + $(this).val() + '</li>');
		$(this).val(null);
	}
});

$('.fa-plus').click(function(){
	$('input[type="text"]').fadeToggle();
});