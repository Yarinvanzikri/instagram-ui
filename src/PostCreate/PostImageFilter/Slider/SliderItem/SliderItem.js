import React from 'react';

function SliderItem({ name, active, handleClick }) {
    return (
       <button
           className={`sidebar-item ${active ? 'active' : ''}`}
           onClick={(event)=>{
               event.preventDefault()
               handleClick()
           }}
       >
        {name}
       </button>
    );
}

export default SliderItem;