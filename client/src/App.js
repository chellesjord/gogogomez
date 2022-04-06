import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  // const [categories] = useState
  const categories = ([
    {
      name: 'Pictures',
      description: 'Pictures of my food',
    },
    {
      name: 'Contact',
      description: 'Checkout my social media pages, email, or call me',
    }
  ]);

  return (
    <div>
   <Nav></Nav>
   <main>
   <About></About>
   </main>
   </div>
  );
}

export default App;
