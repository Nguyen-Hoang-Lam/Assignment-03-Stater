function handleSubmit() {
  // lấy giá trị của input email và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  // lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.getElementById("error-email");
  //điều kiện để là một email
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // dùng hàm match  kiểm tra email
  const check = emailValue.match(checkMail);

  // lấy phần chứa thông tin user

  const sectionContent = document.querySelector(".section-Content");
  console.log("check section", sectionContent);
  // lấy element để kiểm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".View-more");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".View-more");
  if (!viewMore.classList.value.includes("Less more")) {
    viewMore.style.display = "none";
  }
}
function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".View-more");

  if (viewMore.innerHTML == "View more") {
    const sectionContent = parentElement.querySelectorAll(".section-Content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });

    viewMore.innerHTML = "Less more";
  } else {
    const sectionContent = parentElement.querySelectorAll(".section-Content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });

    viewMore.innerHTML = "View more";
  }
}
