// Hash Change Update Event
$(window).bind( 'hashchange', function(e) {
  var hash = location.hash;
 	var data = get_data();
});

var url = document.URL;
var pageTitle = document.title;


// If only google.com
if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') == -1 && url.indexOf('q=') == -1)){
	$(document).ready(function(){
		only_get();	
	})
	
}

if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') > -1 || url.indexOf('q=') > -1)){
	
	$(document).ready(function(){		
		var new_data = get_data();
	})

}


function only_get(){
	chrome.storage.sync.get('googly_data',function(result){
		var count = result['googly_data'];

		if(isNaN(count)){
			update_data(0);
		}else{
			output(count);
		}
	});
}

function get_data(){
			
	chrome.storage.sync.get('googly_data',function(result){

		var count = result['googly_data'];

		if(isNaN(count)){
			update_data(1);
		}else{
			count++;
			return_data(count);
		}
	});

}

function return_data(data){
	update_data(data);
}

function update_data(updated_count){	
	chrome.storage.sync.set({'googly_data': updated_count})
	output(updated_count);
}	

//My Content On Page
function output(count){

	// Getting URLs
	var options_page_URL = chrome.extension.getURL('options.html');
	var gear_image_URL = 'http://simpleicon.com/wp-content/uploads/gear-2.png';
	

	// Removing previous instance of display
	$('.googly').remove();
	

	// Creating New Instance
	var append = '<div class="googly">Total Google Search : ' + count;
	var append = append + '<img class="options-link" style="width:20px;cursor: pointer;position:relative; top:4px; left:15px;" src="'+gear_image_URL+'"></div>';
	

	// Appending the Instance
	$(append).prependTo('body');


	// Script to open options page upon click
	$( ".options-link" ).click(function() {
		chrome.runtime.sendMessage({greeting: "OpenPage", filename:"options.html"}, function(response) {
			console.log(response);
		});
	});


	// Appling CSS to the 
	$('.googly').css({
		'position': 'fixed',
		'right': 0,
		'width': '200px',
		'margin-right': '5px',
		'z-index': '100101010101',
		'background': 'rgb(240,240,240)',
		'font-size': '14px',
		'padding': '8px',
		'bottom': 0,
		'font-family': '"Jura", sans-serif',
		'color': 'rgb(65,65,65)',
		'font-weight': 'bolder',
		'border-radius': '4px',
	});



	$('.button').css({
		'background' : 'aquamarine',
		'width': '100%',
		'padding-top': '10px',
		'text-align': 'center',
		'margin': 0,
		'transition': 'all 0.3s ease-in-out'
	});
	
}



