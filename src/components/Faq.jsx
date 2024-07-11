import FaqBox from '@/components/FaqBox';
import { useState } from 'react';

const faqs = [
  {
    id: '1',
    q: '1. What is special about comparing rental car deals?',
    a: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.',
  },
  {
    id: '2',
    q: '2. How do I find the car rental deals?',
    a: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.',
  },
  {
    id: '3',
    q: '3. How do I find such low rental car prices?',
    a: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.',
  },
];
function Faq() {
  const [active, setActive] = useState('0');
  function handleQuestionClick(e) {
    const element=e.target.closest(".faq-box");
   if(!element)return;
   const id=element.dataset.id;
   setActive((cur)=>cur===id?'0':id);
  }
  return (
    <section className="faq  py-32">
      {/* TODO: [x] FAQ Headings  */}
      <div className="container mx-auto px-8 text-center">
        <h2 className="section-sub-title font-medium">FAQ</h2>
        <h1 className="section-title mt-3 font-bold">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-4 max-w-[41rem] px-4 text-base">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
        <div className="faq-content shadow-lg max-w-[50rem] mx-auto mt-12">
          {/* TODO: [ ] FAQ Accordion Question */}
          {faqs.map((faq) => (
            <FaqBox
              key={faq.id}
              isActive={active === faq.id}
              faqItem={faq}
              onClick={handleQuestionClick}
            />
          ))}
          {/*  TODO: [ ] FAQ Accordion */}
        </div>
      </div>
    </section>
  );
}

export default Faq;
