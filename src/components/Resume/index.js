import React, { useState } from 'react';
import downloadResume from '../../assets/pdf/Anthony Marrocco Resume.pdf';

function Resume() {

    const [languages] = useState(['JavaScript', 'Java', 'C++', 'C#', 'Python','HTML', 'CSS','Node.js', 'SQL', 'NoSQL', 'MongoDB', 'MySQL']);
    const [tools] = useState(['Git','GitHub','GitLab','Insomnia','AWS', 'MongoDB Atlas']);
    const [frameworks] = useState(['React','Express','Sequelize', 'Mongoose','Bootstrap']);
    return (
        <div>
            <h2 className='resume-title'>
                Resume
            </h2>
            <a                  
                className="App-link resume-link"
                href={downloadResume}
                download="Anthony_Marrocco_Resume"
                >
                    <span className="icon">
                        <i className="fas fa-download"></i>
                    </span>
                    {"   "}
                    Download Resume here!
            </a>
            <ul className='language-list'> 
                <h3 style={{display: 'inline'}}>
                    Languages:
                </h3>
                {languages.map(language => (
                <li
                    style={{display: 'inline'}}
                    className={`mx-1`}
                    key={language}
                >
                    {language}
                </li>
                ))}
            </ul>
            <ul className='tool-list'> 
                <h3 style={{display: 'inline'}}>
                    Tools:
                </h3>
                {tools.map(tool => (
                <li
                    style={{display: 'inline'}}
                    className={`mx-1`}
                    key={tool}
                >
                    {tool}
                </li>
                ))}
            </ul>
            <ul className='framework-list'> 
                <h3 style={{display: 'inline'}}>
                    Frameworks:
                </h3>
                {frameworks.map(framework => (
                <li
                    style={{display: 'inline'}}
                    className={`mx-1`}
                    key={framework}
                >
                    {framework}
                </li>
                ))}
            </ul>
            <p className='icon-p'>
                <span className = "icon" title = 'HTML 5' data-tooltip = "HTML 5"><i className="fab fa-html5"></i></span>{" "}
                <span className = "icon" title = 'CSS' data-tooltip = 'CSS'><i className="fab fa-css3"></i></span>{" "}
                <span className = "icon" title = 'JavaScript' data-tooltip = 'JavaScript'><i className="fab fa-js"></i></span>{" "}
                <span className = "icon" title = 'Java' data-tooltip = 'Java'><i className="fab fa-java"></i></span>{" "}
                <span className = "icon" title = 'Node.js' data-tooltip = 'Node.js'><i className="fab fa-node-js"></i></span>{" "}
                <span className = "icon" title = 'npm' data-tooltip = 'npm'><i className="fab fa-npm"></i></span>{" "}
                <span className = "icon" title = 'Express.js' data-tooltip = 'Express.js' style={{fontFamily: "helvetica neue,open sans,sans-serif"}}>ex</span>{" "}
                <span className = "icon" title = 'SQL' data-tooltip = 'SQL'><i className="fas fa-database"></i></span>{" "}
                <span className = "icon" title = 'React' data-tooltip = 'React'><i className="fab fa-react"></i></span>{" "}
                <span className = "icon" title = 'Python' data-tooltip = 'Python'><i className="fab fa-python"></i></span>{" "}
                <span className = "icon" title = 'AWS' data-tooltip = 'Amazon Web Services'><i className="fab fa-aws"></i></span>{" "}
                <span className = "icon" title = 'GitHub' data-tooltip = 'GitHub'><i className="fab fa-github-square"></i></span>
            </p>
        </div>
    );
}
export default Resume;