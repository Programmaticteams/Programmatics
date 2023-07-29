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
