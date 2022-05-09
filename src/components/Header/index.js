import React from 'react';

function Header(props) {
    const { 
        titles = [], 
        setCurrentTitle, 
        currrentTitle
    } = props;

    // useEffect(() => {
    //     document.title = currrentTitle.name;
    // }, [currrentTitle.name]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a href="/">
                    Anthony Marrocco
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {titles.map((title) => (
                    <li
                        className={`mx-1 ${
                            currrentTitle === title && `navActive`
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
