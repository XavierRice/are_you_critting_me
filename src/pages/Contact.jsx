import { useState } from "react";
import { Mail, Send, Sparkles } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  contactType: "general",
  message: "",
  marketingConsent: false,
  company: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ state: "submitting", message: "Sending your message…" });

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your message.");

      setForm(initialForm);
      setStatus({ state: "success", message: "Message sent. The party will be in touch soon." });
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Something went wrong. Please try again." });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="section-kicker">Send a message through the Rift</p>
        <h1>Contact the Party</h1>
        <p>Questions, collaborations, bookings, press, sponsorships, or tales from Calderon—we would love to hear from you.</p>
      </section>

      <section className="contact-layout" aria-labelledby="contact-form-title">
        <div className="contact-copy">
          <div className="contact-icon" aria-hidden="true"><Mail size={28} /></div>
          <h2 id="contact-form-title">What brings you here?</h2>
          <p>Please reach out for booking, partnership, sponsorship, and sales inquiries.</p>
          <div className="contact-callout"><Sparkles size={18} aria-hidden="true" /><span>Fields marked with * are required.</span></div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-grid">
            <label>Name *<input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" maxLength={100} required /></label>
            <label>Email *<input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" maxLength={254} required /></label>
          </div>

          <div className="contact-form-grid">
            <label>Reason for contacting us *
              <select name="contactType" value={form.contactType} onChange={handleChange} required>
                <option value="general">General question</option>
                <option value="booking">Booking or appearance</option>
                <option value="partnership">Creative partnership</option>
                <option value="sponsorship">Sponsorship or advertising</option>
                <option value="press">Press or media</option>
                <option value="technical">Website or technical issue</option>
              </select>
            </label>
            <label>Subject<input type="text" name="subject" value={form.subject} onChange={handleChange} maxLength={150} /></label>
          </div>

          <label>Message *<textarea name="message" value={form.message} onChange={handleChange} rows={7} minLength={10} maxLength={5000} required /></label>

          <label className="contact-consent">
            <input type="checkbox" name="marketingConsent" checked={form.marketingConsent} onChange={handleChange} />
            <span>You may email me occasional show announcements, events, or offers. I can unsubscribe later.</span>
          </label>

          <label className="hidden-field" aria-hidden="true">Company<input type="text" name="company" value={form.company} onChange={handleChange} tabIndex={-1} autoComplete="off" /></label>

          <button type="submit" disabled={isSubmitting}><Send size={18} aria-hidden="true" />{isSubmitting ? "Sending…" : "Send Message"}</button>
          <div className={`contact-status contact-status--${status.state}`} role="status" aria-live="polite">{status.message}</div>
        </form>
      </section>
    </main>
  );
}
