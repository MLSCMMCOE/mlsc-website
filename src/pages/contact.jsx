import "../styles/contact.css";
import { createClient } from "@supabase/supabase-js";
import { useSnackbar } from "@brancol/react-snackbar";

const supabase = createClient(
  "https://lacknclmlylgjprmmfpq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhY2tuY2xtbHlsZ2pwcm1tZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDkwMTAsImV4cCI6MjAwODk4NTAxMH0.EYlg4BAKlP4zF07PnjgWAbdtoEqNF_CAnoMAx3FxKHM"
);

export default function ContactPage() {
  const snackBar = useSnackbar();

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = e.target.elements;
    const { data, error } = await supabase
      .from("contact")
      .insert([
        {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
      ]);

    if (error) {
      snackBar.showDanger(error.message, {
        position: "bc",
        displayDuration: 5000,
      });
    } else {
      snackBar.showSuccess("Thank you for your submission!", {
        position: "bc",
        displayDuration: 5000,
      });
      e.target.reset();
    }
  };

  return (
    <>
      <section id="contact">
        <div class="contact-container body-font-regular">
          <div class="contact-box bg-color-white">
            <div class="left">
              {" "}
              <img
                src="../assets/logos/Contact us-bro.svg"
                alt=""
                id="contact-img"
              />{" "}
            </div>
            <div class="right">
              <h2 class="header-font-700">Contact Us</h2>
              <form id="contact_form" onSubmit={HandleFormSubmit}>
                <input
                  type="text"
                  class="field"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  class="field"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  class="field"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  g
                  class="field"
                ></textarea>
                <button type="submit" class="btn">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
