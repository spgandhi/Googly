// Bind an event handler.
$(window).bind( 'hashchange', function(e) {
  var hash = location.hash;
 	var data = get_data();

 	console.log(data);
 	

});

console.log(1);
var url = document.URL;
var pageTitle = document.title;

if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') == -1 && url.indexOf('?q=') == -1)){
	only_get();
}

function only_get(){
	chrome.storage.sync.get('googly_data',function(result){
			var count = result['googly_data'];
			if(isNaN(count)){
				update_data(0);
				console.log('NaN');
			}else{
				output(count);
				console.log('Not NaN');
			}
		});
}

if(url.indexOf("https://www.google.") > -1 && (url.indexOf('#') > -1 || url.indexOf('?q=') > -1)){

	// First time print
	$(document).ready(function(){		
		var new_data = get_data();
	})

}


	function get_data(){
				
		chrome.storage.sync.get('googly_data',function(result){

			var count = result['googly_data'];

			if(isNaN(count)){
				update_data(1);
				console.log('NaN');
			}else{
				count = count + 1;
				console.log(result);
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
	function output(count5){
		$('.how_i_google').remove();
		var append = '<div class="how_i_google">Total Google Search : '.concat(count5,'</div>');
		$(append).prependTo('body');


	//CSS

		$('.how_i_google').css({
			position: 'fixed',
			   right: 0,
				width: '200px',
			'margin-right': '5px',
	'z-index': '100101010101',
	background: 'rgb(240,240,240)',
	'font-size': '14px',
	'padding': '8px',
	'bottom': 0,
	'font-family': '"Jura", sans-serif',
	'color': 'rgb(65,65,65)',
	'font-weight': 'bolder',
	'border-radius': '4px',
		});



		$('.button').css({
			background : 'aquamarine',
			width: '100%',
			'padding-top': '10px',
			'text-align': 'center',
			margin: 0,
			transition: 'all 0.3s ease-in-out'
		});


	//OnClick Function

		$('.button').click(function(){
			var todo;
			var speed=500;
			if(click==0) todo='-72px';
			else if(click==1)  todo=0; 

			$('.how_i_google').css({
				'top': todo
			});

			console.log(click);
			console.log(todo);

			if(click==0) click=1;
			else if(click==1) click=0;

			$('.how_i_google').slideDown(1000,function(){
	                $(this).css({
	                	top: todo
	                });
	        });        
	    
		});
		
	}
