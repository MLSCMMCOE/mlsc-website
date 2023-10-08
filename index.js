
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



getQuotes = async () => {
    const response = await fetch("https://api.quotable.io/quotes/random?limit=3&tags=technology|famous-quotes|creativity&maxLength=100")
    const data = await response.json();
    
    let writer = typewriter

    for(i=0; i<data.length; i++){
        writer = writer.typeString(`"${data[i].content}" - ${data[i].author}`)
        .pauseFor(2000)
        .deleteAll()
    }

    writer.start()
}


getQuotes()