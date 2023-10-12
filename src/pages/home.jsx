import TeamSection from "../components/teamcards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import "../styles/home.css";
import TestimonialCard from "../components/testimonialcard";
import testimonials from "./testimonial_data";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="header-font-800">
              Microsoft Learn Student Club MMCOE
            </h1>
            <p className="body-font-500">Be A Force For Good.</p>
          </div>
          <div className="hero-img">
            <img src="assets/logos/logo_main.png" alt="" id="hero-img" />
          </div>
        </div>
        <div className="icons">
          <img src="assets/logos/teams.png" alt="" id="icon" />
          <img src="assets/logos/office.png" alt="" id="icon" />
          <img src="assets/logos/excel.png" alt="" id="icon" />
          <img src="assets/logos/devops.png" alt="" id="icon" />
          <img src="assets/logos/github.png" alt="" id="icon" />
          <img src="assets/logos/azure.png" alt="" id="icon" />
          <img src="assets/logos/linkedin.png" alt="" id="icon" />
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <div className="about-content">
            <h2 className="header-font-700">Who are we?</h2>
            <p className="body-font-regular">
              In June 2023, the Microsoft Learn Students' Club was established
              in order to promote technological growth by using different
              Microsoft technologies. Through a friendly, supportive and
              motivated environment, this technical club has been set up to
              enhance and improve coding skills, critical thinking, logic and
              management skills of students. With a vision to empower
              individuals with the latest advancements and tools, MLSC is
              dedicated to strengthening a community of tech enthusiasts and
              innovators.
              <br />
              <br />
              <br />
              The mission of MLSC is to foster development in technological
              domains through various effective channels including, hands-on
              approach projects, international collaborations, seminars and
              competitions with the use of various Microsoft technologies and
              solutions. We inspire students through creativity and emerging
              technologies. MLSC will prepare students for the rapidly changing
              tech industry through a modern and innovative manner. By working
              towards these goals, MLSC hopes to make a real difference in the
              lives of its members and in the world around them.
            </p>
          </div>
          <div className="about-img">
            <img src="assets/logos/about-img.svg" alt="" id="about-img" />
          </div>
        </div>
      </section>
      <TeamSection />

      {/* <section id="events-section">
        <div className="events-nav">
          <button className="events-nav-btn active">Upcoming</button>
          <button className="events-nav-btn">Past</button>
        </div>
      </section> */}

      <section id="gallery-section">
        <h1 class="header-font-700">Gallery</h1>
        <div className="gallery-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            spaceBetween={50}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <img
                src="assets/gallery_preview/1.jpg"
                class="d-block"
                alt="image"
                id="carousel-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/gallery_preview/2.jpg"
                class="d-block"
                alt="image"
                id="carousel-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/gallery_preview/3.jpg"
                class="d-block"
                alt="image"
                id="carousel-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/gallery_preview/4.jpg"
                class="d-block"
                alt="image"
                id="carousel-img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="assets/gallery_preview/5.jpg"
                class="d-block"
                alt="image"
                id="carousel-img"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <button className="gallery_btn">
          <Link to={"/gallery"} class="btn bg-color-primary-blue color-white">
            Visit Gallery
          </Link>
        </button>
      </section>

      <section id="testimonials-section">
        <div class="heading">
          <h1 class="header-font-700">Testimonials</h1>
          <p class="body-font-500">Hear From Our Community</p>
        </div>
        <div class="testimonial-container">
          {testimonials.map((testimonial) => {
            return (
              <TestimonialCard
                name={testimonial.name}
                designation={testimonial.designation}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            );
          })}
        </div>
      </section>

      <div
        class="connect-button bg-color-primary-blue color-white"
        id="connect-button"
      >
        <a
          href="https://chat.whatsapp.com/D7euYE7tZbBKUz7EpiF6XU"
          class="color-white"
        >
          <span id="connect-btn-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </span>
          <span id="connect-btn-label">Community</span>
        </a>
      </div>
    </>
  );
}
