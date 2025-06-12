/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
       
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
      href={`#${id ?? "counter"}`} // Use the passed ID or default to "counter"
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" width="100%" height="100%"/>
        </div>
      </div>
    </a>
  );
};

export default Button;