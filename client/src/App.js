import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: 'Gallery',
      description: "Pictures of my favorite meals I've created",
    },
    {
      name: 'Contact',
      description: 'Checkout my social media pages, email, or call me',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;

