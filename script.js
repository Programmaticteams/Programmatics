const menu = document.getElementById("menu-cos");

Array.from(document.getElementsByClassName("menu-item-cos")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
      console.log(index);
    };
  }
);

const elementArray = document.getElementsByClassName("menu-item-cos");

elementArray.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
    console.log(index);
  };
});


// script.js

// Check if the user agent is from an iPhone
const isIPhone = /iPhone/i.test(navigator.userAgent);

// If it's an iPhone, show the alert area
if (isIPhone) {
    const alertArea = document.querySelector('.alert-area');
    alertArea.style.display = 'block';
}