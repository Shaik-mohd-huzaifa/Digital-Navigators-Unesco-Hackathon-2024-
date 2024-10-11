import axios from 'axios';
import { useState, useEffect } from 'react';
import "./imageGen.styles.scss";

const ImageDownloader = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(null)

  useEffect(() => {
  }, []);

  const fetchImage = async () => {
    try{
        const response = await axios.post('http://localhost:5000/imageGen', {"prompt": prompt})  // Make sure this matches your backend API
        setImageUrl(response.data["image_url"])
    }catch(error){
        console.log(error)
    }
    
}


  const downloadImage = () => {
    if (imageUrl) {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'generated-image.png'; // The filename to save the image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='image-container'>
        <h2>Image Generation</h2>
    <div className="prompt">
        <textarea type="text" onChange={e => setPrompt(e.target.value)} />
        <button onClick={fetchImage}>Generate</button>
    </div>
      {imageUrl ? (
        <div>
          <img src={imageUrl} alt="Generated" style={{ maxWidth: '100%' }} />
          <br />
          <button onClick={downloadImage}>Download Image</button>
        </div>
      ) : <p>{loading && "...loading"}</p>}
    </div>
  );
};

export default ImageDownloader;
