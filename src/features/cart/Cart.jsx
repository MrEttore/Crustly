import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { getUsername } from '../user/userSlice';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { clearCart, getCart } from './cartSlice';

function Cart() {
    const dispatch = useDispatch();

    const username = useSelector(getUsername);
    const cart = useSelector(getCart);

    function handleClear() {
        dispatch(clearCart());
    }

    if (!cart.length) return <EmptyCart />;

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>
            <h2 className="mt-7 font-display text-2xl font-bold text-primary-dark">
                Your cart,
                <span className="font-display font-bold text-gold">
                    {' '}
                    {username}
                </span>
            </h2>

            <ul className="mt-3 divide-y divide-gold/30 border-b border-gold/30">
                {cart.map((item) => (
                    <CartItem item={item} key={item.pizzaId} />
                ))}
            </ul>

            <div className="mt-6 space-x-2">
                <Button type="secondary" onClick={handleClear}>
                    Clear cart
                </Button>
                <Button to="/order/new" type="primary">
                    Order pizzas
                </Button>
            </div>
        </div>
    );
}

export default Cart;
