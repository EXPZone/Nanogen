window.onscroll = function() {myFunction(); pageCount();}

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function pageCount() {
    if (document.getElementById("myBar").style.width > 25){
    document.getElementsByClassName("progress-container").innerHTML = "Hello There!";
    }
  }