import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import SignUpForm from "./components/SignUp";

function App() {
  const [categories] = useState([
    {
      name: 'Gallery',
      description: "Pictures from previous meals created by Go Go Gomez",
    },
    {
      name: 'Contact',
      description: 'Checkout my social media pages, email, or call me',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [signUpSelected, setSignUpSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        signUpSelected={signUpSelected}
        setSignUpSelected={setSignUpSelected}
      ></Nav>
      <main>
        {!signUpSelected ? (
          <>
            <About></About>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <SignUpForm></SignUpForm>
        )}
      </main>
    </div>
  );
}

export default App;

