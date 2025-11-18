import React, { useState } from "react";
import Card from "./component/Card";
import "./App.css";
import Sneha from "../src/asset/image/sneha.jpg";
import Akshaya from "../src/asset/image/akshaya.jpeg";
import Aasiya from "../src/asset/image/aasiya.jpeg";
import Abitha from "../src/asset/image/abitha.jpeg";
import Nithya from "../src/asset/image/nithya.jpg";
import Registration from "./component/Registration";

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  // Function to return back to cards page
  const goBackToCards = () => {
    setShowRegistration(false);
  };

  return (
    <div className="App">
    
      {showRegistration ? (
        <Registration goBack={goBackToCards} />
      ) : (
        <>
          <Card
            image={Aasiya}
            title="Aasiya"
            description={
              "A passionate Front-End Developer with over 3 years of experience crafting responsive and visually stunning web applications. Skilled in React.js and modern UI design, she brings ideas to life through clean, efficient, and user-centered code. Aasiya thrives in collaborative environments and is eager to take her creativity and technical expertise to the next level as a MERN Stack Developer."
            }
          />
          <Card
            image={Sneha}
            title="Sneha"
            description={
              "A creative Front-End Developer who loves transforming complex ideas into simple, beautiful, and functional web interfaces. With 3 years of hands-on experience in JavaScript, React, and modern front-end frameworks, Sneha is driven by a passion for design excellence and code perfection. Her goal is to grow as a MERN Stack Developer and deliver digital experiences that truly make an impact."
            }
          />
          <Card
            image={Nithya}
            title="Nithya"
            description={
              "A highly motivated Front-End Developer with 3 years of real-world experience in building seamless and interactive web applications. Nithya expertise lies in React.js, responsive design, and performance optimization. She believes every line of code should enhance user experience and visual storytelling. Now ready to expand her skills as a MERN Stack Developer and contribute to cutting-edge projects."
            }
          />
          <Card
            image={Abitha}
            title="Abitha"
            description={
              "A highly motivated Front-End Developer with 3 years of real-world experience in building seamless and interactive web applications. Abitha’s expertise lies in React.js, responsive design, and performance optimization. She believes every line of code should enhance user experience and visual storytelling. Now ready to expand her skills as a MERN Stack Developer and contribute to cutting-edge projects."
            }
          />
          <Card
            image={Akshaya}
            title="Akshaya"
            description={
              "An enthusiastic Front-End Developer with a sharp eye for detail and 3 years of hands-on experience in creating intuitive, dynamic, and responsive user interfaces. Akshaya combines design sensibility with strong technical skills in React.js and JavaScript to deliver engaging user experiences. Her ambition is to evolve as a MERN Stack Developer and build scalable, high-performing web solutions that stand out."
            }
          />

          {/* LOGIN BUTTON */}
          <button
            className="loginBtn"
            onClick={() => setShowRegistration(true)}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
