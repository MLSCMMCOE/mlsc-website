import "../styles/contact.css";
import { createClient } from "@supabase/supabase-js";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const supabase = createClient(
  "https://lacknclmlylgjprmmfpq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhY2tuY2xtbHlsZ2pwcm1tZnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0MDkwMTAsImV4cCI6MjAwODk4NTAxMH0.EYlg4BAKlP4zF07PnjgWAbdtoEqNF_CAnoMAx3FxKHM"
);

export default function ContactPage() {
  // const snackBar = useSnackbar();

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
      let message
      if (error.message.includes('duplicate key value violates unique constraint')) {
        message = 'You have already submitted a message with this email address. Please wait for a response or use a different email address.'
      }
      else{
        message = error.message
      }
      enqueueSnackbar(message, { variant: 'error', autoHideDuration: 5000 });
    } else {
      enqueueSnackbar("Thank you for your submission!", { variant: 'success', autoHideDuration: 5000 });
      e.target.reset();
    }
  };

  return (
    <>
      <SnackbarProvider />
      <section id="contact">
        <div className="contact-container body-font-regular">
          <div className="contact-box bg-color-white">
            <div className="left">
              {" "}
              <img
                src={new URL('../assets/logos/Contact us-bro.svg', import.meta.url).href}
                alt=""
                id="contact-img"
              />{" "}
            </div>
            <div className="right">
              <h2 className="header-font-700">Contact Us</h2>
              <form id="contact_form" onSubmit={HandleFormSubmit}>
                <input
                  type="text"
                  className="field"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  className="field"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <input
                  type="text"
                  className="field"
                  name="subject"
                  placeholder="Subject"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  g
                  className="field"
                  style={{ resize: "none" }}
                ></textarea>
                <button type="submit" className="btn">
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
