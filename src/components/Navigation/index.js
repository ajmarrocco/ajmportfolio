import React, { useEffect }  from 'react';

function Navigation(props) {
    const { titles = [], setCurrentTitle, currrentTitle} = props;

    useEffect(() => {
        document.title = currrentTitle;
    }, [currrentTitle]);
    

    return (
        <nav>
            <ul className="flex-row">
                {titles.map((title) => (
                    <li className={`mx-1 ${
                        currrentTitle === title && 'navActive'
                        }`} key={title}>
                            <span
                                onClick={() => {
                                    setCurrentTitle(title)
                                }}
                            >
                                {title}
                            </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;