function FaqBox({ isActive, faqItem, onClick }) {
  return (
    <div
      className="faq-box cursor-pointer text-left bg-white"
      data-id={faqItem.id}
      onClick={onClick}
    >
      <div
        className={`faq-question active-transition flex items-center justify-between border-[1px] border-gray-50 px-10 py-4 ${isActive ? 'bg-accent' : ''}`}
      >
        <p
          className={`active-transition text-xl font-medium ${isActive ? 'text-white' : 'text-title'}`}
        >
          {faqItem.q}
        </p>
        {!isActive && <img src="images/dropdown-icon.svg " />}
        {isActive && <img src="images/dropdown-active-icon.svg " />}
      </div>
      <div
        className={`faq-answer active-transition px-8 ${!isActive ? 'h-0 overflow-hidden opacity-0' : 'py-8'}`}
      >
        <p>{faqItem.a}</p>
      </div>
    </div>
  );
}
export default FaqBox;
