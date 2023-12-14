import { useState } from "react";
import Menu from "./Menu";
import SmallMenu from "./SmallMenu";
import { FaBars } from "react-icons/fa";

function Header() {
  const [toggle, setToggle] = useState(0);

  return (
    <div
      className="bg-blue-900 px-4 md:px-20 flex justify-between sticky top-0 z-10 items-center py-4"
      id="home"
    >
      <span className="text-white text-2xl md:text-3xl font-semibold italic">
        A <span className="text-yellow-600">B</span> S ✂
      </span>

      <Menu />
      <SmallMenu toggle={toggle} />
      <span
        className="text-2xl text-white font-serif cursor-pointer md:hidden block"
        onClick={() => setToggle(!toggle)}
      >
        <FaBars />
      </span>
    </div>
  );
}

export default Header;
