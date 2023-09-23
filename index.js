
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropdown-toggle");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedValue = item.getAttribute("data-value");
            dropdownButton.textContent = selectedValue;
        });
    });

    document.getElementById("gallery_container").innerHTML = `
    <div class="carousel-item active"> <img src="assets/gallery_preview/1.jpg" class="d-block" alt="image" id="carousel-img"> </div>`


    for (i = 2; i <= 5; i++) {
        document.getElementById("gallery_container").innerHTML += `
        <div class="carousel-item"> <img src="assets/gallery_preview/${i}.jpg" class="d-block" alt="image" id="carousel-img"> </div>
        `
    }
    
 
});

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('"Alone we can do so little; together we can do so much." - Helen Keller')
    .pauseFor(2000)
    .deleteAll()
    .typeString('"Individually, we are one drop. Together, we are an ocean." - Ryunosuke Satoro')
    .pauseFor(2000)
    .deleteAll()
    .typeString('"Teamwork makes the dream work." - John C. Maxwell')
    .pauseFor(2000)
    .deleteAll()
    .start();

