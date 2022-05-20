document.addEventListener("DOMContentLoaded", function () {
  //dividing good and bad
  function img(name) {
    if (name) {
      name.addEventListener("click", () => {
        document.getElementsByClassName("origin")[0].style.display = "none";
        document.getElementsByClassName("btn")[0].style.display = "flex";

        var rand = Math.floor(Math.random() * 6); // 0<=rand9
        var img_list = [
          "camel",
          "catpaw",
          "frog",
          "horse",
          "lobster",
          "oink",
        ];
        var img_name = img_list[rand];

        document.getElementById(
          "result"
        ).innerHTML = `<img src='./image/${img_name}.jpg'/>`;
      });
    }
  }

  var chicken = document.getElementById("chickenph");
  var duck = document.getElementById("duckph");

  img(chicken);
  img(duck);
});