const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
      console.log(index);
    };
  }
);

const elementArray = document.getElementsByClassName("menu-item");

elementArray.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
    console.log(index);
  };
});
