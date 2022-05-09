import React from 'react'

function Footer() {

    return (
        <footer>
            <div className='flex-row mx-2'>
                <h2>
                    <a href="https://github.com/ajmarrocco" target="_blank" className='mx-2'>
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/anthonymarrocco/" target="_blank" className='mx-2'>
                        LinkedIn
                    </a>
                    <a href="https://stackoverflow.com/users/17169985/ajmarrocco?tab=profile" target="_blank" className='mx-2'>
                        Stack Overflow
                    </a>
                </h2>
            </div>
        </footer>
    )
}

export default Footer