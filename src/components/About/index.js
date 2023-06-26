import React from 'react'
import profileImage from "../../assets/profile/profile.jpg";

function About() {

    return (
        <section className="my-5" >
            <h1 className="my-2 px-2" id="about">About Me</h1>
            <div className="about-div flex-row">
                <img src={profileImage} className="about-img my-2 px-2" alt="cover"  />
                {/* <div className="my-2"> */}
                <p className="about-p my-2 px-2">
                    I am currently working as a Software Engineer at JPMorgan Chase & Co since October 2022.  My interests 
                    include Artificial Intelligence and Machine Learning.  I also have a background in mechanical engineering and physics.  
                    Most recently, I completed a Certification Program in Full Stack Web Development - Coding from Columbia University in May 2022. 
                    My skills include JPython, Java, Linux, JavaScript, CSS, HTML, MATLAB, and JSON.  Please review my portfolio, resume, 
                    feel to contact me with any inquiries!
                    {/* Recently, I created a project that intends to 
                    provide a desired trip location itinerary for the user. That information will then display the Hotels, Restuarants, 
                    Attractions, and ratings for multiple locations using information obtained from Google Maps API.  The technologies used 
                    for this project were React.js, Node.js, Express.js, JavaScript, MongoDB, Mongoose, Apollo Server, GraphQL, and Heroku. 
                    For each project, I employ my analytical skills in concert with my ability to work through every detail. A project is 
                    never complete until it undergoes a close review for ease of use and an impactful user experience. The goal of each 
                    project is to use my skills to create a well thought out and engaging application. As a team player with a strong work 
                    ethic, I have a great desire to utilize my skills in an accelerating, motivated team in the software engineering field 
                    to further my knowledge as well as provide a new perspective of the current task. */}
                </p>
                {/* </div> */}
            </div>
        </section>
    )
}

export default About