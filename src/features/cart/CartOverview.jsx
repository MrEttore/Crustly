import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const totalCartPrice = useSelector(getTotalCartPrice);

    if (!totalCartQuantity) return null;

    return (
        <div className="flex items-center justify-between border-t border-zinc-200 bg-cream px-6 py-4 text-base text-primary shadow-elegant">
            <p className="space-x-6 font-medium">
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link
                to="/cart"
                className="font-medium text-primary underline-offset-4 hover:underline"
            >
                Open cart &rarr;
            </Link>
        </div>
    );
}

export default CartOverview;
