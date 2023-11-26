import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, debitis. Quod tenetur, sequi earum possimus hic eius quisquam praesentium! Magni incidunt veniam hic in at facere. Vero quos magnam harum.
            </p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;