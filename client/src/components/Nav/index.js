import React from 'react';
import Logo from "../../assets/cover/logo_gogogomez-removebg-preview.png";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        signUpSelected,
        currentCategory,
        setSignUpSelected,
    } = props

    return (
        <header className="flex-row px-1">
            <h2>
                <img src={Logo} class="logo-image" />
                <a href="/"> Go Go Gomez
                </a>
            </h2>
            <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setSignUpSelected(false)}>
              About
            </a>
          </li>
          <li className={`mx-2 ${signUpSelected && 'navActive'}`}>
            <span onClick={() => setSignUpSelected(true)}>SignUp</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !signUpSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setSignUpSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;