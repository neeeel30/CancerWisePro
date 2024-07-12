// Left.jsx
import React, { useState } from 'react';
import axios from 'axios';
import demoImage from '../images/demo.png';
import '../style/Left.css';

const Left = ({ setPrediction, setLoading }) => {
    const [selectedImage, setSelectedImage] = useState(demoImage);
    const [image,setImage] = useState(null);

    const handleImageSelection = (event) => {
        const file = event.target.files[0];
        setImage(event.target.files[0]);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setPrediction(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="left-wrapper">
            <div className="left">
                <div className="info">
                    <div className="info-header">Skin Cancer Analysis</div>
                    <div className="info-text">
                        Upload an image of your skin to analyze common types of skin cancer. If you have a mole, growth, or other skin concerns, consult a dermatologist.
                    </div>
                </div>
                <div className="uploaded-image">
                    <img src={selectedImage} alt="" width="400px" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="image-form">
                        <label htmlFor="InputImage" id="input-btn">
                            Upload Image
                            <input type="file" accept="image/*" name="InputImage" id="InputImage" style={{ display: "none" }} onChange={handleImageSelection} />
                        </label>
                    </div>
                    <div className="analyse-btn">
                        <button type="submit">Analyse!</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Left;
