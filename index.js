
document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.querySelector(".dropdown-toggle");
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            const selectedValue = item.getAttribute("data-value");
            dropdownButton.textContent = selectedValue;
        });
    });
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
