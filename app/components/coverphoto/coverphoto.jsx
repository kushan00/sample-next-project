import React from "react";
import Image from "next/image";
import Search from "./search";

const Coverphoto = () => {
  return (
    <div className="coverphoto" style={{ position: 'relative' }}>
      <Image
        src="/banner-image.png"
        alt="Honeymoon Logo"
        layout="responsive"
        width={100}
        height={514}
        style={{ filter: 'brightness(50%)' }} // Adjust the brightness value
      />
      <div
        style={{
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '75%', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          color: 'white',
          fontSize:'54px',
          fontWeight:'700',
        }}
      >
        <h1>Your Love Story</h1>
        <h1>Deserves the Best</h1>
      </div>
      <div
      style={{
        position: 'absolute', 
        top: 280, 
        left: 300, 
        width: '948px', 
        height: '100%', 
      }}
      >
        <Search/>
      </div>
      
    </div>
  );
};

export default Coverphoto;
