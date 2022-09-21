import React from "react";





function Notes(props)
{
    return(
        <div className="note">
            <div className="note-title">{props.name}</div>
            <div className="note-content">This is note content</div>
        </div>
    );
} 
export default Notes;