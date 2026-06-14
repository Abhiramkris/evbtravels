import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQ_DATA = [
  {
    question: 'How do I book a cab in Kannur?',
    answer: 'Booking can be completed online, over the phone or through WhatsApp. We’re based in Kannur and respond quickly.'
  },
  {
    question: 'Do you serve all areas of Kannur district?',
    answer: 'Yes. We cover Kannur city and all major areas including Thalassery, Payyanur, Iritty, Thaliparamba, Valapattanam and more.'
  },
  {
    question: 'Do you provide Kannur Airport transfers?',
    answer: 'Yes. We specialise in pickups and drops at Kannur International Airport, with live flight tracking to ensure we’re always on time.'
  },
  {
    question: 'Can I book in advance?',
    answer: 'Absolutely. Advance booking is strongly recommended for airport transfers and long-distance outstation travel.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash and digital payments for your convenience. Payment details are confirmed at the time of booking.'
  },
  {
    question: 'Do you provide corporate travel?',
    answer: 'Yes. We offer dedicated transportation for Kannur businesses, local offices and visiting corporate clients.'
  },
  {
    question: 'How are drivers verified?',
    answer: 'All our drivers are locally sourced from Kannur, fully licensed, background-verified and selected for their professionalism and road knowledge.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellation terms are communicated clearly at the time of booking confirmation.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find quick answers to common questions about booking, safety, and policies.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{faq.question}</span>
                  <ChevronDown size={18} className="faq-icon" />
                </button>
                
                <div 
                  className="faq-answer-container"
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export { FAQ_DATA };
