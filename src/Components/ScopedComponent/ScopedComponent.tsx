import React from "react";
import './ScopedStyle.scoped.css';

export default function ScopedComponent():JSX.Element{

    return(
        <div>
            <p className="test">
                Scoped
            </p>
        </div>
    )
}