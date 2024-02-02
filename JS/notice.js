$("#NoticeClose").click(function() {
    //set sessionStorage on click
    sessionStorage.setItem("dismissNotice", "Hello");
    $("#Notice").remove();
});
if (sessionStorage.getItem("dismissNotice"))
    //When sessionStorage is set Do stuff...
    $("#Notice").remove();