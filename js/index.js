function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');

function fbs_click() { window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }
      
function tbs_click() { window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function lbs_click() { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function rbs_click() { window.open(`https://www.reddit.com/submit?url=${pageLink}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }

function pbs_click() { window.open(`https://www.pinterest.com/pin/create/button/?&text=${pageTitle}&url=${pageLink}&description=${pageTitle}`,'sharer','toolbar=0,status=0,width=626,height=436');return false; }



document.getElementById("myBtn").addEventListener("click", function() {
  alert("Resume coming soon");
});