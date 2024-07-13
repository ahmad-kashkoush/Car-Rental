import Button from '@/shared/Button';

function ContactForm() {
  return (
    <form className="mt-16 lg:mt-auto text-center lg:text-left space-y-8">
      <div>
        <label htmlFor="" className="font-medium">
          Full Name
        </label>
        <input
          className="mt-2 w-full bg-bg-secondary px-4 py-3"
          type="text"
          placeholder={`E.g.: "Ahmed Kashkoush"`}
        />
      </div>
      <div >
        <label htmlFor="" className="font-medium ">
          Email
        </label>
        <input
          type="email"
          name=""
          id=""
          placeholder="email@example.com"
          className="mt-2 w-full bg-bg-secondary px-4 py-3"
        />
      </div>
      <div>
        <label htmlFor="" className="font-medium">
          Enter Your Message
        </label>
        <textarea
         placeholder="Enter Message"
         className="mt-2 w-full bg-bg-secondary px-4 py-3 h-40"
         ></textarea>
      </div>
      <button className='block bg-accent w-full text-white font-medium transition duration-300 hover:bg-black-btn py-3'>
        <img />
        Send Message
      </button>
    </form>
  );
}
export default ContactForm;
