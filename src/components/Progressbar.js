import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

const percentage = 70;

function Progressbar() {
  const containerStyle = {
    width: "76px", // Set your desired width
    height: "76px", // Set your desired height
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Colors
          pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",

          // Stroke width
          strokeWidth: "15", // Increase the stroke width for a thicker border
          textSize: "16px",
        })}
      >
        <div style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          {percentage}%
        </div>
        <div style={{ fontSize: 8, color: 'white', marginTop: 0, textAlign: 'center' }}>
          Goal <br /> Completed
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Progressbar;
