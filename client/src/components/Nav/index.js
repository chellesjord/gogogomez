import React from 'react';
import Logo from "../../assets/cover/logo_gogogomez-removebg-preview.png";

function Nav() {
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

      function categorySelected(name) {
        console.log(`${name} clicked`)
      }

    return (
        <header>
            <h2>
                <a href="/">
                    <div class="logo-image">
                        <img src={Logo} class="img-fluid" />
                    </div>
                    Go Go Gomez
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                        className='mx-1'
                        key={category.name}
                        >
                            <span onClick={categorySelected}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    );
}

export default Nav;