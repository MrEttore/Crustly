import { useSelector } from 'react-redux';

import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
    const { pizzaId, name, quantity, totalPrice } = item;

    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

    return (
        <li className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="mb-1 font-display text-lg font-semibold text-primary sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between gap-2 sm:gap-6">
                <p className="rounded-full bg-zinc-100 px-3 py-1 text-base font-medium text-primary shadow-elegant">
                    {formatCurrency(totalPrice)}
                </p>
                <UpdateItemQuantity
                    pizzaId={pizzaId}
                    currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    );
}

export default CartItem;
