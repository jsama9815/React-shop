import React from "react";
import '../styles/NotFound404.scss';

const NotFound = () => {
    return (
        <div className="center-404">
            <h1 className="error-404">404</h1>
            <p className="paragraph-404">Sorry,this page wasn´t found!</p>
            <a href="#">
                <button className="button-404">Go back</button>
            </a>
        </div>
    );
}

export default NotFound;