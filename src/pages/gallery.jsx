import "../styles/gallery.css";


export default function GalleryPage() {
  return (
    <>
      <section id="gallery">
        <div
          className="alert bg-color-accent-blue color-white alert-dismissible fade show"
          role="alert"
        >
          <strong>Hello there !</strong> Hover the images to see them in action.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        
        <div className="heading">
          <h1 className="header-font-700">Capturing Dreams, Crafting Realities</h1>
          <p className="body-font-500">Our Team's Odyssey</p>
        </div>
        <div className="grid-container" id="gallery_container">
            {
                Array(40).fill(0).map((_, index) => {
                    return (
                        <div className="grid-item">
                            <img src={new URL(`../assets/gallery/${index + 1}.jpg`, import.meta.url).href} alt="" />
                        </div>
                    )
                })
            }
        </div>
      </section>
    </>
  );
}
