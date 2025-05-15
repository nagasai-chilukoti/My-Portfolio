import React, { useState } from "react";
import Footer from "./Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nagasaichilukoti71@gmail.com");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div align="center" className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8">
    <br/>
    <br/>
        <h1 className="text-3xl font-bold text-white text-center">Contact Me</h1>
        <p className="text-base text-gray-400 text-center">I'd love to hear from you!</p>

        {/* Copy Email Section */}
        <div
          className="flex items-center justify-center gap-2 cursor-pointer group"
          onClick={handleCopy}
        >
          <button className="text-lg font-medium text-gray-300 group-hover:text-white transition">
            {hasCopied ? "Email Copied!" : "Click to copy mail"}
          </button>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <h4>
          <div className="flex items-center gap-4">
            <label className="w-1/5 text-sm text-gray-300">Name : </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Enter your name"
            />
          </div>
          <br></br>

          {/* Email */}
          <div className="flex items-center gap-4">
            <label className="w-1/5 text-sm text-gray-300">Email : </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Enter your email"
            />
          </div>
          <br></br>
          {/* Subject */}
          <div className="flex items-center gap-4">
            <label className="w-1/5 text-sm text-gray-300">Subject : </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Subject"
            />
          </div>

          {/* Message */}

          <br></br>
            <div className="flex items-start gap-4">
            <label className="w-1/5 text-sm text-gray-300 pt-2">Message : </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </div>

</h4>
          <br></br>
          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-1/2 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <Footer/>
    </div>
  );
}

export default ContactForm;
