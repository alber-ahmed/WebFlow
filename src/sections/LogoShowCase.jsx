import { logoIconsList } from "../constants";

const LogoIcon = ({ icon, alt }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} width="100%" height="100%" alt={alt} />
    </div>
  );
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} alt={index} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} alt={index}/>
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;