import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer mt-24 mb-7">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} width="44%" height="44%" alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Alber Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;