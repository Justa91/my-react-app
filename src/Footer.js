import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="container">
      <footer>
        <p>
          This project was coded by Justyna Krupa and is{" "}
          <a href="https://github.com/Justa91/my-react-app">
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://sparkling-cascaron-975835.netlify.app/">Netlify</a>
        </p>
      </footer>
    </div>
  );
}
