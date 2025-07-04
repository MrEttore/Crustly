import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
    return (
        <div className="mt-10 flex flex-col items-center">
            <LinkButton className="px-4 py-3" to="/menu">
                &larr; Back to menu
            </LinkButton>

            <p className="mt-6 font-display text-lg font-bold text-primary-dark">
                Your cart is still empty. Start adding some pizzas <span role="img" aria-label="pizza">🍕</span>
            </p>
        </div>
    );
}

export default EmptyCart;
