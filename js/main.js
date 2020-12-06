const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let counter = 0;

let int = setInterval(blur, 30);

function blur() {
  counter++;
  if (counter > 99) {
    clearInterval(int);
  }

  $(".number").html(counter + "%");
  $(".number").css("opacity", scale(counter, 0, 100, 1, 0));

  document.querySelector(".bg").style = `filter: blur( ${scale(
    counter,
    0,
    100,
    30,
    1
  )}px)`;
}
