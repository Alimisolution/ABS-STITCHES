function Contact() {
  return (
    <div className="pt-20 md:px-20 px-4" id="contact">
      <h1 className="font-semibold sm:text-3xl text-xl">Get in Touch</h1>
      <p className="text-lg mt-3">
        We would love to hear from you! If you have any questions, comments, or
        inquiries, please dont hesitate to reach out to us. fashion needs.
      </p>
      <p className="text-lg mt-3">
        We look forward to connecting with you and assisting you with all your
      </p>
      <p className="text-lg mt-3">
        <span className="font-semibold"> Visit Our Office:</span> N1/560 sabo
        area, Ibadan.
      </p>

      <div className="mt-4 space-x-2 mb-10">
        <a
          href="tel:07069375511"
          className="  bg-green-700 px-4 rounded-md text-white py-1 text-sm cursor-pointer"
        >
          Call Us
        </a>
        <a
          href="https://wa.link/ubhf92"
          className="  bg-green-700 px-4 rounded-md text-white py-1 text-sm cursor-pointer"
        >
          Chat us
        </a>
      </div>
    </div>
  );
}

export default Contact;
