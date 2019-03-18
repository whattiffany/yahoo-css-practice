
/*tab */
function openTab(evt, Tab) {
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("news-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(Tab).style.display = "block";
    evt.currentTarget.className += " active";
}

/*jQuery 滾動固定 */
$(function () {
    $(window).scroll(function () {
        //scrollTop()當下可視網頁最高點到網頁頂端的距離
        var scrollVal = $(this).scrollTop();
        var adscrtop = $(".left-tool").offset().top;
        if (scrollVal > adscrtop) {
            $(".left-tool").css({ "position": "fixed", "top": "10px" });
        } else {
            $(".left-tool").css({ "position": "relative" });
        }
        if ($(window).scrollTop() >= 80) {
            $(".header").css({ "border-bottom": "2px solid #7300FF", "box-shadow": "0 1px 6px #7300FF" });
        } else {
            $(".header").css({ "border-bottom": "none", "box-shadow": "0 0" });
        }
       
        last = $(window).height();
        if ($(window).scrollTop() >= last) {
            $(".down").hide()
        }
    });



});
