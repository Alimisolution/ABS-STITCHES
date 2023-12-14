import Aos from "aos";

import "aos/dist/aos.css";
import TypingEffect from "./TypingEffect";

Aos.init();
function Hero() {
  const heading = TypingEffect(" ABS STITCHES ✂");
  return (
    <div className="hero">
      <div className="hero-inner text-center">
        <h1 className="text-2xl md:text-6xl font-bold text-white tracking-widest">
          {heading}
        </h1>
        <p
          data-aos="fade-left"
          data-aos-duration="3000"
          className="sm:text-2xl text-xl tracking-wider px-6 mt-4 text-white"
        >
          Expert in sewing all kind of male styles
        </p>
        <p className="md:w-[60%] sm:text-lg text-white mb-3 mt-5 mx-auto px-5">
          we believe that fashion is an art form that allows individuals to
          express their personality and creativity. Our collections are
          carefully curated to reflect the latest trends while maintaining a
          timeless appeal.{" "}
        </p>
        <p className="bg-blue-900 sm:py-[10px] py-[6px] text-[11px] sm:text-sm font-semibold inline-block rounded-lg px-5 sm:mt-8 mt-5 text-white">
          Motto: unleash your style.
        </p>
      </div>
    </div>
  );
}

export default Hero;
