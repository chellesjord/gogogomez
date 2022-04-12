import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
// import Gallery from "./components/Gallery";
import Footer from "./components/Footer"

import HomePage from "./pages/Home";
import SignUpPage from "./pages/SignUp";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import AugiePage from "./pages/Augie";
import NoMatchPage from "./pages/NoMatch";

import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <HashRouter>
        <Nav />
        <main>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/SignUp" element={<SignUpPage />} />
            <Route exact path="/About" element={<AboutPage />} />
            <Route exact path="/Gallery" element={<GalleryPage />} />
            <Route exact path="/Augie" element={<AugiePage />} />
            <Route component={NoMatchPage} />
          </Routes>
          <Footer/>
        </main>
       
      </HashRouter>
    </div>
    </ApolloProvider>
  );
}

export default App;

