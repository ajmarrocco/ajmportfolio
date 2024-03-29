import React, { useState } from 'react';
import downloadResume from '../../assets/pdf/Anthony_Marrocco-Resume_Website.pdf';

function Resume() {

    const [languages] = useState(['Python', 'Java', 'JavaScript', 'MATLAB', 'JSON', 'XML','HTML', 'CSS']);
    const [databases] = useState(['MongoDB', 'MySQL', 'SQL', 'NoSQL', 'Sequelize', 'Mongoose'])
    const [tools] = useState(['Linux','Git','GitHub','Bitbucket','Insomnia','AWS']);
    const [frameworks] = useState(['Django', 'Flask','React','Express','Bootstrap', 'Node.js','jQuery']);
    const lastLanguage = 'CSS';

    return (
        <div className='resume-skills'>
            <div className='resume-container'>
                <h2 className='resume-title'>
                    Resume
                </h2>
                <p className='resume-p'>
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
                </p>
            </div>
            <div className='skills-container'>
                <h2 className='resume-title'>
                    Technical Skills:
                </h2>
                <ul className='language-list flex-row'> 
                    <h3 style={{display: 'inline'}}>
                        Languages:
                    </h3>
                    {languages.map(language => 
                        // if(language === lastLanguage){
                        //     console.log(lastLanguage)
                        // }
                    (
                        <li
                            style={{display: 'inline'}}
                            className={`mx-1 py-12`}
                            key={language}
                        >
                            {language} 
                            {/* if(language !== lastLanguage){
                                ","
                            } */}
                        </li>
                    ))}
                </ul>
                <ul className='database-list flex-row'> 
                    <h3 style={{display: 'inline'}}>
                        Datebases:
                    </h3>
                    {databases.map(database => (
                    <li
                        style={{display: 'inline'}}
                        className={`mx-1 py-12`}
                        key={database}
                    >
                        {database}
                    </li>
                    ))}
                </ul>
                <ul className='tool-list flex-row'> 
                    <h3 style={{display: 'inline'}}>
                        Tools:
                    </h3>
                    {tools.map(tool => (
                    <li
                        style={{display: 'inline'}}
                        className={`mx-1 py-12`}
                        key={tool}
                    >
                        {tool}
                    </li>
                    ))}
                </ul>
                <ul className='framework-list flex-row'> 
                    <h3 style={{display: 'inline'}}>
                        Frameworks:
                    </h3>
                    {frameworks.map(framework => (
                    <li
                        style={{display: 'inline'}}
                        className={`mx-1 py-12`}
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
                    <span className = "icon" title = 'GitHub' data-tooltip = 'GitHub'><i className="fab fa-github"></i></span>
                </p>
            </div>
        </div>
    );
}
export default Resume;