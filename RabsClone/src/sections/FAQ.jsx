import React, { useState } from "react";
import "../styles/faq.css";

const faqData = [
  { question: "What services does your Website Designing Agency offer?", answer: "We offer a comprehensive range of website design and development services, including custom website design, responsive design, CMS, and maintenance." },
  { question: "How much does it cost to get a website designed by your agency?", answer: "The cost varies based on project complexity and features. Contact us for a personalized quote." },
  { question: "What after-sales support do you offer?", answer: "We provide troubleshooting, updates, and guidance to ensure your website runs smoothly." },
  { question: "Do you provide website maintenance services?", answer: "Yes, we offer website maintenance plans tailored to your needs." },
  { question: "Can you redesign an existing website?", answer: "Absolutely! We specialize in redesigning websites to give them a modern look." },
  { question: "Will my website be mobile-friendly?", answer: "Yes, all our websites are responsive for optimal viewing on any device." },
  { question: "Is SEO included in your website design services?", answer: "Basic SEO is included, and we also offer comprehensive SEO services separately." },
  { question: "Can I update the content on my website on my own?", answer: "Yes, we integrate user-friendly CMS platforms so you can manage content easily." },
  { question: "How can I get started with your Website Designing services?", answer: "Contact us via our website, phone, or email for a consultation." },
  { question: "How long does it take to complete a website design project?", answer: "It typically takes 4-8 weeks, depending on project complexity." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2 className="faq-title">FAQ'S:</h2>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-q">Q.</span> {item.question}
            </button>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
