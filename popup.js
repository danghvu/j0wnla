$( function() {
    
    chrome.tabs.getSelected(null, function(tab) {	  
        chrome.tabs.sendRequest(tab.id, {req:'run'}, function(response) {
        });
    });


    chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
        if(request.req == "status") {
            if (request.data == "0")
                $('#log').html("[-] Please navigate to joomla registration page");
            else if (request.data == "1")
                $('#log').html("[+] Try to inject... some magic happens..");
            else if (request.data == "2")
                $('#log').html("[+] Now you can submit ... DO NOT CHANGE ANYTHING. Click me again after submit");
            else if (request.data == "3")
                $('#log').html("[+] OK ! Now you can register with a valid info and hopefully my magic work");
        }
    });



});
