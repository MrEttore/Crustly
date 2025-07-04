import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { formatCurrency } from '../../utils/helpers';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
    const totalCartQuantity = useSelector(getTotalCartQuantity);
    const totalCartPrice = useSelector(getTotalCartPrice);

    if (!totalCartQuantity) return null;

    return (
        <div className="flex items-center justify-between bg-primary-dark px-6 py-4 text-base uppercase text-cream shadow-elegant border-t border-gold">
            <p className="space-x-6 font-semibold text-gold">
                <span>{totalCartQuantity} pizzas</span>
                <span>{formatCurrency(totalCartPrice)}</span>
            </p>
            <Link to="/cart" className="font-bold text-gold hover:text-gold/80 transition-colors duration-200">Open cart &rarr;</Link>
        </div>
    );
}

export default CartOverview;
