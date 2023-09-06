document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".sticky");
    var isScrolled = false;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            if (!isScrolled) {
                header.classList.add("scrolled");
                isScrolled = true;
            }
        } else {
            header.classList.remove("scrolled");
            isScrolled = false;
        }
    });
});


//img5
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".loop-image");
    const imageSources = [
      "img/img5.png",
      "img/img10.png",
      // Add more image sources as needed
    ];
    let currentIndex = 0;
  
    function changeImage() {
      loopImage.style.opacity = 0; // Fade out the image
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % imageSources.length;
        loopImage.src = imageSources[1]; // Change image source
        loopImage.style.opacity = 1; // Fade in the new image
      }, 500); // Adjust the delay time as needed (should match CSS transition duration)
    }
  
    loopImage.addEventListener("click", changeImage);
  });



//img7
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img7");
    const imageList = [
        "img/img7.png",
        "img/img14.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});

//img6
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img6");
    const imageList = [
        "img/img6.png",
        "img/img15.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});


//img8
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img8");
    const imageList = [
        "img/img8.png",
        "img/img11.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});


//img4
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img4");
    const imageList = [
        "img/img4.png",
        "img/img12.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});

//img2
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img2");
    const imageList = [
        "img/img2.png",
        "img/img16.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});


//img1
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img1");
    const imageList = [
        "img/img1.png",
        "img/img9.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});


//img3
document.addEventListener("DOMContentLoaded", function () {
    const loopImage = document.querySelector(".img3");
    const imageList = [
        "img/img3.png",
        "img/img13.png",
    ];

    let currentImageIndex = 0;

    function switchImage() {
        loopImage.src = imageList[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageList.length;
    }

    switchImage();

    setInterval(switchImage, 3500);
});
