import React from 'react'
import PropTypes from "prop-types";

const profile = ({name, place, profession, children}) => { // I used destructuring instead of props
    return (
        <div>
            <h1>My name is {name}, I live in {place} and I am a {profession}</h1>
            {children}
        </div>
    )
}

profile.defaultProps={
    name:"Dedsec",
    place:"Tunis",
    profession:"developer",
}

profile.propTypes= {
    name:PropTypes.string
}
export default profile
