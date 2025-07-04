import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
    const { quantity, name, totalPrice } = item;

    return (
        <li className="space-y-1 py-4 text-primary-dark">
            <div className="flex items-center justify-between gap-4">
                <p className="font-display text-xl font-bold">
                    <span className="text-lg font-bold text-gold">
                        {quantity}&times;
                    </span>{' '}
                    {name}
                </p>
                <p className="rounded-xl bg-gold/80 px-3 py-1 font-bold text-primary-dark shadow-elegant">
                    {formatCurrency(totalPrice)}
                </p>
            </div>
            <p className="text-base font-normal capitalize italic text-primary-dark/80">
                {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
            </p>
        </li>
    );
}

export default OrderItem;
