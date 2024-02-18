const acc = document.getElementsByClassName('accordion__inner-item')
var actives = document.getElementsByClassName('active');
for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      var currentActive = actives[0];
      if (currentActive)
         currentActive.classList.remove("active");

      if (currentActive !== this)
         this.classList.add("active");

   });

}
const formBtn = document.getElementsByClassName('form__btn')


for (i = 0; formBtn.length > i; i++) {
   formBtn[i].onclick = function () {
      var currentActive = actives[0];
      if (currentActive)
         currentActive.classList.remove("active");

      if (currentActive !== this)
         this.classList.add("active");
   };
}
$(document).ready(function () {
   $('.nav__togle').click(function (event) {
      $('.nav__togle, .menu, .header, .header__inner').toggleClass('active');

   });
});
$(document).ready(function () {
   $('.menu__list-link').click(function (event) {
      $('.nav__togle, .menu, .header, .header__inner').removeClass('active');

   });
});
 const num = document.getElementsByClassName('form-control').value
 console.log(num)

// const header = document.getElementById('header')
// $(function () {

//    var header = $("#header");
//    scrollOffset = $(window).scrollTop();
//    topH = $("#main").innerHeight();
//    checkScroll(scrollOffset);

//    console.log(topH)

//    $(window).on("scroll", function () {

//       scrollOffset = $(this).scrollTop();
//       checkScroll(scrollOffset);

//    });
//    console.log(scrollOffset)

//    function checkScroll(scrollOffset) {


//       if (scrollOffset >= topH) {
//          header.addClass("fixed");

//       }
//       else {
//          header.removeClass("fixed");

//       };


//    }

// });

document.addEventListener('scroll', function () {
   if ($(window).scrollTop() > 514) {
      // если больше 1000 → добавляем класс
      $('.header').addClass('fixed');
   } else {
      // если меньше 1000 → удаляем класс
      $('.header').removeClass('fixed');
   }
})
