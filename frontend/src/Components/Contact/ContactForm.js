// import React, { useState } from "react";

// import { useForm, ValidationError } from '@formspree/react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../CSS/Styles.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" }); // Clear error on change
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required.";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format.";
//     }
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
//     if (!formData.message.trim()) newErrors.message = "Message is required.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Form submitted successfully!");
//       // Reset form after submission
//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });
//     }
//   };

//   return (
//     <>
//       <section className="contact py-5 text-white">
//         <div className="container">
//           <h2 className="text-center mb-4">
//             Get in <span className="text-info">Touch</span>
//           </h2>
//           <div className="row">
//             <div className="col-md-6">
//               <h5>Find us on WhatsApp:</h5>
//               <p>
//                 You can effortlessly get in touch with us through our{" "}
//                 <a
//                   className="link"
//                   href="https://wa.me/03032167370"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   WhatsApp
//                 </a>{" "}
//                 link. We’re online from 9:00 AM to 9:00 PM (Pak).
//               </p>

//               <h5>Feedback:</h5>
//               <p>
//                 If you have any queries or wish to share your valuable feedback,
//                 please feel free to reach out to us{" "}
//                 <a className="link" href="mailto:pleggenie@gmail.com">
//                   via email
//                 </a>
//                 . We greatly appreciate your input, as it helps us improve and
//                 serve you better. Thank you for taking the time to provide your
//                 feedback—it truly means a lot to us.
//               </p>
//             </div>
//             <div className="col-md-6">
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className={`form-control ${errors.name ? "is-invalid" : ""}`}
//                     placeholder="Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                   {errors.name && (
//                     <div className="invalid-feedback">{errors.name}</div>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                   {errors.email && (
//                     <div className="invalid-feedback">{errors.email}</div>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className={`form-control ${
//                       errors.subject ? "is-invalid" : ""
//                     }`}
//                     placeholder="Subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                   {errors.subject && (
//                     <div className="invalid-feedback">{errors.subject}</div>
//                   )}
//                 </div>
//                 <div className="mb-3">
//                   <textarea
//                     className={`form-control ${
//                       errors.message ? "is-invalid" : ""
//                     }`}
//                     rows="4"
//                     placeholder="Message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                   ></textarea>
//                   {errors.message && (
//                     <div className="invalid-feedback">{errors.message}</div>
//                   )}
//                 </div>
//                 <button type="submit" className="btn btn-info diagonal-button">
//                   Submit
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ContactForm;

// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../CSS/Styles.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("movvbayq");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form was submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validate()) {
      handleSubmit(e);
      setFormSubmitted(true); // Set the form as submitted
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <section className="contact py-5 text-white">
        <div className="container">
          <h2 className="text-center mb-4">
            Get in <span className="text-info">Touch</span>
          </h2>
          <div className="row">
            <div className="col-md-6">
              <h5>Find us on WhatsApp:</h5>
              <p>
                You can effortlessly get in touch with us through our{" "}
                <a
                  className="link"
                  href="https://wa.me/03032167370"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>{" "}
                link. We’re online from 9:00 AM to 9:00 PM (Pak).
              </p>

              <h5>Feedback:</h5>
              <p>
                If you have any queries or wish to share your valuable feedback,
                please feel free to reach out to us{" "}
                <a className="link" href="mailto:pleggenie@gmail.com">
                  via email
                </a>
                . We greatly appreciate your input, as it helps us improve and
                serve you better. Thank you for taking the time to provide your
                feedback—it truly means a lot to us.
              </p>
            </div>
            <div className="col-md-6">
              {/* Success Message */}
              {formSubmitted && !state.succeeded && (
                <div className="alert alert-success mb-3">
                  Form submitted successfully!
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmitForm}>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${
                      errors.subject ? "is-invalid" : ""
                    }`}
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject}</div>
                  )}
                </div>
                <div className="mb-3">
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    rows="4"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-info diagonal-button" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;