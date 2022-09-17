var 버튼갯수 = document.querySelectorAll(".tab-button").length;
var 버튼 = $(".tab-button");
var 내용 = $(".tab-content");

$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  탭열기(e.target.dataset.id);
});

// for (let i = 0; i < 버튼갯수; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

function 탭열기(숫자) {
  버튼.removeClass("orange");
  버튼.eq(숫자).addClass("orange");
  내용.removeClass("show");
  내용.eq(숫자).addClass("show");
}

// 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가

// 버튼.eq(1).on("click", function (e) {
//   버튼.removeClass("orange");
//   버튼.eq(1).addClass("orange");
//   내용.removeClass("show");
//   내용.eq(1).addClass("show");
// });
// 버튼.eq(2).on("click", function (e) {
//   버튼.removeClass("orange");
//   버튼.eq(2).addClass("orange");
//   내용.removeClass("show");
//   내용.eq(2).addClass("show");
// });

// document
//   .querySelectorAll(".tab-button")[0]
//   .addEventListener("click", function (e) {
//     document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//     e.target.classList.add("orange");
//     document.querySelectorAll(".tab-content")[0].classList.remove("show");
//     document.querySelectorAll(".tab-content")[1].classList.remove("show");
//     document.querySelectorAll(".tab-content")[2].classList.remove("show");
//     document.querySelectorAll(".tab-content")[0].classList.add("show");
//   });
// document
//   .querySelectorAll(".tab-button")[1]
//   .addEventListener("click", function (e) {
//     document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//     e.target.classList.add("orange");
//     document.querySelectorAll(".tab-content")[0].classList.remove("show");
//     document.querySelectorAll(".tab-content")[1].classList.remove("show");
//     document.querySelectorAll(".tab-content")[2].classList.remove("show");
//     document.querySelectorAll(".tab-content")[1].classList.add("show");
//   });
// document
//   .querySelectorAll(".tab-button")[2]
//   .addEventListener("click", function (e) {
//     document.querySelectorAll(".tab-button")[0].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[1].classList.remove("orange");
//     document.querySelectorAll(".tab-button")[2].classList.remove("orange");
//     e.target.classList.add("orange");
//     document.querySelectorAll(".tab-content")[0].classList.remove("show");
//     document.querySelectorAll(".tab-content")[1].classList.remove("show");
//     document.querySelectorAll(".tab-content")[2].classList.remove("show");
//     document.querySelectorAll(".tab-content")[2].classList.add("show");
//   });
