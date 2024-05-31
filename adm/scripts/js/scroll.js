/* synchronized scroll of two divs */
jQuery.fn.exists = function(){return this.length>0;}

$(function() {
		const left = $('#1_bmrDetailDataDiv');
    const right = $('#2_residentDetailDataDiv');
    
    left.on('scroll', function () {
    	right.scrollTop( left.scrollTop());
		})
    
});