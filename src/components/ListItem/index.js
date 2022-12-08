import {memo, useState} from 'react';

const ListItem = ({data}) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return(
        <li><h2>
            <span>{data.title}</span>
            <button onClick={handleClick}>Open/close</button></h2>
            {isOpen && <p>{data.body}</p>}</li>
    )
}

export default memo(ListItem);
