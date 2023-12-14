function About() {
  return (
    <div className="pt-20 md:px-20 px-4" id="about">
      <h1 className="font-semibold sm:text-3xl text-xl">
        About A<span className="text-yellow-600 tracking-widest italic">B</span>
        S STITCHES ✂
      </h1>
      <p className="sm:text-xl mt-4 text-sm">
        Founded by A
        <span className="text-yellow-600 tracking-widest italic">B</span>S
        STITCHES in 2019, our fashion house has quickly become a global
        trendsetter in the industry. With a passion for design and an unwavering
        commitment to excellence, A{" "}
        <span className="text-yellow-600 tracking-widest italic">B</span>S
        STITCHES has earned a reputation for creating breathtaking fashion
        pieces that captivate the imagination <br />
        Inspired by art, culture, and the beauty of the world around us,
        <span className="text-yellow-600 tracking-widest italic">B</span>S
        STITCHES infuses every collection with a unique blend of creativity,
        craftsmanship, and attention to detail. Each garment is meticulously
        crafted using the finest fabrics and materials, ensuring a luxurious
        feel and a perfect fit
      </p>
      <div className=" mx-auto mt-10 w-[100%] md:grid-cols-2 grid gap-3">
        <video
          src="/img/stylevid.mp4"
          controls
          className=" object-cover mx-auto md:w-[45%]"
        />
        <video
          src="/img/stylevid2.mp4"
          controls
          className=" object-cover mx-auto md:w-[45%]"
        />
      </div>
    </div>
  );
}

export default About;
