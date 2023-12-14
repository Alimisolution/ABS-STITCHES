import Styles from "./Styles";

function LatestStyles() {
  return (
    <div className="pt-20 px-4 md:px-20" id="styles">
      <h1 className="font-semibold sm:text-3xl text-xl">
        Introducing Our Newest Styles
      </h1>
      <p className="sm:text-xl mt-4">
        We are thrilled to unveil our lastest styles, showcasing the hottest
        trends and must-have styles of the season.
      </p>
      <Styles />
    </div>
  );
}

export default LatestStyles;
