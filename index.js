$(".jumper").on("click", function (e) {

  e.preventDefault();

  $("body, html").animate({
    scrollTop: $($(this).attr('href')).offset().top - 100
  }, 600);

});

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
