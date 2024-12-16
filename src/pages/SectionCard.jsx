import React from "react";
import PropTypes from "prop-types";

function SectionCard({ title, text, imgSrc, altText, details }) {
  return (
    <div className="section-card">
      <img src={imgSrc} alt={altText} className="section-card-image" />
      <div className="section-card-content">
        <h2>{title}</h2>
        <p>{text}</p>
        {details && (
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <strong>{detail.title}: </strong>
                {detail.description}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default SectionCard;

