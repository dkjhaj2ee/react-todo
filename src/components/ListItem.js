import React from 'react'

function ListItem(props) {
    return (
        <li><button 
                className="btn-remove" 
                onClick={() =>{
                            props.onSelect(props.id)
                        }}
            >x</button>
            {props.text}
        </li>
    )
}

export default ListItem
