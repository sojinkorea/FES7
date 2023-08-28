const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const dim = document.querySelector(".dim");

const focusableEl = document.querySelector("a, button, input");
// const firstEl = modal.querySelector('a, button, input')
const firstEl = focusableEl[0];
const lastElement = focusableEl[focusableEl.length - 1];

function openModal() {
  modal.classList.add("active");
  document.documentElement.style.overflow = "hidden";

  firstEl.focus();
}
function closeModal() {
  modal.classList.remove("active");
  document.documentElement.style.overflow = "auto";
}
function handleTap(event) {
  // e.key : 누른 key 정보를 반환
  // console.log(e.key);

  // shift 키를 누른 정보를 boolean 값으로 반환
  // console.log(e.shiftKey);

  // activeElement : 현재 포커스를 받고 있는 요소 반환
  const activeEl = document.activeElement;
  if (event.key === "Tab") {
    if (event.shiftKey) {
      // tap + shift 같이 눌렀을 때
      if (activeEl === firstEl) {
        event.preventDefault();
        lastEl.focus();
      }
    } else {
      // tab만 눌렀을 때
      if (activeEl === lastEl) {
        event.preventDefault;
        firstEl.focus();
      }
    }
  }
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);
dim.addEventListener("click", closeModal);

firstEl.addEventListener("keydown", handleTap);
lastEl.addEventListener("keydown", handleTap);

window.addEventListener("keydown", (e) => {
  // modal.classList.contains('active') : active 클래스의 포함여부를 boolean 값으로 반환

  if (modal.classList.contains("active") && e.key === "Escape") {
    closeModal();
  }
});
