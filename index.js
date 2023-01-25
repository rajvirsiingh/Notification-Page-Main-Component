let number = document.querySelectorAll(".unread").length;
document.querySelector(".number").innerHTML = number;
document
  .querySelector("#read")
  .addEventListener("click", function handleClick() {
    for (let i = 0; i <= 4; i++) {
      document.querySelectorAll("i")[i].style.color = "white";
      document.querySelectorAll(".notification")[i].classList.remove("unread");
    }
  });
