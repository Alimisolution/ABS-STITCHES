function SmallMenu({ toggle }) {
  return (
    <div
      className={
        toggle
          ? "space-y-8 pl-5 md:hidden flex-col z-10 flex transition-all duration-700 text-white font-semibold text-xl w-[60%] bg-gray-900 h-screen fixed top-0 left-[0px]"
          : "space-y-8 pl-5 md:hidden z-10 flex-col flex transition-all duration-700 text-white font-semibold text-xl w-[60%] bg-gray-900 h-screen fixed top-0 left-[-500px]"
      }
    >
      <a className="mt-5" href="home">
        Home
      </a>
      <a className="mt-5" href="#about">
        About
      </a>
      <a className="mt-5" href="#styles">
        All Styles
      </a>
      <a className="mt-5" href="#test">
        Testimonial
      </a>
      <a className="mt-5" href="#contact">
        Contact
      </a>
    </div>
  );
}

export default SmallMenu;
