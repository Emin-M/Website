var models = [
  {
    name: "BMW 116d",
    image: "/IMG/araba1.jpg",
    link: "https://www.google.com/search?q=arabalar&sxsrf=ALeKk00GfbGHIC7qYhFHSXT4ioeDtup8UQ:1600775592608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitvr_k2fzrAhUJxosKHVVLDvEQ_AUoAXoECAoQAw&biw=1366&bih=657",
  },
  {
    name: "Honda s456",
    image: "/IMG/araba2.jpg",
    link: "https://www.google.com/search?q=arabalar&sxsrf=ALeKk00GfbGHIC7qYhFHSXT4ioeDtup8UQ:1600775592608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitvr_k2fzrAhUJxosKHVVLDvEQ_AUoAXoECAoQAw&biw=1366&bih=657",
  },
  {
    name: "Mercedes q3",
    image: "/IMG/araba3.jpg",
    link: "https://www.google.com/search?q=arabalar&sxsrf=ALeKk00GfbGHIC7qYhFHSXT4ioeDtup8UQ:1600775592608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitvr_k2fzrAhUJxosKHVVLDvEQ_AUoAXoECAoQAw&biw=1366&bih=657",
  },
  {
    name: "Opel astra",
    image: "/IMG/araba4.jpg",
    link: "https://www.google.com/search?q=arabalar&sxsrf=ALeKk00GfbGHIC7qYhFHSXT4ioeDtup8UQ:1600775592608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitvr_k2fzrAhUJxosKHVVLDvEQ_AUoAXoECAoQAw&biw=1366&bih=657",
  },
  {
    name: "Hyundai sanata",
    image: "/IMG/araba5.jpg",
    link: "https://www.google.com/search?q=arabalar&sxsrf=ALeKk00GfbGHIC7qYhFHSXT4ioeDtup8UQ:1600775592608&source=lnms&tbm=isch&sa=X&ved=2ahUKEwitvr_k2fzrAhUJxosKHVVLDvEQ_AUoAXoECAoQAw&biw=1366&bih=657",
  },
];
var slaytCount = models.length;
var interval;
var index = 0;

var settings = {
  duration: "1000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
  });

document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});
document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      // random index
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
    } else {
      // artan index
      if (slaytCount == index + 1) {
        index = -1;
      }
      showSlide(index);
      index++;
    }

    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  document.querySelector(".card-title").textContent = models[index].name;

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);

  document.querySelector(".card-link").setAttribute("href", models[index].link);
}
