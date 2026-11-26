import React, { useEffect, useMemo, useState } from "react";
import { X, CalendarDays, CheckCircle2 } from "lucide-react";

const LEASE_OPTIONS = [1, 3, 6, 12];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  moveIn: "",
  lease: 12,
  message: "",
};

const BookingModal = ({ property, onClose }) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!property) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [property, onClose]);

  // Reset the form each time a different property is booked
  useEffect(() => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }, [property?.id]);

  const total = useMemo(
    () => (property ? property.price * form.lease : 0),
    [property, form.lease]
  );

  if (!property) return null;

  const update = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email.";
    if (!/^[+\d][\d\s-]{6,}$/.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.moveIn) next.moveIn = "Choose a move-in date.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // TODO: send the booking to your API here, e.g.
    // await api.post("/bookings", { propertyId: property.id, ...form });

    setSubmitted(true);
  };

  return (
    <div className="rm-overlay" onClick={onClose}>
      <div
        className="rm-dialog rm-dialog--booking"
        role="dialog"
        aria-modal="true"
        aria-labelledby="bk-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="rm-close"
          aria-label="Close booking"
          onClick={onClose}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="bk-success">
            <div className="bk-success-icon">
              <CheckCircle2 size={32} />
            </div>
            <h3 id="bk-title">Booking request sent</h3>
            <p>
              Thanks, {form.name.split(" ")[0]}. We've received your request
              for <strong>{property.title}</strong>. An agent will contact you
              at {form.email} within 24 hours.
            </p>
            <button type="button" className="rm-btn rm-btn--primary" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate style={{ display: "contents" }}>
            <div className="bk-header">
              <div className="bk-header-label">Book this property</div>
              <h2 id="bk-title" className="bk-header-title">
                {property.title}
              </h2>
              <p className="bk-header-sub">{property.location}</p>
            </div>

            <div className="bk-form">
              <div className="bk-grid">
                <div className="bk-field">
                  <label htmlFor="bk-name">Full name</label>
                  <input
                    id="bk-name"
                    className={`rm-input${errors.name ? " invalid" : ""}`}
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <span className="bk-error">{errors.name}</span>}
                </div>

                <div className="bk-field">
                  <label htmlFor="bk-phone">Phone</label>
                  <input
                    id="bk-phone"
                    className={`rm-input${errors.phone ? " invalid" : ""}`}
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+94 77 123 4567"
                  />
                  {errors.phone && <span className="bk-error">{errors.phone}</span>}
                </div>

                <div className="bk-field bk-field--full">
                  <label htmlFor="bk-email">Email</label>
                  <input
                    id="bk-email"
                    type="email"
                    className={`rm-input${errors.email ? " invalid" : ""}`}
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                  />
                  {errors.email && <span className="bk-error">{errors.email}</span>}
                </div>

                <div className="bk-field">
                  <label htmlFor="bk-date">Move-in date</label>
                  <input
                    id="bk-date"
                    type="date"
                    className={`rm-input${errors.moveIn ? " invalid" : ""}`}
                    value={form.moveIn}
                    onChange={update("moveIn")}
                  />
                  {errors.moveIn && <span className="bk-error">{errors.moveIn}</span>}
                </div>

                <div className="bk-field">
                  <label>Lease length (months)</label>
                  <div className="rm-seg" role="group" aria-label="Lease length">
                    {LEASE_OPTIONS.map((m) => (
                      <button
                        key={m}
                        type="button"
                        aria-pressed={form.lease === m}
                        className={form.lease === m ? "active" : ""}
                        onClick={() => setForm((p) => ({ ...p, lease: m }))}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bk-field bk-field--full">
                  <label htmlFor="bk-msg">Message (optional)</label>
                  <textarea
                    id="bk-msg"
                    className="rm-textarea"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Anything the agent should know?"
                  />
                </div>
              </div>

              <div className="bk-summary">
                <div>
                  <div className="bk-summary-label">Estimated total</div>
                  <div className="bk-summary-sub" style={{ textAlign: "left" }}>
                    {form.lease} month{form.lease > 1 ? "s" : ""} × ${property.price}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div className="bk-summary-value">
                    ${total.toLocaleString()} <small>USD</small>
                  </div>
                  <div className="bk-summary-sub">{property.lkr}/mo</div>
                </div>
              </div>
            </div>

            <div className="bk-footer">
              <button type="button" className="rm-btn rm-btn--ghost" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="rm-btn rm-btn--primary">
                <CalendarDays size={16} /> Confirm booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;