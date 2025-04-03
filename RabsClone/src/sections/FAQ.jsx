import React, { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    question: "What services does your Website Designing Agency offer?",
    answer:
      "We offer a comprehensive range of website design and development services, including custom website design, responsive design, content management systems (CMS), and website maintenance.",
  },
  {
    question: "How much does it cost to get a website designed by your agency?",
    answer:
      "The cost of website design varies based on the complexity of the project, features required, and specific client needs. We offer personalized quotes after understanding your requirements in detail. Contact us for a detailed consultation.",
  },
  {
    question: "What after-sales support do you offer?",
    answer:
      "We provide ongoing support and assistance after the website is live. This includes troubleshooting, addressing any issues that may arise, and guidance on using and updating your website.",
  },
  {
    question: "Do you provide website maintenance services?",
    answer:
      "Yes, we offer website maintenance services to ensure your website stays up-to-date, secure, and functions optimally. Maintenance plans can be customized to meet your specific needs.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Absolutely! We specialize in website redesign to give your existing site a fresh and modern look. We'll work closely with you to understand your goals and deliver a revamped website that aligns with your brand.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are designed to be responsive, ensuring optimal viewing and functionality across various devices, including smartphones and tablets.",
  },
  {
    question: "Is SEO included in your website design services?",
    answer:
      "While basic SEO principles are implemented in our website designs, we also offer comprehensive SEO services as a separate package. This includes keyword research, on-page optimization, and ongoing SEO strategies to improve your website's visibility.",
  },
  {
    question: "Can I update the content on my website on my own?",
    answer:
      "Yes, we often integrate user-friendly Content Management Systems (CMS) like WordPress, allowing you to easily update and manage your website content. We also provide training to ensure you're comfortable with the platform.",
  },
  {
    question: "How can I get started with your Website Designing services?",
    answer:
      "Simply contact us through our website, phone, or email to discuss your project. We'll schedule a consultation to understand your requirements and provide you with a tailored proposal.",
  },
  {
    question: "How long does it take to complete a website design project?",
    answer:
      "The timeline for a website design project depends on various factors such as the scope of the project, features, and client feedback. On average, a standard website can take anywhere from 4 to 8 weeks, but timelines can be adjusted based on project requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQ'S:</h2>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              <span className="faq-q">Q.</span> {item.question}
            </button>
            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;