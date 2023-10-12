export default function Footer() {
  return (
    <footer id="footer" className="bg-color-primary-blue color-white">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/assets/logos/logo_main.png" alt="" id="footer-brand-img" />
          <a className="navbar-brand header-font-700" href="#">
            <span className="color-accent-blue">MLSC</span> MMCOE
          </a>
        </div>
        <div className="social-icons">
          <h3 className="color-white header-font-700 effect">Join Us On</h3>
          <div className="social-links">
            <a
              href="https://chat.whatsapp.com/D7euYE7tZbBKUz7EpiF6XU"
              className="social-id"
            >
              <p>WhatsApp</p>
            </a>
            <a href="https://www.linkedin.com/in/mlsc-mmcoe/" className="social-id">
              <p>LinkedIn</p>
            </a>
            <a href="https://medium.com/@mlsc_mmcoe" className="social-id">
              <p>Medium</p>
            </a>
            <a href="https://www.instagram.com/mlsc_mmcoe/" className="social-id">
              <p>Instagram</p>
            </a>
            <a href="https://github.com/MLSCMMCOE" className="social-id">
              <p>GitHub</p>
            </a>
            <a
              href="https://www.youtube.com/@mlsc_mmcoe?sub_confirmation=1"
              className="social-id"
            >
              <p>YouTube</p>
            </a>
          </div>
        </div>

        <div className="footer-map-container">
          <h3 className="color-white header-font-700 effect">Find Us At</h3>
          <div
            id="map"
            style={{ display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.838294274354!2d73.80716271162642!3d18.490982482524245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfdad7143a4f%3A0xabd31c8f9e6eca9a!2sMarathwada%20Mitra%20Mandal&#39;s%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1694484268280!5m2!1sen!2sin"
              width="250"
              height="250"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p style={{width: "250px", paddingTop: "30px"}}>
              Sr.No. 18, Plot No. 5/3, CTS No.205, Vadar Vasti Rd, behind
              Vandevi Temple, Karve Nagar, Pune, Maharashtra 411052
            </p>
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">&copy; 2023 MLSC MMCOE</p>
    </footer>
  );
}
