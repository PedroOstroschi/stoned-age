import React from 'react';
import './Link.css'

interface props{
    text:string,
    href:string
}



function Link(props: props) {
    const {text, href} = props
  return (
    
    <a href={href} target='blank'>
        {text}
    </a>
  );
}

export default Link;