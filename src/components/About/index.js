import React from 'react'
import profileImage from "../../assets/profile/profile.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <div className="flex-row">
                <img src={profileImage} className="my-2" style={{ width: "25%" }} alt="cover"  />
                <div className="my-2">
                    <p>
                    Aspiring software engineer with a background in mechanical engineering and physics. Currently in a
                        program to receive certification in Full Stack Web Development - Coding from Columbia University,
                        expected to graduate in May 2022. Skills include JavaScript, HTML, CSS, Node.js, Jest, Express.js, Inquirer.js,
                        ORM, OOP and TDD. Recently, I applied my knowledge of JavaScript, HTML, CSS, ES6, Node, Express.js, Heroku, and APIs to
                        create a webpage that creates and saves notes to organize thoughts and keep track of what the user needs to complete. For each project, I employ my analytical skills in concert with my
                        ability to work through every detail. A project is never complete until it undergoes a close review for
                        ease of use and an impactful user experience. The goal of each project is to use my skills to create a
                        well thought out and engaging application. As a team player with a strong work ethic, I have a great
                        desire to utilize my skills in an accelerating, motivated team in the software engineering field to
                        further my knowledge as well as provide a new perspective of the current task.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About