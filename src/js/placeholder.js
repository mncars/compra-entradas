// Placeholder en inputs

$('input[placeholder]').focus(function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	$(this).attr('placeholder','');
});

$('input[placeholder]').blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

// // Placeholder en inputs tipo "date"

$('input[type="date"]').focus(function(){
	$(this).addClass('completado');
});

$('input[type="date"]').blur(function(){
	$this = $(this);
	if($this.val() != ''){
		if(!$this.hasClass('completado')) {
			$this.addClass('completado');
		}
	}else{
		if($this.hasClass('completado')) {
			$this.removeClass('completado');
		}
	}
});