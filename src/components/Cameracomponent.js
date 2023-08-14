import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Cameracomponent.scss';

const Cameracomponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [buttonText, setButtonText] = useState('Retake');

  
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Here you can implement face detection logic to get cropped face image.
    // You can use face detection libraries like face-api.js.
    
    // For now, let's assume you have the cropped face image.
    setModalOpen(true);
    setButtonText('Capture');
    onCapture(imageSrc); // Pass the image source to the parent component.
  };



  return (
    <div className="camera-container">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="webcam"
      />
      <button className='capture-click' onClick={capture}>.</button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <img src={"demo"} alt="Cropped Face" />
      <button>{buttonText}</button>
      </Modal>
      <div>
    </div>
    </div>
  );
};

export default Cameracomponent;



