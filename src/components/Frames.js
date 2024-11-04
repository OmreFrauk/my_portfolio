import linkedin from "../assets/bxl-linkedin.svg.svg";
import bxlGithubSvg from "../assets/bxl-github.svg.svg";

export const Frames = () => {
  return (
    <div className="action">
      <div className="frame">
        <img
          className="bxl-linkedin-svg"
          alt="Bxl linkedin svg"
          src={linkedin}
        />
      </div>
      <div className="frame">
        <img
          className="bxl-github-svg"
          alt="Bxl github svg"
          src={bxlGithubSvg}
        />
      </div>
    </div>
  );
};
