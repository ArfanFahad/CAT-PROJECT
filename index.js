
const images = ["./image/2.jpg", "./image/3.jfif", "./image/beautiful-domestic-cat-lying-fence.jpg", "./image/contact-back.jpg", "./image/flow_image_1.jpg", "./image/flow_image_2.jpg", "./image/flow_image_3.jpg", "./image/flow_image_4.jpg", "./image/flow_image_5.jpg"];

let index = 0; 

const slider = document.getElementById("slider_img");

document.getElementById("previous").addEventListener("click", function() {
    index = (index - 1 + images.length) % images.length;
    slider.src = images[index];
});

document.getElementById("next").addEventListener("click", function() {
    index = (index + 1) % images.length;
    slider.src = images[index];
});

