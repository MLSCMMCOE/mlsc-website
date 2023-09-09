var swiper = new Swiper(".event-swiper", {
    effect: "coverflow",
    loop:true,
    grabCursor: true,
    centeredSlides: true,
    init:false,
    slidesPerView: 3,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      speed: 800,
    breakpoints:{
        320:{
            effect: "slide",
            slidesPerView: 1,
        },
        480:{
          effect: "slide",
            slidesPerView: 1,
        },
        640:{
          effect: "slide",
            slidesPerView: 1,
        },
        768:{
          effect: "slide",
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 3,
            effect: "coverflow",
        },
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

const events = [
    {
        title:"Azure and github backpack",
        desc:"This was our first event of the year 2023. We had more than 80 participants. The event was conducted in offline mode. The participants were given a hands on experience on azure and github. We had our president, Sahil Sarkate, who explained the concepts of Azure in a very simple manner. The event was a great success and we had a lot of positive feedback from the participants."
    },
    {
      title:"Azure",
      desc:"The session touched upon an in-depth overview of Microsoft Azure, a leading cloud computing platform. Participants learnt about the wide range of services offered by Azure, including virtual machines, databases, networking, and storage."
  },
  {
    title:"Azure",
    desc:" To enable hands-on experience, a step-by-step guide was provided to help participants create their own student Azure accounts with the help of the MLSC team. This allowed the participants to access premium Azure services and explore the platform's capabilities in a risk-free environment."
  },
  {
  title:"Github",
  desc:"The session then dived into GitHub, a popular web-based platform for hosting and collaborating on Git repositories. Participants were given an overview of GitHub's interface and features, including creating repositories, managing issues, and collaborating through pull requests."
},
{
  title:"Github",
  desc:"They learned about features of Github such as codespaces, github pages, actions and workflows and how GitHub promotes collaboration among team members and fosters an open-source development community."
}
]


// populate swiper images
for(let i=1;i<=events.length+1;i++){
  document.getElementById("swiper_images").innerHTML += `
  <div class="swiper-slide"> <img src="assets/event1/${i}.jpg"> </div>`
}

swiper.on("init",()=>{
  const bullets = document.getElementsByClassName("swiper-pagination-bullet")
  // set last bullet to hidden
  bullets[bullets.length-1].style.display = "none"
})

swiper.init()

// set event title and desc on slide change
swiper.on('slideChange', function () {

  if(swiper.realIndex == 5){
    swiper.slideToLoop()
  }
  try {
    document.getElementById("event-title").innerHTML = events[swiper.realIndex].title;
    document.getElementById("event-desc").innerHTML = events[swiper.realIndex].desc;  
  } catch (error) {}
});


window.addEventListener("resize", function(){
  document.getElementById("swiper_images").innerHTML = ""
  for(let i=1;i<=events.length+1;i++){
    document.getElementById("swiper_images").innerHTML += `
    <div class="swiper-slide"> <img src="assets/event1/${i}.jpg"> </div>`
  }
  swiper.slideToLoop()
  swiper.init();
})
