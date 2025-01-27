import React from 'react';
import '../Assets/Body.css'; 
import image2 from '../Images/image12.png';
import image3 from '../Images/image14.png';
import image4 from '../Images/image10.png';

const Body = () => {
  const heading1 = "Section 1";
  const paragraph1 = "This is the content for the first section. It can be any text or description related to the image.";

  const heading2 = "Section 2";
  const paragraph2 = "This is the content for the second section. Here you can add any information to complement the image.";

  const heading3 = "Section 3";
  const paragraph3 = "This is the content for the third section. Feel free to customize it according to your needs.";

  return (
    <div className="body-container">
      <div className="section">
        <img className="image" src={image2} alt="placeholder" />
        <div className="content">
          <h2>{heading1}</h2>
          <p>{paragraph1}</p>
        </div>
      </div>
      <div className="section">
        <img className="image" src={image3} alt="placeholder" />
        <div className="content">
          <h2>{heading2}</h2>
          <p>{paragraph2}</p>
        </div>
      </div>
      <div className="section">
        <img className="image" src={image4} alt="placeholder" />
        <div className="content">
          <h2>{heading3}</h2>
          <p>{paragraph3}</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
