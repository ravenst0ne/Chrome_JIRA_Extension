chrome.tabs.query({ currentWindow:true, highlighted : true }, function(tab) {
    
});

var jira_url = "http://www.jira.com/"

document.getElementById('goto_jira').onclick = function() {
    project = document.getElementById('project').value;
    ticket = document.getElementById('ticket').value;
    window.open(jira_url + project + "-" + ticket);
};