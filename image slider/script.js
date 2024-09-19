let imageSliderContainer = document.querySelector(".image_slider_container");
let isMouseMove = false;
imageSliderContainer.addEventListener("wheel", (e) => {
  isMouseMove = true;
  e.preventDefault();
  imageSliderContainer.scrollLeft += e.deltaY;
  console.log(imageSliderContainer.offsetLeft);
  console.log("click");
});

let cross = document.querySelector(".cross");
let imageBox = document.querySelectorAll(".images_box");
imageBox.forEach((eachImageBox) => {
  let eachImage = document.querySelectorAll(".each_image");
  eachImageBox.addEventListener("click", (e) => {
    // using loop each image
    eachImage.forEach((each) => {
      each.classList.add("hide");
    });
    e.target.parentNode.classList.add("image_full");
    cross.style.display = "block"
  });

  // im

cross.addEventListener("click",()=>{
  eachImage.forEach((each)=>{
    each.classList.remove("hide");
    eachImage.forEach((image)=>{
          image.classList.remove("image_full");
    })
cross.style.display = "none"
})
  
    
})
});

