$(document).ready(function() {

	$('.colorBlockMini:input').submit( function () {//color of selected box
		var newColor = $(this).parent.css('background-color');
		$('#cb' + this.value).css('color', '#'+ newColor);
	});

	$("select#numOfBlocks").change( function () {//# boxes displayed
		var magicNum = parseInt($("select#numOfBlocks option:selected").text());
		for(var i = 1; i <= 6; i++){
			var theID = "#cb" + i;
			if (magicNum < i){
				$(theID).hide();
			} else{
				$(theID).show();
			}
		}
	});

	$('.carouselColor:input').submit( function () {//carousel color group
		var cList = this.value +'List';
		while(cList[i]){
			$(this).append('<div class="colorBlockMini">g</div>');
			$(this).css('background-color', colorList.hexVal[cList[i]]);
			i++;//only adding colors--still need to remove ones not on list
		}

	});
});


