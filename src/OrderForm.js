import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const OrderForm = () => {
  // State for form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    paymentMethod: "",
    transactionNumber: "",
    service: "",
  });

  // State for loading
  const [loading, setLoading] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      paymentMethod: formData.paymentMethod,
      transactionNumber: formData.transactionNumber,
      service: formData.service,
    };

    emailjs
      .send(
         "service_4w1ckgm",
        "template_p2nfucl",
        templateParams,
        "xTSXZmLF1Q14b7wP3"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          toast.success("অর্ডারের জন্য ধন্যবাদ, খুব শিঘ্রই আপনাকে ম্যাসেজ করা হবে ইনশাআল্লাহ");
          setLoading(false); // Set loading to false when submission ends
          // Optionally reset form
          setFormData({
            name: "",
            email: "",
            mobile: "",
            paymentMethod: "",
            transactionNumber: "",
            service: "",
          });
        },
        (error) => {
          console.log("Error:", error.text);
          toast.error("দুঃখিত, আবার চেষ্টা করুন");
          setLoading(false); // Set loading to false on error
        }
      );
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <img src="/Oxaton.png" alt="Company Logo" className="logo-img" />
      </div>
      <h3 className="mb-4">ওর্ডার কনফার্ম করুন</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="form-label">
            নাম:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="email" className="form-label">
            ইমেইল:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="mobile" className="form-label">
            মোবাইল নাম্বার :
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="paymentMethod" className="form-label">
            কিসের মাধ্যমে পে করেছেন?
          </label>
          <select
            className="form-select"
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">নির্বাচন করুন</option>
            <option value="bkash">বিকাশ</option>
            <option value="nagad">নগদ</option>
            <option value="rocket">রকেট</option>
            <option value="bank">ব্যাংক</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="transactionNumber" className="form-label">
            ট্রাঞ্জেকসান নাম্বার :
          </label>
          <input
            type="text"
            className="form-control"
            id="transactionNumber"
            name="transactionNumber"
            value={formData.transactionNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="service" className="form-label">
            কোন সার্ভিস টি নিচ্ছেন?
          </label>
          <select
            className="form-select"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">নির্বাচন করুন</option>
            <option value="ecommerce_site">ইকমার্স সাইট</option>
            <option value="blog_site">ব্লগ সাইট</option>
            <option value="portfolio_site">পোর্টফলিও সাইট</option>
            <option value="corporate_site">কর্পোরেট সাইট</option>
            <option value="medical_site">মেডিক্যাল সাইট</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>

        <button type="submit" className="btn btn-warning" disabled={loading}>
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "সাবমিট করুন"
          )}
        </button>

        {/* Toast container */}
        <ToastContainer />
      </form>
    </div>
  );
};

export default OrderForm;
