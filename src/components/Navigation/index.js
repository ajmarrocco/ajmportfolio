import React, { useState, useEffect }  from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
    const [titles] = useState([
        {
            name: 'About Me'
        },
        { name: 'Portfolio' },
        { name: 'Contact' },
        { name: 'Resume' },
    ]);
    const [currrentTitle, setCurrentTitle] = useState(titles[0]);

    useEffect(() => {
        document.title = capitalizeFirstLetter(currrentTitle.name);
    }, [currrentTitle]);
    

    return (
        <header>
            <h2>
                <a href="/">
                    Anthony Marrocco
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {titles.map((title) => (
                        <li className={`mx-1 ${
                            currrentTitle.name === title.name && 'navActive'
                            }`} key={title.name}>
                        <span
                            onClick={() => {
                            setCurrentTitle(title)
                            }}
                        >
                            {capitalizeFirstLetter(title.name)}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;