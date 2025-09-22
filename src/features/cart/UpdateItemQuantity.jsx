import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch();

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            >
                <span className="font-bold">-</span>
            </Button>
            <span className="text-base font-semibold text-primary">
                {currentQuantity}
            </span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                <span className="font-bold">+</span>
            </Button>
        </div>
    );
}

export default UpdateItemQuantity;
