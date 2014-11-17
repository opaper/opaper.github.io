 
/** 
function autoScroll(obj){ 
    $(obj).find(".autoScrolling").animate({ 
        marginTop : "-20px"  
    },00,function(){ 
		
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this); 
    }) 
} 

$(document).ready(function() {
	setInterval('AutoScroll("#scrollDiv")', 1000)
});

*/

$(function(){ 
	//$(".autoScrolling").css({marginBottom : "20px"});
    setInterval('autoScroll(".widget-content")',4000) 
}) 

function autoScroll(obj) {
	$(obj).find(".autoScrolling").animate({
		marginTop: "-25px"
	},
	1500,
	function() {
		$(this).css({
			marginTop: "0px"
		}).find("li:first").appendTo(this);
	});
}
			
			