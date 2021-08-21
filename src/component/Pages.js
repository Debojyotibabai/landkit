import React from "react";

// component
import Navbar from "./Navbar";

// css
import "../App.css";

const Pages = () => {
  return (
    <>
      <div className="main__section">
        <Navbar />
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bolder",
            height: "50vh",
            fontSize: "1.5rem",
          }}
        >
          Pages page
        </p>
      </div>
    </>
  );
};

export default Pages;
