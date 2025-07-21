import React, { useState } from 'react';

const faqData = [
  {
    question: 'Is Block Sugar right for me?',
    answer: 'Tired of having type 2 diabetes controlling your life or worried that persistent high blood sugar levels could turn into something worse? Then yes, Block Sugar is ideal for you. Block Sugar has already provided incredible help with blood sugar control for men and women in their 30s, 40s, 50s and even 80s. Because it has been formulated based on cutting-edge science and innovative ingredients, Block Sugar is designed to quickly help with even the most unstable blood sugar levels.'
  },
  {
    question: 'What does Block Sugar contain? Is it safe?',
    answer: 'Block Sugar is a patented formula inspired purely by nature. Manufactured in the USA in our FDA-registered and GMP-certified facilities. We use only state-of-the-art machinery and follow the strictest sterile standards. Every ingredient is 100% plant-based, soy-free, dairy-free, vegetarian and non-GMO. Block Sugar undergoes additional third-party inspections and quality control to ensure high purity and potency. No side effects have been reported, except the opportunity to enjoy a happier and healthier life. However, we recommend consulting your doctor to be sure and continuing to take the prescribed medication until your healthcare professional authorizes otherwise.'
  },
  {
    question: 'What is the best way to take Block Sugar? How long will it take to see results?',
    answer: 'Simply take 1 capsule of Block Sugar in the morning, before breakfast, with a glass of water. You will love the results and how you will feel when the natural ingredients start working to help control excess blood sugar throughout the day. Combining Block Sugar with other supplements is safe, but be careful with other chromium-rich formulas, as Block Sugar already provides a sufficient amount. Results may vary, but many people start noticing improvements in energy, mood, and blood sugar levels within the first few weeks of consistent use.'
  },
  {
    question: 'How long will it take to see results? How many bottles should I order?',
    answer: 'If you are over 40 or overweight, Dr. Akira Nakamura recommends taking Block Sugar consistently for at least 3 to 6 months. We are all different, so the time it takes to see results can vary. Most people start to notice a difference after the first week. In our studies, the best results are obtained when taking Block Sugar consistently for 6 months, consolidating the benefits and maximizing long-term weight loss. We therefore highly recommend taking advantage of our 6-bottle discount package to get the best value, as well as enjoying free shipping to the USA and 2 free bonuses.'
  },
  {
    question: 'What if Block Sugar doesn’t work for me?',
    answer: 'Every bottle of Block Sugar comes with our 180-day money-back guarantee. We want you to be delighted with your purchase, not just satisfied, but you won’t know until you try this amazing formula and see the results for yourself. If you decide, for whatever reason, that Block Sugar isn’t for you, simply return the bottles (even if they’re empty) and we’ll issue an immediate refund, no questions asked... minus shipping and handling costs.'
  },
  {
    question: 'Is this a one-time payment and is my purchase secure?',
    answer: 'Yes! Your purchase is a one-time payment, 100% secure and encrypted. We do not store your payment information and you will never be billed again unless you make a new order.'
  },
  {
    question: 'Where can I buy Block Sugar, and how quickly can I receive it?',
    answer: 'It’s that easy! Simply select one of the packages below on this secure page. Remember that the 6-bottle option offers the best deal and the best chance of long-term results. To make sure you’re buying the original product and guarantee the purity of the ingredients, only buy from this official website. Block Sugar is not available in stores or from online retailers such as Amazon, eBay, GNC, Walgreens or Wal-Mart. We will ship your order directly to the address of your choice using a premium carrier 7 days a week (except on major US holidays). We strive to ship each order within 24 business hours, and you will receive a tracking email so you can monitor your package. On average, your order will arrive within 5 to 10 days in the USA. International orders may take a little longer, depending on local carriers.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none flex justify-between items-center"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              <span>{openIndex === idx ? '-' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-3 bg-white border-t text-gray-700 animate-fade-in">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 