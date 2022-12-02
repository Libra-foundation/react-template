import React from 'react';
import DummyComponent from "../Components/DummyComponent/DummyComponent";
import ScopedComponent from "../Components/ScopedComponent/ScopedComponent";

export default function DummyPage():JSX.Element{

    return(
        <React.Fragment>
            <DummyComponent/>
            <ScopedComponent/>
        </React.Fragment>
    )
}