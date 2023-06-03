import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact">
      <div className="form-intro">
        <div className="form-header">
          Let's<i className="fi fi-bs-arrow-small-right"></i> connect.
        </div>
        <p>
          Warwick is a skilled web designer and developer ready to bring your
          online vision to life - contact me today to discuss your project and
          create a captivating website that exceeds your expectations.
        </p>
        <h1 className="heading">Inquiries</h1>
      </div>

      <form>
        <label>
          <span>Your name:</span>
          <input type="text" required />
        </label>

        <label>
          <span>Your email address:</span>
          <input type="email" required />
        </label>

        <label>
          <span>Tell us about the project:</span>
          <textarea required style={{ height: "max-content" }} />
        </label>

        <button>
          <span>Send</span>
          <i className="fi fi-bs-arrow-small-right"></i>
        </button>
      </form>
    </section>
  );
}
