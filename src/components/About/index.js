import React from 'react'
import profileImage from "../../assets/profile/profile.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 id="about">Who am I?</h1>
            <div className="flex-row">
                <img src={profileImage} className="my-2 px-2" style={{ width: "25%" }} alt="cover"  />
                {/* <div className="my-2"> */}
                <p className="my-2 px-2" style={{ width: "70%" }}>
                    Aspiring software engineer with a background in mechanical engineering and physics.  I completed a
                    Certification Program in Full Stack Web Development - Coding from Columbia University in May 2022. Skills 
                    include JavaScript, HTML, CSS, Node.js, React, MongoDB, Express.js, GraphQL, Apollo, Bootstrap, OOP and TDD. 
                    Independently, I have also learned C#, C++, Java. AWS, and Python.  Recently, I created a project that intends to 
                    provide a desired trip location itinerary for the user. That information will then display the Hotels, Restuarants, 
                    Attractions, and ratings for multiple locations using information obtained from Google Maps API.  The technologies used 
                    for this project were React.js, Node.js, Express.js, JavaScript, MongoDB, Mongoose, Apollo Server, GraphQL, and Heroku. 
                    For each project, I employ my analytical skills in concert with my ability to work through every detail. A project is 
                    never complete until it undergoes a close review for ease of use and an impactful user experience. The goal of each 
                    project is to use my skills to create a well thought out and engaging application. As a team player with a strong work 
                    ethic, I have a great desire to utilize my skills in an accelerating, motivated team in the software engineering field 
                    to further my knowledge as well as provide a new perspective of the current task.
                </p>
                {/* </div> */}
            </div>
        </section>
    )
}

export default About