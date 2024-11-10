import linkedin from "../assets/bxl-linkedin.svg.svg";
import bxlGithubSvg from "../assets/bxl-github.svg.svg";
import bxlInstagramSvg from "../assets/bxl-instagram.svg.svg";
import twittersvg from "../assets/twitter.svg";
export const Frames = () => {
  return (
    <div className="action">
      <div className="frame">
        <a
          href="https://www.linkedin.com/in/%C3%B6mer-faruk-bulut-0b4b8a184/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", justifySelf: "center" }}
        >
          <img
            className="bxl-linkedin-svg"
            alt="Bxl linkedin svg"
            src={linkedin}
          />
        </a>
      </div>
      <div className="frame">
        <a
          href="https://github.com/OmreFrauk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", justifySelf: "center" }}
        >
          <img
            className="bxl-github-svg"
            alt="Bxl github svg"
            src={bxlGithubSvg}
          />
        </a>
      </div>
      <div className="frame">
        <a
          href="https://instagram.com/omer48faruk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", justifySelf: "center" }}
        >
          <img
            className="bxl-ins-svg"
            alt="Bxl instagram svg"
            src={bxlInstagramSvg}
          />
        </a>
      </div>
      <div className="frame">
        <a
          href="https://x.com/konuskankirpi"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "flex", justifySelf: "center" }}
        >
          <img
            className="bxl-twitter-svg"
            alt="Bxl twitter svg"
            src={twittersvg}
          />
        </a>
      </div>
    </div>
  );
};
