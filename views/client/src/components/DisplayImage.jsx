import React from 'react';

function DisplayImage({ base64Image }) {
  // Decode the Base64 image data
  const imageSource = `data:image/jpeg;base64, ${base64Image}`; // Adjust the MIME type accordingly

  return (
    <div>
      <img src={imageSource} alt="Your Image" />
    </div>
  );
}

export default DisplayImage;
