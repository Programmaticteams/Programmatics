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
$(".white-box").hover(function() {
  
  $(".container").css("background-color","#EFF6FC");
  
}, function() {
  
  $(".container").css("background-color","#f4f5f4");
  
});