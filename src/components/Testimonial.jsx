const test = [
  {
    names: "John",
    content:
      "I have never felt more confident and stylish than when I wear designs from ABS STITCHES. Their attention to detail and impeccable craftsmanship truly shine through in every piece. Whether it's a glamorous evening gown or a casual outfit, their designs make me feel empowered and beautiful. I can't recommend them enough!",
  },
  {
    names: "Micheal",
    content:
      "Finding the perfect suit used to be a challenge for me until I discovered ABS STITCHES. Their expertise in tailoring and their commitment to quality is unmatched. Every time I wear one of their suits, I receive compliments and feel like a million bucks. Their designs have elevated my style to a whole new level.",
  },
  {
    names: "Abdul-Azeez (Ijebu)",
    content:
      "ABS STITCHES is my go-to brand for unique and eye-catching dresses. Their selection is diverse, and I can always find something that perfectly matches my personality and mood. The attention to detail in their designs is exceptional, and I always feel like a true fashionista when wearing their dresses. I absolutely adore their collection!",
  },
  {
    names: "AbdulRosheed",
    content:
      "As a fashion enthusiast, I'm always on the lookout for designers who push the boundaries of style. ABS STITCHES. does just that. Their innovative designs and bold choices in color and pattern have inspired me to experiment more with my own fashion choices. Their pieces are conversation starters and have become staples in my wardrobe.",
  },
];
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init();

function Testimonial() {
  return (
    <div className="pt-20 md:px-20 px-4" id="test">
      <h1 className="font-semibold sm:text-3xl text-xl">Testimonial</h1>
      <p className="mt-3 text-xl">What our customer says about us</p>
      <div className="grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-4 ">
        {test.map((test) => (
          <div
            className="shadow-lg p-4"
            key={test.name}
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <p className="">{test.content}</p>
            <span className="sm:text-lg mt-4  block font-semibold">
              {test.names}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
