chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {  
  	console.log('request reached');
 if (request.greeting == "OpenPage"){
  open_page(request.filename)
 }

  });


function open_page(filename){

console.log('message received to create a new tab');
var pageUrl = chrome.extension.getURL(filename);

chrome.tabs.create({'url': pageUrl }, function(tab) {
  console.log('new tab created');
});
}
