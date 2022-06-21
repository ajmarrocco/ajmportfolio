import React, { useEffect } from 'react';

function Header(props) {
    const { 
        titles = [], 
        setCurrentTitle, 
        currentTitle
    } = props;

    useEffect(() => {
        document.title = "Anthony Marrocco - " + currentTitle;
    }, [currentTitle]);

    return (
        <header className="flex-row px-1">
            <h2>
                {/* <a href="/"> */}
                    Anthony Marrocco
                {/* </a> */}
            </h2>
            <nav>
                <ul className="flex-row">
                    {titles.map((title) => (
                    <li
                        className={`mx-2 ${
                            currentTitle === title && `navActive`
                        }`}
                        key={title}
                    >
                        <span onClick={() => {
                            setCurrentTitle(title);
                            }}
                        >
                        {(title)}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
