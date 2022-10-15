import React, { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function Project(props) {
    const [projects] = useState([
        {
            name: "Travela",
            description:
                `This project intends to provide a desired trip location itinerary for the user. 
                That information will then display the Hotels, Restuarants, Attractions, and ratings 
                for multiple locations using information obtained from external APIs. The APIs that 
                we used are google Maps API & The Stripe API.`,
            technologies:'React, Node.js, Express.js, JavaScript, MongoDB, Mongoose, Apollo Server, GraphQL, Heroku',
            github: `https://github.com/ajmarrocco/Travela`,
            url: `http://travelamap.herokuapp.com/`
        },
        {
            name: "Gym Quest",
            description:
                `Collaborative full stack workout social media platform where 
                users can view workouts based on category and comment on individual workouts`,
            technologies:'Node.js, Express.js, JavaScript, HTML, CSS, Handlebars.js, MySQL, RESTFul APIs, Dotenv, Bcrypt',
            github: `https://github.com/ajmarrocco/GymQuest`,
            url: `https://gym-quest.herokuapp.com/`
        },
        {
            name: "Space Sounds!",
            description:
                `Space missions from companies such as NASA, SpaceX, Virgin Galactic and Blue 
                Origin has made the desire to go to space increase exponentially over the past 
                couple of years. We would like to make that dream realistic for everyone!`,
            technologies:'YouTube Data API v3, NASA Image and Video Library API, GitHub, BootStrap, JavaScript, HTML, CSS',
            github: `https://github.com/ajmarrocco/space-sounds`,
            url: `https://ajmarrocco.github.io/space-sounds/`
        },
        {
            name: "Shop Shop",
            description:
                `This project take the e-commerce platform replaces its implementation to handle 
                complex state management using Redux, the open-source JavaScript library that it 
                emulates.`,
            technologies:'React, Node.js, Express.js, JavaScript, MongoDB, Mongoose, GraphQL, Heroku',
            github: `https://github.com/ajmarrocco/shop-shop`,
            url: `https://shop-and-redux.herokuapp.com/`
        },
        {
            name: "Keeping Up With My Budget!",
            description:
                `A budget tracker that uses a NoSQL database to enable a website to handle 
                large amounts of data`,
            technologies:'Node.js, JavaScript, MongoDB, Mongoose, PWAs',
            github: `https://github.com/ajmarrocco/keeping-up-with-my-budget`,
            url: `https://keeping-up-with-my-budget.herokuapp.com/`
        },
        {
            name: "Techs Marks the Spot",
            description:
                `A webpage that allows users to create an acccount. Then the user is able to view, create, 
                update and delete posts. The user is also allowed to comment on their or another users posts.`,
            technologies:'Node.js, Express.js, JavaScript, HTML, CSS, Handlebars.js, MySQL, RESTFul APIs, Dotenv, Bcrypt',
            github: `https://github.com/ajmarrocco/techs-marks-the-spot`,
            url: `https://morning-reaches-56446.herokuapp.com/`
        }
        // {
        //     name: "Deep Thoughts",
        //     description:
        //         `The application is a social media application called "Deep Thoughts," where users 
        //         can create an account, post their thoughts for others to see, and interact with other 
        //         users through these thoughts. This is accomplished by using a MERN application. Feel free 
        //         to contribute your own thoughts!`,
        //     technologies:'React, Node.js, Express.js, JavaScript, MongoDB, Mongoose, GraphQL, Heroku',
        //     github: `https://github.com/ajmarrocco/deep-thoughts`,
        //     url: `https://deep-thoughts-3510.herokuapp.com/`
        // },

    ]);

    const [currentProject, setCurrentProject] = useState(0);
    const length = projects.length;

    const nextSlide = () => {
        setCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
    }

    const prevSlide = () => {
        setCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
    }

    if(!Array.isArray(projects) || length < 0){
        return null;
    }

    return (
        <div>
            <div>
                <h2 className='portfolio-title'>
                    Portfolio
                </h2>
            </div>
            <div className='slider-border'>
                <div className="slider flex-row">
                    {projects.map((image, i) => (
                        // return (
                        <div className={i === currentProject ? 'slide active' : 'slide'} key={i}>
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                            {i === currentProject && (
                                <div>
                                    <h4 className='image-title'>{image.name}</h4>
                                    <img
                                    src={require(`../../assets/small/${i}.png`)}
                                    alt={image.name}
                                    className="img-thumbnail mx-1"
                                    key={image.name}
                                    />
                                    <p className='image-description'>
                                        {image.description}
                                    </p>
                                    <p className='image-technologies'>
                                        {image.technologies}
                                    </p>
                                    {/* <div className='flex-row space-between'> */}
                                        <p className='github-p'>
                                            <a
                                                className="App-link github-link"
                                                href={image.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Github
                                            </a>
                                        </p>
                                        {/* <p className='deployed-url-p'>
                                            <a
                                                className="App-link deployed-url-link"
                                                href={image.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Deployed Url
                                            </a>
                                        </p> */}
                                    {/* </div> */}
                                </div>
                            )}
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Project;