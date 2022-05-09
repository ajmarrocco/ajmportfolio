import React, { useState } from 'react';

function Project(props) {
    const [projects] = useState([
        {
            name: "Gym Quest",
            description:
                `Collaborative full stack workout social media platform where 
                users can view workouts based on category and comment on individual workouts`,
            github: `https://github.com/AlessandroB96/GymQuest`,
            url: `https://gym-quest.herokuapp.com/`
        },
        {
            name: "Space Sounds!",
            description:
                `Space missions from companies such as NASA, SpaceX, Virgin Galactic and Blue 
                Origin has made the desire to go to space increase exponentially over the past 
                couple of years. We would like to make that dream realistic for everyone!`,
            github: `https://github.com/sarahhart1997/space-sounds`,
            url: `https://sarahhart1997.github.io/space-sounds/`
        },
        {
            name: "Shop Shop",
            description:
                `This project take the e-commerce platform replaces its implementation to handle 
                complex state management using Redux, the open-source JavaScript library that it 
                emulates.`,
            github: `https://github.com/ajmarrocco/shop-shop`,
            url: `https://shop-and-redux.herokuapp.com/`
        },
        {
            name: "Deep Thoughts",
            description:
                `The application is a social media application called "Deep Thoughts," where users 
                can create an account, post their thoughts for others to see, and interact with other 
                users through these thoughts. This is accomplished by using a MERN application. Feel free 
                to contribute your own thoughts!`,
            github: `https://github.com/ajmarrocco/deep-thoughts`,
            url: `https://deep-thoughts-3510.herokuapp.com/`
        },
        {
            name: "Keepin Up With My Budget!",
            description:
                `A budget tracker that uses a NoSQL database to enable a website to handle 
                large amounts of data`,
            github: `https://github.com/ajmarrocco/keeping-up-with-my-budget`,
            url: `https://keeping-up-with-my-budget.herokuapp.com/`
        },
        {
            name: "Techs Marks the Spot",
            description:
                `A webpage that allows users to create an acccount. Then the user is able to view, create, 
                update and delete posts. The user is also allowed to comment on their or another users posts.`,
            github: `https://github.com/ajmarrocco/techs-marks-the-spot`,
            url: `https://morning-reaches-56446.herokuapp.com/`
        }

    ]);

    const [currentProject, setCurrentProject] = useState();

    return (
        <div>
            <h2>
                Portfolio
            </h2>
            <div className="flex-row">
                {projects.map((image, i) => (
                    <div>
                        <h4>{image.name}</h4>
                        <img
                        src={require(`../../assets/small/${i}.png`)}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                        />
                        <p>
                            <a
                                className="App-link"
                                href={image.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </p>
                        <p>
                            <a
                                className="App-link"
                                href={image.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Deployed Url
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Project;