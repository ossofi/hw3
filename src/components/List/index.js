import {useState} from 'react';
import ListItem from '../ListItem';

const List = ({data}) => {
    const [sort, setSort] = useState(true);

    const handleClick = () => {
        setSort(!sort);
    };

    const renderData = () => data.reverse();

    return(
        <ul><button onClick={handleClick}>Sort items</button>
        {renderData().map((item) => (
            <ListItem key={item.id} data={item}/> ))}
            </ul>
    )
}
export default List;
