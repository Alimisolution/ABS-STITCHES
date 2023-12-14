import { FaArrowUp } from "react-icons/fa";
function Footer() {
  return (
    <>
      <p className="bg-black text-center text-white py-3 md:text-lg text-xs italic sm:mt-24 mt-16">
        Designed by Alimi Rosheed a.k.a (Alimisolution)
      </p>
      <a
        href="home"
        className="w-12 fixed bottom-14 right-4 h-12 rounded-full cursor-pointer flex justify-center bg-blue-900 items-center text-white text-2xl font-semibold "
      >
        <FaArrowUp />
      </a>
    </>
  );
}

export default Footer;
