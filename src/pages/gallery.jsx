import "../styles/gallery.css";


export default function GalleryPage() {
  return (
    <>
      <section id="gallery">
        <div
          class="alert bg-color-accent-blue color-white alert-dismissible fade show"
          role="alert"
        >
          <strong>Hello there !</strong> Hover the images to see them in action.
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        
        <div class="heading">
          <h1 class="header-font-700">Capturing Dreams, Crafting Realities</h1>
          <p class="body-font-500">Our Team's Odyssey</p>
        </div>
        <div class="grid-container" id="gallery_container">
            {
                Array(40).fill(0).map((_, index) => {
                    return (
                        <div class="grid-item">
                            <img src={`assets/gallery/${index + 1}.jpg`} alt="" />
                        </div>
                    )
                })
            }
        </div>
      </section>
    </>
  );
}
