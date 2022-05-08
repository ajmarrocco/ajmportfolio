import React from 'react';
import photo from "../../assets/small/0.png"; 

function Project(props) {
    const currentCategory = {
        name: "Gym Quest",
        description:
            `Collaborative full stack workout social media platform where 
            users can view workouts based on category and comment on individual workouts`,
    };
    return (
        <section>
            <h1>{currentCategory.name}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img
                    src={photo}
                />
            </div>
        </section>
    );
}
export default Project;