import React, { useState } from 'react';
import Cameracomponent from './components/Cameracomponent';
import './App.scss';

const App = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleCapture = (imageSrc) => {
    // You can save the imageSrc in state or perform further actions.
    setProfileImage(imageSrc);
  };

  return (
    <div className="app">
      {profileImage ? (
        <img src={profileImage} alt="Profile" />
      ) : (
        <Cameracomponent onCapture={handleCapture} />
      )}
    </div>
  );
};

export default App;
