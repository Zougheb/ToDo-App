// select the LIs
$("ul").on("click", "li", function(){
	// instead of if statment i can add a toggleclass
	$(this).toggleClass("completed");
});


// click on X to delet todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	})
	event.stopPropagation();
});


// add new todo

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
   	
   	// grabbing a new todo text from the input
	var todoText = $(this).val();
	$(this).val("");

	// creat a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</ul>")
   }
     
});

$(".fa-plus").click(function(){
   $("input[type='text'").fadeToggle()
});














