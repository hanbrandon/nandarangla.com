"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";
import { IoIosArrowDown } from "react-icons/io";

interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What is Nandarang LA known for?",
    answer: "Nandarang is a legendary Koreatown, Los Angeles institution established in 1988. We are famous for serving authentic traditional Korean dishes, creative Korean fusion specialties, and an extensive bar selection including draft beers, soju, and handcrafted cocktails."
  },
  {
    question: "Where is Nandarang located and is there parking?",
    answer: "We are located at 3815 W 6th St, Los Angeles, CA 90020 (heart of Koreatown). Valet parking is available for our guests, and street parking can also be found in the surrounding area."
  },
  {
    question: "What are Nandarang's hours of operation and Happy Hour?",
    answer: "We are open daily from 11:00 AM to 2:00 AM, making it the perfect spot for both lunch and late-night dining. Our popular Happy Hour runs every day from 12:00 PM to 7:00 PM, offering fantastic deals on select drinks and popular bar bites."
  },
  {
    question: "Do you accept reservations and takeout/delivery orders?",
    answer: "Yes, we welcome both walk-ins and table reservations. For those dining at home, you can easily order pickup or delivery directly through our website or by calling us at +1 (213) 388-8513."
  },
  {
    question: "Is Nandarang a good late-night Korean restaurant in Koreatown LA?",
    answer: "Yes. Nandarang is open daily until 2:00 AM, making it a strong option for late-night Korean food, Korean bar plates, soju, beer, and cocktails in Koreatown Los Angeles."
  },
  {
    question: "Where can I view the Nandarang menu?",
    answer: "You can view the full Nandarang menu as a PDF from the menu section on this page. The menu includes Korean favorites, fusion plates, salads, bar snacks, draft beer, soju, sake, spirits, wine, and cocktails."
  },
  {
    question: "Does Nandarang have happy hour?",
    answer: "Yes. Nandarang offers daily happy hour from 12:00 PM to 7:00 PM with select drink and food specials. Availability can change, so check the current menu or call the restaurant for details."
  },
  {
    question: "What types of drinks are available at Nandarang?",
    answer: "Nandarang has a full bar with rotating draft beer, bottled and canned beer, soju, sake, wine, spirits, whiskey, and handcrafted cocktails."
  },
  {
    question: "What area of Los Angeles is Nandarang near?",
    answer: "Nandarang is located on W 6th St in Koreatown Los Angeles, near the Wilshire and Western area and close to many K-town nightlife and dining destinations."
  },
  {
    question: "Does Nandarang serve Korean fusion food?",
    answer: "Yes. Alongside classic Korean dishes, Nandarang serves Korean fusion items such as bulgogi tacos, spicy pork bulgogi tacos, seafood pasta, corn cheese, and shareable bar plates."
  },
  {
    question: "How do I contact Nandarang?",
    answer: "Call Nandarang at (213) 388-8513 or email nandarang@gmail.com. You can also use the Google Maps link on this page for directions to 3815 W 6th St, Los Angeles, CA 90020."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq" aria-labelledby="faq-title" style={{ backgroundColor: "var(--surface-container-low)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="text-center" style={{ marginBottom: "48px" }}>
          <span className="btn-outline" style={{ pointerEvents: "none", border: "none", padding: "0", color: "var(--primary)", letterSpacing: "0.2em" }}>
            FAQ
          </span>
          <h2 id="faq-title" className="section-title" style={{ marginTop: "8px" }}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
              >
                <button 
                  className={styles.questionButton}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <IoIosArrowDown className={styles.arrowIcon} />
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={styles.answerWrapper}
                  style={{ maxHeight: isOpen ? "280px" : "0" }}
                >
                  <div className={styles.answerContent}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
