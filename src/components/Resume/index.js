import React, { useState } from 'react';
import downloadResume from '../../assets/pdf/Anthony Marrocco Resume.pdf';

function Resume(props) {

    const [skills] = useState(['JavaScript', 'Java', 'C++', 'HTML', 'CSS','Node', 'SQL', 'NoSQL', 'MongoDB', 'React','Express']);

    return (
        <div>
            <h2>
                Resume
            </h2>
            <a                  
                className="App-link"
                href={downloadResume}
                target="_blank"
                rel="noopener noreferrer">
                    <h3>Download Resume here!</h3>
            </a>
            <ul> 
                <h3>
                    Proficiences:
                </h3>
                {skills.map(skill => (
                <li
                    className={`mx-1`}
                    key={skill}
                >
                    {skill}
                </li>
                ))}
            </ul>

        </div>
    );
}
export default Resume;