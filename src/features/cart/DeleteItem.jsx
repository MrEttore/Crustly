import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
    const dispatch = useDispatch();

    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>
            <span className="font-bold">✕</span>
        </Button>
    );
}

export default DeleteItem;
