import React, { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [imageURl, setImageURL] = useState("");
  const handleAddImage = () => {
    if (imageURl) {
      setImages([...images, imageURl]);
      setImageURL("");
    }
  }
  const handleRemoveImage = (index) => {
    const newImages = images.filter((image, i) => i !== index);
    setImages(newImages);
  }
  return (
    <div className="App">
      <h1>Mood Board</h1>
      <div className="form">
        <input
          type="text"
          value={imageURl}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>
      <div className="mood-board">
        {images.map((image, index) => (
          <div key={index} className="mood-item">
            <img src={image} alt="mood" />
            <button onClick={() => handleRemoveImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
