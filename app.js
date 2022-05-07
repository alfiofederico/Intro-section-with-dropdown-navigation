const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const pageHeader = document.querySelector(".page-header");
const dropDownMenuWrappers = document.querySelectorAll(".dropdown-wrapper");
const downArrow = document.querySelectorAll(".down-arrow");

// const dropDownBtns = document.querySelectorAll(".dropdown-btn");
// const dropDownMenus = document.querySelectorAll(".dropdown-menu");


openBtn.addEventListener("click", function() {
    pageHeader.classList.add("show");
});

closeBtn.addEventListener("click", function() {
    pageHeader.classList.remove("show");
});

// DROPDOWN
// Solution #1 with closing inactive dropdown menu
dropDownMenuWrappers.forEach(function(wrapper) {
    const wrapperBtn = wrapper.querySelector(".dropdown-btn");
    let menuSwitch = false;

    wrapperBtn.addEventListener("click", () => {
        const arrowIconDown = wrapper.querySelector(".down-arrow");

        menuSwitch = !menuSwitch;

        dropDownMenuWrappers.forEach(function(wrapperItem) {
            if(wrapper !== wrapperItem) {
                wrapperItem.classList.remove("open");
            }

            if(wrapper !== wrapperItem) {
                downArrow.forEach((el) => {
                    el.style.transform = arrowIconDown.style.transform = "rotate(0)";
                });
            }
        });
      
        wrapper.classList.toggle("open");

        if(wrapper.classList.contains("open")) {
            arrowIconDown.style.transform = "rotate(180deg)";
        } else {
            arrowIconDown.style.transform = "rotate(0)";
        }
    })
});
