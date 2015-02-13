count = 0;
	
	chrome.storage.sync.get('googly_data',function(result){
		count = result['googly_data'];
		if(isNaN(count)){
			var append = "Current Counter : 0";
		}else{
			var append = "Current Counter : " + count;
		}
		$('.current-counter').replaceWith(append);
	});

	chrome.storage.sync.get('googly_total',function(result){
		total_count = result['googly_total'];
		if(isNaN(total_count)){
			var append = "Total Counter : " + count + " | ";
		}else{
			var append = "Total Counter : " + (total_count + count)  + " | ";
		}
		$('.total-counter').replaceWith(append);
	});


$(".reset").click(function(){

	chrome.storage.sync.get('googly_data',function(result){
		count = result['googly_data'];


	chrome.storage.sync.get('googly_total', function(result){
		current_total = result['googly_total'];

		if(isNaN(current_total)){
			chrome.storage.sync.set({'googly_total' : 0});
				
				chrome.storage.sync.get('googly_total', function(result){
					current_total = result['googly_total'];
					new_total = current_total + count;

					chrome.storage.sync.set({'googly_total':new_total});

					chrome.storage.sync.set({'googly_data': 0});
					output();
					
				});
		}else{
			
			new_total = current_total + count;

			chrome.storage.sync.set({'googly_total':new_total});	    
    		chrome.storage.sync.set({'googly_data' : 0 }); 
    		output();
		}
	});
		

    });
});


function output(){
	
    	var url = document.URL;
    	$(location).attr('href',url);

    
}



